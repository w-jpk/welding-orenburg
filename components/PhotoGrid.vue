<template>
  <div class="photo-grid">
    <div
      v-for="(image, index) in pagedImages"
      :key="index"
      class="photo-item"
      @click="openModal(index)"
    >
      <img :src="image.src" :alt="image.alt" />
    </div>
    <div v-if="modalIndex !== null" class="photo-modal-overlay" @click.self="closeModal">
      <div class="photo-modal">
        <button class="close-btn" @click="closeModal">&times;</button>
        <button class="arrow-btn left" @click.stop="prevImage" :disabled="modalIndex === 0">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="16" fill="none"/>
            <path d="M19.5 24L12.5 16L19.5 8" stroke="#ff903f" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <div class="modal-img-col">
          <img :src="pagedImages[modalIndex].src" :alt="pagedImages[modalIndex].alt" class="modal-img-anim" />
          <div class="modal-img-desc">{{ pagedImages[modalIndex].alt }}</div>
        </div>
        <button class="arrow-btn right" @click.stop="nextImage" :disabled="modalIndex === pagedImages.length - 1">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="16" fill="none"/>
            <path d="M12.5 8L19.5 16L12.5 24" stroke="#ff903f" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <div class="photo-counter">{{ modalIndex + 1 }} / {{ pagedImages.length }}</div>
      </div>
    </div>
    <div v-if="pageCount > 1" class="photo-pagination">
      <button class="page-btn" :disabled="currentPage === 1" @click="currentPage--">Назад</button>
      <button
        v-for="page in pageCount"
        :key="page"
        class="page-btn"
        :class="{ active: page === currentPage }"
        @click="currentPage = page"
      >{{ page }}</button>
      <button class="page-btn" :disabled="currentPage === pageCount" @click="currentPage++">Вперёд</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import photo1 from "../assets/images/photo (1).jpg";
import photo2 from "../assets/images/photo (2).jpg";
import photo3 from "../assets/images/photo (3).jpg";
import photo4 from "../assets/images/photo (4).jpg";
import photo5 from "../assets/images/photo (5).jpg";
import photo6 from "../assets/images/photo (6).jpg";
import photo7 from "../assets/images/photo (7).jpg";
import photo8 from "../assets/images/photo (8).jpg";
import photo9 from "../assets/images/photo (9).jpg";
import photo10 from "../assets/images/photo (10).jpg";
import photo11 from "../assets/images/photo (11).jpg";
import photo12 from "../assets/images/photo (1).jpg";

const images = ref([
  { src: photo1, alt: "Описание изображения 1" },
  { src: photo2, alt: "Описание изображения 2" },
  { src: photo3, alt: "Описание изображения 3" },
  { src: photo4, alt: "Описание изображения 4" },
  { src: photo5, alt: "Описание изображения 5" },
  { src: photo6, alt: "Описание изображения 6" },
  { src: photo7, alt: "Описание изображения 7" },
  { src: photo8, alt: "Описание изображения 8" },
  { src: photo9, alt: "Описание изображения 9" },
  { src: photo10, alt: "Описание изображения 10" },
  { src: photo11, alt: "Описание изображения 11" },
  { src: photo12, alt: "Описание изображения 12" },
]);

const pageSize = 6;
const currentPage = ref(1);
const pageCount = computed(() => Math.ceil(images.value.length / pageSize));
const pagedImages = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  return images.value.slice(start, start + pageSize);
});

const modalIndex = ref(null);
const openModal = (idx) => {
  modalIndex.value = idx;
  document.body.style.overflow = "hidden";
};
const closeModal = () => {
  modalIndex.value = null;
  document.body.style.overflow = "";
};
const prevImage = () => {
  if (modalIndex.value > 0) modalIndex.value--;
};
const nextImage = () => {
  if (modalIndex.value < pagedImages.value.length - 1) modalIndex.value++;
};

function handleKey(e) {
  if (modalIndex.value !== null) {
    if (e.key === "ArrowLeft") prevImage();
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "Escape") closeModal();
  }
}
onMounted(() => {
  window.addEventListener("keydown", handleKey);
});
onUnmounted(() => {
  window.removeEventListener("keydown", handleKey);
});
</script>

