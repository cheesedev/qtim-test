<template>
  <header class="header">
    <img src="~/assets/icons/logo.svg" alt="logo" class="header__logo">
    <div class="header__links">
      <NuxtLink href="/" class="header__link">Works</NuxtLink>
      <NuxtLink href="/about" class="header__link">About</NuxtLink>
    </div>
    <div class="header__language">
      <img src="~/assets/icons/uk.svg" alt="uk">
    </div>
    <button class="header__button">
      Let's work
    </button>
  </header>
</template>

<style lang="scss" scoped>
  .header {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 34px 40px;

    &__logo {
      margin-right: auto;
    }

    &__links {
      display: flex;
      align-items: center;
      gap: 58px;
      margin-right: 90px;
    }

    &__language {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 52px;
      height: 52px;
      gap: 10px;
      border-radius: 50%;
      padding: 10px;
      border: $light-gray solid 2px;
      margin-right: 16px;
      cursor: pointer;
    }

    &__button {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 16px 32px;
      border-radius: 32px;
      background: $black;
      color: $white;
      font-size: 20px;
      line-height: 0.8;

      &:hover {
        background: $dark-gray;
      }
    }
  }
</style>
