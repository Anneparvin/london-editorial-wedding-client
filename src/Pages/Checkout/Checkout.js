import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';


const Checkout = ({refetch}) => {
    const { _id, title, price } = useLoaderData();
    const { user } = useContext(AuthContext);
    const[rating,setRating] = useState(5);

    const handlePlaceReview = event => {
        event.preventDefault();
        const form = event.target;
        const email = user?.email || 'unregistered';
        const message = form.message.value;

        console.log(user);
        const review = {
            service: _id,
            serviceName: title,
            customer:user.displayName,
            img:user.photoURL,
            message,
            rating,
            email,
            publishTime:new Date().toLocaleString()

        }
        console.log(review);

        fetch('https://y-seven-mu.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('londonWeddb')}`
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    alert('Review placed successfully')
                    form.reset();
                    refetch();

                    }
                if(data > 0){
                    alert('No Reviews Were Added')
                }
            })
            .catch(er => console.error(er));


     }

    return (
        <div>
            <form onSubmit={handlePlaceReview}>
                <h2 className="text-4xl mt-12 p-12 text-center font-bold">Review's From Client's: {title}</h2>
                <h4 className="text-2xl text-center font-bold">Price: {price}</h4>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4'>

                <div className="rating rating-md">
                <input onClick={()=>setRating(1)} type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                <input onClick={()=>setRating(2)} type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                <input onClick={()=>setRating(3)} type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                <input onClick={()=>setRating(4)} type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                <input onClick={()=>setRating(5)} type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                </div>

                </div>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full mt-4" placeholder="Your Review" required></textarea>

                <input className='btn mt-4' type="submit" value="Place Your Review" />
            </form>
        </div>
    );
};

export default Checkout;