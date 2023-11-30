<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="w-full">
    <header>
      <div class="wrapper h-12 bg-blue-800">
        <nav class="w-1/5 mx-auto pt-3.5 flex justify-between text-white font-semibold">
          <RouterLink to="/">CSS Test</RouterLink>
          <RouterLink to="/about">API Test</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />
  </div>
</template>

<style scoped></style>
