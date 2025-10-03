---
title: 'How to Build a Local Google Translate Clone'
description: 'How to set up your very own Google Translate clone'
date: '2024-11-12'
image: '/images/translate.webp'
tags: ['ai', 'go', 'ollama', 'node', "typescript"]
---

<VideoPlayer src="/videos/translation.mp4"></VideoPlayer>

It has been nothing short of amazing to watch the growth of large language models in the past few years. They have gone from being clunky and esoteric to powerful and widely adopted across the industry. They have effectively obsoleted a generation of machine learning fields are are currently rewriting the book on what is possible with modern technology.

For fun, I decided to if I would be able to create my own locally-hosted Google Translate clone. Will online cloud services really be necessary in the future? Let's find out.
Requirements

To get this project up and running you will need to install Go and Node.js. You will also need an installation of Ollama with your favorite local LLM. I chose the 27 billion parameter version of Gemma 2.
Building the app

For a long time state-of-the-art machine learning models have been off limits to consumer-grade hardware. That is changing today. And with amazing open-source tools like Ollama, anyone can get up and running with this technology very easily.

Using Ollama running an instance of Gemma 2, I built a Go service to query Ollama and provide translations. I plan on expanding this Go service in the future, but for now it just has one endpoint.

I created a simple Typescript/React front end to convey user requests the backend.

Performance wise, this particular model runs pretty fast on a 4090. But if you don't have the latest hardware (or are not living in the future yet), try changing the model to something less GPU-intensive. Your results may vary, but I found the quality of Gemma 2's translations to be quite impressive!

To get started, make sure you have a local instance of Ollama running:

```ollama run gemma2:27b``` 

Then run the following commands: ```go run .``` and ```npm start```

Happy translating!

You can find my code for this project here.
