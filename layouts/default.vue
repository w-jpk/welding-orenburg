<template>
  <div>
    <Navbar />
    <section id="section-1">
      <div class="content-slider">
        <input
          v-for="i in 4"
          :key="'banner' + i"
          type="radio"
          :id="'banner' + i"
          class="sec-1-input"
          name="banner"
          v-model="currentBanner"
          :value="i" />
        <div class="slider">
          <div
            v-for="(banner, index) in banners"
            :key="index"
            :id="'top-banner-' + (index + 1)"
            class="banner">
            <div class="banner-inner-wrapper">
              <h2>{{ banner.subtitle }}</h2>
              <h1 v-html="banner.title"></h1>
              <div class="line"></div>
              <div class="learn-more-button">
                <a :href="banner.link">Узнать больше</a>
              </div>
            </div>
          </div>
        </div>
        <nav>
          <div class="controls">
            <label
              v-for="(banner, index) in banners"
              :key="index"
              :for="'banner' + (index + 1)">
              <span class="progressbar">
                <span class="progressbar-fill"></span>
              </span>
              <span>{{ banner.label }}</span>
            </label>
          </div>
        </nav>
      </div>
    </section>
    <section id="services"></section>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import Navbar from "~/components/Navbar.vue";

const currentBanner = ref(1);

const banners = [
  {
    subtitle: "СВАРКА ОРГАНОМ",
    title: "ОРЕНБУРГ",
    link: "#section-2",
    label: "Главная",
  },
  {
    subtitle: "Что мы делаем",
    title: "НИХУЯ",
    link: "#section-4",
    label: "Работы",
  },
  {
    subtitle: "Где мы находимся",
    title: "Мы находимся в Оренбурге",
    link: "#section-6",
    label: "О нас",
  },
  {
    subtitle: "Наши контакты",
    title: "САМ ИЩИ",
    link: "#main-footer",
    label: "Контакты",
  },
];

let bannerTimer;

function bannerSwitcher() {
  currentBanner.value =
    currentBanner.value < banners.length ? currentBanner.value + 1 : 1;
}

onMounted(() => {
  bannerTimer = setInterval(bannerSwitcher, 5000);
});

onBeforeUnmount(() => {
  clearInterval(bannerTimer);
});
</script>

<style lang="scss" scoped>
body {
  margin: 0 auto;
  padding: 0;
  font-size: 16px;
  background: #fff;
}
body section {
  display: block;
}
body h1,
body h2,
body h3,
body h4,
body h5,
body h6,
body ul,
body li {
  margin: 0;
  padding: 0;
}
body h1 {
  font-family: Montserrat, sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  color: white;
}
body h2 {
  font-family: Montserrat, sans-serif;
  font-size: 1.875em;
  font-weight: 700;
  text-transform: uppercase;
}
body h3 {
  font-family: "Kaushan Script", cursive;
  font-size: 1.5em;
  font-weight: 400;
}
body h4 {
  font-family: Montserrat, sans-serif;
  font-size: 0.875em;
  font-weight: 400;
  text-transform: uppercase;
}
body p {
  line-height: 150%;
  font-family: Roboto, sans-serif;
  font-size: 0.9375em;
  color: #999;
}
body li {
  list-style-type: none;
}
body a {
  text-decoration: none;
}

#section-1 {
  width: 100%;
  height: 100vh;
  color: #fff;
  background-color: #222;
  background-image: url(https://sun7-19.userapi.com/impf/a7CcJ2uCqjxT9LJ87queofull_tWrgFa2mawZg/JZXkuUa4vAk.jpg?size=2560x0&quality=90&sign=ba7fcba6466c8c19ab1e2beb2bdac1f2);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
#section-1 .content-slider {
  position: relative;
  width: 100%;
  height: 100%;
}

#section-1 .content-slider input {
  display: none;
}
#section-1 .content-slider .slider {
  position: relative;
  width: inherit;
  height: inherit;
  overflow: hidden;
}
#section-1 .content-slider .slider .banner {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 0;
  width: inherit;
  height: inherit;
  text-align: center;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  transition: all 0.5s ease;
}
#section-1 .content-slider .slider .banner .banner-inner-wrapper {
  height: 100%;
  padding-top: 6em;

  box-sizing: border-box;
  display: block;
  content: "";
  height: 100%;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(0, 0, 0, 0.48)),
    to(rgba(0, 0, 0, 0.64))
  );
}

#section-1 .content-slider .slider .banner .banner-inner-wrapper h2 {
  padding-bottom: 0.3em;
  font-family: "Kaushan Script", cursive;
  font-weight: 400;
  font-size: 2.5em;
  text-transform: none;
}
#section-1 .content-slider .slider .banner .banner-inner-wrapper h1 {
  font-size: 6em;
  line-height: 95%;
}
#section-1 .content-slider .slider .banner .banner-inner-wrapper .line {
  display: block;
  width: 4em;
  height: 0.1875em;
  margin: 2.5em auto;
  background: #fff;
}

