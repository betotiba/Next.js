# Next.js
Projeto de site com Node js e Next.

O que é Next.
Next é um framework que atribuir mais recursos para o React.

Projeto com Node, NextJs.

SEO - Otimização para buscadores.


Projeto passo a passo
1 - Vamos criar o projeto do zero iniciando com npm init do nod para criar o packet.jons.

***npm init -y

2 - Instalar o React, React-dom e Next.

*** npm install next react react-dom.

No scrypt do packet.jons incluir os comandos conforme a imagem abaixo: 

*dev - Runs next dev to start Next.js in development mode

*build - Runs next build to build the application for production usage

*start - Runs next start to start a Next.js production server

*lint - Runs next lint to set up Next.js' built-in ESLint configuration

![image](https://user-images.githubusercontent.com/26930314/170253194-2b1da762-683b-4594-b766-dfa15c69ade3.png)

# Criando o diretório pages na raiz do projeto
Crie o diretório pages na raiz do projeto e dentro dele o arquivo index.js. Crie uma função como nome Home retornando uma div com seu texto e exporte a função para posterior inclusão conforme a imagem abaixo:

![image](https://user-images.githubusercontent.com/26930314/170253615-97d8bee2-2575-41b8-9514-33257ae84244.png)

### Rodar o projeto.

**** npm run dev. Observe que a index criada já será renderizado por padrão conform a documentação no site : https://nextjs.org/docs/getting-started

### Montando o cabeçalho e criando alguns componentes.

Nesse momento vamos criar um cabeçalho padrão para todo o projeto no site.

  <link rel='icon' href='/favicon.ico' />



1 - Importar o component <Head> e incluir na home conforme a imagem da documentação:
  
  ![image](https://user-images.githubusercontent.com/26930314/170258270-c97dc5ff-8461-4a94-86dc-409ff57989c2.png)
  
  

### Incluindo o favicon:
 
Para incluir o favicon personalizado devemos criar o diretório público onde o acesso não é restrito na raiz do projeto onde podemos buscar o ícone.

    
### Criando páginas.
Para criar as páginas do site no diretório pages conforme a imagem abaixo utilizando a mesma estrutura da página home.

  
![image](https://user-images.githubusercontent.com/26930314/170261511-aac3ee57-f059-4e99-972d-048f3964a7c3.png)

  ### Criando o menu do site.
  
  Vamos evoluir o projeto criando o diretório componentes na raiz do projeto onde estará nosso componentes menu para ser exportado e incluído 
  no site dinamicamente em todas as páginas

  
  ![image](https://user-images.githubusercontent.com/26930314/170262765-dc2af470-834f-497f-b5f0-a72d4e825500.png)

  
  ![image](https://user-images.githubusercontent.com/26930314/170263110-03f43eed-c34a-4cb8-9335-5b05439f2c14.png)

  
  ### Criando links.
  Importar o componente link do Next

  
  ![image](https://user-images.githubusercontent.com/26930314/170263364-beeb4264-14a5-468c-863b-7f73a138238e.png)

  
  ### Incluindo CSS
  Para utilizar o CSS de forma global vamos seguir a documentação do Next.
  
  - criar o arquivo _app.js no diretório pages.
  
  - Criar um arquivo de css. Pode ser criado dentro de um novo diretório styles na raiz do projeto.
  
  - Posteriormente este styles.css deve ser importado em _app.js. Desta forma o estilo é exportado para todo o site conforme a imagem abaixo:

  
  ![image](https://user-images.githubusercontent.com/26930314/170265740-b7dbc64e-9ce7-40b2-a63a-f06fb35a4e09.png)

     ### Utilizando imagens 
  
A partir da versão 10.0 do next temos algumas melhorias para utilizar imagens.
As imagens devem estar dentro do diretório public e podem ser importadas conforme a imagem abaixo:
Para isso devemos importar o componente do next e também podemos postar uma imagem como componente e indicar no scr="{</imgem>}" e nesse caso o atributo ‘alt” é obrigatório.


  
  ![image](https://user-images.githubusercontent.com/26930314/170268090-5a69c4d8-6c1f-47a3-b451-8352bb65babd.png)

  
Agora já temos a possibilidade de melhorar este site com um template da sua escolha.
Poderá criar um componente para o rodapé e importar nas páginas para ficar dinâmico.
Não esqueça de mudar a tela class no html para className para utilizar no Next ou react.

