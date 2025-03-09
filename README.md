# BoraAí - Sistema de Caronas Compartilhadas

<br />

<div align="center">
    <img src="https://ik.imagekit.io/czhooyc3x/BoraA%C3%AD/BORA%20AI.svg?updatedAt=1741553452499" title="BoraAí Logo" width="50%"/>
</div>


<br /><br />

## 1. Descrição

O **BoraAí** é um **Frontend** desenvolvido com o **Vite** e o **React** para consumir a API de um sistema de caronas compartilhadas, contendo três entidades principais: `Veiculo`, `Usuario` e `Viagem`. O Back-end da aplicação foi desenvolvida utilizando o Framework **NestJS**.

<br/>

A aplicação permite o gerenciamento das entidades citadas anteriormente, além do cadastro, listagem, atualização e deleção de viagens e veículos. Como proposta desafio do projeto, dado o valor da distância do percurso e velocidade média, deve ser calculado a duração da viagem. Essas informações serão mostradas em formato de cards na página **Viagens**.

---

## 2. Recursos

1. **CRUD de Viagens**: o sistema permite o cadastro, consulta, atualização e deleção de viagens (página "Viagens");

<br/>

2. **CRUD de Veículos**: o sistema permite o cadastro, consulta, atualização e deleção de veículos (página "Veículos").

---

## 3. Protótipo e Capturas de Tela

<br />

<div align="center">
    <img src="https://ik.imagekit.io/czhooyc3x/BoraA%C3%AD/BoraA%C3%AD.gif?updatedAt=1741554625458" title="Telas - BoraAí" width="50%"/>
</div>

<br />

<a href="https://imgur.com/vK8ulM5"><img src="https://i.imgur.com/vK8ulM5.png" title="source: imgur.com" width="3%"/></a> ***[Protótipo desenvolvido no Figma](https://www.figma.com/design/vlxVMfgzXDxwXgLf8P5gyP/BoraA%C3%AD?node-id=0-1&p=f&t=yF1uPH1DPOWpMXps-0)***

---

## 4. Tecnologias

| Item                         | Descrição  |
| ---------------------------- | ---------- |
| **Servidor**                 | Node JS    |
| **Linguagem de programação** | TypeScript |
| **Biblioteca**               | React JS   |
| **Build**                    | Vite       |
| **Framework de Estilização** | Tailwind   |

---

## 5. Pré-requisitos

Antes de iniciar, certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (v16+)
- [yarn](https://yarnpkg.com/)
- API NestJS API NestJS ([Repositório da API](link do repositório da api))

---

## 6. Configuração e Execução

1. Clone o repositório do Projeto
2. Instale as dependências: `yarn`
3. Clone o repositório do Projeto Backend: [Link](https://github.com/Projeto-Integrador-G4-JS06/nest-ride-app)
4. Siga as instruções de **Configuração e Execução** descritas no README do Projeto Back-end
5. Adicione o endereço de execução do projeto na variável de ambiente **VITE_API_URL**, no projeto React
6. Execute o Projeto React: `yarn dev`
7. A aplicação React estará disponível no endereço: `http://localhost:5173`

---

## 7. Estrutura do Projeto

```plaintext
src/
│
├── components/       # Componentes reutilizáveis
├── contexts/         # Gerenciamento de estado global (ex: autenticação)
├── models/           # Estrutura de dados da aplicação-
├── pages/            # Páginas da aplicação
├── services/         # Integração com a API (requisições HTTP)
├── utils/            # Funções auxiliares (alerts)
└── App.tsx           # Componente principal da aplicação
```

---

## 8. Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch com a sua feature (`git checkout -b minha-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Faça um push para a branch (`git push origin minha-feature`)
5. Abra um Pull Request