<template>
  <div class="modal-overlay" @click="closeModal">
    <div class="link-social-modal" @click.stop>
      <div class="link-social-text">
        <p>Выберите социальную сеть для связи:</p>
      </div>
      <div class="link-social-icons">
        <div class="telegram">
          <div class="telegram-icon">
            <Icon name="uil:telegram" size="40" style="color: #2aabee" />
          </div>
          <p class="telegram-text">Telegram</p>
        </div>
        <div class="whatsapp">
          <div class="whatsapp-icon">
            <Icon name="uil:whatsapp" size="40" style="color: #60d669" />
          </div>
          <p class="whatsapp-text">Whatsapp</p>
        </div>
        <div class="phone">
          <div class="phone-icon">
            <Icon name="uil:phone" size="40" style="color: gray" />
          </div>
          <p class="phone-text">Phone</p>
        </div>
      </div>
      <button class="close-button" @click="closeModal">✖</button>
    </div>
  </div>
</template>

<script setup>
function closeModal() {
  this.$emit("close");
}
</script>

<style lang="scss" scoped>
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

.link-social-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 322px;
  width: 464px;
  background-color: white;
  border-radius: 4px;
  padding: 20px;
}

.link-social-text {
  margin-bottom: 2rem;
  p {
    color: #111;
    font-size: 18px;
    cursor: default;
  }
}

.link-social-icons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  p {
    cursor: default;
  }

  .telegram {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .telegram-icon {
    display: inline-block;
    background-color: #eaf6ff;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  }

  .telegram-text {
    margin-top: 10px;
    font-size: 14px;
    color: #2aabee;
  }

  .whatsapp {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .whatsapp-icon {
    display: inline-block;
    background-color: #e9fef1;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  }

  .whatsapp-text {
    margin-top: 10px;
    font-size: 14px;
    color: #60d669;
  }

  .phone {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .phone-icon {
    display: inline-block;
    background-color: #b4b4b432;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  }

  .phone-text {
    margin-top: 10px;
    font-size: 14px;
    color: gray;
  }
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
</style>
