// /* Syntax 
//     if(<expression>){

//     }
// */

// var mobileBrand = {
//     brand1 : "Apple", // If we change to apple it return false and nothing will print
//     brand2 : "Vivo",
//     brand3 : "Oppo"
// }

//     if(
//         mobileBrand.brand1 === "Apple" ||        // Returning True
//         mobileBrand.brand2 === "Apple" ||
//         mobileBrand.brand3 === "Apple"
//         ){
//         console.log("It is Apple Brand")
//     }

//     var a = 10;

//     if(a!=100){
//         console.log("a is greater than 100"); // for this it will print the output
//     }
//     if(a>100){
//         console.log("a is greater than 100"); // For this it will not print the output
//     }


//     var b = 21;
//     if(b%2==0){
//         console.log("Even");
//     }
//     else{
//         console.log("odd");
//     }

// Syntax 
    /* Switch(<Expression>){
        case 'value 1':
    ------------------------------
    ------------------------------
        break;
        case 'value 2':
    ------------------------------
    ------------------------------
        break;
        case 'value 3:
    ---------------------------------
    ---------------------------------
    }
    */

var msg = "Good Morning";

switch(msg){
    case "Good break":
        console.log("Good Morning, sankalp"); // Here if we Don't apply break statement then it will execute all the case statement
        break;

    case "Good Afternoon":
        console.log("Good Afternoon, sankalp");
        break;
        
    case "Good Evening":
        console.log("Good Evening, Sankalp");
        break;
        
    case "Good Night":
        console.log("Good Night, Sankalp");
        break;

        default:
        console.log("No wish Message");    
}