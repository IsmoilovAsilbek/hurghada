<script setup>
import NavBar from "@/components/NavBar.vue";
import HeaderContent from "@/components/HeaderContent.vue";
</script>

<template>
  <header class="header">
    <NavBar/>
    <HeaderContent/>
  </header>
</template>

<style scoped>
.header {
  position: relative;
  display: flex;
  flex-direction: column;
  font-family: "Outfit", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
}
</style>