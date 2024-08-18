// SendReview.js
import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const SendReview = () => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const name = searchParams.get('name');
    const title = searchParams.get('title');
    const content = searchParams.get('content');

    if (name && title && content) {
      // Construct the data object
      const reviewData = {
        name,
        title,
        content,
      };

      // Send the data to the API
      fetch('https://innjoytelcom-backend-production.up.railway.app/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviewData),
      })
        .then((response) => response.json())
        .then((data) => {
          alert('Review successfully sent!');
          console.log('Success:', data);
        })
        .catch((error) => {
          alert('Error sending review');
          console.error('Error:', error);
        });
    } else {
      alert('Missing required parameters');
    }
  }, [searchParams]);

  return (
    <div className="py-[56px] flex flex-col items-center justify-between gap-4 max-w-[1080px] mx-auto px-8">
      <h1 className="mb-[30px] text-[30px] font-semibold text-center">Processing your review...</h1>
      <p>This page is handling the submission of your review to our system.</p>
    </div>
  );
};

export default SendReview;
