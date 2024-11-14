### Food Explorer - Backend (API)

Este é o backend da aplicação **Food Explorer**, uma API REST criada para gerenciar o banco de dados e autenticação de usuários em um site de restaurante.

### Tecnologias Utilizadas

- **Node.js** com **Express** para a criação de APIs REST.
- **Knex** para consultas ao banco de dados PostgreSQL.
- **PostgreSQL** como banco de dados principal.
- **JWT (JSON Web Token)** para autenticação e autorização.
- **Multer** para upload de imagens.
- **Zod** para validação de dados.
- **PM2** para gerenciamento de processos em produção.

### Funcionalidades Principais

- **Autenticação**: Login com JWT, mantendo a sessão do usuário.
- **Gerenciamento de Pratos**: Criação, atualização, listagem e exclusão de pratos (acesso apenas para o administrador).
- **Upload de Imagens**: Suporte ao upload de imagens dos pratos.
- **Pesquisa de Pratos**: Pesquisa por nome, descrição ou ingredientes.

### Configuração e Execução Local

#### Pré-requisitos

- **Node.js** e **npm** instalados.
- **PostgreSQL** instalado e configurado.
- Configuração de um arquivo `.env.dev` com as variáveis de ambiente.

#### Variáveis de Ambiente

Crie o arquivo `.env.dev` no diretório `/api` com as seguintes variáveis:

```plaintext
PGHOST=localhost
PGUSER=seu_usuario
PGPASSWORD=sua_senha
PGDATABASE=nome_do_banco
PGPORT=5432
JWT_SECRET=sua_chave_secreta
```

#### Instalação

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/huddmax/food-ex.git
   cd food-ex/api
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

#### Executando o Servidor

- **Modo Desenvolvimento**:
  ```bash
  npm run dev
  ```

- **Modo Produção (com PM2)**:
  ```bash
  npm run start:prod
  ```

### Comandos Úteis

- **Rodar Migrations**:
  ```bash
  npm run knex -- migrate:latest
  ```

### Deploy

O backend está hospedado no Render, com o banco de dados PostgreSQL também configurado lá. Para configurar o backend em produção, use o comando:

```bash
npm run start
```
