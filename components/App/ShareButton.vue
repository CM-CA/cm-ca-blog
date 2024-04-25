<template>
  <!-- components/App/ShareButton.vue -->
  <div class="flex items-center justify-center p-4 bottom-4">
   <SocialShare networks="linkedin" 
   :network="'linkedin'"
   :styled="true"
   :label="false" />
  </div>
</template>

<script setup>
  const shareLinkedin = useSocialShare({
    network: 'linkedin',
    title: 'Camilo M. Couselo Alonso', 
    image: 'https://cm-ca.vercel.app/assets/favicons/mstile-150x150.png',
});

</script>

