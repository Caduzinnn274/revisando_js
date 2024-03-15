//funcao nao parametrizada
const n1 = 8;
const n2 = 5;

/*
function Soma()
{
return n1+n2;
}

function Multiplica()
{
    return n1 * n2;
}



console.log(Soma());
console.log(Multiplica());


//função parametrizada

function soma(n3=0,n4=0){
    return n3+n4;
}

console.log(soma(6,5));



//função anonima

const f1 = function(v1, v2)
{
    return v1/v2;
}

console.log(f1(12,25));



//vetores

let mulheres = ["Poliana", "Camilla", "Amanda"];

mulheres.map((el)=>{
    console.log(el);
})

const f2 = new Function("v3", "v4", "return v3 - v4");

console.log(f2(7,3));

*/

const imc = function(peso, altura)
{
    return peso/(altura * altura);

}

console.log(imc(90,1.8).toFixed(1));

// com arrow function

const imc2 = (peso,altura)=>{
    return peso/(altura * altura);
    
}

console.log(imc2(65,1.7).toFixed(1))