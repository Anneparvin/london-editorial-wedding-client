import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";
import ReviewRow from "./ReviewRow";

const ReviewSection = () => {
  const { user, logOut } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useTitle("ReviewSection");

  useEffect(() => {
    if (user?.email) {
      fetch(`https://y-seven-mu.vercel.app/reviews?email=${user?.email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("londonWeddb")}`,
        },
      })
        .then((res) => {
          if (res.message === 401 || res.message === 403) {
            // return logOut();
            console.log(res.message);
          }
          return res.json();
        })
        .then((data) => {
          setReviews(data);
        });
    }
  }, [user?.email, logOut]);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to cancel this reviews"
    );
    if (proceed) {
      fetch(`https://y-seven-mu.vercel.app/reviews/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("londonWeddb")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remaining = reviews.filter((review) => review._id !== id);
            setReviews(remaining);
          }
        });
    }
  };

  const handleReviewUpdate = (e,id,message) => {
    e.preventDefault();
    // console.log(id,message)
    fetch(`http://localhost:5000/reviews/${reviews.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("londonWeddb")}`,
      },
      body: JSON.stringify({reviews}),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = reviews.filter((review) => review._id !== id);
          const approving = reviews.find((review) => review._id === id);
          approving.message = "Approved";

          const newReviews = [approving, ...remaining];
          setReviews(newReviews);
          alert('user updated successfully');
        }
      });
  };

 

  return (
    <div>
      {
        reviews?.length === 0 ? 
        <h2 className="text-3xl text-slate-500 font-semibold text-center mt-20">
        "NO REVIEWS WERE ADDED"
        </h2> : <h2 className="text-3xl text-slate-500 font-semibold text-center mt-20">
        You Have {reviews.length} Reviews
        </h2>
      }

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Reviews</th>
              <th>Update Review</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {reviews?.map((review) => (
              <ReviewRow
                key={review._id}
                review={review}
                handleDelete={handleDelete}
                handleReviewUpdate={handleReviewUpdate}
              ></ReviewRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReviewSection;
