# AbiFood
Projeto comercial que consiste em um sistema básico de entrega de alimentos. Realização sob orientação de Nélio Alves e Washington Soares na Semana Dev Superior 2.0.

## # Escopo 

* Um pedido contém vários produtos 

* Pedidos terão localização 

## # Requisitos Funcionais 

> Aqueles que envolvem manipulação e transformação de dados do domínio do sistema. 

Casos de Uso - Cenário Principal: 

* Registrar pedido:
 > * [OUT] O sistema deve apresentar listagem de todos os produtos, com nome, preço, descrição e foto, ordenados por nome. (TODO: fazer paginação) 

>  * [IN] O cliente deve selecionar produtos desejados e informa localização de entrega 

>  * [OUT] O sistema deve informar o código do pedido 

* Entregar pedido:

> * [OUT] O sistema deve informar uma listagem contendo código, valor total, tempo (período entre o momento atual e o horário em que o pedido foi realizado) e os itens solicitados dos pedidos pendentes, ordenados do mais antigo para o mais recente 

> * [IN] O entregador deve selecionar um pedido 

>  * [OUT] O sistema deve informar um mapa com a rota até a localização da entrega 

>  * [IN] O entregador deve informar que o produto foi entregue 

## # Modelagem Conceitual – Modelo de Domínio em nível de análise 

> Entidades, atributos e associações

## # WIREFRAME (esboço de UI/UX)

> Mobile
![Mobile - Home](https://www.figma.com/file/kOauCHW1LzkNH6hQK5tavy/versao-DSDeliver?node-id=1%3A414)
![Mobile - Orders](https://www.figma.com/file/kOauCHW1LzkNH6hQK5tavy/versao-DSDeliver?node-id=1%3A700)
![Mobile - Navigate](https://www.figma.com/file/kOauCHW1LzkNH6hQK5tavy/versao-DSDeliver?node-id=1%3A668)

> Desktop
![Desktop - Home](https://www.figma.com/file/kOauCHW1LzkNH6hQK5tavy/versao-DSDeliver?node-id=1%3A2)
![Desktop - Orders](https://www.figma.com/file/kOauCHW1LzkNH6hQK5tavy/versao-DSDeliver?node-id=1%3A280)

## # Requisitos Não Funcionais 

> Aqueles que se referem a características do produto (ISO/IEC 9126) - funcionalidade, segurança, acurácia, etc.

* Back end: 
* > STS 
* > Spring Boot 
* > Spring Initializr 
* > Maven 
* > Java
* > Spring Data JPA – ferramenta ORM 
* > Heroku 
* > Heroku CLI 

* Front end Web: 
* > React JS: bblioteca JavaScript para desenvolvimento de app com SPA 
* > Leaflet 
* > SPA: carrega, de modo assíncrono, apenas o conteúdo principal da página 
* > Axios Library
 
* Front end Mobile 
* > React Native 
* > Expo Client 
