<template>
  <main class="min-h-screen">
    <div
      class="prose dark:prose-invert prose-blockquote:not-italic prose-pre:bg-gray-900 prose-img:ring-1 prose-img:ring-gray-200 dark:prose-img:ring-white/10 prose-img:rounded-lg">
      <ContentDoc v-slot="{ doc }" tag="article">
        <article>
          <NuxtImg src="/img/banner.jpeg"/>
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

  ogTitle: `Okud4 - ${slug}`,
   ogImage: '/img/banner.jpeg',
   ogDescription: 'Post de Okud4',
   ogUrl: `https://cm-ca.vercel.app/articles/${slug}`,

});
</script>
<style>
.prose h2 a,
.prose h3 a {
  @apply no-underline;
}
</style>
