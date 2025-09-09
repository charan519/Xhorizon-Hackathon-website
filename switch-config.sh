#!/bin/bash

# Hackathon Configuration Switcher
# Usage: ./switch-config.sh [config-name]

CONFIG_DIR="src/config"
CURRENT_CONFIG="$CONFIG_DIR/event.ts"

if [ $# -eq 0 ]; then
    echo "🎯 Available configurations:"
    echo ""
    for config in "$CONFIG_DIR"/*.ts; do
        if [ "$(basename "$config")" != "event.ts" ]; then
            name=$(basename "$config" .ts)
            echo "  📄 $name"
        fi
    done
    echo ""
    echo "Usage: $0 [config-name]"
    echo "Example: $0 techfest-example"
    exit 1
fi

CONFIG_NAME="$1"
SOURCE_CONFIG="$CONFIG_DIR/$CONFIG_NAME.ts"

if [ ! -f "$SOURCE_CONFIG" ]; then
    echo "❌ Configuration '$CONFIG_NAME' not found at $SOURCE_CONFIG"
    exit 1
fi

# Backup current config
if [ -f "$CURRENT_CONFIG" ]; then
    TIMESTAMP=$(date +%Y%m%d_%H%M%S)
    BACKUP_FILE="$CONFIG_DIR/event_backup_$TIMESTAMP.ts"
    cp "$CURRENT_CONFIG" "$BACKUP_FILE"
    echo "💾 Backed up current config to $BACKUP_FILE"
fi

# Copy new config
cp "$SOURCE_CONFIG" "$CURRENT_CONFIG"
echo "✅ Switched to configuration: $CONFIG_NAME"
echo ""
echo "🚀 Next steps:"
echo "  1. Review the configuration in $CURRENT_CONFIG"
echo "  2. Test with: npm run dev"
echo "  3. Build with: npm run build"