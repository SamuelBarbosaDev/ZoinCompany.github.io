<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    required: true
  },
  behance: String,
  modelValue: Boolean
})

const emit = defineEmits(['update:modelValue'])

const current = ref(0)

const close = () => {
  emit('update:modelValue', false)
}

const next = () => {
  current.value = (current.value + 1) % props.images.length
}

const prev = () => {
  current.value =
    (current.value - 1 + props.images.length) % props.images.length
}

watch(
  () => props.modelValue,
  (open) => {
    if (open) current.value = 0
  }
)
</script>

<template>
  <Teleport to="body">
    <div v-if="modelValue" class="lightbox">
      <button class="close" @click="close">×</button>

      <button
        v-if="images.length > 1"
        class="nav prev"
        @click="prev"
      >
        ‹
      </button>

      <img
        class="lightbox-image"
        :src="images[current]"
        alt=""
      />
<!--  -->
      <button
        v-if="images.length > 1"
        class="nav next"
        @click="next"
      >
        ›
      </button>

      <!-- Indicadores -->
      <div v-if="images.length > 1" class="dots">
        <span
          v-for="(img, i) in images"
          :key="i"
          :class="{ active: i === current }"
          @click="current = i"
        />
      </div>

      <a
        v-if="behance"
        :href="behance"
        target="_blank"
        class="behance-link"
      >
        🔗 Ver no Behance
      </a>
    </div>
  </Teleport>
</template>
