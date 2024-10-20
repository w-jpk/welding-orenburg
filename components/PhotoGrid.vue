<template>
  <div>
    <div class="photo-grid">
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image"
        @click="openImage(image)"
        class="photo-grid-item"
        alt="Image" />
    </div>

    <div v-if="isModalOpen" class="modal" @click="closeModal">
      <img :src="currentImage" class="modal-image" alt="Large Image" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import photo6 from "../assets/images/photo (6).jpg";
import photo7 from "../assets/images/photo (7).jpg";
import photo8 from "../assets/images/photo (8).jpg";
import photo9 from "../assets/images/photo (9).jpg";
import photo10 from "../assets/images/photo (10).jpg";
import photo11 from "../assets/images/photo (11).jpg";

const images = ref([photo6, photo7, photo8, photo9, photo10, photo11]);

const isModalOpen = ref(false);
const currentImage = ref("");

const openImage = (image) => {
  currentImage.value = image;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};
</script>

<style scoped>
.photo-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.photo-grid-item {
  width: 30%;
  height: 300px;
  cursor: pointer;
  object-fit: cover;
  border-radius: 5px;
}

.photo-grid-item:hover {
  opacity: 0.7;
  transition: opacity 0.3s ease-in-out;
  transform: scale(1.02);
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-image {
  max-width: 90%;
  max-height: 90%;
  margin-top: 5%;
}
</style>
