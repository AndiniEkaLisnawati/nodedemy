const message = (name) => {
    console.log(`halo ${name}`) ;
}

message('Andin');

// untuk mendapatkan informasi penggunaan memory ketika proses berjalan
const memoUsage = process.memoryUsage();
console.log(memoUsage);