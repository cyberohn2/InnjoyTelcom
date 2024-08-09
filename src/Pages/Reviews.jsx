import Testimonials from "../Components/Testimonials";
import { useState } from "react";

const Reviews = () =>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addReview({ name, email, message });
        setName('');
        setEmail('');
        setMessage('');
    };


    return(
        <div>
            <Testimonials />
            <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
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
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                    required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Review</label>
                    <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                    required
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Reviews;