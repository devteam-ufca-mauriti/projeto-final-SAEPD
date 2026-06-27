# SAEPD - Sistema de Acompanhamento Escolar para Pais e Docentes

[![Tecnologias](https://img.shields.io/badge/Stack-Poliglota-blue.svg)](#-tecnologias-utilizadas)
[![MVP](https://img.shields.io/badge/Status-MVP%20Web-green.svg)](#)

Repositório centralizado contendo o modelo arquitetural e a implementação do MVP Web do projeto **SAEPD**, desenvolvido para a disciplina de Projeto Integrado III. 

---

## 🗺️ Visão Geral da Arquitetura e do Projeto

O **SAEPD** foi concebido para mitigar o progressivo distanciamento entre a rotina escolar dos alunos e o acompanhamento diário por parte de seus responsáveis legais. Através de uma plataforma web integrada, o sistema elimina as falhas de comunicação tradicionais, permitindo o lançamento ágil de dados pedagógicos e a visualização imediata por parte da família.

O sistema provê uma plataforma unificada que conecta três perfis essenciais por meio de painéis de controle dinâmicos e focados na experiência do usuário:
* **Administrador:** Gestão macro e cadastros base (turmas, professores, alunos e pais).
* **Professor:** Módulo operacional para lançamento diário de notas, frequências e intercorrências.
* **Pais/Responsáveis:** Visualização transparente e em tempo real dos relatórios de desempenho, médias e canais de avisos.

A aplicação opera sob um modelo de **Arquitetura Desacoplada (Decoupled)**. A interface gráfica (Frontend) é totalmente isolada da lógica de negócios (Backend), comunicando-se estritamente por requisições estruturadas (APIs RESTful), garantindo maior segurança e facilidade de manutenção.

---

## 🏗️ Modelo Arquitetural do MVP

A aplicação foi estruturada seguindo o padrão de **Arquitetura em Camadas (Layered Architecture)**, priorizando o total desacoplamento entre a interface de apresentação, lógica de negócio e persistência.

```text
┌────────────────────────────────────────────────────────────┐
│              Camada de Apresentação (Frontend)             │
│        HTML5 / CSS3 / JavaScript (DOM) ➔ React.js         │
└─────────────────────────────┬──────────────────────────────┘
                              │  Requisições HTTP (REST / JSON)
                              ▼
┌───────────────────────────────────────────────────────────┐
│               Camada de Negócios (Backend)                │
│    Java (API Principal / Regras)  &  Python (Serviços)    │
└─────────────────────────────┬─────────────────────────────┘
                              │  Driver JDBC / Psycopg2
                              ▼
┌───────────────────────────────────────────────────────────┐
│               Camada de Dados (Persistência)              │
│       PostgreSQL (Ambiente Conteinerizado via Docker)     │
└───────────────────────────────────────────────────────────┘

### 💻 Tecnologias Utilizadas

* **Frontend:** `HTML5` | `CSS3` | `JavaScript (DOM)` | `React.js`
* **Backend:** `Java` (Core Transacional e Regras de Negócio OO) | `Python` (Relatórios e Scripts Rápidos)
* **Banco de Dados & Infra:** `PostgreSQL` (Banco de Dados Relacional) | `Docker` (Conteinerização e Portabilidade)

---

## 🧠 Componente Extensionista: O que é Arquitetura de Software?

A arquitetura de software representa a estrutura organizacional macro de um sistema computacional. Ela define não apenas blocos de código isolados, mas dita como os componentes principais da aplicação se dividem, se comunicam, compartilham dados e operam de forma integrada. Planejar a arquitetura significa estruturar fundações técnicas sólidas capazes de suportar alterações e demandas de uso de forma previsível ao longo do tempo.

A importância de uma arquitetura limpa e bem planejada reflete-se diretamente na longevidade do projeto através dos seguintes atributos de qualidade:

* **Escalabilidade:** Permite ao sistema expandir sua capacidade operacional e absorver um volume crescente de novos alunos, turmas e escolas sem gargalos ou degradação de desempenho.

* **Segurança:** Estrutura barreiras centralizadas e middlewares robustos de validação de dados para proteger os registros acadêmicos e limitar acessos estritamente por regras de perfil.

* **Desempenho e Manutenibilidade:** Divide o ecossistema em partes isoladas e com responsabilidades únicas. Isso garante que correções de bugs em tabelas de notas ou adições de novas telas ocorram de forma cirúrgica, sem gerar efeitos cascata nocivos no código.

---
⚡ *2026 SAEPD - Desenvolvido pela Equipe do Grupo 23 - Todos os direitos reservados.*