// a new object is made with a method only for this object inside it
const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log(this);  // this is a key word used for referring everything in the object user, "this" here is "user" centric
    }

}


console.log(user.username) // logs the data saved in the username in user object
console.log(user.getUserDetails()); // processes the function getUserDetails-> returns the object and undefined as it "returns" nothing
console.log(this); // "this" is used in the context for Object






function User(username, loginCount, isLoggedIn){ // a new function is defined with parameters -> username, logincount, isLoggedIn
    // with the "this" keyword we defign a new object within the function User (everything is an object in js) with the following properties
    this.username = username;       // username
    this.loginCount = loginCount;   // login count
    this.isLoggedIn = isLoggedIn    // is logged in or not

    this.greeting = function(){     // a greeting function within the scope of User
        console.log(`Welcome ${this.username}`);
        // return 1
    }

    return this
}


// objects are like new worlds which we create upon definitions and give them parameters which makes them isable/unique
// new-> constructor -> constructs a new instance/world of the object User
const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
// console.log(userOne.constructor);
console.log(userTwo);
