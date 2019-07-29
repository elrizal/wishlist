# Wish List
An example of an MVC-based application using Handlebars with MySQL with CRUD operations. 

## Preview:
![Wish List](/public/assets/img/preview.png)

## Resources
Handlebars.js for templating, MySQL for the database and Materialize (plus custom css) for the UI design.

## Folder Structure
* Config
  * connection.js: Where we set-up connection to our database
  * orm.js: to convert MySQL queries to be compatible with our JS
* Controllers
  * Wish controller: Routing for our db
* db (Database) 
  * schema.sql: Where we've created the database and table
  * seeds.sql: Where we've inserted and edited our database 
* Model
  * wishlist.js: Where we can define the commands for the controller
* Public
  * assets
    * js: As the public-face logic, this is where we get back information and manipulate it
* Views
  * layouts > main.handlebars: Functions as a "frame" for all pages
  * index.handlebars: The layout of the individual page (home)
  * partials > wishlistp > wishlist-block.handlebars: The individual elements of the page (the cards)