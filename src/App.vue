<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h1>Notiz-App</h1>
    <nav>
      <RouterLink to="/">Start</RouterLink> |
      <RouterLink to="/about">Über</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>
