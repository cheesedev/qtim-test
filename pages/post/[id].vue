<template>
  <div v-if="post" class="container post-page">
    <h1 class="post-page__title">{{ post.title }}</h1>
    <img class="post-page__image" :src="post.image" :alt="post.title">
    <h1 class="post-page__subtitle">About</h1>
    <p class="post-page__description">{{ post.description }}</p>
  </div>
  <Loader v-else />
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import type Post from "~/types/Post";
import Loader from "~/components/general/loader.vue";

const route = useRoute();
const postId = route.params.id;

const { data: post } = useFetch<Post>(`https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/${postId}`);
</script>

<style lang="scss" scoped>
  .post-page {
    padding: 120px 0 80px;

    &__title {
      font-size: 84px;
      font-weight: 200;
    }

    &__image {
      width: 100%;
      height: 700px;
      object-fit: cover;
      margin-top: 70px;
    }

    &__subtitle {
      font-size: 16px;
      margin-top: 80px;
      font-weight: 200;
    }

    &__description {
      font-size: 36px;
      margin-top: 32px;
    }
  }
</style>
