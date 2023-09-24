const myConsole = new Map();

myConsole.set("log", (msg) => console.log(msg));

console.log(myConsole);

myConsole.get("log")("How does this compare to Objects?");

myConsole.set(1, "number one");
myConsole.set("1", "string one");
console.log(myConsole);
console.log(myConsole.get(1));
console.log(myConsole.get("1"));
