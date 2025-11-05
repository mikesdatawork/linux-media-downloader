#!/bin/bash

# Exit on error
set -e

# Prompt for a commit message
read -p "Enter commit message: " msg

# Add all changes
git add .

# Commit with the provided message
git commit -m "$msg"

# Set branch to main (optional, only needed if not already on main)
git branch -M main

# Set the remote (optional, only needed if not already set)
git remote remove origin 2>/dev/null || true
git remote add origin https://github.com/MaxSilver22/linux-media-downloader.git

# Push to GitHub
git push -u origin main