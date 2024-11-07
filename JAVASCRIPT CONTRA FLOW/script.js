function printSongLyrics() {
    // Loop sebanyak 6 kali
    for (let i = 0; i < 6; i++) {
        console.log("Da ba dee da ba daa");
    }
}

// Panggil fungsi untuk menjalankannya
printSongLyrics();


function countdown() {
    // Loop dari 25 ke 0, dengan langkah pengurangan 5
    for (let i = 25; i >= 0; i -= 5) {
        console.log(i);
    }
}

// Panggil fungsi untuk menjalankannya
countdown();

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
