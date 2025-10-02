<template>
  <article class="container mx-auto px-6 py-16">
    <div class="max-w-3xl mx-auto">
      <!-- Back Button -->
      <NuxtLink to="/blog" class="inline-flex items-center gap-2 text-terminal-muted hover:text-terminal-accent mb-8 transition-colors">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        Back to Blog
      </NuxtLink>

      <!-- Post Header -->
      <header class="mb-12 animate-fade-in">
        <div class="flex items-center gap-3 text-sm text-terminal-muted mb-4">
          <time :datetime="post?.date">{{ formatDate(post?.date) }}</time>
          <span v-if="post?.tags && post.tags.length" class="flex gap-2">
            <span v-for="tag in post.tags" :key="tag" class="text-terminal-accent">
              #{{ tag }}
            </span>
          </span>
        </div>

        <h1 class="text-4xl md:text-5xl font-bold mb-6">
          {{ post?.title }}
        </h1>

        <p class="text-xl text-terminal-muted">
          {{ post?.description }}
        </p>

        <img 
          v-if="post?.image" 
          :src="post.image" 
          :alt="post.title"
          class="w-full rounded-lg mt-8 border border-terminal-border"
        />
      </header>

      <!-- Post Content -->
      <div class="prose max-w-none">
        <ContentRenderer :value="post" />
      </div>

      <!-- Post Footer -->
      <footer class="mt-16 pt-8 border-t border-terminal-border">
        <div class="flex justify-between items-center">
          <NuxtLink 
            v-if="prev" 
            :to="`/blog/${prev._path.split('/').pop()}`"
            class="flex items-center gap-2 text-terminal-accent hover:text-terminal-success transition-colors"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            <div>
              <div class="text-sm text-terminal-muted">Previous</div>
              <div class="font-semibold">{{ prev.title }}</div>
            </div>
          </NuxtLink>

          <NuxtLink 
            v-if="next" 
            :to="`/blog/${next._path.split('/').pop()}`"
            class="flex items-center gap-2 text-terminal-accent hover:text-terminal-success transition-colors text-right ml-auto"
          >
            <div>
              <div class="text-sm text-terminal-muted">Next</div>
              <div class="font-semibold">{{ next.title }}</div>
            </div>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </NuxtLink>
        </div>
      </footer>
    </div>
  </article>
</template>

<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string

const { data: post } = await useAsyncData(`blog-${slug}`, () => 
  queryContent(`/blog/${slug}`).findOne()
)

const [prev, next] = await queryContent('/blog')
  .only(['_path', 'title'])
  .sort({ date: -1 })
  .findSurround(`/blog/${slug}`)

const formatDate = (date: string | undefined) => {
  if (!date) return ''
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

useHead({
  title: post.value?.title || 'Blog Post',
  meta: [
    { name: 'description', content: post.value?.description || '' },
    { property: 'og:title', content: post.value?.title || '' },
    { property: 'og:description', content: post.value?.description || '' },
    { property: 'og:image', content: post.value?.image || '' }
  ]
})
</script>