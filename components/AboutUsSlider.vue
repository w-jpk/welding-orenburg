<template>
  <div class="slider">
    <div class="list">
      <div
        class="item"
        v-for="(slide, index) in slides"
        :key="index"
        :class="{ active: currentSlide === index }">
        <div class="about-us-content">
          <div class="about-us-text">
            <h2>{{ slide.title }}</h2>
            <p>{{ slide.content }}</p>
            <ul v-if="slide.list">
              <li v-for="(item, index) in slide.list" :key="index">
                <a href="">{{ item }}</a>
              </li>
            </ul>
          </div>
          <div class="about-us-image">
            <img :src="slide.image" :alt="slide.title" />
          </div>
        </div>
      </div>
    </div>

    <ul class="dots">
      <li
        v-for="(slide, index) in slides"
        :key="index"
        :class="{ active: index === currentSlide }"
        @click="setActiveSlide(index)"></li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, ref, onUnmounted } from "vue";
import img1 from "~/assets/prod_1.png";
import img2 from "~/assets/prod_2.png";
import img3 from "~/assets/prod_3.png";

const slides = ref([
  {
    title: "Хотите надежное и качественное соединение металла?",
    content: `Я готов выполнить любые сварочные работы:`,
    image: img1,
    list: [
      "- от мелких бытовых задач до крупных промышленных проектов",
      "- от ремoнтa ваших деталей дo изготовления металлоконcтpукций по вaшим чepтeжам.",
    ],
  },
  {
    title: "Я специализируюсь на аргонно-дуговой сварке металлов и сплавов!",
    content: "Почему выбирают меня:",
    image: img2,
    list: [
      "- Короткие сроки исполнения – ваши проекты будут завершены быстрее!",
      "- Качество на высоком уровне – я использую только надежные и проверенные технологии.",
      "- Возможна доставка и выезд на место ремонта – вам не нужно никуда ездить – я приеду к вам!",
      "- Скидки для пенсионеров – забочусь о своих клиентах и делаю жизнь комфортнее!",
      "- Сварщик с образованием.",
    ],
  },
  {
    title:
      "Обеспечиваю высококачественную сварку алюминия, нержавеющей стали, титана, чугуна и черного металла!",
    content: "Ремонт:",
    image: img3,
    list: [
      "- aвтомобильных диcкoв,",
      "- пoддонoв,",
      "- кoрпусoв КПП,",
      "- алюминиевыx тpубок кондиционepа,",
      "- интеpкулеров,",
      "- сваpкa ГБЦ,",
      "- детaлeй мoтoциклoв,",
      "- выхлопных систем автомобиля,",
      "- дистилляторов,",
      "- варочных ёмкостей.",
    ],
  },
  {
    title: "Сварочные услуги под ключ!",
    content: "Сварочные работы:",
    image: img1,
    list: [
      "- велосипедов,",
      "- колясок,",
      "- самокатов,",
      "- бытовых предметов,",
      "- самогонных аппаратов,",
      "- автомобильных запчастей.",
    ],
  },
]);

const currentSlide = ref(0);
let refreshInterval = ref(null);

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length;
};

const setActiveSlide = (index) => {
  currentSlide.value = index;
};

onMounted(() => {
  refreshInterval.value = setInterval(nextSlide, 3000);
  onUnmounted(() => clearInterval(refreshInterval.value));
});
</script>

<style lang="scss" scoped>
.slider {
  width: 1200px;
  height: 600px;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
}
.slider .list {
  position: relative;
  height: 100%;
}
.slider .item {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease;
}
.slider .item.active {
  opacity: 1;
}
.about-us-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  gap: 5rem;
}
.about-us-text {
  width: 50%;
  text-align: justify;
  color: white;

  a {
    text-decoration: none;
    color: white;
  }

  h2 {
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 0.5rem;
  }
}
.about-us-image {
  width: 50%;
}
img {
  width: 100%;
  height: auto;
  border-radius: 1rem;
}

/* Индикаторы слайдов */
.dots {
  position: absolute;
  bottom: 20px; /* Уменьшено расстояние до нижней границы */
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
}
.dots li {
  list-style: none;
  width: 10px;
  height: 10px;
  background-color: #fac6a0;
  margin: 10px;
  border-radius: 20px;
  transition: 0.5s;
  cursor: pointer;
}
.dots li.active {
  width: 30px;
}
</style>
