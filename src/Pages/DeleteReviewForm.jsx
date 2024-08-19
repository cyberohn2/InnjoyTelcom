import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const DeleteReviewForm = () => {
  const { title } = useParams(); // Get the title from the URL parameters
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (title) {
      // Send the delete request immediately if title is available
      fetch('https://innjoytelcom-backend-production.up.railway.app/reviews', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title }),
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
    }
  }, [title]);

  return (
    <div className="py-[56px] flex flex-col items-center justify-between gap-4 max-w-[1080px] mx-auto px-8">
      <h2 className="mb-[30px] text-[30px] font-semibold">Delete a Review by Title</h2>
      <p>{message || `Attempting to delete review titled: ${title}`}</p>
    </div>
  );
};

export default DeleteReviewForm;
