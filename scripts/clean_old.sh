#!/bin/bash
echo "🧼 Cleaning up old deployments and caches..."

# Safe to delete
rm -rf /opt/codedeploy-agent/deployment-archive/*

# Dangerous – avoid deleting this
# rm -rf /opt/codedeploy-agent/deployment-root/* ❌

# Clean user-level caches
rm -rf /home/ubuntu/.npm
rm -rf /home/ubuntu/.cache/puppeteer

echo "✅ Clean-up done."
