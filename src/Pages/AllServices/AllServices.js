import React, { useEffect, useState } from 'react';
import ServiceCard from '../Home/Services/ServiceCard';

const AllServices = () => {

    const [services, setServices] = useState([]);

    
    useEffect( () =>{
        fetch(`https://y-seven-mu.vercel.app/services`)
        .then(res =>res.json())
        .then(data => setServices(data))
        
    }, []);


    return (
        <div>
        <div className='text-center mb-4 mt-12'>
            <p className="text-4xl font-bold text-orange-600">Services</p>
            <h2 className="text-5xl font-semibold">Our Service Area</h2>
            <p className='text-2xl'>the majority have suffered alteration in some form, by injected humour,<br /> or randomised words which don't look even slightly believable. </p>
        </div>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                services.map(service => <ServiceCard
                key={service._id}
                service={service}
                ></ServiceCard>)
            }

        </div>
    </div>
    );
};

export default AllServices;