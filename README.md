# Controle de Estoque

## Descrição
Este é um projeto de controle de estoque que visa facilitar o gerenciamento de inventário de produtos. O sistema está bastante inicial, mas o objetivo é que ele evolua para permitir o acompanhamento de produtos, quantidade em estoque, fornecedores e muito mais.

## Funcionalidades
- [ ] **Cadastro de Produtos:** Permite adicionar informações detalhadas sobre produtos, incluindo nome, categoria, preço, quantidade em estoque e fornecedor.
- [ ] **Consulta de Estoque:** Os usuários podem verificar o status atual do estoque, incluindo a quantidade disponível de cada produto.
- [ ] **Gerenciamento de Fornecedores:** Registra informações de contato e detalhes sobre os fornecedores.
- [ ] **Relatórios de Estoque:** Gera relatórios detalhados sobre o estoque, incluindo itens com baixo estoque, itens mais vendidos, etc.
- [ ] **Histórico de Movimentação:** Registra todas as entradas e saídas de produtos, facilitando o rastreamento de alterações no estoque.
- [ ] **Autenticação de Usuários:** Apenas usuários autorizados podem acessar e modificar informações no sistema.
- [ ] **Interface Amigável:** Design intuitivo e fácil de usar para facilitar a navegação e o uso.

## Tecnologias Utilizadas
- **DB Diagram:** Ferramenta online gratuita para desenhar diagramas de relacionamento entre entidades escrevendo código. Utiliza MySQL e o phpMyAdmin como SGBD. Toda a modelagem desse projeto será realizada no https://dbdiagram.io/. Armazena, portanto, informações de produtos, estoque e fornecedores.
- **Figma:** Editor online baseado em nuvem usado no desenvolvimento do protótipo do design de interface de usuário (UI) e design de experiência de usuário (UX).
- **HTML/CSS:** Para criar e estilizar a interface do usuário.
- **JavaScript:** Utilizado tanto no lado do servidor (Node.js) quanto no lado do cliente para a lógica e interatividade.
- **Node.js:** Utilizado para desenvolver a lógica do servidor.
- **Node-RED:** Plataforma de desenvolvimento de código aberto usada para conectar dispositivos, APIs e serviços de maneira visual e interativa pelo uso de blocos chamados de "nós" (nodes).
- **Trello:** Aplicativo com foco em gerenciamento de projetos em um formato de quadro virtual onde optamos por utilizar a metodologia Kanban como forma primária de organização.

## Dependências
- [Express.js:](https://expressjs.com/) Framework Node.js para criar APIs RESTful.
- [Cors:](https://www.npmjs.com/package/cors) Middleware utilizado em aplicativos Node.js para lidar com os erros de CORS (Cross-Origin Resource Sharing).

## Como Usar
1. Clone o repositório.
2. Instale as dependências com `npm install`.
<!-- 3. Configure as variáveis de ambiente para a conexão com o banco de dados. -->
4. Inicie o servidor com `npm start`.
5. Acesse o aplicativo em seu navegador.

---
