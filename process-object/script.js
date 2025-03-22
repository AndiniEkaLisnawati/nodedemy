const initialMemoryUsage = process.memoryUsage().heapUsed;
const yourName = process.argv[2];
const environment = process.env.NODE_ENV;

for(let i = 0; i < 1000; i++);

const currentMemoryUsage = process.memoryUsage().heapUsed;

console.log(`Hello ${yourName}`);
console.log(`mode env : ${environment}`);
console.log(`penggunaan memori dari ${initialMemoryUsage} ke ${currentMemoryUsage}`);

/*
cmd terminal windows
C:\javascript-projects\nodejs-basic>SET NODE_ENV=development && node ./process-object/script.js Andin

output :
mode env : development
penggunaan memori dari 3486848 ke 3488600

*/
