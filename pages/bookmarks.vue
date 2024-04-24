<template>
  <main class="min-h-screen">
    <AppHeader class="mb-8" title="Bookmarks" :description="description" />
    <section class="mt-12">
      <h2 class="mb-4 text-lg font-bold">Artículos y Libros</h2>
      <ul class="space-y-2">
        <li v-for="article in articles" :key="article.id">
          <a :href="article.url" target="_blank"
            class="flex items-center gap-3 p-2 rounded-lg group -m-2 text-sm min-w-0">
            <UAvatar :src="getThumbnail(article.url)" :alt="article.label" :ui="{ rounded: 'rounded-md' }" />
            <p class="truncate text-gray-700 dark:text-gray-200">
              {{ article.label }}
            </p>
            <div
              class="flex-1 items-center border-b border-dashed border-gray-300 dark:border-gray-800 group-hover:border-green-700">
            </div>
            <span class="text-xs font-medium text-gray-400 dark:text-gray-600">
              {{ getHost(article.url) }}
            </span>
          </a>
        </li>
      </ul>
    </section>

    <section class="mt-12">
      <h2 class="mb-4 text-lg font-bold">Videos</h2>
      <ul class="space-y-2">
        <li v-for="video in videos" :key="video.id">
          <a :href="video.url" target="_blank"
            class="flex items-center gap-3 p-2 rounded-lg group -m-2 text-sm min-w-0">
            <UAvatar :src="getThumbnail(video.url)" :alt="video.label" :ui="{ rounded: 'rounded-md' }" />
            <p class="truncate text-gray-700 dark:text-gray-200">
              {{ video.label }}
            </p>
            <div
              class="flex-1 items-center border-b border-dashed border-gray-300 dark:border-gray-800 group-hover:border-green-700">
            </div>
            <span class="text-xs font-medium text-gray-400 dark:text-gray-600">
              {{ getHost(video.url) }}
            </span>
          </a>
        </li>
      </ul>
    </section>
  </main>
</template>

<script setup>
const description =
  "Aquí os dejaré cosas que encuentro por internet y me parecen interesantes.";
useSeoMeta({
  title: "Bookmarks | Camilo M. Couselo Alonso",
  description,
});

const bookmarks = [
  {
    id: 1,
    label: "Canal de The Cyber Mentor",
    url: "https://www.youtube.com/@TCMSecurityAcademy",
    category: "videos"
  },
  {
    id: 2,
    label: "Black Hat Python 2nd Edition",
    url: "https://edu.anarcho-copy.org/Against%20Security%20-%20Self%20Security/Python/Black_Hat_Python,_2nd_Edition.pdf",
    category: "article"
  },
  {
    id: 3,
    label: "Canal de David Bombal",
    url: "https://www.youtube.com/@davidbombal",
    category: "videos"
  },
  {
    id: 4,
    label: "Canal de NetworkChuck",
    url: "https://www.youtube.com/@NetworkChuck",
    category: "videos"
  },
  {
    id: 5,
    label: "Canal de El Pinguino de Mario",
    url: "https://www.youtube.com/@ElPinguinoDeMario",
    category: "videos"
  },
  {
    id: 6,
    label: "JavaScript Eloquente 4th Edition",
    url: "https://eloquent-javascript-es.vercel.app/",
    category: "article"
  },
  {
    id: 7,
    label: "Repositorio con libros de Hacking",
    url: "https://github.com/zapstiko/Hacking-PDF",
    category: "article"
  },

];

function getHost(url) {
  const parsedUrl = new URL(url);
  let host = parsedUrl.host;
  if (host.startsWith("www.")) {
    host = host.substring(4);
  }
  return host;
}

function getThumbnail(url) {
  const host = getHost(url);
  return `https://logo.clearbit.com/${host}`;
}

const videos = bookmarks.filter(bookmark => bookmark.category === 'videos');
const articles = bookmarks.filter(bookmark => bookmark.category === 'article');
</script>
