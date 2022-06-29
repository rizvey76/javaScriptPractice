///////use 'for' to make symbol singleton

var symbol1=Symbol.for('key1');
var symbol2=Symbol.for('key1');

if(symbol1===symbol2){
   console.log("They are same");
}else{
    console.log("They are not same");  
}




var symbol3=Symbol.for('key1');
var symbol4=Symbol.for('key2');

if(symbol3===symbol4){
   console.log("They are same");
}else{
    console.log("They are not same");  
}