import {authenticateMyself} from "./auth.js"
import express from express
const id = document.getElementById("#number");
async function getQuestion(){
    const response = authenticateMyself();
    const ansEven= {
        "numbers":getEven(id)
    };
    const ansPrimes= {
        "numbers":getPrimes(id)
    };
    const ansRand= {
        "numbers":getRand(id)
    };
    const ansFibo= {
        "numbers":getFibo(id)
    };
    try{
    const evenRecieved = await axios.post("http://20.244.56.144/test/even",ansEven );
    console.log(evenRecieved.data);
    const primesRecieved = await axios.post("http://20.244.56.144/test/primes",ansPrimes );
    console.log(primesRecieved.data);
    const randRecieved = await axios.post("http://20.244.56.144/test/rand",ansRand );
    console.log(randRecieved.data);
    const fiboRecieved = await axios.post("http://20.244.56.144/test/fibo",ansFibo );
    console.log(fiboRecieved.data);

}
catch(error){
    console.log("error: ",error.message);
}
}

getQuestion();

function getEven(id){
    var l = new Array();
    for(var i = 1;i<id;i++){
        if(i%2===0){
            l.push(i);
        }
    }
    return l;
}


function getPrimes(id){
    var l = new Array();
    for(var i =0;i< id;i++){
        if(isPrime(i)){
            l.push(i);
        }
    }
    return l;
}

function isPrime(a){
    for(var i = 2;i<a/2;i++){
        if(a%i == 0)
            return true;
    }
    return false;
}

function getRand(id){
    var l = new Array();
    for(var i =0;i<id;i++){
l.push(Math.floor(Math.random() * (id - i + 1))+i);
    }
    return l;
}

function getFibo(id){
    var l = new Array();
    l.push(0);
    l.push(1);
    for(var i =2;i<id;i++){
        l.push(l[i-1]+l[i-2]);
    }
    return l;
}