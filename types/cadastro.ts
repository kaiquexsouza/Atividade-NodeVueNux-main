// Estrutura dos dados do formulário de cadastro
export interface CadastroForm {
  nome: string
  email: string
  curso: string
  semestre: string
  interesses: string[]
  bio: string
}

// Mensagens de erro: cada campo do formulário pode ter (ou não) uma mensagem
export type CadastroErrors = Partial<Record<keyof CadastroForm, string>>
