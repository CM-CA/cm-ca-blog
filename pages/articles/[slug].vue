<template>
  <main class="min-h-screen">
    <div
      class="prose dark:prose-invert prose-blockquote:not-italic prose-pre:bg-gray-900 prose-img:ring-1 prose-img:ring-gray-200 dark:prose-img:ring-white/10 prose-img:rounded-lg"
    >
      <ContentDoc v-slot="{ doc }" tag="article">
        <article>
          <h1>{{ doc.title }}</h1>
          <ContentRenderer :value="doc" />
        </article>
      </ContentDoc> 
      <div class="fixed right-4 bottom-4">
      <a
        href="https://www.linkedin.com/sharing/share-offsite/?url=URL"
        target="_blank"
        class="py-2 px-4 rounded-lg bg-white/80 dark:bg-gray-800/80 dark:text-white"
      >
        <Icon name="mdi:linkedin" class="inline-block" />
        <span class="ml-2">Compartir en LinkedIn</span>
      </a>
    </div>

    </div>
   
  </main>
</template>

<script setup>
const route = useRoute();
const { slug } = route.params;
useSeoMeta({
  twitterCard: "summary_large_image",
  articleAuthor: "Camilo M. Couselo Alonso",
});
</script>
<style>
.prose h2 a,
.prose h3 a {
  @apply no-underline;
}
</style>
