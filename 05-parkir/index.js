// Tugas 05 — Tarif Parkir
// Gabungkan variabel, pengkondisian, perulangan, dan fungsi.
//
// Aturan tarif:
//   - 1 jam pertama : Rp3.000
//   - jam berikutnya: Rp2.000 per jam
//   - tarif maksimal: Rp10.000

const tarif1 = 3000;
const tarif2 = 2000;
const tarif3 = 10000;
let totalTarif;

// TODO: buat fungsi hitungTarif(jam)
// Pakai perulangan untuk menjumlahkan tarif jam demi jam.
// Ingat: jam pertama harganya beda, dan ada tarif maksimal!

function hitungTarif(jam){
    if (jam <= 0){
        return 0;
    }
    totalTarif = tarif1;
    for (let i = 1; i < jam; i++){
        totalTarif += tarif2;
    }

    if (totalTarif >= 10000){
        return 10000;
    }
    return totalTarif;
}

// TODO: simpan lama parkir 5 kendaraan dalam variabel
// Kendaraan 1: 2 jam
// Kendaraan 2: 5 jam
// Kendaraan 3: 1 jam
// Kendaraan 4: 9 jam
// Kendaraan 5: 3 jam

const kendaraan1 = hitungTarif(2);
const kendaraan2 = hitungTarif(5);
const kendaraan3 = hitungTarif(1);
const kendaraan4 = hitungTarif(9);
const kendaraan5 = hitungTarif(3);
const totalPendapatan = (kendaraan1 + kendaraan2 + kendaraan3 + kendaraan4 + kendaraan5);

// TODO: tampilkan biaya tiap kendaraan dan total pendapatan hari itu

console.log("==== LAPORAN PARKIR ====");
console.log(`Kendaraan 1 (2 jam): Rp${kendaraan1}`);
console.log(`Kendaran 2 (5 jam):  Rp${kendaraan2}`);
console.log(`Kendaran 3 (1 jam):  Rp${kendaraan3}`);
console.log(`Kendaran 4 (9 jam):  Rp${kendaraan4}`);
console.log(`Kendaran 5 (3 jam):  Rp${kendaraan5}`);
console.log("------------------------");
console.log(`Total Pendapatan    :Rp${totalPendapatan}`);
console.log("`````");

