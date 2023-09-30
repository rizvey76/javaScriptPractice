const humanFactoryfunction=function(obj){
       let isCrying=false;
       return Object.assign({},obj,{
        cry(){
            isCrying=true;
            return this;
        },
        isCrying(){
            return isCrying;
        }
       });
};

const flyFactoryfunction=function(obj){
    let isFlying=false;
    return Object.assign({},obj,{
        fly(){
            isFlying=true;
            return this;
        },
        isFlying(){
            return isFlying;
        }
    });
};

const superman= humanFactoryfunction(flyFactoryfunction({}));

console.log(superman.fly().cry().isCrying());
console.log(superman.isFlying());