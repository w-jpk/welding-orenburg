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

// Импортируем изображения
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
  display: flex; /* Изменено на flexbox */
  overflow-x: auto; /* Прокрутка по горизонтали, если изображения не помещаются */
  gap: 1rem; /* Пробел между элементами */
}

.gallery-item {
  flex: 0 0 auto; /* Не растягивать и не сжимать элементы */
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.gallery-item img {
  width: 100%; /* Изображения занимают всю ширину контейнера */
  height: auto; /* Высота автоматически подстраивается */
  display: block;
  border-radius: 8px;
  cursor: pointer;
}
</style>
