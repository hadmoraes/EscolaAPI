# Escola API

> ## Descrição da aplicação

A aplicação é uma API no padrão REST que gerencia e automatiza um banco de dados de uma escola. Para isso, foi utilizado o banco de dados relacional SQLite, o padrão MVC e o padrão DAO na construção do projeto.


<br>
<br>

> ## Tecnologias utilizadas

Para o desenvolvimento da API foi utilizado JavaScript com NodeJS e o framework Express, além do banco de dados relacional SQLite com hospedagem na Heroku.

<br>
<br>

> ## Dependências necessárias

```js
"dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.0.0",
    "express": "^4.17.3",
    "moment": "^2.29.3",
    "path": "^0.12.7",
    "sqlite3": "^5.0.5"
}
```
Todas dependências necessárias estão <a href = 'https://github.com/hadmoraes/EscolaAPI/blob/master/package.json'>neste arquivo</a>. Para fazer um clone do projeto basta copiar o código abaixo usando "Ctrl + c" e em seguida colar no terminal com as telas "Ctrl + Shift + v".

```
git clone https://github.com/hadmoraes/EscolaAPI
```

Em seguida, entre na pasta EscolaAPI utilizando o seguinte comando no terminal:

```
cd EscolaAPI
```

E, por fim, instale todas as dependências necessárias:

```
npm i
```


<br>
<br>

> ## Dependências de desenvolvimento

```js
"devDependencies": {
    "jest": "^28.0.2"
  }
```
Essas são as dependências necessárias apenas para o ambiente de desenvolvimento da aplicação, caso deseje instalar utilize os comandos abaixo em seu terminal logo após o comando das dependências obrigatórias.

```
npm i jest
```

<br>
<br>

> ## Inicialização da aplicação via terminal

Para inicializar a aplicação basta abrir o terminal dentro da pasta do projeto e executar o código abaixo:

```
npm start
```

<br>
<br>


> ## Testes Unitários

Para rodar os testes das validações da aplicação, basta abrir o terminal dentro da pasta do projeto e executar o código abaixo:

```
npm run test
```

<br>
<br>

> ## Observação

A versão NodeJs utilizada para desenvolvimento é a 16.14.2, logo é necessário intalação de versão igual ou superior para a perfeita execução da mesma.

<br>
<br>

> ## Banco de dados

Para construir a API foi necessária a modelagem e construção de um banco de dados. Para isso, utilizamos o site <a href = ' https://dbdiagram.io/home'> DBDiagram </a>  para modelagem de cada entidade e seus respectivos atributos, ilustrados na imagem abaixo.

<img src= ./assets/img/EscolaAPIDB.png width=900>

<br>

As entidades que escolhemos foram Docentes, Alunos, Cursos, Turmas e Boletins, em que cada uma contém uma chave primária única. No caso dos Docentes e Alunos, as chaves primárias são seus respectivos CPFs. Já para Cursos, que se refere à série, o nome do curso já especifica unicamente essa entidade, como por exemplo, sexto ano do ensino fundamental. De forma semelhante, a entidade Turmas também tem como nome um código que já especifica unicamente aquela turma, por exemplo, 601 para a primeira turma do sexto ano, 802 para a segunda turma do oitavo ano, etc. Por fim, a entidade Boletins é identificada através do seu id.

<br>
<br>

> ## Rotas da API

Cada entidade representa uma rota em nossa API. Sendo assim, as rotas disponíveis são:
 
 - "/alunos"
 - "/docentes"
 - "/cursos"
 - "/turmas"
 - "/boletins"

Acesse as rotas através do link abaixo alterando o nome da rota para a desejada:

```
http://api--escola.herokuapp.com + /nome da rota
```

<br>

## Url da API

Estamos utilizando a hospedagem da Heroku, portanto, é possível utilizar o link abaixo em todas as rotas e métodos HTTP:

```
http://api--escola.herokuapp.com
```

<br>

## Alunos

### Ver todos os alunos:

Utilizar o método HTTP Get no caminho: <b>url da api + /alunos</b>
<br>


### Buscar aluno por cpf:

Utilizar o método HTTP Get no caminho: <b>url da api + /alunos/cpf</b>
<br>


### Adicionar aluno:

Utilizar o método HTTP Post no caminho: <b>url da api + /alunos</b>

No corpo da requisição é necessário inserir dados para todos os atributos dessa entidade. Nesse caso são os seguintes campos <em>cpf, nome, email, telefone, data_nascimento.</em>

Especificações dos campos:

- <strong> cpf </strong>: colocar todos os 11 dígitos juntos sem quaisquer separação e entre aspas duplas
- <strong> nome </strong>: deve conter no mínimo 3 caracteres e ser inserido entre aspas duplas
- <strong> email </strong>: deve ser inserido um email válido entre aspas duplas
- <strong> telefone </strong>: deve ser inserido 11 dígitos, DDD seguido do número, sem quaiquer tipo de separação e entre aspas duplas
- <strong> data_nascimento </strong>: deve seguir o padrão DD/MM/AAAA entre aspas duplas

