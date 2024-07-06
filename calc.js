import {authenticateMyself} from "./auth.js"

async function getQuestion(){
    const response = authenticateMyself();
    try{
    const responseRecieved = await axios.get("http://20.244.56.144/test/even", response.data);
    console.log(responseRecieved.data);
}
catch(error){
    console.log("error: ",error.message);
}
}

getQuestion();