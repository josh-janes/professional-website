<script setup lang="ts">
defineProps<{ src: string }>()
</script>

<template>
  <audio controls class="w-full">
    <source :src="src" type="audio/mpeg" />
    Your browser does not support the audio element.
  </audio>
</template>