# Convite Digital - Template Moderno

Este é um projeto de site de convite digital moderno e elegante, desenvolvido para oferecer uma experiência interativa e sofisticada aos convidados. O projeto funciona como um template flexível, permitindo apresentar os detalhes do evento e gerenciar confirmações de presença (RSVP) de forma simples e eficiente.

## 🚀 Tecnologias Utilizadas

*   **[Nuxt 3](https://nuxt.com/):** Framework Vue.js híbrido para alta performance e desenvolvimento ágil.
*   **[Vue.js 3](https://vuejs.org/):** Construção reativa da interface de usuário.
*   **[Tailwind CSS](https://tailwindcss.com/):** Estilização utilitária, responsiva e moderna.
*   **[TypeScript](https://www.typescriptlang.org/):** Maior segurança e tipagem no código.
*   **[EmailJS](https://www.emailjs.com/):** Serviço para envio de confirmações de presença diretamente do frontend.
*   **Google Maps Embed:** Integração visual para localização.

## ✨ Funcionalidades Principais

*   **Design Premium:** Layout responsivo com tema visual personalizável (atualmente configurado em tons de azul/sky).
*   **Experiência Interativa:** Animações em Canvas (efeito de fogos de artifício) e transições suaves de entrada.
*   **Seções Informativas:** Áreas dedicadas para destacar data, hora, localização e mensagens especiais.
*   **Gestão de RSVP:** Formulário de confirmação integrado que envia os dados (nome e mensagem) diretamente para o email do organizador.
*   **Feedback de Sucesso:** Exibição de mensagem de agradecimento personalizada apòs o envio do formulário.

## 🛠️ Como Executar o Projeto

### Pré-requisitos

*   [Node.js](https://nodejs.org/) (v16+).

### Instalação

1.  Clone o repositório.
2.  Instale as dependências:

```bash
npm install
```

### Configuração do RSVP (EmailJS)

Para ativar o formulário de confirmação, configure suas credenciais no arquivo `app/app.vue`:

```typescript
const EMAILJS_SERVICE_ID = 'SEU_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'SEU_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = 'SUA_PUBLIC_KEY'
```

### Comandos Disponíveis

*   **Desenvolvimento:** `npm run dev` (Inicia o servidor local em `http://localhost:3000`)
*   **Build:** `npm run build` (Gera a versão otimizada para produção)
*   **Preview:** `npm run preview` (Visualiza o build localmente)

## 📝 Estrutura de Arquivos

A arquitetura do projeto foi refatorada para seguir as melhores práticas de componentização e separação de responsabilidades:

*   **`composables/`**: Contém a lógica de negócios reutilizável (Pattern Composable).
    *   `useEmailService.ts`: Encapsula a integração com o EmailJS, gerenciando estado de loading e erros.
*   **`components/`**: Componentes de UI isolados (Single Responsibility).
    *   `TheHero.vue`: Cabeçalho com animação de entrada.
    *   `TheFireworks.vue`: Lógica complexa de animação em Canvas isolada.
    *   `TheRsvp.vue`: Formulário de confirmação que consome o composable de email.
    *   `TheDetails.vue`, `TheMap.vue`, `TheAbout.vue`, `TheFooter.vue`.
*   **`app/app.vue`**: Ponto de entrada limpo, atuando apenas como orquestrador de layout.

---
Um projeto robusto, modular e escalável para celebrar momentos especiais! 🥂
