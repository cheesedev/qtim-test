<template>
  <div>
    <Header />

    <main>
      <slot />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Footer from '~/components/general/footer.vue'
import Header from '~/components/general/header.vue'
</script>
