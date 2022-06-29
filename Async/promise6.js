function display(fetchData){
     console.log(fetchData);
}

let myPromise=new Promise(
    function(myResolve,myReject){
        let x=1;
        if(x===0){
             myResolve("This is zero");
        }else{
             myReject("Something went wrong");
        }
    }
);


myPromise.then(
    function(value){
        return display(value);
    },
    function(err){
       return display(err);
    }
);