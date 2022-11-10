import React from 'react';
import { useLoaderData } from 'react-router-dom';
// import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Checkout = () => {
        const { _id, title, price } = useLoaderData();
        // const { user } = useContext(AuthContext);
    
        
    return (
        <div>
            <h2>{title}</h2>
            <h2>{_id}</h2>
            <h2>{price}</h2>
        </div>
    );
};

export default Checkout;