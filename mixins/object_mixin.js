const jsSkill={
    knowsJs(){
        return true;
    },
};

const engDegree={
    hasDegree(){
        return true;
    },
};

const backendSkill={
    knownBackend(){
        return true;
    },
};

const jsEngineer=Object.assign({},jsSkill,engDegree);
const fullstackEngineer=Object.assign({},jsSkill,backendSkill,engDegree);
// console.dir(jsEngineer); [to see value of closures]

console.log(fullstackEngineer.hasDegree());
console.log(fullstackEngineer.knownBackend());
console.log(fullstackEngineer.knowsJs());