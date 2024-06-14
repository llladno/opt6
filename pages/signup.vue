<script setup lang="ts">
const data = ref({
  password: '',
  repeatPassword: ''
})

const error = ref(false)


function submit() {
  if (data.value.password !== data.value.repeatPassword && data.value.password.length > 0 && data.value.repeatPassword.length > 0) {
    error.value = true
  }
}
</script>

<template>
  <div class="signup">
    <div class="signup__form">
      <h2>Регистрация</h2>
      <CommonOInput>Почта</CommonOInput>
      <CommonOInput @change="data.password = $event.target.value">Пароль</CommonOInput>
      <CommonOInput @change="data.repeatPassword = $event.target.value">Повторите пароль</CommonOInput>
      <CommonOButton @click="submit">Зарегистрироваться</CommonOButton>
      <p class="error" v-if="error">Пароли не совпадают</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.signup {
  width: 400px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .signup__form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    .error {
      color: red;
    }
  }
}
</style>