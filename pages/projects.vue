<template>
  <main class="min-h-screen">
    <AppHeader class="mb-12" title="Proyectos" :description="description" />

    <!--mensaje de carga de datos -->
    <div v-if="pending" class="flex flex-col items-center my-8 px-3">
      <h1 class="mb-4">Cargando...</h1>
      <UProgress animation="elastic" />
    </div>

    <div v-else-if="error || !projects">
      <span class="text-red-500">Error al cargar los datos</span>
    </div>

    <div v-else>
      <AppProjectCard
        v-for="(project, id) in projects"
        :key="id"
        :project="project"
      />
    </div>

    <!-- 
     
 <div class="flex justify-center items-center my-8 px-3">
      <UPagination
        v-model="page" 
        :page-count="5"
        :total="totalPages"
        :prev-button="{
          icon: 'i-heroicons-arrow-small-left-20-solid',
          label: 'Prev',
          color: 'gray',
        }"
        :next-button="{
          icon: 'i-heroicons-arrow-small-right-20-solid',
          trailing: true,
          label: 'Next',
          color: 'gray',
        }"
      />
    </div>

-->
  </main>
</template>

<script setup lang="ts">
const description =
  "Aunque hasta la fecha no he tenido la oportunidad de trabajar en una compañia IT, siempre me gustó crear pequeños programas y páginas web. Aquí dejaré un listado de mi github.";
useSeoMeta({
  title: "Proyectos | Camilo M. Couselo Alonso",
  description,
});

const {
  data: projects,
  pending,
  error,
} = await useLazyFetch("/api/projects", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Refrescar los datos de la pagina cuando se cambia de pagina
</script>
