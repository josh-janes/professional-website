<template>
  <footer class="bg-terminal-surface border-t border-terminal-border mt-20">
    <div class="container mx-auto px-6 py-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-lg font-bold mb-4 text-terminal-accent">About</h3>
          <p class="text-terminal-muted">
            Professional portfolio showcasing projects, writing, and creative work.
          </p>
        </div>

        <div>
          <h3 class="text-lg font-bold mb-4 text-terminal-accent">Quick Links</h3>
          <ul class="space-y-2">
            <li v-for="link in quickLinks" :key="link.path">
              <NuxtLink :to="link.path" class="text-terminal-muted hover:text-terminal-accent">
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-bold mb-4 text-terminal-accent">Connect</h3>
          <div class="flex space-x-4">
            <a v-for="social in socials"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="text-terminal-muted hover:text-terminal-accent transition-colors"
              :aria-label="social.name">
              
              <!-- Use an <img> tag instead of <component> -->
              <img :src="social.icon" :alt="social.name" class="w-6 h-6" />
              
            </a>
          </div>
        </div>
      </div>

      <div class="mt-8 pt-8 border-t border-terminal-border text-center text-terminal-muted">
        <p>&copy; {{ currentYear }} Built in 🇨🇦 with Nuxt & Vue.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'Blog', path: '/blog' },
  { name: 'About', path: '/about' }
]

const socials = [
  { name: 'GitHub', url: 'https://github.com/josh-janes', icon: '/images/github.png' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/josh-janes-8ab04a126/', icon: '/images/linkedin.png' }
]
</script>