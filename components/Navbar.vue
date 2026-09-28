<script setup lang="ts">
// Controla a abertura do menu em telas pequenas
const menuAberto = ref(false)

const route = useRoute()

// Fecha o menu sempre que a rota muda
watch(() => route.path, () => {
  menuAberto.value = false
})
</script>

<template>
  <header class="navbar">
    <nav class="navbar__inner" aria-label="Navegação principal">
      <NuxtLink to="/" class="navbar__logo">
        Cadastro de Membros
      </NuxtLink>

      <button
        type="button"
        class="navbar__toggle"
        :aria-expanded="menuAberto"
        aria-controls="menu-principal"
        aria-label="Abrir menu"
        @click="menuAberto = !menuAberto"
      >
        ☰
      </button>

      <ul id="menu-principal" class="navbar__links" :class="{ 'navbar__links--aberto': menuAberto }">
        <li><NuxtLink to="/">Início</NuxtLink></li>
        <li><NuxtLink to="/cadastro">Cadastro</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  position: sticky;
  top: 0;
  z-index: 10;
}

.navbar__inner {
  max-width: 960px;
  margin: 0 auto;
  padding: 0.875rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.navbar__logo {
  font-weight: 700;
  font-size: 1.125rem;
  color: var(--color-primary);
  text-decoration: none;
}

.navbar__toggle {
  display: none;
  background: none;
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  font-size: 1.25rem;
  padding: 0.25rem 0.625rem;
  cursor: pointer;
  color: var(--color-text);
}

.navbar__links {
  list-style: none;
  display: flex;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
}

.navbar__links a {
  display: block;
  padding: 0.5rem 0.875rem;
  border-radius: var(--radius);
  color: var(--color-text);
  text-decoration: none;
  transition: background-color 0.2s;
}

.navbar__links a:hover {
  background: var(--color-bg);
}

/* Classe aplicada automaticamente pelo NuxtLink na rota ativa */
.navbar__links a.router-link-exact-active {
  background: var(--color-primary-soft);
  color: var(--color-primary);
  font-weight: 600;
}

@media (max-width: 600px) {
  .navbar__toggle {
    display: block;
  }

  .navbar__links {
    display: none;
    width: 100%;
    flex-direction: column;
    margin-top: 0.75rem;
  }

  .navbar__links--aberto {
    display: flex;
  }
}
</style>
