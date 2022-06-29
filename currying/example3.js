function discount(disc){
    return (price)=>{
        return price-price*disc;
    }
};

let tenPercentDiscount=discount(0.1); //partial function
let customer1=tenPercentDiscount(600);
let customer2=tenPercentDiscount(700);

console.log(customer2);



let twentyPercentDiscount=discount(0.2); //partial function
let customer3=tenPercentDiscount(1200);


console.log(customer3);