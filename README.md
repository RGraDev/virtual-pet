# Virtual Pet Project 🐶🐱

## A project designed to demonstrate and provide exposure to basic OOP concepts, including Prototypes, Methods and Constructors

### A Pet() constructor function is used to create an instance of a Pet object. There are a number of methods such as feed(), growUp(), and walk() which can be called on this object, and these methods alter the values of various properties on the object

### Overview of Files

### src/pet.js<b>
This file approaches things from the traditional way of writing
OOP code in Javascript (without using classes)

### src/pet_new.js
This file contains the same logic as in src/pet.js
but makes use of the class syntax available in ES6

### __ tests __ /pet_test.js
This file contains a suite of tests written using Jest. By default these tests
run using the pet_new.js code. You can verify the logic in the pet.js file 
also passes the tests by changing: 

``` const Pet = require("../src/pet_new.js"); ```
to ``` const Pet = require("../src/pet.js");``` 