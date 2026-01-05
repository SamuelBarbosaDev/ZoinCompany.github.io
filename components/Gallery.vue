<script setup>
import projects from '~/data/projects.json'
</script>

<template>
  <section class="gallery" id="gallery">
    <ProjectCard
      v-for="project in projects"
      :key="project.id"
      :project="project"
    />
  </section>
</template>
