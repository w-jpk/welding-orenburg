<template>
  <div :class="{ scrolled: isScrolled }" class="navbar">
    <div class="container">
      <h1>Logo</h1>
      <nav class="nav">
        <ul>
          <li><a href="#">Главная</a></li>
          <li><a href="#">Услуги</a></li>
          <li><a href="#">Контакты</a></li>
        </ul>
      </nav>
      <div class="contact">
        <a>+7 (999) 999-99-99</a>
        <button>Позвонить</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
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
  padding: 1rem 2rem;
  background-color: transparent;
  transition: background-color 0.3s ease-in-out;
  z-index: 1000;
}

.navbar.scrolled {
  background-color: white !important;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
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
  flex: 1;
  justify-content: center;
  text-align: center;
}

ul {
  list-style: none;
  display: flex;
  gap: 1rem;
  padding: 0;
  margin: 0;
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
}

li a {
  text-decoration: none;
  color: black;
}
</style>
