//we use this to print things in the console
console.log("hello world!");

//we must declare a variable before we use it
let fullName;

//after we create a variable, we can assign it a value
fullName = "John Doe";
//we can also assign the value while we declare the variable
let myName = "Selina"; //strings can be assigned using "" or ''

//reassign a variable
fullName = "Maya";

//to create a constant variable
const pi = 3.141592653;

//boolean values: true or false (no capital)

//calculations in Javascript
let x=5;
//increment
x++; //this means x+1=6
//decrement
x--; // this means x-1 = 6-1=5
//these will change the variables completely

//modulus: give the remainder
console.log(x%2); //this will print 1 because 5/2 has a remainder of 1

//interpolation: use `` and inside use ${} to insert varibales and "" for strings
const greeting = "hello";
const username = "selina";
let message = `${greeting} ${username}`; //this will print hello selina, remember the ``

console.log(5+"5"); //this will print 55 because it is a string

//undefined variables are variables that are unassigned like:
let you;
//null variables are variables that deliberately not given a value
let mes=null;
console.log(mes);

//arrays
let fruits = ["pears", "peaches"];
fruits.push("apples");//add things to the array
fruits[0]="cherries"; //this edits value in the array
fruits.length; //get the length of the array
fruits.pop(); //removes the last element in the array
console.log(fruits)

let userName = "Selina";
let basketTotal = 100;
console.log("Welcome "+ userName + ", your basket is currently at $" + basketTotal);
let basketItems = ["apples", "eggs", "milk"];
let basketLength = basketItems.length;
console.log("You have "+ basketLength + " items in your basket");
basketItems.push("pizza");
console.log("You have "+ basketItems.length + " items in your basket");

//Comparision operators
x==5; x!=5;//compare values, will return true or false
x===5; x!==5; //compare values + type


// do we have enough money for a day off
let money = 9;

const travel = 4;
const food =5;
console.log(money >=(travel + food));

//if and else statements
let temperature = 30;

if (temperature == 30) {
    console.log("It's a hot day")
} else if (temperature < 30) {
    console.log("It is a warm day")
}else{
    console.log("It is  cold day")
}

//and, or, not operator (a and b are conditions)
if (a&&b){
    //the actions
}else if (a||b){
    //the actions
}else if (!a){
    //the actions
}

let age = 12;
let Mymessage = "";
let hasParentalConsent = true;
if (age >= 12 && hasParentalConsent) {
    Mymessage = "You are allowed to access the website with parental consent"
}else if (age >= 12 && !hasParentalConsent){
    Mymessage = "You are not allowed to access the website without parental consent"
}
console.log(Mymessage);

//for loops
for (let i=1 /*start*/; i<=10 /*end*/; i++ /*step*/){
    /*the modifier here*/
}
let items = ['apples','peaches','cherry','kiwi'];

for (let i=0/*executed one time before the code block*/; 
    i<items.length /*condition*/; 
    i++/*execute everytime the code block is executed*/){
    console.log(items[i]);
}

//while loops
let countdown = 10; //this is the initial condition
while (countdown >= 0/*this is the condition that will keep the loop going*/){
    console.log(countdown);
    countdown--; //the step, slowly decrease the #of iteration
}
//make sure you don't create an infinite loop

//Functions
function addNumbers /*function name*/(a, b)/*parameters*/{
    console.log(a+b);
    return a + b //this can keep the result of the function
}
addNumbers(5,10);//calling the function
let total = addNumber(12,8)


//Below is about web development using Javascript
//create an element to an HTML file without typing in HTML
document.createElement("h2");
newHeader.textContent("hello")//this will add a text to h2
document.body.appendChild(newHeader);//this will add the h2 to the body of the HTML file    
//document.body(this is the location int the HTML file).appendChild(add a child element)

//removing an element from HTML
document.getElementById("the-id")//you can also get by class or section
elementToRemove();

//changing content to HTML using Javascript
varname.textContent="new text";
varname.remove();//to remove content

/*styling html webmite using javascript*/
document.htmlElement.style.cssProperty="the new value";
/*example*/document.body.style.color="red";

//event listeners: this will add an action to a HTML element without the need to do anything to the HTML file
const button=document.getElementById("sign-up");
button.addEventListener("click", function(){
    button.innerText = "button clicked";
});
if (stockCount==0){
    document.body.appendChild(newElement);
    stockButton.disabled = true;
}