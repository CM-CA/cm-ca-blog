<template>
  <main class="min-h-screen">
    <AppHeader class="mb-12" title="Proyectos" :description="description" />
    <div class="space-y-4">
      <AppProjectCard
        v-for="(project, id) in projects"
        :key="id"
        :project="project"
      />
     
    </div>
  </main>
</template>

<script setup>
const description =
  "Aunque hasta la fecha no he tenido la oportunidad de trabajar en una compañia IT, siempre me gustó crear pequeños programas y páginas web. Aquí dejaré un listado de mi github.";
useSeoMeta({
  title: "Proyectos | Camilo M. Couselo Alonso",
  description,
});

const { data: projects } = useFetch("https://api.github.com/users/cm-ca/repos",{
  method: 'GET',

});

</script>
