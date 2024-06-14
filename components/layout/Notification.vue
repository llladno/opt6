<script setup lang="ts">

</script>

<template>
  <div class="notification">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/variables';
.notification {
  position: fixed;
  top: 60px;
  right: 0;
  padding: 10px 15px;
  animation: show forwards;
  animation-duration: 3s;
  box-shadow: 0px 0px 20px 0px #0000001F;
  border-radius: 10px;
  color: variables.$text-accent-color;
  font-weight: 600;
}

@keyframes show {
  0% {
    right: -300px;
  }
  25% {
    right: 0;
  }
  75% {
    right: 0;
  }
  100%{
    right: -300px;
  }
}
</style>