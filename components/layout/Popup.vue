<script setup lang="ts">
defineEmits(['popupChange'])
</script>

<template>
  <div class="popup" @click="()=> $emit('popupChange')">
    <iframe width="750" height="455" src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0">
    </iframe>
  </div>
</template>

<style scoped lang="scss">
.popup{
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.47);
  z-index: 100;

  iframe{
    border: none;
  }
}
</style>