const promise1=new Promise((resolve)=>{ resolve("promise1 performed")});
const promise2=new Promise((_,reject)=>{reject("promise2 rejected")});
const promise3=new Promise((resolve)=>{resolve("promise1 performed")});

Promise.all([promise1,promise2,promise3]).then((response)=>{ console.log(response)}).catch((err)=>{console.log(err)});
Promise.allSettled([promise1,promise2,promise3]).then((response)=>{ console.log(response)}); //perfored all promises