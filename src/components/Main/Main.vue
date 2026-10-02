<script setup>
import Adventure from "@/components/Main/Adventure.vue";
import News from "@/components/Main/News.vue";
</script>

<template>
  <main class="main">
    <Adventure/>
    <News/>
  </main>
</template>

<style scoped>
.main {
  background: #fbf7ef;
  font-family: "Outfit", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
}
</style>