const object={

};

object.name="JavaScript";
object.estd="1995";
object[Symbol("founder")]="Brendan Eich";

console.log(Object.keys(object));
console.log(object);

function iterate(){
    for(let [key,value] of Object.entries(object)){
        console.log(key+":"+value);
    }
}

iterate();

