<template>
  <div class="product-card" @click="openModal">
    <img :src="product.image" alt="Product Image" class="product-image" />
    <h2 class="product-name">{{ product.name }}</h2>
    <p class="product-price">{{ product.price }}</p>
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
  background-color: #ccc;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s;
}

.product-card:hover {
  transform: scale(1.05);
}

.product-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
}

.product-name {
  color: #111;
  font-size: 18px;
}

.product-price {
  font-size: 16px;
  color: #28a745;
}
</style>
