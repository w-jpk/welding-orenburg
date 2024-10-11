<template>
    <div class="product-card">
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
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .product-card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    text-align: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  .product-image {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
  }
  
  .product-name {
    font-size: 18px;
    margin: 8px 0;
  }
  
  .product-price {
    font-size: 16px;
    color: #28a745; /* Зелёный цвет для цены */
  }
  </style>
  