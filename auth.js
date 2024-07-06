const authenticationData = {
    "companyName": "martMed",
    "clientID": "0198925a-cdc8-4769-8439-13aefc6c0628",
    "clientSecret": "TAOIjhwdbvIDSPCg",
    "ownerName": "Chinmai H K",
    "ownerEmail": "chinmaihk3@gmail.com",
    "rollNo": "4VV21CS038"
}

export async function authenticateMyself(){
    try{
        const responseRecieved = await axios.post("http://20.244.56.144/test/auth", authenticationData);
        console.log('The response recieved is: ',responseRecieved.data);
        return responseRecieved;

    }
    catch(error){
        console.error(error.message);
        return error.message;

    }
}

authenticateMyself();