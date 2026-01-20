//primitive 

//7 types: String , Number , Boolean , null , UNdefine , Symbol , BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn  = false
const outsideTemp = null
let userEmail;


const id = Symbol('1234')
const anotherId = Symbol('1234')

///console.log(id ===anotherId);

const bigNumber = 32534787646548789n


//Reference (Non primitive)


// Array, Object , Function

const heros = ["shaktiman" , "naagraj" , "doga"]
 let myObj={
    name: "sardar",
    age:25,
    userEmail : "ghfhfrthc@12354"
}


const myFunction = function(){
    console.log("hello world");
}

//console.log(typeof bigNumber);




//************************************************Nemory ***************************************************************/

//Stack(primitive), Heap (non-primitive)

let SAcretaor = "sardar"
let anothername = SAcretaor
anothername = "dhakad"

console.log(SAcretaor);
console.log(anothername);

let userOne = {
    email : "user@689568",
    upi : "USER@YLB"
}

let userTwo = userOne

userTwo.email ="ghjdgjeg@14665"

console.log(userOne.email);
console.log(userTwo.email);






