<template>
  <main class="min-h-screen">
    <AppHeader class="mb-12" title="Proyectos" :description="description" />


    <AppProjectCard v-for="(project, id) in paginatedProjects" :key="id" :project="project" />


    <div class="flex justify-center items-center my-8 px-3 ">
      <UPagination v-model="currentPage" :page-count="pageCount" :total="totalProjects"
        :prev-button="{ icon: 'i-heroicons-arrow-small-left-20-solid', label: 'Prev', color: 'gray' }"
        :next-button="{ icon: 'i-heroicons-arrow-small-right-20-solid', trailing: true, label: 'Next', color: 'gray' }" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

const description = "Aunque hasta la fecha no he tenido la oportunidad de trabajar en una compañia IT, siempre me gustó crear pequeños programas y páginas web. Aquí dejaré un listado de mi github.";
useSeoMeta({
  title: "Proyectos | Camilo M. Couselo Alonso",
  description,
});

const currentPage = ref(1);
const itemsPerPage = 4;

let proje = ref([]);
let totalProjects = ref(0);
let pageCount = ref(0);


const { data, data: projects } = useLazyFetch("https://api.github.com/users/cm-ca/repos", {
  method: 'GET',

});


projects.value = data.value;
totalProjects.value = proje.value.length;
pageCount.value = Math.ceil(totalProjects.value / itemsPerPage);

const paginatedProjects = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return proje.value.slice(start, end);
});
</script>
