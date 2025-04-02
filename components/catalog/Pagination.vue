<template>
  <div class="pagination">
    <div class="pagination__button prev" v-if="showPrev" @click="handlePageChange(currentPage - 1)">
      <img src="~/assets/icons/arrow.svg" alt="prev">
    </div>
    <div :class="['pagination__button', {'active': index === currentPage}]" v-for="index in shownPages" :key="`page-button-${index}`" @click="handlePageChange(index)">
      {{ index }}
    </div>
    <div class="pagination__button" v-if="showNext" @click="handlePageChange(currentPage + 1)">
      <img src="~/assets/icons/arrow.svg" alt="prev">
    </div>
  </div>
</template>

<script setup lang="ts">
  import {computed} from "vue";

  interface Props {
    currentPage: number
    maxPages: number;
  }

  const props = defineProps<Props>();
  const emit = defineEmits<{
    (event: 'changePage', value: number): void;
  }>();

  const shownPages = computed(() => {
    const { maxPages, currentPage } = props;
    const range = Math.min(5, maxPages);

    if (maxPages <= 5) {
      return Array.from({ length: maxPages }, (_, i) => i + 1);
    } else if (currentPage <= 3) {
      return Array.from({ length: range }, (_, i) => i + 1);
    } else if (currentPage >= maxPages - 2) {
      return Array.from({ length: range }, (_, i) => maxPages - range + 1 + i);
    } else {
      return Array.from({ length: range }, (_, i) => currentPage - 2 + i);
    }
  });

  const showPrev = computed(() => props.currentPage > 1);
  const showNext = computed(() => props.currentPage < props.maxPages);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= props.maxPages) {
      emit('changePage', page);
    }
  }
</script>

<style lang="scss" scoped>
  .pagination {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 50px;

    &__button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 44px;
      height: 44px;
      gap: 10px;
      border-radius: 12px;
      padding: 11px 17px;
      background: $light-gray;
      color: $black;
      cursor: pointer;
      user-select: none;

      &:hover {
        background: $gray;
      }

      &.active {
        background: $black;
        color: $white;

        &:hover {
          background: $dark-gray;
        }
      }

      &.prev {
        & img {
          transform: rotate(180deg);
        }
      }
    }
  }
</style>
