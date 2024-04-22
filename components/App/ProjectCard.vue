<template>
  <div class="flex items-center gap-4 p-2 rounded-lg">
    <NuxtLink
      class="flex items-center justify-between w-full group"
      :to="project.html_url"
      target="_blank"
      external
    >
      <div class="max-w-sm">
        <h3 class="text-sm font-medium">
          {{ project.name }}
        </h3>
      </div>
      <div
        class="flex-1 items-center border-b border-dashed border-gray-300 dark:border-gray-800 group-hover:border-green-700"
      ></div>
      <div class="max-w-sm">
        <p class="text-gray-400 text-sm truncate hidden md:block">{{ project.description }}</p>
      </div>
    </NuxtLink>
    <div>
      <UAvatar
        src="/assets/favicons/mstile-150x150.png"
        :ui="{ rounded: 'rounded z-10 relative' }"
        size="xl"
        :alt="project.name"
      />
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
});


</script>
