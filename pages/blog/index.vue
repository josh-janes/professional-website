<template>
  <div class="container mx-auto px-6 py-16">
    <div class="max-w-4xl mx-auto mb-16 animate-fade-in">
      <h1 class="text-5xl font-bold mb-4">
        <span class="text-terminal-success">$</span> Blog
      </h1>
      <p class="text-xl text-terminal-muted">
        Thoughts on development, technology, and everything in between.
      </p>
    </div>

    <!-- Tag Filter -->
    <div class="max-w-6xl mx-auto mb-12">
      <div class="flex flex-wrap gap-3">
        <button 
          @click="selectedTag = null"
          :class="[
            'px-4 py-2 rounded-lg border transition-all',
            !selectedTag 
              ? 'bg-terminal-accent text-terminal-bg border-terminal-accent' 
              : 'border-terminal-border text-terminal-muted hover:border-terminal-accent'
          ]"
        >
          All Posts
        </button>
        <button 
          v-for="tag in allTags" 
          :key="tag"
          @click="selectedTag = tag"
          :class="[
            'px-4 py-2 rounded-lg border transition-all',
            selectedTag === tag 
              ? 'bg-terminal-accent text-terminal-bg border-terminal-accent' 
              : 'border-terminal-border text-terminal-muted hover:border-terminal-accent'
          ]"
        >
          #{{ tag }}
        </button>
      </div>
    </div>

    <!-- Posts Grid -->
    <div class="max-w-6xl mx-auto">
      <div v-if="filteredPosts && filteredPosts.length" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <BlogCard v-for="post in filteredPosts" :key="post._path" :post="post" />
      </div>
      <div v-else class="text-center text-terminal-muted py-20">
        <p class="text-xl">No posts found.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const selectedTag = ref<string | null>(null)

const { data: posts } = await useAsyncData('blog-posts', () => 
  queryContent('/blog')
    .sort({ date: -1 })
    .find()
)

const allTags = computed(() => {
  if (!posts.value) return []
  const tags = new Set<string>()
  posts.value.forEach(post => {
    if (post.tags) {
      post.tags.forEach((tag: string) => tags.add(tag))
    }
  })
  return Array.from(tags).sort()
})

const filteredPosts = computed(() => {
  if (!posts.value) return []
  if (!selectedTag.value) return posts.value
  return posts.value.filter(post => 
    post.tags && post.tags.includes(selectedTag.value)
  )
})
</script>