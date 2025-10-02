<template>
  <div>
    <!-- Hero Section -->
    <section class="container mx-auto px-6 py-20 md:py-32">
      <div class="max-w-6xl mx-auto">
        <div class="grid md:grid-cols-2 gap-12 items-center animate-fade-in">
          <div>
            <h1 class="text-5xl md:text-7xl font-bold mb-6">
              <span class="text-terminal-success">&gt;</span> Hey, I'm
              <span class="text-terminal-accent">Josh</span>
            </h1>
            <p class="text-xl md:text-2xl text-terminal-muted mb-8 leading-relaxed">
              I am an experienced full stack developer and agile leader. 
              I build high-performance event-driven systems to financially empower millions of people around the world. 
              I have expertise in building scalable platforms with Java, Kotlin, and C#.
              And I always make an effort to learn something new every single day.
            </p>
            <div class="flex flex-wrap gap-4">
              <NuxtLink to="/blog" class="btn-primary">
                View Blog
              </NuxtLink>
              <NuxtLink to="/gallery" class="btn-secondary">
                See Work
              </NuxtLink>
            </div>
          </div>
          
          <div class="flex justify-center md:justify-end">
            <div class="relative">
              <div class="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-terminal-accent shadow-lg hover:shadow-terminal-accent/50 transition-shadow duration-300">
                <img 
                  src="../images/facemex.jpg" 
                  alt="Professional headshot"
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="absolute -bottom-4 -right-4 w-24 h-24 bg-terminal-accent rounded-full opacity-20 blur-2xl"></div>
              <div class="absolute -top-4 -left-4 w-32 h-32 bg-terminal-success rounded-full opacity-10 blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="container mx-auto px-6 py-16">
      <h2 class="text-3xl font-bold mb-12 text-center">
        <span class="text-terminal-success">$</span> Tech Stack
      </h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div v-for="skill in skills" :key="skill.name" 
             class="card text-center hover:scale-105 transition-transform">
          <div class="text-4xl mb-3">{{ skill.icon }}</div>
          <h3 class="font-semibold">{{ skill.name }}</h3>
        </div>
      </div>
    </section>

    <!-- Recent Posts -->
    <section class="container mx-auto px-6 py-16">
      <div class="flex justify-between items-center mb-12">
        <h2 class="text-3xl font-bold">
          <span class="text-terminal-success">$</span> Recent Posts
        </h2>
        <NuxtLink to="/blog" class="text-terminal-accent hover:text-terminal-success">
          View all →
        </NuxtLink>
      </div>
      <div v-if="recentPosts && recentPosts.length" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <BlogCard v-for="post in recentPosts" :key="post._path" :post="post" />
      </div>
      <div v-else class="text-center text-terminal-muted py-12">
        No posts yet. Check back soon!
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const skills = [
  { name: 'Java', icon: '♨️' },
  { name: 'Kotlin', icon: '🇰' },
  { name: 'JavaScript', icon: '</>' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'React', icon: '⚛️' },
  { name: 'Python', icon: '🐍' },
  { name: 'Docker', icon: '🐳' },
  { name: 'AWS', icon: '☁️' }
]

const { data: recentPosts } = await useAsyncData('recent-posts', () => 
  queryContent('/blog')
    .sort({ date: -1 })
    .limit(3)
    .find()
)
</script>