<template>
  <div>
    <div ref="map" class="yamap"></div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const props = defineProps({
  center: {
    type: Array,
    default: () => [55.751574, 37.573856],
  },
  zoom: {
    type: Number,
    default: 10,
  },
  marker: {
    type: Array,
    default: () => [55.106164, 51.767434],
  },
  markerTitle: {
    type: String,
    default: "Здесь ваша метка",
  },
});

const map = ref(null);

onMounted(() => {
  if (window.ymaps) {
    ymaps.ready(() => {
      const myMap = new ymaps.Map(map.value, {
        center: props.center,
        zoom: props.zoom,
        controls: ["zoomControl", "fullscreenControl"],
      });

      const placemark = new ymaps.Placemark(
        props.marker,
        {
          balloonContent: props.markerTitle,
        },
        {
          preset: "islands#icon",
          iconColor: "#0095b6",
        }
      );

      myMap.geoObjects.add(placemark);
    });
  }
});
</script>

<style scoped>
.yamap {
  margin: 0 auto;
  width: 800px;
  height: 450px;
}
@media screen and (max-width: 768px) {
  .yamap {
    margin-top: 1rem;
    width: 400%;
    height: 400px;
  }
}
@media screen and (max-width: 480px) {
  .yamap {
    margin-top: 1rem;
    width: 300%;
    height: 300px;
  }
}
</style>
