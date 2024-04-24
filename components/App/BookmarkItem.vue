
<template>
    <li>
        <a :href="bookmark.url" target="_blank"
            class="flex items-center gap-3 p-2 rounded-lg group -m-2 text-sm min-w-0">
            <UAvatar :src="getThumbnail(bookmark.url)" :alt="bookmark.label" :ui="{ rounded: 'rounded-md' }" />
            <p class="truncate text-gray-700 dark:text-gray-200">{{ bookmark.label }}</p>
            <div
                class="flex-1 items-center border-b border-dashed border-gray-300 dark:border-gray-800 group-hover:border-green-700">
            </div>
            <span class="text-xs font-medium text-gray-400 dark:text-gray-600">{{ getHost(bookmark.url) }}</span>
        </a>
    </li>
</template>

<script>



function extractHost(url) {
  const { host } = new URL(url);
  return host.replace(/^www\./, '');
}

function getThumbnail(url) {
  const host = getHost(url);
  return `https://logo.clearbit.com/${host}`;
}

</script>