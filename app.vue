<template>
  <NuxtLayout> </NuxtLayout>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Сварка Аргоном | Оренбург",
  ogTitle: "Сварка Аргоном | Оренбург",
  description: "Сварка Аргоном в городе Оренбург.",
  ogDescription: "Сварка Аргоном в городе Оренбург.",
  ogImage: "~/public/favicon.ico",
});
</script>

<style lang="scss">
h1 {
  @include title;
  color: $secondary;
}
</style>
