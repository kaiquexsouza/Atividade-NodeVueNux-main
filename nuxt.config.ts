// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'pt-BR' },
      title: 'Projeto Nuxt - Cadastro de Membros',
      meta: [
        { name: 'description', content: 'Aplicação acadêmica de cadastro de membros com Nuxt 3, Vue 3 e TypeScript.' }
      ]
    }
  }
})