#section-1
  .content-slider
  .slider
  .banner
  .banner-inner-wrapper
  .learn-more-button {
  padding-bottom: 5em;
  z-index: 15 !important;
}
#section-1
  .content-slider
  .slider
  .banner
  .banner-inner-wrapper
  .learn-more-button
  a {
  padding: 0.5em 2em;
  text-align: center;
  font-family: Montserrat, sans-serif;
  font-size: 0.875em;
  color: black;
  background-color: white;
  text-transform: uppercase;
  border: 0.1875em solid white;
}
#section-1
  .content-slider
  .slider
  .banner
  .banner-inner-wrapper
  .learn-more-button
  a:hover {
  color: #28a9ff;
  border-color: #28a9ff;
  transition: 0.3s;
}
#section-1 .content-slider .slider #top-banner-1 {
  background: url("https://checkboxes-demo.webdevs.co.ua/images/mogo/banner-1.png")
    no-repeat center center;
  background-size: cover;
}
#section-1 .content-slider .slider #top-banner-2 {
  background: url("https://checkboxes-demo.webdevs.co.ua/images/mogo/banner-2.png")
    no-repeat center center;
  background-size: cover;
}
#section-1 .content-slider .slider #top-banner-3 {
  background: url("https://checkboxes-demo.webdevs.co.ua/images/mogo/banner-3.png")
    no-repeat center center;
  background-size: cover;
}
#section-1 .content-slider .slider #top-banner-4 {
  background: url("https://checkboxes-demo.webdevs.co.ua/images/mogo/banner-4.png")
    no-repeat center center;
  background-size: cover;
}
#section-1 .content-slider nav {
  position: absolute;
  bottom: 0.5em;
  width: 100%;
  z-index: 10;
  text-align: center;
}
#section-1 .content-slider nav .controls {
  display: block;
  width: 70%;
  margin: 0 auto;
  font-family: Montserrat, sans-serif;
  color: #fff;
}
#section-1 .content-slider nav .controls label {
  position: relative;
  display: inline-block;
  width: 20%;
  height: 3.1em;
  overflow: hidden;
  margin: 0 1em;
  padding-top: 1em;
  text-align: left;
  text-transform: uppercase;
  font-family: Montserrat, sans-serif;
  font-size: 1em;
  color: #bae2fd;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.3s;
}
#section-1 .content-slider nav .controls label .progressbar {
  position: absolute;
  top: 0;
  left: 0;
  height: 3px;
  width: 100%;
  background: #bae2fd;
  z-index: 100;
}
#section-1 .content-slider nav .controls label .progressbar .progressbar-fill {
  position: inherit;
  width: inherit;
  height: inherit;
  margin-left: -100%;
  background: #28a9ff;
}
#section-1 .content-slider nav .controls label span {
  font-size: 1.4em;
  font-weight: 700;
}
#section-1 .content-slider nav .controls label:hover {
  color: #28a9ff;
}
#section-1 .content-slider #banner1:checked ~ .slider #top-banner-1,
#section-1 .content-slider #banner2:checked ~ .slider #top-banner-2,
#section-1 .content-slider #banner3:checked ~ .slider #top-banner-3,
#section-1 .content-slider #banner4:checked ~ .slider #top-banner-4 {
  opacity: 1;
  z-index: 1;
}
#section-1 .content-slider #banner1:checked ~ nav label:nth-of-type(1),
#section-1 .content-slider #banner2:checked ~ nav label:nth-of-type(2),
#section-1 .content-slider #banner3:checked ~ nav label:nth-of-type(3),
#section-1 .content-slider #banner4:checked ~ nav label:nth-of-type(4) {
  cursor: default;
  color: #fff;
  transition: all 0.5s;
}
#section-1
  .content-slider
  #banner1:checked
  ~ nav
  label:nth-of-type(1)
  .progressbar,
#section-1
  .content-slider
  #banner2:checked
  ~ nav
  label:nth-of-type(2)
  .progressbar,
#section-1
  .content-slider
  #banner3:checked
  ~ nav
  label:nth-of-type(3)
  .progressbar,
#section-1
  .content-slider
  #banner4:checked
  ~ nav
  label:nth-of-type(4)
  .progressbar {
  background: #fff;
}
#section-1
  .content-slider
  #banner1:checked
  ~ nav
  label:nth-of-type(1)
  .progressbar-fill,
#section-1
  .content-slider
  #banner2:checked
  ~ nav
  label:nth-of-type(2)
  .progressbar-fill,
