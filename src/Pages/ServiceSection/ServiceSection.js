import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceSection = () => {
    const { _id, title,service, place,date,rating,price,description,img } = useLoaderData();

    return (

        <div className="card w-40rem h-40rem mt-12 p-12 bg-base-100 shadow-xl">
            <h2 className='text 6xl font-bold text-center mt-4'>View Details About Services</h2>
  <figure><img className='w-11/12 h-1/5 rounded-lg' src={img} alt="pic" /></figure>
  <div className="card-body">
    <h2 className="card-title text-4xl font-bold text-center ">
      {title}
      <div className="badge badge-secondary">LONDON_WEDDING</div>
    </h2>
    <p className='text 4xl font-bold'>Id: {_id}</p>
    <p className='text-2xl font-bold'>{description}</p>
    <p className='text-2xl font-bold mt-4'>Service_Name: {service}</p>
    <p className='text-4xl font-bold mt-4'>Place: {place}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{date}</div> 
      <div className="badge badge-outline">{rating}</div> 
      <div className="badge badge-outline">{price}</div>
    </div>
  </div>
</div>
         
        
             
    );
};

export default ServiceSection;