<style scoped>
.photo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2.5rem;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 0;
}
.photo-item {
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.10);
  cursor: pointer;
  transition: transform 0.18s, box-shadow 0.18s;
  background: #191919;
  min-height: 320px;
}
.photo-item img {
  width: 100%;
  height: 100%;
  aspect-ratio: 1.3/1;
  object-fit: cover;
  display: block;
  transition: transform 0.3s;
}
.photo-item:hover {
  transform: scale(1.04) translateY(-4px);
  box-shadow: 0 8px 32px rgba(255,144,63,0.18);
  z-index: 2;
}
.photo-item:hover img {
  transform: scale(1.07);
}
.photo-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(34,34,34,0.82);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3000;
  animation: fadeIn 0.22s;
  backdrop-filter: blur(2px);
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.photo-modal {
  position: relative;
  background: #232323;
  border-radius: 24px;
  padding: 2.5rem 3.5rem;
  box-shadow: 0 12px 48px rgba(0,0,0,0.35);
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 92vw;
  max-height: 92vh;
  gap: 2.5rem;
  min-width: 320px;
  animation: modalZoomIn 0.22s;
}
@keyframes modalZoomIn {
  from { opacity: 0; transform: scale(0.97);}
  to { opacity: 1; transform: scale(1);}
}
.photo-modal img {
  max-width: 60vw;
  max-height: 70vh;
  border-radius: 18px;
  object-fit: contain;
  background: #191919;
  box-shadow: 0 2px 16px rgba(0,0,0,0.18);
  transition: box-shadow 0.2s, transform 0.2s;
  animation: imgZoomIn 0.22s;
}
@keyframes imgZoomIn {
  from { opacity: 0; transform: scale(0.98);}
  to { opacity: 1; transform: scale(1);}
}
.close-btn {
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  background: rgba(35,35,35,0.85);
  border: none;
  font-size: 2rem;
  color: #ff903f;
  cursor: pointer;
  border-radius: 50%;
  width: 2.2rem;
  height: 2.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.18s, background 0.18s, box-shadow 0.18s;
  z-index: 2;
  box-shadow: 0 2px 8px rgba(0,0,0,0.12);
}
.close-btn:hover { color: #fff; background: #ff903f22; }
.arrow-btn {
  background: rgba(35,35,35,0.7);
  border: none;
  color: #ff903f;
  font-size: 2.7rem;
  border-radius: 50%;
  width: 3.2rem;
  height: 3.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0 1.5rem;
  transition: color 0.18s, background 0.18s, box-shadow 0.18s;
  z-index: 2;
  box-shadow: 0 2px 8px rgba(0,0,0,0.10);
  opacity: 0.92;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.arrow-btn.left { left: -6rem; }
.arrow-btn.right { right: -6rem; }
.arrow-btn:disabled {
  opacity: 0.25;
  cursor: default;
}
.arrow-btn:hover:not(:disabled) {
  color: #fff;
  background: #ff903f22;
  box-shadow: 0 4px 16px rgba(255,144,63,0.18);
}
.photo-counter {
  position: absolute;
  bottom: 1.2rem;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-size: 1.05rem;
  background: rgba(35,35,35,0.55);
  padding: 0.3rem 1.1rem;
  border-radius: 1rem;
  letter-spacing: 0.04em;
  user-select: none;
  box-shadow: 0 2px 8px rgba(0,0,0,0.10);
}
.modal-img-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.modal-img-desc {
  margin-top: 1.1rem;
  color: #e0e0e0;
  font-size: 1.08rem;
  text-align: center;
  max-width: 60vw;
  line-height: 1.5;
  background: rgba(35,35,35,0.55);
  border-radius: 0.7rem;
  padding: 0.5rem 1.2rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.10);
  user-select: text;
}
@media (max-width: 900px) {
  .photo-modal {
    flex-direction: column;
    gap: 1rem;
    padding: 0.5rem 0.5rem 2.5rem 0.5rem;
  }
  .photo-modal img {
    max-width: 96vw;
    max-height: 60vh;
  }
  .arrow-btn.left, .arrow-btn.right {
    position: static;
    transform: none;
    margin: 0 0.5rem;
    left: unset; right: unset; top: unset;
  }
  .photo-counter {
    bottom: 0.5rem;
  }
  .modal-img-desc {
    max-width: 96vw;
    font-size: 0.98rem;
    padding: 0.4rem 0.7rem;
  }
}
.photo-pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2.5rem;
}
.page-btn {
  background: #232323;
  color: #ff903f;
  border: none;
  border-radius: 0.7rem;
  padding: 0.5rem 1.2rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.18s, color 0.18s, box-shadow 0.18s;
  box-shadow: 0 2px 8px rgba(0,0,0,0.10);
}
.page-btn.active, .page-btn:hover:not(:disabled) {
  background: #ff903f;
  color: #fff;
}
.page-btn:disabled {
  opacity: 0.4;
  cursor: default;
}
</style>
