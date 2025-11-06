<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
// Add Umami analytics script exactly as provided
useHead({
  script: [
    {
      src: 'https://cloud.umami.is/script.js',
      defer: true,
      'data-website-id': '7fa05be7-2d37-4c40-ae0b-8ca27bfc156e'
    }
  ]
})
</script>

