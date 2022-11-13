import React from 'react';
import { Link } from 'react-router-dom';


const ServiceCard = ({service}) => {

    const { _id, img,description, title, price,rating,date } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className='w-96 h-80'src={img} alt="pic" /></figure>
            <div className="card-body">
                <h2 className="card-title text-4xl text-bold">{title}</h2>
                <p className='text-2xl font-semibold'>Rating:{rating}</p>
                <p className='text-2xl font-semibold'>Date:{date}</p>
                <p className='text-2xl font-semibold'>Description:{description.slice(0,20)}</p>
                <p className='text-2xl font-semibold'>Price:${price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/serviceDetails/${_id}`}>
                        <button className="btn btn-primary btn-wide mr-12">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;