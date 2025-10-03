<script setup lang="ts">
defineProps<{ src: string }>()
</script>

<template>
  <video controls width="640">
    <source :src="src" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</template>