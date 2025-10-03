---
title: 'How I used AI to Create an Original Soundtrack for my Mobile Game'
description: 'A guide to making AI music'
date: '2025-03-18'
image: 'images/aimusic.jpg'
tags: ['ai', 'python']
---

As a software engineer with a love of art and music, I'm fascinated by the intersection of technology and creativity. Recently, I dove into using AI for music generation, specifically Meta's MusicGen, to create a new original soundtrack for my Android game, "Slide". I wanted to share the process, the underlying technical principles, and how you can replicate it. It's surprisingly accessible, even without a music or machine learning background, and opens up exciting possibilities for game development and beyond.

## The Power of Style Transfer

At the heart of the process lies a powerful concept called style transfer. While often associated with image manipulation--think turning a photo into a Van Gogh painting--style transfer is a broader technique applicable to many data types, including audio.

The core idea is to separate the content of a piece of data from its style. Content represents the fundamental information--the objects in an image, the melody and chord progression in a piece of music. Style encompasses the aesthetic qualities--the color palette, brushstrokes in an image, the instrumentation, tempo, and harmonic texture in music.

Style transfer algorithms aim to recombine these elements. You take the content of one piece of data and render it in the style of another.

This isn't limited to audio and images either. Style transfer is a broader concept in machine learning. In image processing, it might involve transferring the texture of one image onto another. In natural language processing, it could mean rewriting a sentence in a different tone or style. The core idea is always the same: to learn the stylistic characteristics of one piece of data and apply them to another.

## How it Works (Simplified):

MusicGen is built on some sophisticated AI technology. Here's a simplified overview:

- **Discrete Audio Representation**: MusicGen doesn't work directly with raw audio waveforms. Instead, it uses a neural audio codec called EnCodec to compress the audio into a sequence of discrete "tokens." Think of these tokens as the building blocks of music, similar to words in a sentence. This makes the audio easier for the AI to process.

- **Transformer Decoder**: The core of MusicGen is a transformer decoder--the same technology behind ChatGPT. This decoder is trained to predict the next audio token given the previous tokens and any conditioning information (text or melody).

- **Conditioning**: This is where the magic happens. MusicGen can be "conditioned" on both text and melody. Text prompts are encoded using a pre-trained text encoder (like CLIP), and effectively represent the musical style that is to be transfered. Melodic contours are extracted from the audio. This information is fed into the transformer decoder, guiding the generation process.

- **Single-Stage Generation**: Unlike some other audio generation models, MusicGen generates audio in a single pass, making it relatively efficient.

Essentially, MusicGen learns to "speak" the language of music by analyzing a massive dataset of audio and then using that knowledge to create new compositions. All by converting music into a set of sequential tokens which can be fed into an LLM--very cool!

## How I Used MusicGen

When I built the original version of my game 9 years ago, my friend Brandon generously created a 2-minute looping soundtrack. The original soundtrack was quite good, but the new version of my game was going to be much bigger and I wanted a soundtrack with greater variety. So I used that original 2-minute track as a jumping-off point for the MusicGen model.

I used MusicGen with a Python script (you can find the code at the end of this post!) to condition the generation on both text and melody. Here's the workflow:

1. **Input**: I started with Brandon's 2-minute theme as my "seed" melody.

2. **Textual Guidance**: I crafted text prompts to guide the AI. For example, I might prompt it to create "a serene ambient track with soft piano melodies, gentle chimes, subtle electronic undertone, shimmering otherworldly maze atmosphere". These prompts helped shape the overall mood and style of the generated music.

3. **Melodic Conditioning**: I fed the original theme into MusicGen as a melodic contour. This ensured that the generated music retained some of the harmonic and melodic characteristics of the original.

4. **Generation**: MusicGen then generated new audio segments, blending the stylistic elements of the original theme with the guidance from my text prompts.

5. **Iteration**: I experimented with different prompts and settings, iterating until I achieved the desired results.

## Here's the Python script:

