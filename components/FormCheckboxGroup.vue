<script setup lang="ts">
defineProps<{
  legend: string
  name: string
  options: string[]
  error?: string
}>()

// defineModel cria o two-way binding com o v-model do componente pai
const selecionados = defineModel<string[]>({ required: true })
</script>

<template>
  <fieldset class="field checkbox-group" :class="{ 'field--erro': error }">
    <legend class="field__label">{{ legend }}</legend>

    <div class="checkbox-group__opcoes">
      <label
        v-for="opcao in options"
        :key="opcao"
        class="checkbox-group__item"
      >
        <input
          v-model="selecionados"
          type="checkbox"
          :name="name"
          :value="opcao"
        />
        <span>{{ opcao }}</span>
      </label>
    </div>

    <p v-if="error" class="field__erro" role="alert">{{ error }}</p>
  </fieldset>
</template>

<style scoped>
.checkbox-group {
  border: none;
  padding: 0;
  margin: 0;
}

.checkbox-group__opcoes {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  gap: 0.5rem;
}

.checkbox-group__item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  cursor: pointer;
  transition: border-color 0.2s, background-color 0.2s;
}

.checkbox-group__item:hover {
  border-color: var(--color-primary);
}

.checkbox-group__item:has(input:checked) {
  border-color: var(--color-primary);
  background: var(--color-primary-soft);
}

.checkbox-group__item input {
  accent-color: var(--color-primary);
  width: 1rem;
  height: 1rem;
}
</style>
