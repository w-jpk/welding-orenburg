<template>
  <div>
    <Navbar />
    <div
      class="home Top__background--withImage"
      style="
        background-image: url(&quot;https://sun7-19.userapi.com/impf/a7CcJ2uCqjxT9LJ87queofull_tWrgFa2mawZg/JZXkuUa4vAk.jpg?size=2560x0&quality=90&sign=ba7fcba6466c8c19ab1e2beb2bdac1f2&quot;);
      ">
      <h1 class="Top__content">
        <span class="Top__header">СВАРКА АРГОНОМ | ОРЕНБУРГ</span>
      </h1>
      <h2 class="Top__descWrap">
        <span class="Top__desc">
          Сварка аргоном в Оренбурге. TIG сварка. <br />
          Выполняем сварочные работы из алюминия, нержавеющей стали<br />
          и других цветных металлов.
        </span>
      </h2>
      <button class="Top__button">Позвонить</button>
      <div class="slider-container">
        <Slider />
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script setup>
import Navbar from "~/components/Navbar.vue";
import Slider from "~/components/Slider.vue";
</script>

<style lang="scss" scoped>
.home {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: $tertiary;
  height: 100dvh;
  width: 100%;
  position: relative;
}

.Top__background--withImage::before {
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
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.48) 0,
    rgba(0, 0, 0, 0.64) 100%
  );
}

.Top__content {
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
}

.Top__descWrap {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  text-align: center;
  line-height: 1.4;
  font-size: 15px;
}

.Top__header {
  padding: 0 0 16px;
  margin: 0 auto;
  max-width: 789px;
  font-size: calc(var(--custom_font_size_offset, 0) + 44px);
  text-align: center;
}

.Top__button {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translateX(-50%);
  color: black;
  text-align: center;
  font-size: 16px;
  width: 200px;
  height: 45px;
  border-radius: 10px;
  cursor: pointer;
  border: 5px white solid;
  background-color: white;

  &:hover {
    background-color: whitesmoke;
    border-color: whitesmoke;
  }
}

.slider-container {
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer {
  background-color: white;
  height: 100dvh;
  width: 100%;
}
</style>
