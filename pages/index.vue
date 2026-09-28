<script setup lang="ts">
useHead({ title: 'Início | Cadastro de Membros' })
</script>

<template>
  <section class="card hero">
    <h1>Cadastro de membros</h1>
    <p class="hero__descricao">
      Aplicação desenvolvida para a atividade web do professor Alison, usando o Vue.js e Nuxt.
    </p>

    <NuxtLink to="/cadastro" class="btn btn--primario">
      Realizar Cadastro
    </NuxtLink>
  </section>
</template>

<style scoped>
.hero {
  text-align: center;
  padding: 3rem 1.5rem;
}

.hero h1 {
  margin: 0 0 1rem;
  font-size: clamp(1.75rem, 4vw, 2.5rem);
}

.hero__descricao {
  max-width: 600px;
  margin: 0 auto 2rem;
  color: var(--color-muted);
  font-size: 1.0625rem;
}
</style>
