---
title: 'localize-fast: A CLI Tool for Bulk File Translation'
description: 'I built a tool to bulk translate text files'
date: '2025-01-18'
image: 'images/translation.webp'
tags: ['ai', 'python']
---

## Introduction

Translating multiple files while maintaining their structure is tedious. Most tools either require cloud services (raising privacy concerns) or manual copy-pasting (error-prone). I built localize-fast to automate this using local AI. Because there are no external servers involved you don't have to worry about data leaks.

How It Works

The tool maps directories and uses Ollama to run language models locally for translation:

- **Local LLMs via Ollama**: Models run offline using Ollama, with no data sent externally
- **Fail-Safe**: Stops and reports errors rather than producing broken files

## Why Local LLMs?

LLMs have effectively rendered many tools and business models obsolete. The most powerful open-source LLMs are fully capable of providing good translations of the most common language. Thus there is no reason to outsource this work to external services--local LLMs can do the work just fine!

## Trade-offs vs cloud services:

- No per-request costs
- Full data control
- Requires 8GB+ RAM
- Less nuanced than GPT-4

## Get Started

Source available on GitHub. Basic usage:

```bash
translateall ./docs en fr ./output --chunk-size 3000
```

## Current Limits

- Less powerful models sometimes fail to complete the task
- Model prompt engineering required
