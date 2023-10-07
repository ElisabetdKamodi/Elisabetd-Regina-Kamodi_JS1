// if-else
let nilai = 75;

if (nilai >= 70) {
    console.log("Anda lulus MSIB.");
} else {
    console.log("Anda tidak lulus MSIB.");
}

// nested-if
let usia = 18;
let memilikiSIM = true;

if (usia >= 18) {
    if (memilikiSIM) {
        console.log("Anda boleh mengemudi.");
    } else {
        console.log("Anda perlu mendapatkan SIM terlebih dahulu.");
    }
} else {
    console.log("Anda terlalu muda untuk mengemudi.");
}

// Switch-Case
let hari = "Senin";

switch (hari) {
    case "Senin":
        console.log("Hari kerja.");
        break;
    case "Sabtu":
    case "Minggu":
        console.log("Hari libur.");
        break;
    default:
        console.log("Hari tidak valid.");
}

// For Statement
for (let i = 0; i < 5; i++) {
    console.log("Interaksi ke-" + (i + 1));
}

// While Loop
let counter = 0;

while (counter < 5) {
    console.log("Respon ke-" + (counter + 1));
    counter++;
}

// Do-While Loop
let angka = 1;

do {
    console.log(angka);
    angka++;
} while (angka <= 5);

// Function
function tambah(a, b) {
    return a + b;
}

let hasilPenambahan = tambah(3, 4);
console.log("Hasil penambahan: " + hasilPenambahan);
