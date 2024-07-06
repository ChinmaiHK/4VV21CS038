
async function registerUser() {
    const registrationData = {
        companyName: 'martMed',
        ownerName: 'Myname',
        rollNo: '1',
        ownerEmail: 'myMail@gmail.com',
        accessCode: 'accesscode'
    };

    try {
        const responseRecieved = await axios.post('http://20.244.56.144/test/register', registrationData);
        console.log('Registered successfully with data:', responseRecieved.data);
    } catch (error) {
        console.error('Registration was unsuccessful with :', error.message);
    }
}


registerUser();