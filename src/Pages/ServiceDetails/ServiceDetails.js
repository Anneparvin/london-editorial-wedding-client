import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOut from '../CheckOut/CheckOut';
import DisplayReview from '../DisplayReview/DisplayReview';
import ServiceSection from '../ServiceSection/ServiceSection';

const ServiceDetails = () => {
    const { _id, title,service, place,date,rating,price,description,img } = useLoaderData();
    const[review,setReview] = useState([]);

    const { data = [], refetch, isLoading} = useQuery({
        queryKey: ['service',_id],
        queryFn: async () => {
            const res = await fetch(`https://y-seven-mu.vercel.app/service-reviews?service=${_id}`)
            const data = await res.json();
            setReview(data)
        }
    });
    console.log(data);

    if(isLoading){
        return <progress className="progress w-56"></progress>
    }
    return (
        <div>
            <ServiceSection
                place={place}
                title={title}
                service={service}
                date={date}
                rating={rating}
                price={price}
                description={description}
                img={img}
            ></ServiceSection>

            <DisplayReview
            review={review}
            _id={_id}
            ></DisplayReview>
            
            <CheckOut
            refetch={refetch}
            ></CheckOut>
        </div>
    );
};

export default ServiceDetails;