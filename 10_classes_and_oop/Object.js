function multipleBy5(num){

    return num*5
}

multipleBy5.power = 2 // a new property with the object associated with multipleBy5 

console.log(multipleBy5(5)); 
console.log(multipleBy5.power);
console.log(multipleBy5) 
console.log(multipleBy5.prototype); // contains all the methods which can be worked upon multipleBy5. here in node environment -> none, but in window object there are several objects

function createUser(username, score){
    this.username = username   // properties within the createUser function/obejct
    this.score = score
}

createUser.prototype.increment = function(){  // a new function is added in the protoype
    this.score++
}
createUser.prototype.printMe = function(){  // a new function is added in the protoype which can be used when a constructor (new) is used
    console.log(`price is ${this.score}`);
}
// prototype -> all methods regarding the current function/object is stored here

const chai = new createUser("chai", 25)
const tea = createUser("tea", 250)
console.log(createUser);
console.log(createUser.prototype)

chai.printMe()


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/