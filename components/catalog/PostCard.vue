<template>
  <NuxtLink :to="`post/${id}`" class="post-card">
    <img class="post-card__image" :src="img" :alt="`post-img-${id}`">
    <p class="post-card__description">
      {{description}}
    </p>
  </NuxtLink>
</template>

<script lang="ts" setup>
  defineProps<{id: string, img: string, description: string}>();
</script>

<style lang="scss" scoped>
  .post-card {
    display: flex;
    flex-direction: column;
    gap: 34px;
    width: 280px;
    height: 380px;

    &__image {
      height: 280px;
      object-fit: cover;
    }

    &__description {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
</style>
