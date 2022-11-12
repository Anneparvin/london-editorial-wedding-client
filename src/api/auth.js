import userEvent from "@testing-library/user-event"

export const setAuthToken =(user) =>{

    const currentUser ={
        email: userEvent.email
    }
     // get jwt token
     fetch('http://localhost:5000/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            localStorage.setItem('londonWeddb', data.token);
        });

}