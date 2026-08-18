#!/bin/bash

# Wrapper script for release-it that uses version bump detection
# Usage: ./release-wrapper.sh [library-path] [package-name] [release-it-args...]

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
VERSION_SCRIPT="$SCRIPT_DIR/check-version-bump.sh"

# Default values
LIBRARY_PATH="${1:-.}"
PACKAGE_NAME="${2}"
shift 2 2>/dev/null || true
RELEASE_IT_ARGS="$@"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

log() {
    echo -e "${BLUE}[RELEASE]${NC} $1" >&2
}

error() {
    echo -e "${RED}[RELEASE ERROR]${NC} $1" >&2
}

success() {
    echo -e "${GREEN}[RELEASE SUCCESS]${NC} $1" >&2
}

# Check if version bump script exists
if [ ! -f "$VERSION_SCRIPT" ]; then
    error "Version bump script not found at: $VERSION_SCRIPT"
    exit 1
fi

# Get the bump type
log "Checking if release is needed..."
BUMP_TYPE=$("$VERSION_SCRIPT" "$LIBRARY_PATH" "$PACKAGE_NAME" 2>/dev/null)
NEEDS_RELEASE=$?

if [ $NEEDS_RELEASE -ne 0 ]; then
    log "No release needed - skipping release-it"
    exit 0
fi

log "Release needed with bump type: $BUMP_TYPE"

# Change to library directory
cd "$LIBRARY_PATH"

# Run release-it with the determined version
case "$BUMP_TYPE" in
    "major"|"minor"|"patch")
        pnpm run build
        log "Running release-it with $BUMP_TYPE version bump..."
        exec release-it "$BUMP_TYPE" $RELEASE_IT_ARGS
        ;;
    *)
        error "Unknown bump type: $BUMP_TYPE"
        exit 1
        ;;
esac
