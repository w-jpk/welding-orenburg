<template>
  <div class="loading-screen">
    <p class="loading-text">
      <span
        v-for="(char, index) in 'LOADING'"
        :key="index"
        :style="{
          animationDelay: `${index * 0.3}s`,
          opacity: index === 0 ? 1 : 0,
        }"
        >{{ char }}</span
      >
    </p>
  </div>
</template>

<style scoped>
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #262626;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading-text span {
  font-family: "Raleway", sans-serif;
  font-size: 10rem;
  font-weight: 700;
  background-image: url(../assets/prod_2.png);
  background-size: initial;
  background-position: center;
  background-repeat: no-repeat;
  /* background-color: #fac6a0; */
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.loading-text span {
  display: inline-block;
  opacity: 0;
  animation: fadeIn 3s forwards;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
