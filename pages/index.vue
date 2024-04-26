<template>
  <main class="min-h-screen">
    <div class="space-y-24">
      <HomeIntro />
      <HomeSocialLinks />
      <HomeFeaturedProjects />
      <HomeFeaturedArticles />
      <SpeedInsights/>
    </div>
  </main>
</template>

<script setup>
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
</script>