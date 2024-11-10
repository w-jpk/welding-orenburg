<template>
  <div class="menu__wrapper">
    <div :class="{ scrolled: isScrolled }" class="menu__bar">
      <NuxtLink to="/" class="logo" title="Logo">
        <div class="img-logo" @click="scrollToTop">
          <img src="../assets/prod_2.png" alt="Logo" />
          <p>Сварка Аргоном | Оренбург</p>
        </div>
      </NuxtLink>
      <img
        class="menu-icon"
        :src="menuIcon"
        title="Burger Menu"
        alt="Burger Menu"
        @click="toggleMenu" />
      <ul
        :class="[
          'navigation',
          {
            'navigation--mobile': isMenuOpen,
            'navigation--mobile--fadeout': isFadingOut,
          },
        ]">
        <li v-for="(item, index) in navItems" :key="index">
          <a>{{ item.text }}</a>
        </li>
      </ul>
      <div class="contact">
        <a href="tel:+79228293974">+7 (922) 829-39-74</a>
        <button @click="call">Позвонить</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import burgerMenu from "../assets/burger-menu.svg";
import close from "../assets/close.svg";

const isMenuOpen = ref(false);
const isFadingOut = ref(false);
const menuIcon = ref(burgerMenu);
const isScrolled = ref(false);

const navItems = ref([
  { text: "Главная", link: "#section-1" },
  { text: "Услуги", link: "#services" },
  { text: "Контакты", link: "#contact-us" },
]);

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

const toggleMenu = () => {
  if (isMenuOpen.value) {
    isFadingOut.value = true;
    setTimeout(() => {
      isMenuOpen.value = false;
      isFadingOut.value = false;
      menuIcon.value = burgerMenu;
    }, 300);
  } else {
    isMenuOpen.value = true;
    menuIcon.value = close;
  }
};

const call = () => {
  window.location.href = "tel:+79228293974";
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

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Poppins, sans-serif;
}

.background {
  display: block;
  width: 100vw;
  height: 100vh;
  opacity: 1;
  z-index: 1;
  background-size: cover;
  background-repeat: no-repeat;
}

.menu__wrapper {
  display: flex;
  position: relative;
  flex-direction: row;
  z-index: 998;
}

.menu__bar {
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 0 1rem;
  gap: 2rem;
  background: #191919;
  height: 4rem;
  opacity: 0.9;
}

.menu__bar.scrolled {
  background-color: #ff903f !important;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  a {
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
  .navigation li a {
    color: black;
    border-bottom: 2px solid transparent;
    transition: all 0.3s ease;
    text-decoration: none;
    font-weight: 500;
    background-image: linear-gradient(to right, white, white 50%, black 50%);
    background-size: 200% 100%;
    background-position: -100%;
    display: inline-block;
    padding: 0.2rem 0;
    position: relative;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.2s ease-in-out;
  }

  .navigation li a:before {
    content: "";
    background: white;
    display: block;
    position: absolute;
    bottom: -0.125rem;
    left: 0;
    width: 0;
    height: 0.125rem;
    transition: all 0.2s ease-in-out;
  }

  .navigation li a:hover {
    background-position: 0;
  }

  .navigation > li > a:hover::before {
    width: 100%;
  }

  .navigation--mobile {
    top: 48px;
    position: absolute;
    right: 0;
    display: flex;
    padding: 5rem 3.5rem;
    min-height: 100%;
    background-color: #ff903f;
    gap: 0.5rem;
    flex-direction: column;
    align-items: flex-start;
    opacity: 0.95;
    animation: fadein 0.3s forwards;
  }
}

.menu-icon {
  cursor: pointer;
  display: flex;
  height: 2rem;
  width: 2rem;
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

.contact {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  // flex: 1;
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

.navigation {
  display: flex;
  flex-direction: row;
  list-style-type: none;
  align-items: center;
  gap: 1.5rem;
  padding: 0;
}

.logo svg {
  width: 2rem;
  height: 2rem;
}

.navigation > li {
  display: flex;
  position: relative;
  cursor: pointer;
  font-size: 1.25rem;
}

.navigation > li > a {
  color: white;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;
  text-decoration: none;
  font-weight: 500;
  background-image: linear-gradient(to right, #ff903f, #ff903f 50%, white 50%);
  background-size: 200% 100%;
  background-position: -100%;
  display: inline-block;
  padding: 0.2rem 0;
  position: relative;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.2s ease-in-out;
}

.navigation > li > a:before {
  content: "";
  background: #ff903f;
  display: block;
  position: absolute;
  bottom: -0.125rem;
  left: 0;
  width: 0;
  height: 0.125rem;
  transition: all 0.2s ease-in-out;
}

.navigation > li > a:hover {
  background-position: 0;
}

.navigation > li > a:hover::before {
  width: 100%;
}

@media (max-width: 990px) {
  .img-logo p {
    display: none;
  }
}

@media (max-width: 1050px) {
  .contact a {
    display: none;
  }
}

@media (min-width: 600px) {
  .menu-icon {
    display: none;
  }
}

@media (max-width: 600px) {
  .navigation {
    display: none;
  }

  .contact {
    display: none;
  }

  .menu-icon {
    display: block;
  }

  .img-logo p {
    display: block;
    font-size: 15px;
  }

  .img-logo img {
    width: 30px;
    height: 30px;
  }

  .navigation--mobile {
    top: 48px;
    position: absolute;
    right: 0;
    display: flex;
    padding: 5rem 3.5rem;
    min-height: 100%;
    background-color: #191919;
    gap: 0.5rem;
    flex-direction: column;
    align-items: flex-start;
    opacity: 0.95;
    animation: fadein 0.3s forwards;
  }

  @keyframes fadein {
    0% {
      opacity: 0;
      width: 0;
      height: 0;
    }

    100% {
      opacity: 1;
      width: 100%;
      height: calc(100vh - 48px);
    }
  }

  .navigation--mobile--fadeout {
    animation: fadeout 300ms forwards;
  }

  @keyframes fadeout {
    0% {
      opacity: 1;
      width: 100%;
      height: calc(100vh - 48px);
    }

    100% {
      opacity: 0;
      width: 0;
      height: 0;
    }
  }
}
</style>
