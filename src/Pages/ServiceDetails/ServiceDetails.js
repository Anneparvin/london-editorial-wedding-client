import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOut from '../CheckOut/CheckOut';
import DisplayReview from '../DisplayReview/DisplayReview';
import ServiceSection from '../ServiceSection/ServiceSection';

const ServiceDetails = () => {
    const { _id, title,service, place,date,rating,price,description,img } = useLoaderData();
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
            _id={_id}
            ></DisplayReview>
            
            <CheckOut></CheckOut>
        </div>
    );
};

export default ServiceDetails;