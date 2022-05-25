# Next.js
Projeto com Node, ReactJS e NextJs.

O que é Next.
Next é um framework que atribuir mais recursos para o React
Projeto com Node, ReactJS e NextJs.
SEO - Otimização para buscadores.


Projeto passo a passo
1 - Vamos criar o projeto do zero iniciando com npm init do nod para criar o packet.jons.

***npm init -y

2 - Instalar o React, React-dom e Next.

*** npm install next react react-dom.

No scrypt do packet.jons incluir osc omandos conforme a imagem abaixo: 

*dev - Runs next dev to start Next.js in development mode

*build - Runs next build to build the application for production usage

*start - Runs next start to start a Next.js production server

*lint - Runs next lint to set up Next.js' built-in ESLint configuration

![image](https://user-images.githubusercontent.com/26930314/170253194-2b1da762-683b-4594-b766-dfa15c69ade3.png)

# Criando o diretório pages na raiz do projeto
Crie o diretório pages na raiz do crojeto e dentro dele o arquivo index.js. Crie uma fução como nome Home retornando uma div com seu text e exporte a função para posterior inclusão conforme a imagem abaixo:

![image](https://user-images.githubusercontent.com/26930314/170253615-97d8bee2-2575-41b8-9514-33257ae84244.png)

### Rodar o projeto.

**** npm run dev. Observe que a index criada já será renderizado por padrão conform a documentação no site : https://nextjs.org/docs/getting-started

### Montando o cabeçaho e Criando alguns componentes.

Nesse momento vamos criar um cabeçalho padrão para todo o projeto no site.

  <link rel='icon' href='/favicon.ico' />




1 - Importar o component <Head> e incluri na home conforme a imagem da documentação:
  
  ![image](https://user-images.githubusercontent.com/26930314/170258270-c97dc5ff-8461-4a94-86dc-409ff57989c2.png)
  
  

### Incluino o favicon:
 
Para incluir o favicom personalizado devemos criar o diretótio public onde o acesso não é restrito na raiz do projeto onde podemos buscar o icone.
  
  
### Criando as páginas.
Para criar as páginas do site no diretório pages comforme a imagem abaixo utilizando a mesma estrutura da página home.
  
![image](https://user-images.githubusercontent.com/26930314/170261511-aac3ee57-f059-4e99-972d-048f3964a7c3.png)

  
### Criando o menu do site.
  
  Vamos evoluir o prejeto criando o diretório componerntes na raiz do projeto onde estara nosso componentes menu para sex exportado e incluido 
  no site dinamivamente em todas as páginas
  
  ![image](https://user-images.githubusercontent.com/26930314/170262765-dc2af470-834f-497f-b5f0-a72d4e825500.png)

  
  ![image](https://user-images.githubusercontent.com/26930314/170263110-03f43eed-c34a-4cb8-9335-5b05439f2c14.png)

  
  ### Criando links.
  Impotar o componete link do Next
  
  ![image](https://user-images.githubusercontent.com/26930314/170263364-beeb4264-14a5-468c-863b-7f73a138238e.png)

  
    ### Incluindo CSS
  Para utilizar o CSS de foma global vamos eguir a documentação do Next.
  
  - criar o arquivo _app.js no diretório pages.
  
  - Criar uma arquivo de css. Pode ser criado dentro de um novo diretório styles na raiz do projeto.
  
  - Posteriormente este styles.css deve ser importado em _app.js. Desta forma o estilo é exportado pára todo o site conforme a imagem abaixo:
  
  ![image](https://user-images.githubusercontent.com/26930314/170265740-b7dbc64e-9ce7-40b2-a63a-f06fb35a4e09.png)

  
     ### Utilizando imagens 
  A partie da versão 10.0 do next temos algumas melhorias para utiolizar imaagnes.
  As imagesn devem estar dentro do diretório public e podem ser importadas conforme a imagem abaixo:

  ![image](https://user-images.githubusercontent.com/26930314/170268090-5a69c4d8-6c1f-47a3-b451-8352bb65babd.png)

  

