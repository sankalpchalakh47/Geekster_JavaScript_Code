var product = [
    {
        brand: "Apple",
        model: "Iphone 13",
        price: 90000,
    },
    {
        brand: "Vivo",
        model: "V12",
        price: 9000,
    },
    {
        brand: "samsung",
        model: "Galaxy s14",
        price: 70000,
    },
    {
        brand: "Apple",
        model: "!2 pro max",
        price: 75000,
    },
];

var a = 0;

switch (product[a].brand) {

    case 'Apple':
        console.log(product[0])
        console.log(product[3])
        break;

    case 'Vivo':
        console.log(product[1])
        break;

    case 'samsung':
        console.log(product[2])
        break;

        default:
            console.log("No case Matched")
}