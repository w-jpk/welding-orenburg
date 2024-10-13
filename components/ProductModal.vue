<template>
  <div class="modal-overlay" @click="closeModal">
    <div class="modal" @click.stop>
      <div class="modal-content">
        <img :src="product.image" alt="Product Image" class="product-image" />
        <div class="product-details">
          <h2>{{ product.name }}</h2>
          <span class="product-price">{{ product.price }}</span>

          <button @click="contactSeller" class="contact-button">
            Связаться
          </button>

          <p class="product-description-title">Описание:</p>
          <p class="product-description">{{ product.description }}</p>
        </div>
        <button class="close-button" @click="closeModal">✖</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
    isVisible: Boolean,
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    contact() {
      alert("Связаться с продавцом!");
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background-color: white;
  border-radius: 8px;
  width: 80%;
  max-width: 1000px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  position: relative;
}

.modal-content {
  display: flex;
  padding: 20px;
}

.product-image {
  height: auto;
  max-width: 100%;
  border-radius: 8px;
  object-fit: cover;
}

.product-details {
  flex-grow: 1;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
}

.product-price {
  font-size: 1.5em;
  margin: 10px 0;
}

.contact-button {
  margin-top: 30px;
  padding: 10px 20px;
  background-color: #ff903f;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

.product-description-title {
  font-weight: bold;
  margin-top: 40px;
}

.product-description {
  margin-top: 5px;
  font-size: 15px;
  color: #333;
}
</style>
