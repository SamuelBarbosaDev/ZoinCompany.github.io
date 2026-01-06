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
    <div class="gallery-project-description">
        <p class="title">project.title</p>
        <p class="year">project.year</p>
        <p class="description"></p>
    </div>
    <img :src="project.image[0]" :alt="project.title" />
    <Lightbox
      v-model="open"
      :images="project.image"
      :behance="project.behance"
    />
  </div>
</template>
