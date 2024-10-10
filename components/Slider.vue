<template>
  <div class="slider">
    <div class="slider-content">
      <p>{{ slides[currentIndex].text }}</p>
    </div>
    <div class="slider-navigation">
      <button class="nav-button left" @click="prevSlide">
        <svg class="arrow" viewBox="0 0 24 24" width="24" height="24">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <button class="nav-button right" @click="nextSlide">
        <svg class="arrow" viewBox="0 0 24 24" width="24" height="24">
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>
    </div>
    <div class="slider-dots">
      <span
        v-for="(slide, index) in slides"
        :key="index"
        class="dot"
        :class="{ active: index === currentIndex }"
        @click="goToSlide(index)"></span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const slides = ref([
  { text: "Сварка алюминиевых деталей двигателей" },
  { text: "Сварка алюминиевых кузовных деталей" },
  { text: "Сварка поддонов ДВС" },
  { text: "Сварка емкостей" },
  { text: "Токарно-фрезерные работы" },
]);

const currentIndex = ref(0);

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.value.length;
};

const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + slides.value.length) % slides.value.length;
};

const goToSlide = (index) => {
  currentIndex.value = index;
};
</script>

<style scoped>
.slider {
  position: relative;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  margin: 10px auto;
  width: 90%;
  max-width: 800px;
  overflow: hidden;
}

.slider-content {
  display: flex;
  transition: transform 0.5s ease;
  width: 100%;
}

.slider-content p {
  min-width: 100%;
  font-size: 18px;
  margin: 0;
  color: white;
}

.slider-navigation {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}

.nav-button {
  background: transparent;
  border: none;
  cursor: pointer;
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
}

.nav-button:hover {
  background-color: white;
}

.arrow {
  stroke: white;
  stroke-width: 2;
  fill: none;
  transition: stroke 0.3s ease;
}

.nav-button:hover .arrow {
  stroke: black;
}

.slider-dots {
  display: flex;
  justify-content: center;
  align-items: center;
}

.dot {
  height: 5px;
  width: 5px;
  margin: 0 10px;
  background-color: gray;
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;
}

.dot.active {
  background-color: white;
  height: 7px;
  width: 7px;
}
</style>
