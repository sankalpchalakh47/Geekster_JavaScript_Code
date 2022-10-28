// Creation of Object
// mobile Product
// brand name, Price, modelName

var mobileProduct = {
    brand: "Apple",         // key + value = Property
    model: "Iphone 13 pro",
    price: 115000,

};

    // Storing Students Marks Without Subject name: 80,90,100,75,95
var studentMarks = [80,90,100,75,95] // Elements    

var student = {   // Array Inside Object
    name: "vani",
    id: 101,
    city: "Mumbai",
    marks: [90,89,80,34,57],  // Object can be of any type String,Integer,Array(Array data type isobject only)
};

    console.log(student.marks[3]);

    // Object Inside Array
var product = [
    {
      brand: "Apple",
      price: 90000,  
      
    },
    {
      brand: "Vivo",
      price: 9000,  
    },
    {
      brand: "samsung",
      price: 70000,   
    },
    {
      brand: "Apple",
      price: 75000,   
    },
];

console.log(product[3].price);