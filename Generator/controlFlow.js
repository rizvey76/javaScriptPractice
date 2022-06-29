function* generator(a,b){
    let k=yield a+b;
    console.log("-------"+k);
    let m=yield a+b+k;
    console.log("-------"+m);
    yield a+b+k+m;
};

var gen=generator(10,20);
console.log(gen.next()); // In first yield return  the sum of 'a' and 'b' ,but 'k' will not take space of memory

console.log(gen.next(50)); //in this step 'k' will be assign to memory but 'a+b+k' return ,'m' will not assign in memory
// console.log(gen.next(100)); //'m' will assign and return 'a+b+k+m'