```python
import os
os.environ['XFORMERS_FORCE_DISABLE_TRITON'] = '1' # Add this before other imports
import argparse
import warnings
import torch
import torchaudio
from audiocraft.models import MusicGen
from audiocraft.data.audio import audio_write
# Suppress weight_norm warning
warnings.filterwarnings("ignore", category=UserWarning, module="torch.nn.utils.weight_norm")
def generate_style_transfer(input_path, prompt, output_path):
    """Generate music variation while preserving melody and length."""
    device = 'cuda' if torch.cuda.is_available() else 'cpu'
    # Load model
    model = MusicGen.get_pretrained('facebook/musicgen-melody-large')
    model.lm = model.lm.to(device) # Move specific components to device
    # Set generation parameters
    model.set_generation_params(
        use_sampling=True,
        top_k=250,
        duration=0 # Will be set from input later
    )
    # Load and process audio
    waveform, orig_sr = torchaudio.load(input_path)
    # Convert to mono if needed
    if waveform.shape[0] > 1:
        waveform = waveform.mean(dim=0, keepdim=True)
    # Resample to 32kHz if needed
    target_sr = 32000
    if orig_sr != target_sr:
        resampler = torchaudio.transforms.Resample(orig_sr, target_sr)
        waveform = resampler(waveform)
    # Move processed audio to device
    waveform = waveform.to(device)
    # Calculate duration from input
    duration = waveform.shape[1] / target_sr
    model.set_generation_params(duration=duration)
    print("Generating variation: ")
    # Generate variation
    output = model.generate_with_chroma(
        descriptions=[prompt],
        melody_wavs=waveform.unsqueeze(0),
        melody_sample_rate=target_sr,
        progress=True
    )
    # Save output
    output_base = os.path.splitext(output_path)[0]
    output_filename = f"{output_base}.wav" # Ensure .wav extension
    torchaudio.save(
        output_filename,
        output[0].cpu(),
        sample_rate=model.sample_rate,
        format='wav',
        encoding='PCM_S',
        bits_per_sample=16
    )
if __name__ == '__main__':
    music_tacks = {
        "Crystal Labyrinth": "serene ambient track with soft piano melodies, gentle chimes, subtle electronic undertone, shimmering otherworldly maze atmosphere",
        "Mechanical Whispers": "minimalist track with rhythmic ticking sounds, soft synth pads, metallic echoes, clockwork puzzle atmosphere",
        "Floating Reverie": "dreamy ethereal track with soft strings, harp arpeggios, light airy atmosphere, zero gravity puzzle solving",
    }
    # Process all tracks
    for track_name, style_prompt in music_tacks.items():
        generate_style_transfer(
            input_path="theme.wav",
            prompt=style_prompt,
            output_path=track_name + ".wav"
        )
```


## Replicating the Process

1. Install Dependencies (this might take a while to sort out):
pip install torch torchaudio audiocraft

2. Download a Pre-trained Model: MusicGen comes in different sizes, I used 'facebook/musicgen-melody-large'. The smaller models are faster and require less memory, but the larger models generally produce higher-quality audio.

3. Prepare Your Input Audio: Choose a short audio clip that you want to use as the basis for your soundtrack.

4. Iterate and Refine: Don't be afraid to experiment with different prompts and settings until you get the results you're looking for.

## Audio Samples

Original soundtrack:
<AudioPlayer src="/audio/Theme.mp3" />

AI-Generated Tracks:
<AudioPlayer src="/audio/Carefree%20Summer.mp3" :key="'carefree'"></AudioPlayer>
<AudioPlayer src="/audio/Matrix%20Conundrum.mp3" :key="'matrix'" />

Not bad!

## Conclusion

Audio style transfer with MusicGen is a powerful tool for game developers, musicians, and anyone looking to easily create new music. By leveraging the power of pre-trained models, we can unlock new creative possibilities and streamline the music production process. The ability to provide a core musical idea and have it rendered in a variety of styles opens up exciting avenues for dynamic and adaptive soundtracks.

## Resources:

MusicGen: https://github.com/facebookresearch/audiocraft

MusicGen Paper: https://arxiv.org/abs/2306.05284
