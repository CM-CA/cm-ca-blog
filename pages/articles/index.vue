<template>
  <main class="min-h-screen">
    <AppHeader class="mb-16" title="Blog" :description="description" />
    <ul class="space-y-16">
      <li v-for="(article, id) in articles" :key="id">
        <AppArticleCard :article="article" />
      </li>
    </ul>
  </main>
</template>

<script setup>
const description =
  "Compartiré con vosotros mis logros, experiencias y como no, también mis fracasos y frustraciones junto con algunas noticias que resulten interesantes.";
useSeoMeta({
  title: "Articulos | Camilo M. Couselo Alonso",
  description,
});

const { data: articles } = await useAsyncData("all-articles", () =>
  queryContent("/articles").sort({ published: -1 }).find()
);
</script>
