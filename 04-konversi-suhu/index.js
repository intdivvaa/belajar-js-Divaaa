// Tugas 04 — Konversi Suhu
// Buat fungsi konversi yang ME-RETURN hasil, lalu panggil beberapa kali.

// TODO: fungsi celsiusToFahrenheit(celsius)

function kefahrenheit(c) {
    return c * 9 / 5 + 32;
}

// TODO: fungsi celsiusToReamur(celsius)

function celciusToReamur(c) {
    return  c * 4 / 5;
}
// TODO: panggil kedua fungsi dengan suhu berbeda dan tampilkan hasilnya

console.log("25°C =" + kefahrenheit(25) + "°F");
console.log("25°C =" + celciusToReamur(25) + "°R");
console.log("100°C =" + kefahrenheit(100) + "°F");
console.log("100°C =" + celciusToReamur(100) + "°R");