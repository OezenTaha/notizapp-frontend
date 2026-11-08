<script setup lang="ts">
import { ref } from 'vue'

interface Note {
  id: number
  title: string
  content: string
}

const notes = ref<Note[]>([
  { id: 1, title: 'Einkaufen', content: 'Milch, Brot, Eier' },
  { id: 2, title: 'WebTech', content: 'Milestone 2 abgeben' },
])
</script>

<template>
  <ul>
    <li v-for="note in notes" :key="note.id">
      <strong>{{ note.title }}</strong>: {{ note.content }}
    </li>
  </ul>
</template>
