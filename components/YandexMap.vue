<template>
  <div>
    <div ref="map" :style="{ width: '800px', height: '450px' }"></div>
  </div>
</template>

<script>
export default {
  name: "YandexMap",
  props: {
    center: {
      type: Array,
      default: () => [55.751574, 37.573856], // Центр карты по умолчанию — Москва
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
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      if (process.client && window.ymaps) {
        ymaps.ready(() => {
          const map = new ymaps.Map(this.$refs.map, {
            center: this.center,
            zoom: this.zoom,
            controls: ["zoomControl", "fullscreenControl"],
          });

          const placemark = new ymaps.Placemark(
            this.marker,
            {
              balloonContent: this.markerTitle,
            },
            {
              preset: "islands#icon",
              iconColor: "#0095b6",
            }
          );

          map.geoObjects.add(placemark);
        });
      }
    },
  },
};
</script>

<style scoped>
/* Стили для карты */
</style>
