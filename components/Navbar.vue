<template>
  <div :class="{ scrolled: isScrolled }" class="navbar">
    <div class="container">
      <h1>Logo</h1>
      <nav class="nav">
        <ul>
          <li
            v-for="(item, index) in navItems"
            :key="index"
            :class="{ active: activeIndex === index }"
            @click="setActive(index)">
            <a :href="item.link">{{ item.text }}</a>
          </li>
        </ul>
      </nav>
      <div class="contact">
        <a href="tel:+79999999999">+7 (999) 999-99-99</a>
        <button><a href="tel:+79226209490">Позвонить</a></button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);
const activeIndex = ref(0);
const navItems = ref([
  { text: "Главная", link: "#" },
  { text: "Услуги", link: "#services" },
  { text: "Контакты", link: "#contact-us" },
]);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const setActive = (index) => {
  activeIndex.value = index;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem;
  background-color: transparent;
  transition: background-color 0.3s ease-in-out;
  z-index: 1000;
}

.navbar.scrolled {
  background-color: #fac5a0 !important;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  a,
  h1 {
    color: black;
  }
  button {
    color: black;
    background-color: transparent;
  }
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 2rem;
}

.nav {
  display: flex;
  flex: 0 0 auto;
  justify-content: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

ul {
  list-style: none;
  display: flex;
  gap: 1rem;
  padding: 0;
  margin: 0;
  font-size: 15px;
}

li {
  min-width: 100px; /* Фиксированная ширина для каждого элемента */
  text-align: center;
}

li a {
  display: block;
  padding: 0.5rem;
  transition: font-weight 0.3s ease;
}

li.active a {
  font-weight: 600; /* Жирный текст для активного элемента */
}

.contact {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
}

.contact a,
.contact button {
  margin: 0;
  padding: 0;
  font-size: 15px;
}

a,
h1 {
  text-decoration: none;
  color: white;
}

button {
  background-color: #fac5a049;
  border: none;
  cursor: pointer;
  color: white;
  border: 5px;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  width: 200px;
  height: 35px;
}
</style>
