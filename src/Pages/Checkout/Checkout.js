import React from 'react';

const Checkout = () => {
        const { _id, title, price } = useLoaderData();
        const { user } = useContext(AuthContext);
    
        const handlePlaceOrder = event => {
            event.preventDefault();
            const form = event.target;
            const name = `${form.firstName.value} ${form.lastName.value}`;
            const email = user?.email || 'unregistered';
            const phone = form.phone.value;
            const message = form.message.value;
    
            const order = {
                service: _id,
                serviceName: title,
                price,
                customer: name,
                email,
                phone,
                message
            }
    
            // if(phone.length > 10){
            //     alert('Phone number should be 10 characters or longer')
            // }
            // else{
    
            // }
    
            fetch('http://localhost:5000/orders', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('genius-token')}`
                },
                body: JSON.stringify(order)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.acknowledged){
                        alert('Order placed successfully')
                        form.reset();
                        
                    }
                })
                .catch(er => console.error(er));
    
    
        }
    return (
        <div>
            
        </div>
    );
};

export default Checkout;