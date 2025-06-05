#!/bin/bash
cd /home/kavia/workspace/code-generation/tagmusic-ai-platform-107314-ca464da8/tagmusic_ai_platform_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

