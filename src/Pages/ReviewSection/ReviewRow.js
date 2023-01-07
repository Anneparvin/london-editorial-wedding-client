import React, { useEffect, useState } from "react";

const ReviewRow = ({ review, handleDelete, handleReviewUpdate}) => {
  const { _id, email, phone, customer, price, service, message,serviceName } =
    review;
  const [reviewService, setReviewService] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/services/${service}`)
      .then((res) => res.json())
      .then((data) => setReviewService(data));
  }, [service]);

  return (
  <>
    <tr>
      <th>
        <label>
          <button onClick={() => handleDelete(_id)} className="btn btn-ghost">
            X
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="rounded w-24 h-24">
              {reviewService?.img && (
                <img
                  src={reviewService.img}
                  alt="Avatar Tailwind CSS Component"
                />
              )}
            </div>
          </div>
          <div>
            <div className="font-bold">{customer}</div>
            <div className="text-sm opacity-50">{price}</div>
          </div>
        </div>
      </td>
      <td>
        <p className="font-bold">{email}</p>
        <p className="text-sm opacity-50">{phone}</p>
      </td>
      <td>{message}</td>
      <th>
      <label htmlFor="my-modal-3" className="btn">Edit Review</label>
       
      </th>
    </tr>
    {/* modal body */}

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <form onsubmit={(e)=>{
      e.preventDefault();
      handleReviewUpdate(e,_id,message)}}>
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">{serviceName}</h3>
     <div className="form-control">
     <textarea
                    className="block w-full border p-2"
                    name="message"
                    id="message"
                    rows="5"
                    placeholder="write your review here..."
                    defaultValue={message}
                    required
                ></textarea>
    </div>
    <button className="btn btn-success" type="submit">Update</button>
    </form>
</div>
</div>
  </>
  );
};

export default ReviewRow;
