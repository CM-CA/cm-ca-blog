<template>
  <div class="space-y-6">
    <NuxtImg
      src="/avatar.jpeg"
      alt="Okud4"
      class="ring-2 border ring-gray-200 border-gray-300 dark:ring-white/10 dark:border-gray-800 hover:ring-4 transition-all duration-300 bg-gray-200 dark:bg-gray-900 rounded-full h-24 w-24 sm:h-28 sm:w-28"
      sizes="96px sm:112px"
      placeholder
      format="jpeg"
    />
    <h1
      class="text-xl font-bold tracking-tight text-gray-800 dark:text-gray-100"
    >
      Hola! Soy Camilo M.C.A. (aka. Okud4)
    </h1>
    <p class="text-gray-900 dark:text-gray-400">
      Soy un apasionado programador junior que está obsesionado con la
      ciberseguridad y la protección en línea. Me encanta jugar con Python y
      JavaScript, y estoy siempre buscando nuevas formas de hacer que nuestros
      datos estén más seguros. Siempre estoy investigando sobre los últimos
      trucos y herramientas para mantenernos a salvo en internet. Me considero
      un solucionador de problemas curioso y me encanta trabajar en equipo para
      encontrar las mejores soluciones posibles. ¡Estoy emocionado por unirme a
      un equipo donde pueda aprender y hacer mi parte para mantener la web
      segura para todos!
    </p>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Camilo M. Couselo Alonso",
  description:
    "Camilo aka 'Okud4' soy un entusiasta de la ciberseguridad y la programación",
});
</script>
