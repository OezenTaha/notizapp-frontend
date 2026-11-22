<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Note {
  id: number
  title: string
  content: string
  createdAt: string
}

const notes = ref<Note[]>([])

onMounted(async () => {
  const res = await fetch(`${import.meta.env.VITE_BACKEND_BASE_URL}/notes`)
  notes.value = await res.json()
})
</script>

<template>
  <ul>
    <li v-for="note in notes" :key="note.id">
      <strong>{{ note.title }}</strong>: {{ note.content }}
    </li>
  </ul>
</template>
