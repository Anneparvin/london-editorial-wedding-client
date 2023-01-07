import React, { useContext } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const AddService = () => {
    const { user } = useContext(AuthContext);
    useTitle('AddService');

    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const img = form.img.value;
        const service= form.service.value;
        const place = form.place.value;
        const date = form.date.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const review_name = form.review_name.value;
        const review = form.review.value;
        const price = form.price.value;
       
        const services = {
            title:title,
            img:img,
            service: service,
            place:place,
            date:date,
            rating : rating,
            description: description,
            review_name: review_name,
            review: review,
            price:price,
            email:user.email,
            publishTime:new Date().toLocaleString()
        }
        console.log(services);

        fetch(`https://y-seven-mu.vercel.app/services`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('londonWeddb')}`
            },
            body: JSON.stringify(services)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    toast.success('Service placed successfully!', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                 });
                    form.reset();
                    
                }
            })
            .catch(er => console.error(er));
        }

    return (
        <div>
        
                <form onSubmit={handleAddService}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4'>
                    <input name="title" type="text" placeholder='title' className="input input-ghost w-full  input-bordered" />
                    <input name="img" type="text" placeholder='img' className="input input-ghost w-full  input-bordered" />
                    <input name="service" type="text" placeholder='service' className="input input-ghost w-full  input-bordered" />
                    <input name="place" type="text" placeholder='place' className="input input-ghost w-full  input-bordered" />
                    <input name="date" type="text" placeholder='date' className="input input-ghost w-full  input-bordered" />
                    <input name="rating" type="text" placeholder='rating' className="input input-ghost w-full  input-bordered" />
                    <input name="description" type="text" placeholder='description' className="input input-ghost w-full  input-bordered"/>
                    <input name="review_name" type="text" placeholder='review_name' className="input input-ghost w-full  input-bordered"/>
                    <input name="review" type="text" placeholder='review' className="input input-ghost w-full  input-bordered"/>
                    <input name="price" type="text" placeholder='price' className="input input-ghost w-full  input-bordered"/>
                </div>

                 <input className='btn mt-4' type="submit" value="Add Service" />
            </form>  
            <ToastContainer/>
        </div>
    );
};

export default AddService;