# Projeto Nuxt - Cadastro de Membros

## Descrição

Aplicação web acadêmica desenvolvida para a disciplina de Desenvolvimento Web. O objetivo é demonstrar conceitos fundamentais de Vue.js e Nuxt: estrutura de projetos Nuxt, roteamento baseado em arquivos, Composition API, reatividade com `ref`/`reactive`/`computed`, two-way binding com `v-model`, componentização, formulários com validação e responsividade.

O cadastro é apenas demonstrativo: não há backend, banco de dados ou API externa. Os dados enviados são exibidos na página e no console do navegador.

## Tecnologias

- Node.js
- Nuxt 3
- Vue 3
- TypeScript

## Estrutura

```
├── assets/css/main.css         # Estilos globais
├── components/
│   ├── Navbar.vue              # Barra de navegação responsiva (NuxtLink)
│   ├── FormField.vue           # Label + campo + mensagem de erro
│   └── FormCheckboxGroup.vue   # Grupo de checkboxes com v-model (defineModel)
├── layouts/default.vue         # Layout padrão com a navbar
├── pages/
│   ├── index.vue               # Página inicial (rota /)
│   └── cadastro.vue            # Formulário de cadastro (rota /cadastro)
├── types/cadastro.ts           # Interface CadastroForm
├── app.vue
└── nuxt.config.ts
```

## Instalação

Com o Node.js instalado, execute na pasta do projeto:

```bash
npm install
```

## Executar o projeto

```bash
npm run dev
```

A aplicação estará disponível em:

http://localhost:3000

## Funcionalidades

- Página inicial
- Navegação entre páginas
- Formulário de cadastro
- Validação
- Reatividade
- Feedback de sucesso
- Responsividade
