<script setup>
import { ref } from 'vue'
import Lightbox from './Lightbox.vue'

const props = defineProps({
  project: Object
})

const open = ref(false)
</script>

<template>
  <div class="project" @click="open = true">
    <img :src="project.image[0]" :alt="project.title" />
    <Lightbox
      v-model="open"
      :images="project.image"
      :behance="project.behance"
    />
  </div>
</template>
