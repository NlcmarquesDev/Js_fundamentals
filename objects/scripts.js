// function Color(r, g, b) {
//   this.r = r;
//   this.g = g;
//   this.b = b;
//   this.rgb = () => {
//     console.log("rgb color");
//   };
// }

class Color {
  constructor(r, g, b, name) {
    this.name = name;
    this.r = r;
    this.g = g;
    this.b = b;
  }
  rgb() {
    console.log("hero");
  }
}

const red = new Color(255, 255, 233, "amarillo");
console.log(red);
