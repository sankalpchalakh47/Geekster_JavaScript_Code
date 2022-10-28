// create Employee object
// Add 5 properties like id, name,des,city,emailid
// Print name, emailid

var Emp = {
    id: 101,
    name: "Sankalp",
    des: "Jr Developer",
    city: "Wardha",
    emailId: "sankalpsanjchalakh@gmail.com"
};

console.log(Emp.name);
console.log(Emp.emailId);

// How to insert new Property inside Object using JS Code
// <objName>.<new Property key Name> = <new Value>

Emp.number = 7507295757;
console.log(Emp);

// update Property Value
 // <objname>.<Propert Key name> = "new Value"
 // Syntax is same for updatating and inserting existing Property

 Emp.number = 88888888;
 console.log(Emp);

 // Two Keys With Same Name in The Object

 var obj = {
    name: "Raj",
    name: 101,
 }
 console.log(obj);

 //Delete A Property
 delete Emp.city;
 console.log(Emp);

