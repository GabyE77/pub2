const myAge = 44;
const isFemale = true;
const driverStatus = 'designated';
const firstName = "Gaby";
const totalAmount = 15;

if (myAge >= 18) {

    console.log("You are 18 years or older");

} else {

    console.log("You are to young");
}



if (isFemale) {

    console.log('you can enter!');

} else {

    console.log('you can not enter!');

}



if (driverStatus === "designated") {

    console.log('you are allowed to drive');

} else {

    console.log('yo uare not allowed to drive');

}

if (myAge >= 18 && myAge <= 25) {
    
    console.log("You get 50% off!");

} else {
    
    console.log("sorry you pay full price");
}

if (firstName == "Bram" || firstName == "Sarah") {
    
    console.log('you get a free beer!!!');
} else {
    console.log('sorry no free beer for you!');
}


 if (totalAmount >= 100) {
    console.log('You get a Free Bottle Of Champagne!');
 } else if (totalAmount >=50) {
    console.log('You get Gratis portie Nachos!');
 } else if (totalAmount >=25) {
    console.log("you get free Bitterballen!");
 }else {
    console.log('You get nothing');
    }