console.log("Thi is tutorial 53");
let name = "Harry";
let name1 = "Harry";
let name2 = "Nishant";
let name3 = "Rohan";
let greetText = "Good Morning";

function greet(name, greetText){ 
    let nme1 = "Name1";
    console.log(greetText + " " + name);
    console.log(name + " is a good boy");
}

function greet(name, greetText="Greeting from JavaScript"){ 
    let nme1 = "Name1";
    console.log(greetText + " " + name);
    console.log(name + " is a good boy");
}

greet(name1,greetText);
greet(name2,greetText);
greet(name3,greetText);
greet(name3);
 