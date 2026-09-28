<script setup lang="ts">
import type { CadastroErrors, CadastroForm } from '~/types/cadastro'

useHead({ title: 'Cadastro | Projeto Nuxt - Cadastro de Membros' })

const BIO_MAX = 300

const cursos = [
  'Engenharia de Software',
  'Ciência da Computação',
  'Sistemas de Informação',
  'Análise e Desenvolvimento de Sistemas',
  'Design',
  'Outra'
]

const semestres = [
  '1º Semestre',
  '2º Semestre',
  '3º Semestre',
  '4º Semestre',
  '5º Semestre',
  '6º Semestre',
  '7º Semestre',
  '8º Semestre',
  'Outro'
]

const opcoesInteresses = [
  'Front-end',
  'Back-end',
  'Mobile',
  'UI/UX',
  'Banco de Dados',
  'DevOps',
  'Inteligência Artificial'
]

// Estado reativo do formulário (ligado aos campos via v-model)
const form = reactive<CadastroForm>({
  nome: '',
  email: '',
  curso: '',
  semestre: '',
  interesses: [],
  bio: ''
})

// Mensagens de erro de cada campo
const errors = reactive<CadastroErrors>({})

// Indica se o cadastro foi concluído com sucesso
const submitted = ref(false)

// Indica se o usuário já tentou enviar (a partir daí a validação acontece em tempo real)
const tentouEnviar = ref(false)

// Cópia dos dados enviados, exibida após o formulário ser limpo
const dadosEnviados = ref<CadastroForm | null>(null)

// Contador de caracteres da bio, atualizado automaticamente
const bioCaracteres = computed(() => form.bio.length)

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validateForm(): boolean {
  // Limpa os erros anteriores
  for (const campo of Object.keys(errors) as (keyof CadastroForm)[]) {
    delete errors[campo]
  }

  if (!form.nome.trim()) {
    errors.nome = 'Nome é obrigatório.'
  }

  if (!form.email.trim()) {
    errors.email = 'E-mail é obrigatório.'
  } else if (!EMAIL_REGEX.test(form.email.trim())) {
    errors.email = 'Digite um e-mail válido.'
  }

  if (!form.curso) {
    errors.curso = 'Selecione um curso.'
  }

  if (!form.semestre) {
    errors.semestre = 'Selecione um semestre.'
  }

  if (form.interesses.length === 0) {
    errors.interesses = 'Selecione pelo menos uma habilidade.'
  }

  if (!form.bio.trim()) {
    errors.bio = 'Digite uma breve descrição.'
  } else if (form.bio.length > BIO_MAX) {
    errors.bio = `A descrição deve ter no máximo ${BIO_MAX} caracteres.`
  }

  return Object.keys(errors).length === 0
}

// Depois da primeira tentativa de envio, revalida a cada alteração dos campos
watch(form, () => {
  if (tentouEnviar.value) {
    validateForm()
  }
})

function resetForm() {
  form.nome = ''
  form.email = ''
  form.curso = ''
  form.semestre = ''
  form.interesses = []
  form.bio = ''
  tentouEnviar.value = false
}

function handleSubmit() {
  tentouEnviar.value = true
  submitted.value = false

  if (!validateForm()) {
    return
  }

  // Cópia simples dos dados (o array é copiado para não ser afetado pela limpeza)
  const dados: CadastroForm = { ...form, interesses: [...form.interesses] }

  console.log('Dados cadastrados:', dados)

  dadosEnviados.value = dados
  submitted.value = true
  resetForm()
}

function novoCadastro() {
  submitted.value = false
  dadosEnviados.value = null
}
</script>

