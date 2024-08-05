#!/bin/bash

# This shell script only works in an environment where Bash is available.
# It works as is on Mac and Linux-based OS.
# For Windows, please use WSL to run it.

# HomeBrew
if ! command -v brew &> /dev/null; then
    echo "Homebrew is not installed. Starting installation..."
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    echo "Homebrew has been installed"
else
    echo "Homebrew is already installed."
fi

# Git
if ! command -v git &> /dev/null; then
    echo "Git is not installed. Starting installation..."
    brew install git
else
    echo "Git is already installed."
fi

# Yarn
if ! command -v yarn &> /dev/null; then
    echo "Yarn is not installed. Starting installation..."
    brew install yarn
else
    echo "Yarn is already installed."
fi

# Bun
if ! command -v bun &> /dev/null; then
    echo "Bun is not installed. Starting installation..."
    curl -fsSL https://bun.sh/install | bash
else
    echo "Bun is already installed."
fi

# Astro
if ! command -v astro &> /dev/null; then
    echo "astro is not installed. Starting installation globally with Bun..."
    bun global add astro
    echo "astro has been installed"
else
    echo "astro is already installed."
fi

# Reload environment variables
. ~/.bashrc
