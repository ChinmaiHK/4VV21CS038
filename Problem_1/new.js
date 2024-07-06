
async function registerUser() {
    const registrationData = {
        companyName: 'martMed',
        ownerName: 'Chinmai H K',
        rollNo: '4VV21CS038',
        ownerEmail: 'chinmaihk3@gmail.com',
        accessCode: 'pwiPKW'
    };

    try {
        const responseRecieved = await axios.post('http://20.244.56.144/test/register', registrationData);
        console.log('Registered successfully with data:', responseRecieved.data);
    } catch (error) {
        console.error('Registration was unsuccessful with :', error.message);
    }
}


registerUser();