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

      <div class="mt-4 flex justify-end">
        <NuxtLink
          class="flex items-center gap-2 rounded-lg border px-3 py-2 hover:bg-gray-100 dark:hover:bg-blue-700 dark:border-gray-800"
          :to="`https://www.linkedin.com/sharing/share-offsite/?url=${doc._path}`"
          target="_blank"
          external>
          <Icon name="mdi:linkedin" class="w-6 h-6" />
          <span>Comparteme en Linkedin</span>
        </NuxtLink>
      </div>
      </ContentDoc>
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
