<template>
  <div v-if="loading"><LoadingScreen /></div>
  <div v-else>
    <mobile-nav-bar />
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
              <h1>{{ banner.subtitle }}</h1>
              <h2 v-html="banner.title"></h2>
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
    <section id="services" class="services-container">
      <h1>Наши услуги</h1>
      <div class="product-layout">
        <div class="main-product">
          <ProductCard :product="mainProduct" @open-modal="showModal" />
        </div>
        <div class="side-products">
          <div class="grid-container">
            <ProductCard
              v-for="(product, index) in sideProducts"
              :key="index"
              :product="product"
              @open-modal="showModal" />
            <ProductModal
              v-if="selectedProduct"
              :product="selectedProduct"
              :isVisible="isModalVisible"
              :style="{ zIndex: 1000 }"
              @close="hideModal" />
          </div>
        </div>
      </div>
    </section>
    <section id="works">
      <div class="works-title"><h1>Наши работы</h1></div>
      <div class="gallary-container">
        <PhotoGrid />
      </div>
    </section>
    <section id="about-us" class="about-us">
      <h1>О нас</h1>
      <div class="about-us-content">
        <AboutUsSlider />
      </div>
    </section>
    <section id="contact-us" class="contact-us">
      <h1>Контакты</h1>
      <div class="contact-us-content">
        <div class="contact-us-map">
          <YandexMap
            :center="[51.766025, 55.140745]"
            :zoom="16"
            :marker="[51.766025, 55.140745]"
            markerTitle="Сварка в Оренбурге" />
        </div>
        <div class="contact-us-info">
          <p>
            <strong>Адрес:</strong> г. Оренбург, район Ленинский, мкр.
            Форштадт.​
          </p>
          <p><strong>Телефон:</strong> +7 (922) 829-39-74</p>
          <p><strong>Часы работы:</strong> Пн-Пт 09:00 - 18:00</p>
        </div>
      </div>
    </section>
    <section id="footer">
      <p class="footer-text">
        Copyright &#169; 2024
        <a href="https://github.com/w-jpk" class="footer-link">W-JPK</a>. All
        Rights Reserved.
      </p>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import ProductCard from "~/components/ProductCard.vue";
import YandexMap from "~/components/YandexMap.vue";
import LoadingScreen from "~/components/LoadingScreen.vue";
import { onNuxtReady } from "#app";
import ProductModal from "~/components/ProductModal.vue";
import PhotoGrid from "~/components/PhotoGrid.vue";
import AboutUsSlider from "~/components/AboutUsSlider.vue";
import { useMyServicesStore } from "~/stores/services";

const selectedProduct = ref(null);
const isModalVisible = ref(false);

const showModal = (product) => {
  selectedProduct.value = product;
  isModalVisible.value = true;
  document.body.style.overflow = "hidden";
};

const hideModal = () => {
  isModalVisible.value = false;
  selectedProduct.value = null;
  document.body.style.overflow = "";
};

const loading = ref(true);

onNuxtReady(() => {
  loading.value = false;
});

const currentBanner = ref(1);

const mainProduct = useMyServicesStore().mainProduct;
const sideProducts = useMyServicesStore().sideProducts;

const banners = useMyBannersStore().banners;

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
  min-height: 100vh;
  color: #fff;
  background-color: #222;
  background-image: url(../assets/welding.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

#section-1 .content-slider {
  position: relative;
  width: 100%;
  height: 100vh;
}

#section-1 .content-slider input {
  display: none;
}
#section-1 .content-slider .slider {
  position: relative;
  width: inherit;
  min-height: 100dvh;
  overflow: hidden;
  margin: 0 auto;
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
  min-height: 100dvh;
  padding-top: 6em;
  margin: 0 auto;

  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  content: "";
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
  display: flex;
  justify-content: center;
  align-items: center;
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
  color: #ff6b00;
  border-color: #ff6b00;
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
  color: #fac6a0;
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
  background: #fac6a0;
  z-index: 100;
}
#section-1 .content-slider nav .controls label .progressbar .progressbar-fill {
  position: inherit;
  width: inherit;
  height: inherit;
  margin-left: -100%;
  background: #ff6b00;
}
#section-1 .content-slider nav .controls label span {
  font-size: 1.4em;
  font-weight: 700;
}
#section-1 .content-slider nav .controls label:hover {
  color: #ff6b00;
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
  background-color: #262626;

  h1 {
    padding: 5rem 0 0 5rem;
  }
}

.services-container {
  display: flex;
  flex-direction: column;
}

.product-layout {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 3rem;
}

.side-products {
  width: 530px;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.product-card {
  width: 100%;
}

#works {
  height: 100dvh;
  width: 100%;
  background-color: #262626;
  display: flex;
  flex-direction: column;

  h1 {
    padding: 5rem 0 0 5rem;
  }
}

.gallary-container {
  // margin-left: 3rem;
  // margin-right: 3rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
}

#about-us {
  max-height: 100vh;
  width: 100%;
  background-color: #262626;

  h1 {
    padding: 5rem 0 0 5rem;
  }
}
.about-us-content {
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 100vh;
}

.about-us-text {
  flex: 1;
  padding-right: 2rem;

  h2 {
    color: white;
    font-size: 2rem;
  }

  p {
    color: white;
    font-size: 1.2rem;
    margin-top: 1rem;
  }

  a {
    color: white;
    font-size: 1.2rem;
    margin-top: 1rem;
  }
}

.about-us-image {
  flex: 1;
  display: flex;
  justify-content: center;
}

.about-us-image img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

#contact-us {
  height: 90dvh;
  width: 100%;
  background-color: #262626;

  h1 {
    padding: 5rem 0 0 5rem;
  }
}

.contact-us-content {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0 5rem;
  margin-top: 5rem;
}

.contact-us-map {
  flex: 1;
  margin-right: 2rem;
}

.contact-us-info {
  flex: 1;
}

.contact-us-info h2 {
  margin-bottom: 1rem;
}

.contact-us-info p {
  margin-bottom: 0.5rem;
}

#footer {
  width: 100%;
  background-color: #262626;
  height: 4vh;
}

.footer-text {
  font-size: 0.9rem;
  color: #fff;
  text-align: center;
}

.footer-text .footer-link {
  color: #ffffff;
  text-decoration: none;
  font-weight: bold;
}

.footer-text .footer-link:hover {
  color: #ff903f;
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
  .product-layout {
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    height: 100%;
    align-items: center;
    gap: 3rem;
  }
  .contact-us-content {
    display: flex;
    flex-direction: column-reverse;
  }
  .contact-us-map {
    flex: 1;
    // margin-right: 2rem;
    height: 100px;
    width: 100px;
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
  .product-layout {
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    height: 100%;
    align-items: center;
    gap: 3rem;
  }
  .contact-us-map {
    flex: 1;
    // margin-right: 2rem;
    height: 100px;
    width: 100px;
  }
}
</style>
