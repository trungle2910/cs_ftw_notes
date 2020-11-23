let shoppingCart = [
    { id: "A31", item: "T-shirt", price: 9.9, quantity: 5 },
    { id: "A32", item: "Jacket", price: 99.9, quantity: 1 },
    { id: "A33", item: "Skirt", price: 19.9, quantity: 2 },
    { id: "A34", item: "Ankle Pant", price: 39.9, quantity: 3 },
    { id: "A35", item: "Polo shirt", price: 14.9, quantity: 3 },
    { id: "A36", item: "Chino Short", price: 29.9, quantity: 2 },
    { id: "A37", item: "Easy Short", price: 19.9, quantity: 2 },
  ];



// console.log(shoppingCart.map((product) => product.price * product.quantity));

// console.log(shoppingCart.reduce((sum, product) => sum+ product.price * product.quantity,0));


// Write a function called removeItemsFromCart(productId, quantity) that will remove the quantity number of item with the productId in the cart and return the result in a new array. 
// If the quantity after removing is 0, remove the product out of the cart.
function remove(productId, quantity){
    // console.log(productId);
    shoppingCart =  shoppingCart.filter((item)=> 
    {
      if(item.id === productId){
        item.quantity = item.quantity - quantity;
        if(item.quantity <= 0) return false;
        return item;
      }
      return item;
     });
     console.log(shoppingCart);
}
remove("A31",4);
// function addProduct(productId, quantity){
//   let a =  shoppingCart.filter((item)=> item.id === productId)
//   .filter((x))
// }
// console.log(addProduct("A31",4))
let product = {
  id: "A38",
  item: "Black Hat",
  price: 9.9,
  quantity: 1,
};

function addItemToCart(product, quantity) {
  // if the item is already in the cart, then increase the quantity
  let flag = false;
  shoppingCart.forEach((item) => {
    if (item.id === product.id) {
      item.quantity += quantity;
      flag = true;
    }
  });
  // if not, shoppingCart.push()
  if (!flag) {
    product.quantity = quantity;
    shoppingCart.push(product);
  }

  console.log(shoppingCart);
}
addItemToCart(product, 2);

function addItemToCart2(product, quantity){
  let found = shoppingCart.filter();
  if(found.length === 0){
    product.quantity = quantity;
    shoppingCart.push(product);
  }

}