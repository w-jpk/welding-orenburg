<template>
  <div class="modal-overlay" @click="closeModal">
    <div class="modal" @click.stop>
      <div class="modal-content">
        <img :src="product.image" alt="Product Image" class="product-image" />
        <div class="product-details">
          <div>
            <h2>{{ product.name }}</h2>
            <span class="product-price">{{ product.price }}</span>
          </div>
          <div>
            <button @click="contact" class="contact-button">Связаться</button>
          </div>
        </div>
        <p class="product-description-title">Описание:</p>
        <p class="product-description">{{ product.description }}</p>
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
      alert("Связаться с продавцов");
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
  max-width: 90vh;
  padding: 5px;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: auto;
  max-height: 80vh;
  scrollbar-width: none;
}

.modal-content {
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.product-image {
  height: auto;
  max-width: 100%;
  border-radius: 8px;
  object-fit: cover;
}

.product-details {
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: default;
}

.product-price {
  font-size: 1.5em;
}

.contact-button {
  padding: 10px 20px;
  background-color: #ff903f;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  align-self: flex-end;
}

.close-button {
  position: absolute;
  top: 0px;
  right: 5px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

.product-description-title {
  font-weight: bold;
  margin-top: 40px;
  cursor: default;
}

.product-description {
  font-size: 15px;
  color: #333;
  cursor: default;
}
</style>
