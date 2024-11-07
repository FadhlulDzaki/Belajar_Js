// Inisialisasi antrian pembeli
let queue = ["ray", "fiki", "fadhilla", "farah"];

// Pembeli baru datang
queue.push("nabila"); // Nabila datang
queue.push("maza", "elsi"); // Maza dan Elsi datang

// Antrian terakhir tidak jadi antri dan pulang ke rumah
queue.pop(); // Elsi pulang ke rumah

// Antrian pertama sudah mendapatkan belanjaannya
queue.shift(); // Ray sudah mendapatkan belanjaannya

// Antrian kedua juga sudah mendapatkan belanjaannya
queue.shift(); // Fiki sudah mendapatkan belanjaannya

// Pembeli baru yang nyerobot antrian
queue.unshift("tomi"); // Tomi nyerobot antrian

// Menampilkan antrian akhir
console.log("Antrian akhir:", queue);
alert("Antrian akhir: " + queue.join(", "));
