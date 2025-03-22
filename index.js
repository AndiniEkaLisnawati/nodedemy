const message = (name) => {
    console.log(`halo ${name}`) ;
}

message('Andin');

// untuk mendapatkan informasi penggunaan memory ketika proses berjalan
const memoUsage = process.memoryUsage();
console.log(memoUsage);

// jika kita menjalankan node index.js "harry" "potter" 
// array process.argv akan bernilai:
// Elemen pertama : Alamat (path) lengkap dari lokasi node yang menjalankan prosesnya. 
// Element kedua : Alamat (path) berkas JavaScript yang dieksekusi (app.js)
// Element ketiga : “harry”
// Element keempat : “potter”
const firstName = process.argv[2];
const lastName = process.argv[3];
console.log(`Hello ${firstName} ${lastName}`);
