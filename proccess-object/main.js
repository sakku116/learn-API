// melihat memory usage
const cpuInformation = process.memoryUsage();
console.log(cpuInformation)

// print out parameter yang digunakan saat menjalankan node
/*
[node nama-file.js zakky supriyadi]
node = index 0
first.js = index 1
zakky = index 2
supriyadi = index 3
*/
const first_name = process.argv[2];
const last_name = process.argv[3];
console.log(`Hello ${first_name} ${last_name}`)

// latihan
const initialMemoryUsage = process.memoryUsage().heapUsed
const yourName = process.argv[2]
const environment = process.env.NODE_ENV // ditetapkan di terminal saat menjalankan code

for(let i = 0; i <= 10000; i++) {
    // loop ini akan membuat penggunaan memori naik
}
const currentMemoryUsage = process.memoryUsage().heapUsed;

console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`);
console.log(`Penggunaan memory dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);


