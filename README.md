# Buscador de CEP

Aplicacao web desenvolvida com HTML5, CSS3 e JavaScript puro para consultar enderecos a partir de um CEP informado pelo usuario. O projeto consome a API publica ViaCEP por meio de requisicoes `GET` e retorna os principais dados do endereco em tempo real.

## Sobre o projeto

O objetivo desta aplicacao e oferecer uma forma simples, rapida e intuitiva de buscar informacoes de endereco a partir de um CEP. A interface foi criada para ser responsiva, clara e facil de usar, enquanto a logica em JavaScript realiza a validacao da entrada, a consulta na API e o tratamento de erros.

## Funcionalidades

- Consulta de CEP usando a API publica ViaCEP
- Exibicao de endereco, bairro, cidade e estado
- Validacao de entrada com aceitacao apenas de numeros
- Mascara automatica no formato `00000-000`
- Mensagens de feedback para carregamento, sucesso e erro
- Tratamento para CEP invalido, inexistente ou falha na requisicao
- Layout responsivo para desktop e mobile

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- ViaCEP REST API

## Estrutura do projeto

```text
CPF/
|-- index.html
|-- styles.css
|-- script.js
`-- README.md
```

## Como executar

1. Baixe ou clone este repositorio.
2. Acesse a pasta do projeto.
3. Abra o arquivo `index.html` no navegador.

## Deploy

Projeto publicado na Vercel:  
`https://buscador-de-cep-app.vercel.app/`

## Como usar

1. Digite um CEP valido no campo de busca.
2. Clique no botao `Buscar CEP`.
3. Visualize os dados retornados pela API.
4. Use o botao `Limpar` para reiniciar a consulta.

## Exemplo de retorno

Ao consultar o CEP `01001-000`, a aplicacao pode exibir:

- Endereco: Praca da Se
- Bairro: Se
- Cidade: Sao Paulo
- Estado: SP

## Tratamento de erros

O projeto exibe mensagens claras para diferentes situacoes:

- Quando o CEP nao possui 8 digitos
- Quando o CEP nao e encontrado pela API
- Quando ocorre falha de conexao ou erro HTTP na requisicao

## Objetivos de aprendizado

Este projeto demonstra pratica em:

- Integracao com APIs REST
- Manipulacao do DOM com JavaScript puro
- Validacao de formularios no front-end
- Tratamento de erros e feedback visual ao usuario
- Estruturacao de uma aplicacao web sem uso de frameworks

## Melhorias futuras

- Adicionar historico de consultas
- Permitir copia rapida do endereco encontrado
- Exibir complemento e outras informacoes retornadas pela API
- Publicar o projeto em um servico de hospedagem

## Autor

Desenvolvido por Marcio.
