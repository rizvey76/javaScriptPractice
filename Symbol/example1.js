///Symbols are not same by default
var symbol1=Symbol('symbol1');
var symbol2=Symbol('symbol1');

if(symbol1===symbol2){
   console.log("They are same");
}else{
    console.log("They are not same"); 
}