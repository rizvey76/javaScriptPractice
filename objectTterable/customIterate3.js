function range(start,end,step){
  let current=start;
  return{
    [Symbol.iterator]:function(){
       return{
        next(){
            let result;
            if(current<=end){
               result={
                done:false,
                value:current,
               };
               current+=step;
               return result;
            }else{
                return{
                    done:true,
                }
            }
        },
       };
    },
  };
};

console.log([...range(1,100000,2)]);