#section-1
  .content-slider
  #banner3:checked
  ~ nav
  label:nth-of-type(3)
  .progressbar-fill,
#section-1
  .content-slider
  #banner4:checked
  ~ nav
  label:nth-of-type(4)
  .progressbar-fill {
  animation: progressBarFill 5s linear;
}
/* Animations */
@keyframes progressBarFill {
  from {
    margin-left: -100%;
  }
  to {
    margin-left: 0;
  }
}

#services {
  height: 100dvh;
  width: 100%;
}

/* Media Queries */
@media only screen and (min-width: 1920px) {
  body {
    font-size: 22px;
  }
  .main-header .header-wrapper {
    width: 57%;
  }
  #section-1 {
    height: 46em;
  }
  #section-1 .content-slider .slider .banner .banner-inner-wrapper {
    padding-top: 12em;
  }
}
@media only screen and (max-width: 1919px) {
  body {
    font-size: 20px;
  }
  .main-header .header-wrapper {
    width: 60%;
  }
  #section-1 {
    height: 43em;
  }
  #section-1 .content-slider .slider .banner .banner-inner-wrapper {
    padding-top: 11em;
  }
}
@media only screen and (max-width: 1680px) {
  body {
    font-size: 18px;
  }
  .main-header .header-wrapper {
    width: 65%;
  }
  #section-1 {
    height: 40em;
  }
  #section-1 .content-slider .slider .banner .banner-inner-wrapper {
    padding-top: 9em;
  }
}
@media only screen and (max-width: 1366px) {
  body {
    font-size: 16px;
  }
  .main-header .header-wrapper {
    width: 70%;
  }
}
@media only screen and (max-width: 1120px) {
  .main-header .header-wrapper .main-menu li {
    padding: 0.75em 1.4em;
  }
  #section-1 {
    height: 35em;
  }
  #section-1 .content-slider nav {
    bottom: -0.2em;
  }
  #section-1 .content-slider .slider .banner .banner-inner-wrapper {
    padding-top: 7em;
  }
  #section-1 .content-slider .slider .banner .banner-inner-wrapper .line {
    margin: 2em auto;
  }
}
@media only screen and (max-width: 1024px) {
  body {
    font-size: 14px;
  }
  .main-header .header-wrapper .main-menu li {
    padding: 0.75em 1.3em;
  }
  #section-1 .content-slider nav {
    bottom: 0;
  }
  #section-1 .content-slider nav .controls {
    width: 80%;
  }
}
@media only screen and (max-width: 860px) {
  .main-header .header-wrapper .main-menu li {
    padding: 0.75em 0.9em;
  }
  #section-1 {
    height: 29em;
  }
  #section-1 .content-slider nav {
    bottom: -1em;
  }
  #section-1 .content-slider nav .controls {
    width: 90%;
  }
  #section-1 .content-slider .slider .banner .banner-inner-wrapper h2 {
    font-size: 2em;
  }
  #section-1 .content-slider .slider .banner .banner-inner-wrapper h1 {
    font-size: 4.5em;
  }
  #section-1 .content-slider .slider .banner .banner-inner-wrapper {
    padding-top: 5em;
  }
}
@media only screen and (max-width: 768px) {
  .main-header .header-wrapper .main-menu li {
    padding: 0.75em 0.5em;
  }
  #section-1 {
    height: 27em;
  }
  #section-1 .content-slider nav .controls {
    width: 100%;
  }
  #section-1 .content-slider nav .controls label {
    width: 19%;
    font-size: 0.8em;
  }
  #section-1 .content-slider .slider .banner .banner-inner-wrapper .line {
    margin: 1.7em auto;
  }
}
@media only screen and (max-width: 650px) {
  .main-header .header-wrapper {
    width: 95%;
  }
}
@media only screen and (max-width: 480px) {
  .main-header .header-wrapper {
    width: 97%;
  }
  .main-header .header-wrapper .main-logo {
    display: none;
  }
  .main-header .header-wrapper .main-menu li {
    padding: 0.2em 0.3em;
  }
  .main-header .header-wrapper .main-menu li:last-child,
  .main-header .header-wrapper .main-menu li:nth-child(6) {
    padding: 0.2em 0.7em;
  }
  #section-1 {
    height: 26em;
  }
  #section-1 .content-slider nav {
    bottom: -0.5em;
  }
  #section-1 .content-slider nav .controls label {
    width: 40%;
    font-size: 0.7em;
  }
  #section-1 .content-slider .slider .banner .banner-inner-wrapper h2 {
    font-size: 1.5em;
  }
  #section-1 .content-slider .slider .banner .banner-inner-wrapper h1 {
    font-size: 3em;
  }
  #section-1 .content-slider .slider .banner .banner-inner-wrapper .line {
    margin: 1.7em auto;
  }
}
</style>
