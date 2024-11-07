const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];

function printUppercaseNames() {
    // Loop melalui array people
    for (let i = 0; i < people.length; i++) {
        // Cetak nama dalam huruf kapital
        console.log(people[i].toUpperCase());
    }
}

// Panggil fungsi untuk menjalankannya
printUppercaseNames();
