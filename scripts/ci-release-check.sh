#!/bin/bash

# CI/CD Pipeline helper script
# Usage: ./ci-release-check.sh [library-path] [package-name]
#
# This script is designed to be used in CI/CD pipelines to:
# 1. Check if a release is needed
# 2. Set appropriate environment variables for subsequent steps
# 3. Provide clear exit codes for pipeline flow control

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
VERSION_SCRIPT="$SCRIPT_DIR/check-version-bump.sh"

# Default values
LIBRARY_PATH="${1:-.}"
PACKAGE_NAME="${2}"

# Colors (disabled in CI by default)
if [ "${CI:-}" = "true" ] || [ "${GITHUB_ACTIONS:-}" = "true" ]; then
    RED=""
    GREEN=""
    YELLOW=""
    BLUE=""
    NC=""
else
    RED='\033[0;31m'
    GREEN='\033[0;32m'
    YELLOW='\033[1;33m'
    BLUE='\033[0;34m'
    NC='\033[0m'
fi

log() {
    echo -e "${BLUE}[CI-RELEASE]${NC} $1"
}

error() {
    echo -e "${RED}[CI-ERROR]${NC} $1"
}

success() {
    echo -e "${GREEN}[CI-SUCCESS]${NC} $1"
}

warn() {
    echo -e "${YELLOW}[CI-WARN]${NC} $1"
}

# Check if version bump script exists
if [ ! -f "$VERSION_SCRIPT" ]; then
    error "Version bump script not found at: $VERSION_SCRIPT"
    exit 1
fi

# Get current directory for context
CURRENT_DIR=$(pwd)
log "Checking release status for library at: $LIBRARY_PATH"
log "Current directory: $CURRENT_DIR"

# Get the bump type and capture both stdout and stderr
BUMP_OUTPUT=$("$VERSION_SCRIPT" "$LIBRARY_PATH" "$PACKAGE_NAME" 2>&1)
NEEDS_RELEASE_CODE=$?

# Extract bump type from output (last line)
BUMP_TYPE=$(echo "$BUMP_OUTPUT" | tail -n1)

# Set GitHub Actions outputs if running in GitHub Actions
if [ "${GITHUB_ACTIONS:-}" = "true" ]; then
    echo "needs_release=$([[ $NEEDS_RELEASE_CODE -eq 0 ]] && echo 'true' || echo 'false')" >> "$GITHUB_OUTPUT"
    echo "bump_type=$BUMP_TYPE" >> "$GITHUB_OUTPUT"
    echo "version_output<<EOF" >> "$GITHUB_OUTPUT"
    echo "$BUMP_OUTPUT" >> "$GITHUB_OUTPUT"
    echo "EOF" >> "$GITHUB_OUTPUT"
fi

# Set environment variables for other CI systems
if [ $NEEDS_RELEASE_CODE -eq 0 ]; then
    export NEEDS_RELEASE='true'
else
    export NEEDS_RELEASE='false'
fi
export BUMP_TYPE="$BUMP_TYPE"
export VERSION_OUTPUT="$BUMP_OUTPUT"

# Output results
if [ $NEEDS_RELEASE_CODE -eq 0 ]; then
    success "Release needed!"
    log "Bump type: $BUMP_TYPE"
    log "Version output:"
    echo "$BUMP_OUTPUT" | while IFS= read -r line; do
        log "  $line"
    done
    
    exit 0
else
    warn "No release needed"
    log "Output:"
    echo "$BUMP_OUTPUT" | while IFS= read -r line; do
        log "  $line"
    done
    
    exit 1
fi
