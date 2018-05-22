var items = [

{item : "apples", price : 1.99},

{item : "grapes", price : 2.99},

{item : "pizza", price : 8.99},

{item : "noodles", price : 7.99},

{item : "bannanas", price : 7.55}];

var newList=[];

var total =0;

function addToCart(i) {

  newList.push(items[i]);

}

function getTotal(){



for (var i=0;i < newList.length;i++){

total += newList[i].price;



}

alert("Your total price is: " + total);

}

function checkOut(){

for (var i = 0; i < newList.length; i++){

  console.log(newList[i]);

}

getTotal();

}
