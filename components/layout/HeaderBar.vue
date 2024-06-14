<script setup lang="ts">
import Logo from '@/assets/icons/Logo.svg'

const sidebar = ref(false)
</script>

<template>
  <header>
    <nav class="container">
      <div>
        <NuxtLink to="/"><img :src="Logo"></NuxtLink>
        <NuxtLink to="/tariffs">Тарифы</NuxtLink>
        <NuxtLink to="/contacts">Контакты</NuxtLink>
      </div>
      <div class="navigation__button" @click="sidebar = !sidebar">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M20.75 7C20.75 7.41421 20.4142 7.75 20 7.75L4 7.75C3.58579 7.75 3.25 7.41421 3.25 7C3.25 6.58579 3.58579 6.25 4 6.25L20 6.25C20.4142 6.25 20.75 6.58579 20.75 7Z"
                  fill="#ffffff"></path>
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M20.75 12C20.75 12.4142 20.4142 12.75 20 12.75L4 12.75C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25L20 11.25C20.4142 11.25 20.75 11.5858 20.75 12Z"
                  fill="#ffffff"></path>
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M20.75 17C20.75 17.4142 20.4142 17.75 20 17.75L4 17.75C3.58579 17.75 3.25 17.4142 3.25 17C3.25 16.5858 3.58579 16.25 4 16.25L20 16.25C20.4142 16.25 20.75 16.5858 20.75 17Z"
                  fill="#ffffff"></path>
          </g>
        </svg>
      </div>
      <div :class="'navigation__right ' + (sidebar ? 'active' : '')">
        <div class="navigation__button close" @click="sidebar = !sidebar">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M20.75 7C20.75 7.41421 20.4142 7.75 20 7.75L4 7.75C3.58579 7.75 3.25 7.41421 3.25 7C3.25 6.58579 3.58579 6.25 4 6.25L20 6.25C20.4142 6.25 20.75 6.58579 20.75 7Z"
                    fill="#ffffff"></path>
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M20.75 12C20.75 12.4142 20.4142 12.75 20 12.75L4 12.75C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25L20 11.25C20.4142 11.25 20.75 11.5858 20.75 12Z"
                    fill="#ffffff"></path>
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M20.75 17C20.75 17.4142 20.4142 17.75 20 17.75L4 17.75C3.58579 17.75 3.25 17.4142 3.25 17C3.25 16.5858 3.58579 16.25 4 16.25L20 16.25C20.4142 16.25 20.75 16.5858 20.75 17Z"
                    fill="#ffffff"></path>
            </g>
          </svg>
        </div>
        <NuxtLink to="tel:+7 495 118-44-22"><b>+7 495 118-44-22</b></NuxtLink>
        <NuxtLink to="/login">Вход</NuxtLink>
        <NuxtLink to="/signup">
          <CommonOButton style="font-size: 15px">Регистрация</CommonOButton>
        </NuxtLink>
      </div>

    </nav>
  </header>
</template>

<style scoped lang="scss">
@use "@/assets/variables";

header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background: variables.$gradient-color;

  nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    & div {
      height: 100%;
      display: flex;
      align-items: center;
      gap: 30px;

      a {
        display: flex;
        align-items: center;
      }
    }

    @media (max-width: 800px) {
      .navigation__button {
        display: block;
        width: 30px;
        height: 30px;
        cursor: pointer;
      }

      .navigation__right {
        display: flex;
        flex-direction: column;
        position: fixed;
        padding-top: 20px;
        top: 0;
        right: 0;
        bottom: 0;
        width: 170px;
        height: 100vh;
        background: white;
        z-index: 10;
        transform: translateX(100%);
        transition: 0.3s;

        .navigation__button{
          background: variables.$gradient-color;
        }

        a{
          color: black;
        }

        &.active {
          transform: translateX(0);
        }
      }
    }
  }

}
</style>