Na imagem abaixo temos um exemplo de requisição Post na rota alunos utilizando Insomnia:

<img src= ./assets/img/alunos_post.png width=800>

<br>


### Alterar um aluno já existente:
Utilizar o método HTTP Put no caminho: <b>url da api + /alunos/cpf</b> 

Insira novamente <em>todos</em> os campos presentes na entidade Alunos, da mesma forma que o método anterior para adicionar um aluno, com as modificações desejadas no corpo da requisição.

Na imagem abaixo temos um exemplo de requisição Put na rota alunos utilizando Insomnia:

<img src= ./assets/img/alunos_put.png width=800>
<br>


### Deletar um aluno:
Utilizar o método HTTP Delete no caminho: <b>url da api + /alunos/cpf</b>

<br>
<br>


## Docentes

### Ver todos os docentes:

Utilizar o método HTTP Get no caminho: <b>url da api + /docentes</b>
<br>


### Buscar docente por cpf:

Utilizar o método HTTP Get no caminho: <b>url da api + /docentes/cpf</b>
<br>


### Adicionar docente:

Utilizar o método HTTP Post no caminho: <b>url da api + /docentes</b> 

No corpo da requisição é necessário inserir dados para todos os atributos dessa entidade. Nesse caso são os seguintes campos <em>cpf, nome, email, telefone, salario, disciplinas.</em>

Especificações dos campos:

- <strong> cpf </strong>: colocar todos os 11 digitos juntos sem quaisquer separação e entre aspas duplas
- <strong> nome </strong>: deve conter no mínimo 3 caracteres e ser inserido entre aspas duplas
- <strong> email </strong>: deve ser inserido um email válido entre aspas duplas
- <strong> telefone </strong>: deve ser inserido 11 dígitos, DDD seguido do número, sem quaiquer tipo de separação e entre aspas duplas
- <strong> salario </strong>: deve ser inserido sem aspas duplas e os centavos separados por ponto, por exemplo, <em> 1500.65 </em>
- <strong> disciplinas </strong>: todas as disciplinas devem ser inseridas separadas por / e entre aspas duplas, por exemplo, <em> "português/literatura/inglês" </em> 

Na imagem abaixo temos um exemplo de requisição Post na rota docentes utilizando Insomnia:

<img src= ./assets/img/docentes_post.png width=800>

<br>


### Alterar um docente já existente:

Utilizar o método HTTP Put no caminho: <b>url da api + /docentes/cpf</b> 

Insira novamente <em>todos</em> os campos presentes na entidade Docentes, da mesma forma que o método anterior para adicionar um docente, com as modificações desejadas no corpo da requisição.

Na imagem abaixo temos um exemplo de requisição Put na rota docentes utilizando Insomnia:

<img src= ./assets/img/docentes_put.png width=800>
<br>


### Deletar um docente:

Utilizar o método HTTP Delete no caminho: <b>url da api+ /docentes/cpf</b>

<br>
<br>



## Cursos

### Ver todos os cursos:

Utilizar o método HTTP Get no caminho: <b>url da api + /cursos</b>
<br>


### Buscar curso por nome:

Utilizar o método HTTP Get no caminho: <b>url da api + /cursos/nome</b>
<br>


### Adicionar um curso:

Utilizar o método HTTP Post no caminho: <b>url da api + /cursos</b> 

No corpo da requisição é necessário inserir dados para todos os atributos dessa entidade. Nesse caso são os seguintes campos <em> nome, carga_horaria, preco.</em>

Especificações dos campos:

- <strong> nome </strong>: se refere as séries presentes nas escola e deve conter no mínimo 3 caracteres e ser inserido entre aspas duplas, por exemplo, <em> "nono ano do ensino fundamental" </em>
- <strong> carga_horaria </strong>: deve ser inserida um número inteiro com a carga horária total em horas de 1 ano letivo para aquela série sem aspas, por exemplo,  <em> 900 </em>
- <strong> preco </strong>: deve ser inserido o valor da mensalidade sem aspas duplas e os centavos separados por ponto, por exemplo, <em> 530.25 </em>

Na imagem abaixo temos um exemplo de requisição Post na rota cursos utilizando Insomnia:

<img src= ./assets/img/cursos_post.png width=800>

<br>

### Alterar um curso já existente:

Utilizar o método HTTP Put no caminho: <b>url da api + /cursos/nome</b> 

Insira novamente <em>todos</em> os campos presentes na entidade Cursos, da mesma forma que o método anterior para adicionar um curso, com as modificações desejadas no corpo da requisição.

Na imagem abaixo temos um exemplo de requisição Put na rota cursos utilizando Insomnia:

<img src= ./assets/img/cursos_put.png width=800>
<br>


### Deletar um curso:

Utilizar o método HTTP Delete no caminho: <b>url da api + /cursos/nome</b>

<br>
<br>


## Turmas

### Ver todos as turmas:

Utilizar o método HTTP Get no caminho: <b>url da api + /turmas</b>
<br>


### Buscar turma por nome:

