console.log(process.argv);
let args = process.argv.slice(2);

for (arg of args) {
  console.log(`Hi, there, ${arg}`);
}
