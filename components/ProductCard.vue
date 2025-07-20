<template>
  <div class="product-card" @click="openModal">
    <img :src="product.image" :alt="product.name" class="product-image" />
    <div class="product-info">
      <h3 class="product-name">{{ product.name }}</h3>
      <p class="product-price">{{ product.price }}</p>
      <p v-if="product.shortDescription" class="product-short">{{ product.shortDescription }}</p>
      <button class="product-more" @click.stop="openModal">Подробнее</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    openModal() {
      this.$emit("open-modal", this.product);
    },
  },
};
</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  background: #232323;
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.10);
  overflow: hidden;
  transition: transform 0.18s, box-shadow 0.18s, border-color 0.18s;
  cursor: pointer;
  border: 1px solid #292929;
  min-width: 260px;
  max-width: 340px;
  margin: 0 auto;
}
.product-card:hover {
  transform: translateY(-8px) scale(1.03);
  box-shadow: 0 8px 32px rgba(255,144,63,0.18);
  border-color: #ff903f;
}
.product-image {
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  background: #191919;
}
.product-info {
  padding: 1.2rem 1.2rem 1.5rem 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background: #232323;
}
.product-name {
  font-size: 1.15rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.2rem;
}
.product-price {
  color: #ff903f;
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 0.2rem;
}
.product-short {
  color: #bdbdbd;
  font-size: 0.97rem;
  margin-bottom: 0.7rem;
  min-height: 2.2em;
}
.product-more {
  align-self: flex-end;
  background: #ff903f;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 0.45rem 1.2rem;
  font-weight: 600;
  cursor: pointer;
  font-size: 0.97rem;
  display: flex;
  align-items: center;
  gap: 0.5em;
  box-shadow: 0 2px 8px rgba(255,144,63,0.08);
  transition: background 0.18s, box-shadow 0.18s;
}
.product-more:hover {
  background: #ff6b00;
  box-shadow: 0 4px 16px rgba(255,144,63,0.18);
}
.product-more::after {
  content: '\2192';
  font-size: 1.1em;
  margin-left: 0.3em;
}
@media (max-width: 600px) {
  .product-card {
    border-radius: 12px;
    max-width: 100%;
  }
  .product-info {
    padding: 0.8rem;
  }
}
</style>
