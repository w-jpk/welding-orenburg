<template>
  <div>
    <Navbar />
    <div class="home"></div>
    <div class="footer"></div>
  </div>
</template>

<script setup>
import Navbar from "~/components/Navbar.vue";
</script>

<style lang="scss" scoped>
.home {
  background-color: $tertiary;
  height: 100dvh;
  width: 100%;
}

.footer {
  background-color: $secondary;
  height: 100dvh;
  width: 100%;
}
</style>