Utilizar o método HTTP Get no caminho: <b>url da api + /turmas/nome</b>
<br>


### Adicionar uma turma:

Utilizar o método HTTP Post no caminho: <b>url da api + /turmas</b>

No corpo da requisição é necessário inserir dados para todos os atributos dessa entidade. Nesse caso são os seguintes campos <em> nome, curso_nome, data_inicio, data_final, turno.</em>

Especificações dos campos:

- <strong> nome </strong>: deve conter no mínimo 3 caracteres e ser inserido entre aspas duplas, exemplo, <em> "901" </em>
- <strong> curso_nome </strong>: se refere ao atributo nome da entidade Cursos e deve conter no mínimo 3 caracteres e ser inserido entre aspas duplas, por exemplo, <em> "nono ano do ensino fundamental" </em> 
- <strong> data_inicio </strong>: deve seguir o padrão DD/MM/AAAA com aspas duplas
- <strong> data_final </strong>: deve seguir o padrão DD/MM/AAAA com aspas duplas
- <strong> turno </strong>: deve ser inserido com aspas duplas e só são aceitos manhã ou tarde, por exemplo, <em> "manhã" </em>

<b> OBS: </b> todos os campos que fazem referência a um atributo presente em outras entidades devem <em>já existir</em> previamente. Ou seja, não será possível inserir um curso que não exista ainda.

Na imagem abaixo temos um exemplo de requisição Post na rota turmas utilizando Insomnia:

<img src= ./assets/img/turmas_post.png width=800>

<br>

### Alterar uma turma já existente:

Utilizar o método HTTP Put no caminho: <b>url da api + /turmas/nome</b> 

Insira novamente <em>todos</em> os campos presentes na entidade Turmas, da mesma forma que o método anterior para adicionar uma turma, com as modificações desejadas no corpo da requisição.

Na imagem abaixo temos um exemplo de requisição Put na rota turmas utilizando Insomnia:

<img src= ./assets/img/turmas_put.png width=800>
<br>


### Deletar uma turma:

Utilizar o método HTTP Delete no caminho: <b>url da api + /turmas/nome</b>

<br>
<br>


## Boletins

### Ver todos os boletins:

Utilizar o método HTTP Get no caminho: <b>url da api + /boletins</b>
<br>


### Buscar boletim por id:

Utilizar o método HTTP Get no caminho: <b>url da api + /boletins/id</b>
<br>


### Adicionar um boletim:

Utilizar o método HTTP Post no caminho: <b>url da api + /boletins</b>

No corpo da requisição é necessário inserir dados para todos os atributos dessa entidade. Nesse caso são os seguintes campos <em> id, docente_cpf, aluno_cpf, turma_nome, disciplina, nota.</em>

Especificações dos campos:

- <strong> id </strong>: número inteiro que identifica o boletim unicamente. Não é permitido repetição de id, por isso confira antes na rota GET se o id já existe previamente.
- <strong> docente_cpf </strong>: colocar todos os 11 digitos juntos sem quaisquer separação e entre aspas duplas
- <strong> aluno_cpf </strong>: colocar todos os 11 digitos juntos sem quaisquer separação e entre aspas duplas
- <strong> turma_nome </strong>: deve conter no mínimo 3 caracteres e ser inserido entre aspas duplas, exemplo, <em> "901" </em>
- <strong> disciplina </strong>: deve conter no mínimo 3 caracteres e ser inserido entre aspas duplas, exemplo, <em> "matemática" </em>
- <strong> nota </strong>: deve ser inserido o valor da nota sem aspas duplas e a casa decimal separada por ponto, por exemplo, <em> 8.5 </em>


<b> OBS: </b> todos os campos que fazem referência a um atributo presente em outras entidades devem <em>já existir</em> previamente. Ou seja, não será possível inserir um docente, aluno ou turma que não existam ainda.

Na imagem abaixo temos um exemplo de requisição Post na rota boletins utilizando Insomnia:

<img src= ./assets/img/boletins_post.png width=800>

<br>

### Alterar um boletim já existente:

Utilizar o método HTTP Put no caminho: <b>url da api + /boletins/id</b> 

Insira novamente <em>todos</em> os campos presentes na entidade Turmas, da mesma forma que o método anterior para adicionar uma turma, com as modificações desejadas no corpo da requisição.

Na imagem abaixo temos um exemplo de requisição Put na rota boletins utilizando Insomnia:

<img src= ./assets/img/boletins_put.png width=800>
<br>


### Deletar um boletim:

Utilizar o método HTTP Delete no caminho: <b>url da api + /boletins/id</b>

<br>
<br>



> ## Autores
- [Caíque Araújo](https://www.linkedin.com/in/caique-araujo-267b36163/)
- [Hadassa Moraes](https://www.linkedin.com/in/hadassa-moraes-5a6712230/)
- [Hadonias Barbosa](https://www.linkedin.com/in/hadonias-leite-barbosa-5b6b31219/)
- [Luany Oliveira](https://www.linkedin.com/in/luanyboliveira/)
