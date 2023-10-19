
# Projeto de Gerenciamento de Clientes e Contatos

Este projeto é uma aplicação completa que inclui um frontend em Next.js e um backend em Nest.js, usando o ORM Prisma com um banco de dados MySQL. O objetivo do projeto é fornecer funcionalidades de autenticação, CRUD de clientes e contatos, bem como a capacidade de vincular contatos a clientes.

## Pré-requisitos

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Configuração do Projeto


### 1. Clone o Repositório

Clone o repositório para o seu ambiente de desenvolvimento:

```bash
git clone https://github.com/leozinbranco/cadastro-clientes-contatos
cd cadastro-clientes-contatos
```

### 2. Configuração do Backend

#### Autenticação

O backend requer autenticação usando JWT (JSON Web Tokens). Certifique-se de configurar o arquivo de ambiente `.env` no diretório `backend` com uma chave secreta válida.

```bash
cd backend
cp .env.example .env
# Edite .env para definir a variável de ambiente JWT_SECRET
```

#### Banco de Dados

O backend usa o MySQL com o Prisma como ORM. Certifique-se de que o banco de dados MySQL esteja configurado corretamente. Você pode configurar as variáveis de ambiente no arquivo `.env` do diretório `backend` com as informações do seu banco de dados.

#### Instale as Dependências

No diretório `backend`, instale as dependências:

```bash
npm install
```

#### Execute as Migrações do Prisma

Execute as migrações do Prisma para criar as tabelas no banco de dados:

```bash
npx prisma migrate save --experimental
npx prisma migrate up --experimental
```

#### Inicie o Backend

Inicie o servidor do backend em modo desenvolvimento:

```bash
npm run start:dev
```

### 3. Configuração do Frontend

#### Instale as Dependências

No diretório `frontend`, instale as dependências:

```bash
cd frontend
npm install
```

#### Inicie o Frontend

Inicie o servidor de desenvolvimento do frontend:

```bash
npm run dev
```

## Uso da Aplicação

Agora que o projeto está configurado e em execução, você pode acessar a aplicação no seu navegador.

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend: [http://localhost:8080](http://localhost:8080)

O usuário de teste pode ser acessado com: 
User: usuario-teste
- User: usuario-teste
- Senha: teste123

## Funcionalidades

- **Autenticação**: Todas as rotas do backend requerem autenticação usando JWT.

- **CRUD de Cliente**: O backend oferece operações de criar, ler, atualizar e excluir clientes.

- **CRUD de Contato**: O backend oferece operações de criar, ler, atualizar e excluir contatos.

- **Vínculo Cliente-Contato**: Um cliente pode ter vários contatos vinculados a ele.


## Como Parar a Aplicação

Para parar a aplicação, você pode pressionar `Ctrl+C` nos terminais onde o frontend e o backend estão em execução. Em seguida, você pode parar os contêineres Docker com o seguinte comando na raiz do projeto:

```bash
docker-compose down
```