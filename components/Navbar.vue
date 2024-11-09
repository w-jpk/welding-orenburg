<template>
  <div class="mobile-navbar">
    <div class="mobile-container">
      <div class="burger" @click="toggleHide">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav v-if="!isHide" class="mobile-nav">
        <div class="img-logo" @click="scrollToTop">
          <img src="../assets/prod_2.png" alt="Logo" />
          <p>Сварка Аргоном | Оренбург</p>
        </div>
        <ul>
          <li
            v-for="(item, index) in navItems"
            :key="index"
            :class="{ active: activeIndex === index }"
            @click="setActive(index)">
            <a>{{ item.text }}</a>
          </li>
        </ul>
        <div class="contact">
          <a href="tel:+79999999999">+7 (999) 999-99-99</a>
          <button @click="call">Позвонить</button>
        </div>
      </nav>
    </div>
  </div>
  <div :class="{ scrolled: isScrolled }" class="desktop-navbar">
    <div class="container">
      <div class="img-logo" @click="scrollToTop">
        <img src="../assets/prod_2.png" alt="Logo" />
        <p>Сварка Аргоном | Оренбург</p>
      </div>
      <nav class="nav">
        <ul>
          <li
            v-for="(item, index) in navItems"
            :key="index"
            :class="{ active: activeIndex === index }"
            @click="setActive(index)">
            <a>{{ item.text }}</a>
          </li>
        </ul>
      </nav>
      <div class="contact">
        <a href="tel:+79228293974">+7 (922) 829-39-74</a>
        <button @click="call">Позвонить</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isHide = ref(true);

const toggleHide = () => {
  isHide.value = !isHide.value;
};

const isScrolled = ref(false);
const activeIndex = ref(0);
const navItems = ref([
  { text: "Главная", link: "#section-1" },
  { text: "Услуги", link: "#services" },
  { text: "Контакты", link: "#contact-us" },
]);

const call = () => {
  window.location.href = "tel:+79228293974";
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const setActive = (index) => {
  const targetSection = document.querySelector(navItems.value[index].link);
  if (targetSection) {
    const offsetTop =
      targetSection.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
    setTimeout(() => {
      activeIndex.value = index;
    }, 300);
  }
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  setActive(0);
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.desktop-navbar {
  display: block;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1rem;
  background-color: transparent;
  transition: background-color 0.3s ease-in-out;
  z-index: 998;
}

.mobile-navbar {
  display: none;
}

.desktop-navbar.scrolled {
  background-color: #ff903f !important;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  a,
  h1 {
    color: black;
  }
  button {
    color: black;
    background-color: transparent;
  }
  .img-logo p {
    color: black;
  }
  .img-logo img {
    border: none;
  }
}

.img-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2rem;
  gap: 0.5rem;
  cursor: pointer;
  img {
    border: white 2px solid;
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
  p {
    color: white;
    font-size: 15px;
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
  min-width: 100px;
  text-align: center;
}

li a {
  display: block;
  padding: 0.5rem;
  transition: font-weight 0.3s ease;
  cursor: pointer;
}

li.active a {
  font-weight: 600;
}

.contact {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
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

@media only screen and (max-width: 1120px) {
  .desktop-navbar {
    display: none;
  }

  .mobile-navbar {
    display: block;
    position: absolute;
    justify-content: center;
    top: 0;
    right: 0;
    width: 100%;
    padding: 1rem;
    background-color: transparent;
    transition: background-color 0.3s ease-in-out;
    z-index: 1000;
  }

  .mobile-nav {
    justify-content: center;
    background-color: #ff903f;
    height: 100vh;
    position: absolute;
    transition: top 0.3s ease-in-out;
    left: 0;
    right: 0;
    z-index: 9999;
  }

  .burger {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    cursor: pointer;
  }

  .burger span {
    width: 25px;
    height: 3px;
    margin-left: auto;
    background-color: white;
  }

  .mobile-nav ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 0;
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-size: 15px;
  }

  .contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 0;
  }

  .img-logo {
    align-content: center;
    margin-top: 1rem;
  }
}

@media screen and (max-width: 768px) {
  .desktop-navbar {
    display: none;
  }

  .burger {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    cursor: pointer;
  }

  .burger span {
    width: 25px;
    height: 3px;
    margin-left: auto;
    background-color: white;
  }
}
</style>
