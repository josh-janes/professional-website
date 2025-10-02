<template>
  <header class="bg-terminal-surface border-b border-terminal-border sticky top-0 z-50 backdrop-blur-lg bg-opacity-90">
    <nav class="container mx-auto px-6 py-4">
      <div class="flex justify-between items-center">
        <NuxtLink to="/" class="text-2xl font-bold text-terminal-accent hover:text-terminal-success transition-colors">
          <span class="text-terminal-success">&gt;</span>_joshjanes
        </NuxtLink>
        
        <div class="hidden md:flex space-x-8 items-center">
          <NuxtLink 
            v-for="link in navLinks" 
            :key="link.path"
            :to="link.path"
            class="hover:text-terminal-accent transition-colors"
            active-class="text-terminal-accent"
          >
            {{ link.name }}
          </NuxtLink>
          <ThemeToggle />
        </div>

        <div class="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button 
            @click="toggleMobile"
            class="text-terminal-accent"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!mobileOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <div v-if="mobileOpen" class="md:hidden mt-4 pb-4 space-y-3 animate-slide-up">
        <NuxtLink 
          v-for="link in navLinks" 
          :key="link.path"
          :to="link.path"
          @click="toggleMobile"
          class="block hover:text-terminal-accent transition-colors"
          active-class="text-terminal-accent"
        >
          {{ link.name }}
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const mobileOpen = ref(false)

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Blog', path: '/blog' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'About', path: '/about' }
]

const toggleMobile = () => {
  mobileOpen.value = !mobileOpen.value
}
</script>