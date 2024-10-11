<template>
  <div class="gallery">
    <div class="gallery-grid">
      <div class="gallery-item" v-for="(image, index) in images" :key="index">
        <img :src="image.src" :alt="image.alt" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import prod1 from "../assets/prod_1.png";
import prod2 from "../assets/prod_2.png";
import prod3 from "../assets/prod_3.png";

const images = ref([
  {
    src: prod1,
    alt: "Описание изображения 1",
  },
  {
    src: prod2,
    alt: "Описание изображения 2",
  },
  {
    src: prod3,
    alt: "Описание изображения 3",
  },
  {
    src: prod1,
    alt: "Описание изображения 4",
  },
  {
    src: prod2,
    alt: "Описание изображения 5",
  },
]);
</script>

<style scoped>
.gallery {
  padding: 2rem;
}

.gallery-grid {
  display: flex;
  overflow-x: auto;
  gap: 1rem;
}

.gallery-item {
  flex: 0 0 auto;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.gallery-item img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
  cursor: pointer;
}
</style>
