<template>
  <div class="spinner" />
</template>

<style lang="scss" scoped>
.spinner {
  width: 65px;
  height: 65px;
  border: 3px solid transparent;
  border-top: 3px solid $purple;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 80px auto 80px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
