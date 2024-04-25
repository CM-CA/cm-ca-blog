<template>
  <main class="min-h-screen">
    <div
      class="prose dark:prose-invert prose-blockquote:not-italic prose-pre:bg-gray-900 prose-img:ring-1 prose-img:ring-gray-200 dark:prose-img:ring-white/10 prose-img:rounded-lg">
      <ContentDoc v-slot="{ doc }" tag="article">
        <article>
          <h1>{{ doc.title }}</h1>
          <ContentRenderer :value="doc" />
        </article>
      </ContentDoc>
    </div>
    <AppShareButton/>
  </main>
</template>

<script setup>
const route = useRoute();
const { slug } = route.params;
useSeoMeta({
  title: 'Okud4',
  ogTitle: 'Okud4',
  description: 'Mi blog personal',
  ogDescription: 'Mi blog personal',
  ogUrl: `https://cm-ca.vercel.app/articles/${slug}`,
  ogImage: 'https://cm-ca.vercel.app/assets/favicons/mstile-150x150.png',
  icon: 'https://cm-ca.vercel.app/assets/favicons/mstile-150x150.png',
  twitterCard: 'summary_large_image',
  lang: 'es',
});
</script>
<style>
.prose h2 a,
.prose h3 a {
  @apply no-underline;
}
</style>
