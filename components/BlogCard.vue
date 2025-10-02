<template>
  <NuxtLink :to="`/blog/${post._path.split('/').pop()}`" class="block card group">
    <div v-if="post.image" class="mb-4 overflow-hidden rounded-lg">
      <img 
        :src="post.image" 
        :alt="post.title"
        class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </div>
    
    <div class="flex items-center gap-2 text-sm text-terminal-muted mb-3 overflow-hidden">
      <time :datetime="post.date" class="whitespace-nowrap">{{ formatDate(post.date) }}</time>
      <span v-if="post.tags && post.tags.length" class="flex flex-wrap gap-2">
        <span 
          v-for="tag in post.tags" 
          :key="tag" 
          class="text-terminal-accent break-words"
        >
          #{{ tag }}
        </span>
      </span>
    </div>

    <h3 class="text-xl font-bold mb-2 group-hover:text-terminal-success transition-colors break-words">
      {{ post.title }}
    </h3>
    
    <p class="text-terminal-muted line-clamp-3">
      {{ post.description }}
    </p>

    <div class="mt-4 text-terminal-accent group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
      Read more
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  post: any
}>()

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>
