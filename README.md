# Task Manager API

API REST para gerenciamento de usuários e tarefas, desenvolvida com Node.js, Express e PostgreSQL.

O projeto foi desenvolvido com foco em desenvolvimento de APIs REST, persistência de dados relacionais, integração com PostgreSQL e organização de uma aplicação backend.

## 🚀 Tecnologias
- Node.js
- Express
- TypeScript
- PostgreSQL
- pg
- dotenv
- Faker.js
- Git & GitHub

## 📋 Funcionalidades

- Criar, listar, atualizar e excluir usuários
- Criar, listar, atualizar e excluir tarefas
- Relacionamento entre usuários e tarefas
- Persistência de dados utilizando PostgreSQL
- Validação de dados
- Tratamento de erros
- Variáveis de ambiente para configuração da aplicação
- Geração de dados aleatórios para testes

## 🗄️ Banco de Dados

O projeto utiliza PostgreSQL como banco de dados relacional.

### Users
| Campo | Tipo | Descrição |
|---|---|---|
| user_id | INT | Identificador do usuário |
| user_name | VARCHAR(80) | Nome do usuário |
| user_age | INT | Idade do usuário |
| user_email | VARCHAR(80) | E-mail do usuário |

### Tasks

| Campo | Tipo | Descrição |
|---|---|---|
| task_id | INT | Identificador da tarefa |
| task_name | VARCHAR(50) | Nome da tarefa |
| task_description | TEXT | Descrição da tarefa |
| task_priority | VARCHAR(20) | Prioridade da tarefa |
| user_id | INT | Usuário responsável pela tarefa |

A tabela `tasks` possui um relacionamento com `users` através da chave estrangeira `user_id`.

## 🔐 Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
PORT=3000

DB_HOST=localhost
DB_PORT=5432
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=task_manager
``` 

## 🧪 Testes

O projeto utiliza dados gerados automaticamente para facilitar os testes da API.

Os scripts de seed utilizam Faker.js para gerar usuários e tarefas fictícios.

## 👨‍💻 Autor

**Vinícius Marinho**

Desenvolvedor em formação com foco em desenvolvimento Backend e Full Stack.

Tecnologias de interesse:

`JavaScript` `TypeScript` `Node.js` `Express` `PostgreSQL` `React`