<template>
  <div class="slider">
    <div class="list">
      <div class="item">
        <img src="../assets/prod_1.png" alt="" />
      </div>
      <div class="item">
        <img src="../assets/prod_2.png" alt="" />
      </div>
      <div class="item">
        <img src="../assets/prod_3.png" alt="" />
      </div>
      <div class="item">
        <img src="../assets/prod_1.png" alt="" />
      </div>
      <div class="item">
        <img src="../assets/prod_2.png" alt="" />
      </div>
    </div>
    <div class="buttons">
      <button id="prev"><</button>
      <button id="next">></button>
    </div>
    <ul class="dots">
      <li class="active"></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

let slider = ref(null);
let items = ref([]);
let next = ref(null);
let prev = ref(null);
let dots = ref([]);

let active = ref(0);
let lengthItems = ref(0);
let refreshInterval = ref(null);

onMounted(() => {
  slider.value = document.querySelector(".slider .list");
  items.value = document.querySelectorAll(".slider .list .item");
  next.value = document.getElementById("next");
  prev.value = document.getElementById("prev");
  dots.value = document.querySelectorAll(".slider .dots li");

  lengthItems.value = items.value.length - 1;

  next.value.onclick = () => {
    active.value = active.value + 1 <= lengthItems.value ? active.value + 1 : 0;
    reloadSlider();
  };

  prev.value.onclick = () => {
    active.value = active.value - 1 >= 0 ? active.value - 1 : lengthItems.value;
    reloadSlider();
  };

  refreshInterval.value = setInterval(() => {
    next.value.click();
  }, 3000);

  dots.value.forEach((li, key) => {
    li.addEventListener("click", () => {
      active.value = key;
      reloadSlider();
    });
  });

  window.onresize = () => {
    reloadSlider();
  };
});

function reloadSlider() {
  slider.value.style.left = -items.value[active.value].offsetLeft + "px";

  let last_active_dot = document.querySelector(".slider .dots li.active");
  last_active_dot.classList.remove("active");
  dots.value[active.value].classList.add("active");

  clearInterval(refreshInterval.value);
  refreshInterval.value = setInterval(() => {
    next.value.click();
  }, 3000);
}
</script>

<style>
.slider {
  width: 1200px;
  /* max-width: 100vw; */
  height: 600px;
  /* margin: auto; */
  position: relative;
  overflow: hidden;
}
.slider .list {
  position: absolute;
  width: max-content;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  transition: 1s;
}
.slider .list img {
  width: 1300px;
  max-width: 100vw;
  height: 100%;
  object-fit: cover;
}
.slider .buttons {
  position: absolute;
  top: 45%;
  left: 5%;
  width: 90%;
  display: flex;
  justify-content: space-between;
}
.slider .buttons button {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff5;
  color: #fff;
  border: none;
  font-family: monospace;
  font-weight: bold;
  cursor: pointer;
}
.slider .dots {
  position: absolute;
  bottom: 10px;
  left: 0;
  color: fff;
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}
.slider .dots li {
  list-style: none;
  width: 10px;
  height: 10px;
  background-color: #fac6a0;
  margin: 10px;
  border-radius: 20px;
  transition: 0.5s;
}
.slider .dots li.active {
  width: 30px;
}
@media screen and (max-width: 768px) {
  .slider {
    height: 400px;
  }
}
</style>
