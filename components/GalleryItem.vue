<template>
  <div class="card group cursor-pointer" @click="$emit('select', item)">
    <div class="relative overflow-hidden rounded-lg mb-4">
      <img 
        v-if="item.type === 'image'"
        :src="item.url" 
        :alt="item.title"
        class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
      />
      
      <div v-else-if="item.type === 'video'" class="relative">
        <video 
          :src="item.url" 
          class="w-full h-64 object-cover"
          muted
        />
        <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all">
          <svg class="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
      </div>

      <div class="absolute top-2 right-2">
        <span class="px-3 py-1 bg-terminal-accent text-terminal-bg text-xs rounded-full font-semibold">
          {{ item.category }}
        </span>
      </div>
    </div>

    <!-- Title with ellipsis if too long -->
    <h3 class="text-lg font-bold mb-2 group-hover:text-terminal-accent transition-colors truncate">
      {{ item.title }}
    </h3>
    
    <!-- Description clamped to 3 lines -->
    <p class="text-terminal-muted text-sm line-clamp-3">
      {{ item.description }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  item: {
    type: 'image' | 'video'
    url: string
    title: string
    description: string
    category: string
  }
}>()

defineEmits<{
  select: [item: any]
}>()
</script>
