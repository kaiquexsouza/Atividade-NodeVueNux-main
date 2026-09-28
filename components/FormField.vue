<script setup lang="ts">
// Envolve um campo do formulário com label e mensagem de erro,
// evitando repetir essa estrutura em todos os campos.
defineProps<{
  id: string
  label: string
  error?: string
}>()
</script>

<template>
  <div class="field" :class="{ 'field--erro': error }">
    <label :for="id" class="field__label">{{ label }}</label>

    <!-- O input/select/textarea é passado pelo componente pai -->
    <slot />

    <p v-if="error" :id="`${id}-erro`" class="field__erro" role="alert">
      {{ error }}
    </p>
  </div>
</template>
