const object={
    value1:1,
    value2:2,
    value3:3,
    value4:4,
};

function* generator(obj){
  const entries=Object.entries(obj);
  for(let element of entries){
        yield element[1];
  }
};

const iterator=generator(object);
console.log([...iterator]);
console.log(iterator.next());


// iterate through key-value gracefully
// const obj = { a: 5, b: 7, c: 9 };
// for (const [key, value] of Object.entries(obj)) {
//   console.log(`${key} ${value}`);