function printHeart() {     //membuat fungsi printHeart
    console.log("<3");      //memampilkan outputnya
}

printHeart();      // memanggil fungsinya

function multiply(a, b) {
    return a * b; // Mengembalikan hasil kali dari a dan b
}


// Contoh penggunaan fungsi multiply
let hasil1 = multiply(2, 3); // hasil1 akan menjadi 6
let hasil2 = multiply(9, 9); // hasil2 akan menjadi 81
let hasil3 = multiply(5, 4); // hasil3 akan menjadi 20

// Menampilkan hasil ke konsol
console.log("Hasil dari multiply(2, 3) adalah: " + hasil1); // Output: 6
console.log("Hasil dari multiply(9, 9) adalah: " + hasil2); // Output: 81
console.log("Hasil dari multiply(5, 4) adalah: " + hasil3); // Output: 20


let animal = "Giant Pacific Octopus";   //deklarasi variabel
function observe(){
    let animal = "Pajama Squid";
    console.log(animal);
}
observe();  //output yang akan ditampilkan ialah animal dari function observe


const sayHello = (name) => {        // Membuat arrow function dengan nama sayHello
    return `Hello ${name}!`;        //menggunakan parameter name
};

// Contoh penggunaan arrow function sayHello
console.log(sayHello("Hagrid")); // Output: "Hello Hagrid!"
console.log(sayHello("Luna"));   // Output: "Hello Luna!"
console.log(sayHello("Fadhlul"));   // Output: "Hello Fadhlul!"

