import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    const [visible, setVisible] = useState(3);
    
    useEffect( () =>{
        fetch(`https://y-seven-mu.vercel.app/services`)
        .then(res =>res.json())
        .then(data => setServices(data))
    }, []);

    const showMore = () => {
        setVisible((preValue) => preValue * 3)
        }

    return (
        <div>
            <div className='text-center mb-4 mt-12'>
                <p className="text-4xl font-bold text-orange-600">Services</p>
                <h2 className="text-5xl font-semibold">Our Service Area</h2>
                <p className='text-2xl'>the majority have suffered alteration in some form, by injected humour,<br /> or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.slice(0, visible).map(service => <ServiceCard
                    key={service._id}
                    service={service}
                    ></ServiceCard>)
                }

                 {/* see all button */}
        <div className='text-center ml-96'>
            <Link to="/services">
            <button onClick={showMore} className="btn btn-primary btn-wide">See All</button>
            </Link>
       </div>

            </div>
        </div>
    );
};

export default Services;