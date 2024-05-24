# Github Wiki

## Visão Geral

Este projeto é uma aplicação front-end criada com Vite e React. Ele permite aos usuários buscar repositórios no GitHub, exibindo os resultados em uma lista e permitindo a remoção de itens dessa lista.

- [Projeto no Figma](https://www.figma.com/design/ao0RNS9Qzhc4KADgBMNaPT/Untitled?node-id=0-1&t=OTgbYlgygYIbf4QD-0)

## Estrutura do Projeto

- **src**
  - **components**
    - **ButtonSearch**: Componente de botão para acionar a busca.
    - **Header**: Componente de cabeçalho da aplicação.
    - **Input**: Componente de entrada de texto.
    - **ItemList**: Componente para exibir cada item da lista de repositórios.
  - **services**
    - **api.js**: Serviço para buscar dados do GitHub.
  - **App.js**: Componente principal da aplicação.
  - **style.css**: Arquivo de estilos.

## Funcionalidades

- **Busca de Repositórios**: Os usuários podem digitar o nome do repositório no campo de entrada e clicar no botão "Buscar" para obter informações sobre o repositório no GitHub.
- **Exibição de Repositórios**: Os resultados da busca são exibidos em uma lista, incluindo nome, descrição e link para o repositório no GitHub.
- **Remoção de Repositórios**: Os usuários podem remover repositórios da lista clicando no item correspondente.

## Instalação

1. Clone o repositório:
    ```sh
    git clone https://github.com/yuridiasp/desafio02-github-wiki.git
    ```
2. Navegue até o diretório do projeto:
    ```sh
    cd desafio02-github-wiki
    ```
3. Instale as dependências:
    ```sh
    npm install
    ```
4. Inicie o servidor de desenvolvimento:
    ```sh
    npm run dev
    ```

## Uso

1. Abra o navegador e acesse `http://localhost:5173`.
2. Digite o nome do repositório no campo de entrada.
3. Clique no botão "Buscar" para realizar a pesquisa.
4. Veja os repositórios na lista abaixo do campo de busca.
5. Clique em qualquer item da lista para removê-lo.

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo `LICENSE` para obter mais informações.

<h2 id="author">👨‍💻 Desenvolvedor</h2>

<p>
    <a href="https://github.com/yuridiasp">
        <img
          align=left
          margin=10
          width=80
          src="https://avatars.githubusercontent.com/u/81938754?v=4"
        />
    </a>
      <p>
        <p>&nbsp&nbspYuri Dias<br>
        &nbsp&nbsp&nbsp
    </p>
</p>

<br>

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/yuridiasp/) [![Discord](https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white)](https://discord.com/channels/@yuridiasp/) [![Facebook](https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white)](https://www.facebook.com/yuri.dias.7739/) [![X](https://img.shields.io/badge/X-000?style=for-the-badge&logo=x)](https://x.com/YuriDias_P) [![Instagram](https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/yuridiasp/) [![E-mail](https://img.shields.io/badge/-Email-000?style=for-the-badge&logo=microsoft-outlook&logoColor=007BFF)](mailto:yuristardias@hotmail.com)