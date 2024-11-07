function divide(a, b) {
    try {
        if (b === 0) {
            throw "Pembagian dengan nol tidak diperbolehkan.";
        }
        return a / b;
    } catch (error) {
        console.error("Terjadi kesalahan:", error);
        alert("Terjadi kesalahan: " + error);
        return null;
    }
}

// Contoh penggunaan fungsi divide
let hasil1 = divide(10, 2);
console.log("Hasil pembagian 10 dan 2 adalah:", hasil1);

let hasil2 = divide(10, 0); // Ini akan menyebabkan pengecualian
console.log("Hasil pembagian 10 dan 0 adalah:", hasil2);
