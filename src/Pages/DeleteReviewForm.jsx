// DeleteReviewForm.js
import React, { useState } from 'react';

const DeleteReviewForm = () => {
  const [reviewTitle, setReviewTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleDelete = (e) => {
    e.preventDefault();

    fetch('https://innjoytelcom-backend-production.up.railway.app/reviews', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: reviewTitle }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setMessage(`Error: ${data.error}`);
        } else {
          setMessage('Review deleted successfully');
        }
      })
      .catch((error) => {
        setMessage(`Error: ${error.message}`);
      });
  };

  return (
    <div className="py-[56px] flex flex-col items-center justify-between gap-4 max-w-[1080px] mx-auto px-8">
      <h2 className="mb-[30px] text-[30px] font-semibold">Delete a Review by Title</h2>
      <form onSubmit={handleDelete}>

        <div className="flex flex-col items-start mb-4">
            <label className="mb-1 block text-gray-600 text-sm" htmlFor="review-title">Review Title:</label>
            <div className="flex gap-2 p-2 rounded-lg bg-white border border-[#F3F3F3] w-full">
              <input
                id='review-title'
                className="outline-none w-full"
                type="text"
                value={reviewTitle}
                onChange={(e) => setReviewTitle(e.target.value)}
                required
              />
            </div>
        </div>
        <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600" type="submit">Delete Review</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default DeleteReviewForm;
