<script setup lang="ts">

import OInput from "~/components/common/OInput.vue";
</script>

<template>
<div class="login">
  <div class="login__from">
    <h2>Логин</h2>
    <CommonOInput>Почта</CommonOInput>
    <CommonOInput>Пароль</CommonOInput>
    <CommonOButton>Войти</CommonOButton>
  </div>
</div>
</template>

<style scoped lang="scss">
.login{
  width: 400px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .login__from{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}
</style>