#!/bin/bash

# Script to determine version bump based on conventional commits
# Usage: ./check-version-bump.sh [library-path] [package-name]
# Returns: major|minor|patch|none and exit code 0 for release needed, 1 for no release

set -e

# Default values
LIBRARY_PATH="${1:-.}"
PACKAGE_NAME="${2}"
VERBOSE="${VERBOSE:-0}"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to log messages
log() {
    if [ "$VERBOSE" = "1" ]; then
        echo -e "${BLUE}[INFO]${NC} $1" >&2
    fi
}

error() {
    echo -e "${RED}[ERROR]${NC} $1" >&2
}

warn() {
    echo -e "${YELLOW}[WARN]${NC} $1" >&2
}

success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1" >&2
}

# Function to get the latest tag for the package
get_latest_tag() {
    local package_name="$1"
    local library_path="$2"

    if [ -n "$package_name" ]; then
        # Look for tags matching the package name pattern
        git describe --tags --match="${package_name}@*" --abbrev=0 2>/dev/null || echo ""
    else
        # Look for any version tags in the library path
        git describe --tags --abbrev=0 2>/dev/null || echo ""
    fi
}

# Function to extract version from tag
extract_version_from_tag() {
    local tag="$1"
    echo "$tag" | sed -E 's/.*@([0-9]+\.[0-9]+\.[0-9]+).*/\1/' | grep -E '^[0-9]+\.[0-9]+\.[0-9]+$' || echo ""
}

# Function to analyze commits for conventional commit types
analyze_commits() {
    local from_ref="$1"
    local library_path="$2"

    local has_breaking=0
    local has_feat=0
    local has_fix=0
    local has_relevant_commits=0

    # Get commits since the last tag/ref, filtering by library path
    local commits
    if [ -n "$from_ref" ]; then
        commits=$(git log --oneline --no-merges "${from_ref}..HEAD" -- "$library_path" 2>/dev/null || echo "")
    else
        commits=$(git log --oneline --no-merges -- "$library_path" 2>/dev/null || echo "")
    fi

    if [ -z "$commits" ]; then
        log "No commits found since $from_ref in $library_path"
        echo "none"
        return 1
    fi

    log "Analyzing commits since $from_ref in $library_path:"

    while IFS= read -r commit; do
        if [ -z "$commit" ]; then
            continue
        fi

        log "  - $commit"

        # Check for breaking changes
        if echo "$commit" | grep -qE "(feat|fix|chore|docs|style|refactor|perf|test)(\(.+\))?!:" || \
           echo "$commit" | grep -qE "BREAKING CHANGE:" || \
           echo "$commit" | grep -qE "BREAKING-CHANGE:"; then
            has_breaking=1
            has_relevant_commits=1
            log "    → BREAKING CHANGE detected"
        # Check for features
        elif echo "$commit" | grep -qE "^[a-f0-9]+ feat(\(.+\))?:"; then
            has_feat=1
            has_relevant_commits=1
            log "    → FEATURE detected"
        # Check for fixes
        elif echo "$commit" | grep -qE "^[a-f0-9]+ fix(\(.+\))?:"; then
            has_fix=1
            has_relevant_commits=1
            log "    → FIX detected"
        # Check for other conventional commit types that don't warrant a release
        elif echo "$commit" | grep -qE "^[a-f0-9]+ (docs|style|refactor|perf|test|chore)(\(.+\))?:"; then
            log "    → Non-release commit type (docs/style/refactor/perf/test/chore)"
        else
            # Non-conventional commit - treat as patch for safety
            has_fix=1
            has_relevant_commits=1
            log "    → Non-conventional commit, treating as patch"
        fi
    done <<< "$commits"

    # Determine version bump
    if [ $has_relevant_commits -eq 0 ]; then
        echo "none"
        return 1
    elif [ $has_breaking -eq 1 ]; then
        echo "major"
        return 0
    elif [ $has_feat -eq 1 ]; then
        echo "minor"
        return 0
    elif [ $has_fix -eq 1 ]; then
        echo "patch"
        return 0
    else
        echo "none"
        return 1
    fi
}

