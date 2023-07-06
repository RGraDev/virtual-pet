<h1>Virtual Pet Project 🐶🐱</h1>

<h3>A project designed to demonstrate and provide exposure to basic OOP concepts, 
including Prototypes, Methods and Constructors</h3>

<h3><u>Overview of Files</u></h3>

<h3><b>src/pet.js<b></h3> 
<h4> This file approaches things from the traditional way of writing
OOP code in Javascript (without using classes)</h4>

<h3><b>src/pet_new.js<b></h3> 
<h4>This file contains the same logic as in src/pet.js
but makes use of the class syntax available in ES6</h4>

<h3><b>__ tests __ /pet_test.js<b></h3>
<h4>This file contains a suite of tests written using Jest. By default these tests
run using the pet_new.js code. You can verify the logic in the pet.js file 
also passes the tests by changing ```const Pet = require("../src/pet_new.js");```
to ``` const Pet = require("../src/pet.js");``` </h4>