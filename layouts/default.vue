<template>
  <div class="layout">
    <Navbar />

    <main class="container">
      <slot />
    </main>

    <footer class="footer">
      Atividade prática · Node.js, Vue.js e Nuxt
    </footer>
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.container {
  flex: 1;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.footer {
  text-align: center;
  padding: 1.25rem 1rem;
  font-size: 0.875rem;
  color: var(--color-muted);
  border-top: 1px solid var(--color-border);
}
</style>