# Function to calculate next version
calculate_next_version() {
    local current_version="$1"
    local bump_type="$2"

    if [ "$bump_type" = "none" ]; then
        echo "$current_version"
        return
    fi

    # Parse version components
    local major minor patch
    major=$(echo "$current_version" | cut -d. -f1)
    minor=$(echo "$current_version" | cut -d. -f2)
    patch=$(echo "$current_version" | cut -d. -f3)

    case "$bump_type" in
        "major")
            major=$((major + 1))
            minor=0
            patch=0
            ;;
        "minor")
            minor=$((minor + 1))
            patch=0
            ;;
        "patch")
            patch=$((patch + 1))
            ;;
    esac

    echo "${major}.${minor}.${patch}"
}

# Main logic
main() {
    cd "$LIBRARY_PATH"

    # Get package name from package.json if not provided
    if [ -z "$PACKAGE_NAME" ] && [ -f "package.json" ]; then
        PACKAGE_NAME=$(grep -o '"name"[[:space:]]*:[[:space:]]*"[^"]*"' package.json | cut -d'"' -f4)
        log "Detected package name: $PACKAGE_NAME"
    fi

    # Get current version from package.json
    local current_version=""
    if [ -f "package.json" ]; then
        current_version=$(grep -o '"version"[[:space:]]*:[[:space:]]*"[^"]*"' package.json | cut -d'"' -f4)
        log "Current version from package.json: $current_version"
    fi

    # Get latest tag
    local latest_tag
    latest_tag=$(get_latest_tag "$PACKAGE_NAME" "$LIBRARY_PATH")
    log "Latest tag: ${latest_tag:-'none'}"

    # Extract version from tag if available
    local tag_version=""
    if [ -n "$latest_tag" ]; then
        tag_version=$(extract_version_from_tag "$latest_tag")
        log "Version from tag: ${tag_version:-'none'}"
    fi

    # Use tag version as reference, fallback to package.json version
    local reference_version="${tag_version:-$current_version}"
    local from_ref="${latest_tag}"

    if [ -z "$reference_version" ]; then
        error "Could not determine current version from package.json or git tags"
        exit 1
    fi

    log "Reference version: $reference_version"
    log "Analyzing commits from: ${from_ref:-'beginning'}"

    # Analyze commits and determine bump type
    local bump_type
    bump_type=$(analyze_commits "$from_ref" ".")
    local needs_release=$?

    # Calculate next version
    local next_version
    next_version=$(calculate_next_version "$reference_version" "$bump_type")

    # Output results
    if [ $needs_release -eq 0 ]; then
        success "Release needed: $reference_version → $next_version ($bump_type)"
        echo "$bump_type"
        exit 0
    else
        warn "No release needed - no relevant commits found"
        echo "none"
        exit 1
    fi
}

# Help function
show_help() {
    cat << EOF
Usage: $0 [library-path] [package-name]

Analyzes conventional commits to determine if a release is needed and what type of version bump.

Arguments:
  library-path    Path to the library directory (default: current directory)
  package-name    Package name for tag matching (auto-detected from package.json if not provided)

Environment Variables:
  VERBOSE=1       Enable verbose logging

Exit Codes:
  0    Release needed (outputs: major|minor|patch)
  1    No release needed (outputs: none)

Examples:
  $0                                    # Check current directory
  $0 ./libs/my-lib                     # Check specific library
  $0 ./libs/my-lib @scope/package-name # Check with specific package name
  VERBOSE=1 $0                         # Enable verbose output
EOF
}

# Check for help flag
if [ "$1" = "-h" ] || [ "$1" = "--help" ]; then
    show_help
    exit 0
fi

# Run main function
main