<template>
  <div class="cadastro">
    <header class="cadastro__cabecalho">
      <h1>Cadastro de Membros</h1>
      <p class="texto-suave">Preencha os campos abaixo. Todos os campos são obrigatórios.</p>
    </header>

    <!-- Feedback de sucesso -->
    <section v-if="submitted && dadosEnviados" class="card sucesso" role="status">
      <h2>Cadastro realizado com sucesso!</h2>
      <p>Confira os dados enviados (também disponíveis no console do navegador):</p>

      <dl class="resumo">
        <dt>Nome</dt>
        <dd>{{ dadosEnviados.nome }}</dd>
        <dt>E-mail</dt>
        <dd>{{ dadosEnviados.email }}</dd>
        <dt>Curso</dt>
        <dd>{{ dadosEnviados.curso }}</dd>
        <dt>Semestre</dt>
        <dd>{{ dadosEnviados.semestre }}</dd>
        <dt>Interesses</dt>
        <dd>{{ dadosEnviados.interesses.join(', ') }}</dd>
        <dt>Bio</dt>
        <dd>{{ dadosEnviados.bio }}</dd>
      </dl>

      <button type="button" class="btn btn--secundario" @click="novoCadastro">
        Fazer novo cadastro
      </button>
    </section>

    <!-- Formulário -->
    <form v-else class="card formulario" novalidate @submit.prevent="handleSubmit">
      <div class="formulario__grid">
        <FormField id="nome" label="Nome completo" :error="errors.nome">
          <input
            id="nome"
            v-model="form.nome"
            type="text"
            name="nome"
            placeholder="Ex.: Maria da Silva"
            autocomplete="name"
            :aria-invalid="!!errors.nome"
            :aria-describedby="errors.nome ? 'nome-erro' : undefined"
          />
        </FormField>

        <FormField id="email" label="E-mail" :error="errors.email">
          <input
            id="email"
            v-model="form.email"
            type="email"
            name="email"
            placeholder="Ex.: maria@email.com"
            autocomplete="email"
            :aria-invalid="!!errors.email"
            :aria-describedby="errors.email ? 'email-erro' : undefined"
          />
        </FormField>

        <FormField id="curso" label="Curso / Área de atuação" :error="errors.curso">
          <select
            id="curso"
            v-model="form.curso"
            name="curso"
            :aria-invalid="!!errors.curso"
            :aria-describedby="errors.curso ? 'curso-erro' : undefined"
          >
            <option value="" disabled>Selecione um curso</option>
            <option v-for="curso in cursos" :key="curso" :value="curso">{{ curso }}</option>
          </select>
        </FormField>

        <FormField id="semestre" label="Semestre / Período" :error="errors.semestre">
          <select
            id="semestre"
            v-model="form.semestre"
            name="semestre"
            :aria-invalid="!!errors.semestre"
            :aria-describedby="errors.semestre ? 'semestre-erro' : undefined"
          >
            <option value="" disabled>Selecione o semestre</option>
            <option v-for="semestre in semestres" :key="semestre" :value="semestre">{{ semestre }}</option>
          </select>
        </FormField>
      </div>

      <FormCheckboxGroup
        v-model="form.interesses"
        legend="Interesses / Habilidades"
        name="interesses"
        :options="opcoesInteresses"
        :error="errors.interesses"
      />

      <FormField id="bio" label="Mensagem / Bio curta" :error="errors.bio">
        <textarea
          id="bio"
          v-model="form.bio"
          name="bio"
          rows="5"
          :maxlength="BIO_MAX"
          placeholder="Conte um pouco sobre você..."
          :aria-invalid="!!errors.bio"
          :aria-describedby="errors.bio ? 'bio-erro contador-bio' : 'contador-bio'"
        />
        <p
          id="contador-bio"
          class="contador"
          :class="{ 'contador--limite': bioCaracteres >= BIO_MAX }"
        >
          {{ bioCaracteres }} / {{ BIO_MAX }} caracteres
        </p>
      </FormField>

      <button type="submit" class="btn btn--primario formulario__enviar">
        Cadastrar
      </button>
    </form>

    <!-- Demonstração da reatividade: os valores mudam conforme o usuário digita -->
    <aside v-if="!submitted" class="card preview" aria-label="Pré-visualização dos dados">
      <h2>Pré-visualização (v-model)</h2>
      <pre>{{ form }}</pre>
    </aside>
  </div>
</template>

<style scoped>
.cadastro {
  max-width: 720px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.cadastro__cabecalho h1 {
  margin: 0 0 0.25rem;
}

.cadastro__cabecalho p {
  margin: 0;
}

.formulario {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.formulario__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.formulario__enviar {
  align-self: flex-start;
  min-width: 160px;
}

.contador {
  margin: 0;
  font-size: 0.8125rem;
  color: var(--color-muted);
  text-align: right;
}

.contador--limite {
  color: var(--color-error);
  font-weight: 600;
}

.sucesso {
  border-left: 4px solid var(--color-success);
}

.sucesso h2 {
  margin: 0 0 0.5rem;
  color: var(--color-success);
}

.resumo {
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 0.5rem 1rem;
  margin: 1.25rem 0 1.5rem;
}

.resumo dt {
  font-weight: 600;
}

.resumo dd {
  margin: 0;
  word-break: break-word;
}

.preview h2 {
  margin: 0 0 0.75rem;
  font-size: 1rem;
}

.preview pre {
  margin: 0;
  padding: 1rem;
  background: var(--color-bg);
  border-radius: var(--radius);
  font-size: 0.8125rem;
  overflow-x: auto;
  white-space: pre-wrap;
  word-break: break-word;
}

@media (max-width: 600px) {
  .formulario__grid {
    grid-template-columns: 1fr;
  }

  .formulario__enviar {
    align-self: stretch;
  }

  .resumo {
    grid-template-columns: 1fr;
  }

  .resumo dd {
    margin-bottom: 0.5rem;
  }
}
</style>
