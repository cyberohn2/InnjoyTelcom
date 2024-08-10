import ReviewItem from "../Components/ReviewItem";
import Cta from "../Components/Cta"
import { useState, useEffect } from "react";

const Reviews = () => {
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [reviews, setReviews] = useState([]);

    // Function to fetch reviews from the backend
    const fetchReviews = async () => {
        try {
            const response = await fetch('https://innjoytelcom-backend-production.up.railway.app/reviews');
            if (!response.ok) {
                throw new Error('Failed to fetch reviews');
            }
            const data = await response.json();
            setReviews(data);
        } catch (error) {
            console.error('Error fetching reviews:', error);
        }
    };

    // Function to add a review to the backend
    const addReview = async (review) => {
        try {
            const response = await fetch('https://innjoytelcom-backend-production.up.railway.app/reviews', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(review),
            });
            if (!response.ok) {
                throw new Error('Failed to submit review');
            }
            const newReview = await response.json();
            // Add the new review to the existing list of reviews
            setReviews([newReview, ...reviews]);
        } catch (error) {
            console.error('Error submitting review:', error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addReview({ name, title, content });
        setName('');
        setTitle('');
        setContent('');
    };

    useEffect(() => {
        fetchReviews();
    }, []); // Empty dependency array means this effect runs once on mount

    return (
                <div className="max-w-[1440px] mx-auto px-8">
                    <h1 className="text-xl font-bold mb-4">Here's What Our Customers Are Saying About Us</h1>
                            <div className="flex flex-col md:flex-row">
                                {/* Reviews List */}
                                <div className="flex-1 md:w-1/2 overflow-auto max-h-screen p-4">
                    <div className="space-y-4">
                        {reviews.length > 0 ? (
                            reviews.map((review) => (
                                <ReviewItem
                                    key={review._id}
                                    title={review.title}
                                    content={review.content}
                                    user={review.name}
                                />
                            ))
                        ) : (
                            <p>No reviews available</p>
                        )}
                    </div>
                                </div>
                    
                                {/* Review Form */}
                                <div className="basis-[40%] p-4">
                    <h1 className="text-xl font-bold mb-4">Write a Review</h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Title</label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Review</label>
                            <textarea
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                                required
                            />
                        </div>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
                            Submit
                        </button>
                    </form>
                                </div>
                            </div>
                            <Cta />
                </div>
    );
};

export default Reviews;