// DeleteReviewForm.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const DeleteReviewForm = () => {
  const [reviewTitle, setReviewTitle] = useState('');
  const [message, setMessage] = useState('');
  const { title } = useParams(); // Get the title from the URL parameter

  useEffect(() => {
    if (title) {
      setReviewTitle(title);
      handleDelete(); // Automatically send the delete request if a title is provided in the URL
    }
  }, [title]);

  const handleDelete = (e) => {
    e?.preventDefault(); // Conditionally prevent default if event exists

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
      <h2 className="mb-[30px] text-lg sm:text-[30px] font-semibold">Delete a Review by Title</h2>
      <form className="flex flex-col items-start" onSubmit={handleDelete}>
      <label className="mb-1 block text-gray-600 text-sm" htmlFor="title">Enter Review Title</label>
          <div className="flex gap-2 p-2 rounded-lg bg-white border border-[#F3F3F3] w-full mb-4">
            <input
              id='title'
              className='outline-none w-full'
              type="text"
              value={reviewTitle}
              onChange={(e) => setReviewTitle(e.target.value)}
              required
            />
          </div>
        <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600" type="submit">Delete Review</button>
        <p>{message}</p>
      </form>

      
    </div>
  );
};

export default DeleteReviewForm;
