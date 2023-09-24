const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
  .then(() => {
    console.log("Connected to MongoDB on Products");
  })
  .catch((err) => { 
    console.log(err);
  });

const productsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 20,
  },
  price: {
    type: Number,
    required: true,
    min:[0,'Price must be positive!!']
  },
  onSale: {
    type: Boolean,
    default: false,
  },
  categories: [String],
  qty: {
    online: {
      type: Number,
      default: 0,
    },
    inStore: {
      type: Number,
      default: 0,
    }
  },
  size: {
    type: String,
    enum: ['S','M','L'],
  }
  
});

productsSchema.methods.toggleOnSale = function () {
  this.onSale = !this.onSale;
  this.save();
}

productsSchema.methods.greet = function () {
  console.log("HELLO!!!HI!!!HOWDY");
  console.log("- From " + this.name);
}
productsSchema.methods.addCategorie = function (cat) {
  this.categories.push(cat);
  return this.save();
}

productsSchema.statics.fireSale = function () { 
  return this.updateMany({},{onSale:true, price:0});
}


const Product = mongoose.model('Product', productsSchema);

const findProduct = async () => { 
  const foundProduct = await Product.findOne({ name: "Bike bell" })
  console.log(foundProduct);
  await foundProduct.toggleOnSale();
  console.log(foundProduct);
  await foundProduct.addCategorie("outdoors");
  console.log(foundProduct);
}
// findProduct();
Product.fireSale().then(data => {
  console.log(data);
 })

// const bike = new Product({ name: ' Bike kids', price: 219.99, categories: ['Bikes','cycling'], qty:{online:10, inStore:20}, size:'S'})
// bike.save().then((res) => {
//   console.log("It Worked");
//   console.log(res);
// }).catch((err) => {
//   console.log(err);
//   console.log("OH NO the ERROR");
//  });