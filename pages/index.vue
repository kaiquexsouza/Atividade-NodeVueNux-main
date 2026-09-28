<script setup lang="ts">
useHead({ title: 'Início | Projeto Nuxt - Cadastro de Membros' })
</script>

<template>
  <section class="card hero">
    <h1>Projeto Nuxt - Cadastro de Membros</h1>
    <p class="hero__descricao">
      Aplicação desenvolvida para demonstrar conceitos fundamentais de Vue.js e Nuxt,
      incluindo reatividade, componentização, roteamento e formulários.
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
