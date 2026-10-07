//console.log("Hello");

//let , var , const

//{
  //  var name = "Chathum";
  //  let age = 20;

  //  console.log(age); // 20

//}
//console.log(name); // Chathum
//console.log(age); // 20

//let age =30;
//console.log(age); // 30

//age =25;
//console.log(age); // 25

//const number = "1";
//console.log(number); // 123

//number = "2"; // TypeError: Assignment to constant variable.
//console.log(number); // 123

//let customerList = ["saman","nimal","kamal"];
//console.log(customerList); // ["saman","nimal","kamal"]

//customerList =("sunil");
//console.log(customerList); // ["saman","nimal","kamal","sunil"]

// const customerList = ["saman","nimal","kamal"];
// console.log(customerList); // ["saman","nimal","kamal"]

// customerList.push("sunil");
// console.log(customerList); // ["saman","nimal","kamal","sunil"]

// array methos -------------
// const number =[];
// number.push(1);
// number.push(2);
// number.push(3);
// number.push(4);
// number.push(5);
// console.log(number);
// number.reverse();
// console.log(number);

//filter
const productList=[
    {name:"Bun",inStock:true,price:100},
    {name:"Milk",inStock:true,price:200},
    {name:"egg",inStock:false,price:300},
    {name:"bread",inStock:true,price:400},
    {name:"butter",inStock:false,price:500},
];

console.log(productList);



let inStockProducts = 
    productList.filter(product => product.inStock == true);

console.log(inStockProducts);

// method 1 
function addNumbers(num1,num2){
    return num1+num2;
}
console.log(addNumbers(5,10));

//method 2
function getSum(num1,num2){
    return num1+num2;
}
console.log(getSum(5,10));

//method 3 
let getTotal=(num1,num2)=>{
    return num1+num2;
}
console.log(getTotal(5,10));

// method 4 anonnymous arrow function
(num1,num2) =>{
    return num1+num2;
}

// Arrow function with single parameter
let txtValue = txtValue =>{
    return txtValue;
}
console.log(txtValue("Hello World"));

// Arrow Function with single parameter- short hand 
let sample = txtValue => txtValue;
console.log(sample("Hello world 2"));