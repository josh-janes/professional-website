<template>
  <div class="container mx-auto px-6 py-16">
    <div class="max-w-4xl mx-auto mb-16 animate-fade-in">
      <h1 class="text-5xl font-bold mb-4">
        <span class="text-terminal-success">$</span> Gallery
      </h1>
      <p class="text-xl text-terminal-muted">
        A collection of projects, designs, and creative work.
      </p>
    </div>

    <!-- Category Filter -->
    <div class="max-w-6xl mx-auto mb-12">
      <div class="flex flex-wrap gap-3">
        <button 
          @click="selectedCategory = 'all'"
          :class="[
            'px-4 py-2 rounded-lg border transition-all',
            selectedCategory === 'all' 
              ? 'bg-terminal-accent text-terminal-bg border-terminal-accent' 
              : 'border-terminal-border text-terminal-muted hover:border-terminal-accent'
          ]"
        >
          All
        </button>
        <button 
          v-for="category in categories" 
          :key="category"
          @click="selectedCategory = category"
          :class="[
            'px-4 py-2 rounded-lg border transition-all',
            selectedCategory === category 
              ? 'bg-terminal-accent text-terminal-bg border-terminal-accent' 
              : 'border-terminal-border text-terminal-muted hover:border-terminal-accent'
          ]"
        >
          {{ category }}
        </button>
      </div>
    </div>

    <!-- Gallery Grid -->
    <div class="max-w-6xl mx-auto">
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <GalleryItem 
          v-for="item in filteredItems" 
          :key="item.id"
          :item="item"
          @select="openModal"
        />
      </div>
    </div>

    <!-- Modal -->
    <Modal :show="!!selectedItem" @close="selectedItem = null">
      <div v-if="selectedItem">
        <img 
          v-if="selectedItem.type === 'image'"
          :src="selectedItem.url" 
          :alt="selectedItem.title"
          class="w-full rounded-lg mb-4"
        />
        
        <video 
          v-else-if="selectedItem.type === 'video'"
          :src="selectedItem.url"
          class="w-full rounded-lg mb-4"
          controls
          autoplay
        />

        <h2 class="text-2xl font-bold mb-2">{{ selectedItem.title }}</h2>
        <p class="text-terminal-muted mb-4">{{ selectedItem.description }}</p>
        
        <div class="flex items-center gap-4">
          <span class="px-3 py-1 bg-terminal-elevated text-terminal-accent rounded-full text-sm">
            {{ selectedItem.category }}
          </span>
          <a 
            v-if="selectedItem.link" 
            :href="selectedItem.link"
            target="_blank"
            rel="noopener noreferrer"
            class="text-terminal-accent hover:text-terminal-success"
          >
            View Project →
          </a>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script setup lang="ts">
const selectedCategory = ref('all')
const selectedItem = ref<any>(null)

const categories = ['Web', 'Mobile', 'Design', 'Video']

const galleryItems = [
  {
    id: 1,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution built with Vue and Node.js',
    category: 'Web',
    link: '#'
  },
  {
    id: 2,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800',
    title: 'Task Management App',
    description: 'Modern task tracking application with real-time updates',
    category: 'Web',
    link: '#'
  },
  {
    id: 3,
    type: 'video',
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    title: 'Mobile App Demo',
    description: 'Cross-platform mobile application demo',
    category: 'Mobile',
    link: '#'
  },
  {
    id: 4,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800',
    title: 'Brand Identity',
    description: 'Complete brand identity design for tech startup',
    category: 'Design',
    link: '#'
  },
  {
    id: 5,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    title: 'Analytics Dashboard',
    description: 'Real-time analytics dashboard with data visualization',
    category: 'Web',
    link: '#'
  },
  {
    id: 6,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800',
    title: 'UI/UX Design',
    description: 'Modern interface design for SaaS platform',
    category: 'Design',
    link: '#'
  }
]

const filteredItems = computed(() => {
  if (selectedCategory.value === 'all') return galleryItems
  return galleryItems.filter(item => item.category === selectedCategory.value)
})

const openModal = (item: any) => {
  selectedItem.value = item
}
</script>