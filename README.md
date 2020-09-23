# Documentação
Aplicativo que facilita a organização de suas tarefas.

# Dependências do projeto

***Sqlite3:*** Banco de dados utilizado no projeto;<br>
***Express:*** Framework Web estruturado escrito em javascript que roda sobre ambiente Node.js em tempo de execução ;<br>
***Body-parser:*** Módulo para conversão do *body* da requisição para vários formatos;<br>
***Cors:*** Módulo que permite o acesso a recursos restritos na página por outros domínios.<br>

## Instalação das dependências

No terminal do seu editor de texto(ou em algum terminal, com o node.js instalado), para instalar todas as dependências basta digitar *npm install* (serão instaladas as versões das extensões/módulos armazenadas nos arquivos *package.json* e *package-lock.json*)<br>

# Como funciona

O site disponibiliza o armazenamento no banco de dados de tarefas fornecidas pelo usuário. Tudo é realizado através de botões presentes na página principal do site. Ao clicar em um dos botões é feita uma busca pela rota da API associada a tal responsabilidade, e realizada a respectiva operação.<br>

# Rotas

***GET:*** Rota para acesso tradicional à API com o objetivo de fazer acesso ao seu conteúdo (https://localhost:3000);<br>
***POST:*** Utiliza a mesma URI da rota tradicional porém com o verbo HTTP post. É realizada ao clicar no botão de adicionar um novo card de tarefas (https://localhost:3000). As informações preenchidas no card são enviadas através do corpo da requisição;<br>
***DELETE:*** Rota para deleção de um card previamente criado. É recebido um parâmetro através da URI que identifica o id do elemento(banco) a ser removido (https://localhost:3000/id). Esta operação é realizada ao clicar no botão deletar;<br>
***PUT:*** Rota para edição de um card previamente criada. É recebido um parâmetro através da URI do site que identifica o elemento a ser modificado e são recebidas as informações à serem modificadas pelo corpo da requisição (https://localhost:3000/update/id);<br>


