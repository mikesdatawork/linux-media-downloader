#!/bin/bash

# Exit on error
set -e

# Prompt for commit message
read -p "Enter commit message: " msg

git add .
git commit -m "$msg"
git branch -M main
git remote remove origin 2>/dev/null || true
git remote add origin https://github.com/MaxSilver22/linux-media-downloader.git
git push -u origin main 