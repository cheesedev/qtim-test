<template>
  <div class="container main-page">
    <div v-if="paginatedData.length" class="main-page__posts">
      <PostCard v-for="post in paginatedData" :key="`post-${post.id}`" :description="post.description" :id="post.id" :img="post.image"/>
    </div>
    <Loader v-else />
    <Pagination v-if="postData.length > itemsPerPage" :current-page="currentPage" :max-pages="maxPages" @change-page="changePage"/>
  </div>
</template>

<script lang="ts" setup>
import {computed, onMounted} from 'vue';
import { getPosts } from '~/composables/getPosts';
import Pagination from "~/components/catalog/Pagination.vue";
import PostCard from "~/components/catalog/PostCard.vue";
import Loader from "~/components/general/loader.vue";

const { paginateData, paginatedData, postData, currentPage, itemsPerPage, fetchData, isLoading } = getPosts();

const maxPages = computed(() => Math.floor(postData.value.length / itemsPerPage))

const changePage = (page: number) => {
  if (page < 1 || page > Math.ceil(postData.value.length / itemsPerPage)) return;
  currentPage.value = page;
  paginateData();
};

onMounted(() => {
  fetchData();
});
</script>

<style lang="scss" scoped>
  .main-page {
    padding: 120px 0 140px;

    &__posts {
      display: flex;
      flex-wrap: wrap;
      gap: 32px;
    }
  }
</style>
