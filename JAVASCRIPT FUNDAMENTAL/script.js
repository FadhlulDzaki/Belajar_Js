let name = "Fadhlul";
let age = 20;

console.log("Name:", name);
console.log("Age:", age);

function showMessage() {
    alert("Hello, " + name + "!");
    console.log("Button clicked.");
}

if (age > 18) console.log(name + " is an adult.");
else console.log(name + " is not an adult.");

let hobbies = ["sports", "Gaming", "swimming"];
hobbies.forEach(hobby => console.log("Hobby:", hobby));

let umur = (a, b) => a + b;
console.log("umur:", umur(11, 9));
alert("umur: " + umur(11, 9));
