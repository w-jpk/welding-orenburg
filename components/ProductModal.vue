<template>
  <div class="modal-overlay" @click.self="close">
    <div class="modal-content horizontal">
      <button class="modal-close" @click="close">&times;</button>
      <div class="modal-image-col">
        <img :src="product.image" :alt="product.name" class="modal-image" />
      </div>
      <div class="modal-info-col">
        <div class="modal-info">
          <h2>{{ product.name }}</h2>
          <p class="modal-price">{{ product.price }}</p>
          <p class="modal-description">{{ product.description }}</p>
          <a :href="'tel:+79228293974'" class="modal-action">Заказать</a>
        </div>
      </div>
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
    isVisible: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["close"],
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(34,34,34,0.82);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  animation: fadeIn 0.18s;
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.modal-content.horizontal {
  display: flex;
  flex-direction: row;
  background: #232323;
  border-radius: 20px;
  max-width: 1200px;
  width: 98vw;
  min-height: 520px;
  position: relative;
  box-shadow: 0 8px 40px rgba(0,0,0,0.25);
  animation: modalIn 0.22s;
  overflow: hidden;
}
@keyframes modalIn {
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
.modal-image-col {
  flex: 1 1 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #191919;
  min-width: 0;
}
.modal-image {
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 520px;
  object-fit: cover;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}
.modal-info-col {
  flex: 1 1 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0.5rem;
  min-width: 0;
}
.modal-info {
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.modal-info h2 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: #fff;
  text-align: left;
}
.modal-price {
  color: #ff903f;
  font-weight: 600;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  text-align: left;
}
.modal-description {
  color: #bdbdbd;
  font-size: 1.05rem;
  margin-bottom: 1.2rem;
  line-height: 1.6;
  word-break: break-word;
  max-height: 180px;
  overflow-y: auto;
  text-align: left;
  width: 100%;
  padding-right: 0.5rem;
}
.modal-action {
  display: inline-block;
  background: #ff903f;
  color: #fff;
  border-radius: 8px;
  padding: 0.8rem 2.2rem;
  font-weight: 700;
  text-decoration: none;
  font-size: 1.1rem;
  box-shadow: 0 2px 8px rgba(255,144,63,0.12);
  transition: background 0.18s, box-shadow 0.18s;
  margin-top: 1rem;
}
.modal-action:hover {
  background: #ff6b00;
  box-shadow: 0 4px 16px rgba(255,144,63,0.18);
}
.modal-action::before {
  content: '\1F4DE';
  margin-right: 0.5em;
  font-size: 1.1em;
}
.modal-close {
  position: absolute;
  top: 1.1rem;
  right: 1.1rem;
  background: rgba(35,35,35,0.85);
  border: none;
  font-size: 2.2rem;
  color: #ff903f;
  cursor: pointer;
  transition: color 0.18s, background 0.18s;
  z-index: 2;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-close:hover { color: #fff; background: #ff903f22; }
@media (max-width: 1400px) {
  .modal-content.horizontal {
    max-width: 98vw;
  }
  .modal-image-col {
    flex: 0 0 320px;
  }
  .modal-image {
    max-height: 360px;
  }
}
@media (max-width: 1100px) {
  .modal-content.horizontal {
    max-width: 98vw;
  }
  .modal-image-col {
    flex: 1 1 0;
  }
  .modal-image {
    max-height: 260px;
  }
}
@media (max-width: 900px) {
  .modal-content.horizontal {
    flex-direction: column;
    min-height: unset;
  }
  .modal-image-col {
    flex: unset;
    width: 100%;
    height: 180px;
  }
  .modal-image {
    border-radius: 20px 20px 0 0;
    max-height: 180px;
  }
  .modal-info-col {
    padding: 1.2rem 0.7rem;
  }
}
</style>
