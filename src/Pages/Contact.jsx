import { useState } from "react";
import phoneIcon from "/phone-icon.svg";
import mailIcon from "/mail-icon.svg";
import locationIcon from "/location-icon.svg";
import fbIcon from "/icon-facebook.svg"
import IgIcon from "/icon-instagram.svg"
import XIcon from "/icon-twitter.svg"
import WhiteXIcon from "/icon-white-twitter.svg"

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validate = () => {
        let formErrors = {};
        if (!formData.name) formErrors.name = 'Name is required';
        if (!formData.message) formErrors.message = 'Message is required';
        return formErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formErrors = validate();

        if (Object.keys(formErrors).length === 0) {
            setIsSubmitting(true);
            setMessage('');

            fetch('http://localhost:5000/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Failed to send message');
                    }
                    return response.json();
                })
                .then((data) => {
                    setMessage(data.message);
                    setIsSubmitting(false);
                    setFormData({ name: '', message: '' }); // Reset form data after submission
                })
                .catch((error) => {
                    console.error('Error:', error);
                    setMessage('There was an error sending your message. Please try again later.');
                    setIsSubmitting(false);
                });
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <div id="contact" className="py-[56px] flex flex-col sm:flex-row justify-between gap-4 max-w-[1080px] mx-auto px-8">
            <div className="sm:w-[500px]">
                <h2 className="mb-[30px] text-[30px] font-semibold">Find us</h2>
                <div className="flex flex-col gap-[22px]">
                    <div className="p-[15px] rounded-[9px] bg-[#FBFBFB] border border-[#F3F3F3] flex items-center">
                        
                        <div>
                            <h3 className="mb-[6px] text-[15px] font-semibold">Call Us</h3>
                            <p className="text-[12px] text-[#666666]">234 90 766 123 10</p>
                        </div>
                    </div>
                    <div className="p-[15px] rounded-[9px] bg-[#FBFBFB] border border-[#F3F3F3] flex items-center">
                        
                        <div>
                            <h3 className="mb-[6px] text-[15px] font-semibold">Connect with Us</h3>
                            <div className="flex gap-6 items-center">
                                <a href=""><img src={fbIcon} alt="" /></a>
                                <a href=""><img src={IgIcon} alt="" /></a>
                                <a href=""><img src={XIcon} alt="" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="p-[15px] rounded-[9px] bg-[#FBFBFB] border border-[#F3F3F3] flex items-center">
                        
                        <div>
                            <h3 className="mb-[6px] text-[15px] font-semibold">Email Now</h3>
                            <p className="text-[12px] text-[#666666]">CustomerService@Innjoytelcom.com.ng</p>
                        </div>
                    </div>
                    <div className="p-[15px] rounded-[9px] bg-[#FBFBFB] border border-[#F3F3F3] flex items-center">
                        
                        <div>
                            <h3 className="mb-[6px] text-[15px] font-semibold">Address</h3>
                            <p className="text-[12px] text-[#666666]">Km 45/46 Lekki-Epe Expressway Near Ibeju-Lekki LGA Secretariat Igando-Oloja, Ibeju-Lekki Lagos</p>
                        </div>
                    </div>
                    <div className="p-[15px] rounded-[9px] bg-[#FBFBFB] border border-[#F3F3F3] flex items-center">
                        
                        <div>
                            <h3 className="mb-[6px] text-[15px] font-semibold">Postal Address</h3>
                            <p className="text-[12px] text-[#666666]">PMB 222 Ikota Post Office, Ikota Lekki, Lagos, Nigeria</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-[400px]">
                <div className="mb-[30px]">
                    <p className="text-[12px] mb-[6px]">Contact info</p>
                    <h2 className="text-[27px] font-semibold mb-[12px]">Keep In Touch</h2>
                    <p className="text-[12px] text-[#666666]">We prioritize responding to your inquiries promptly to ensure you
                    receive the assistance you need in a timely manner</p>
                </div>
                <form onSubmit={handleSubmit}>
                    {/* Form fields */}
                    <div className="mb-[22px] flex flex-col gap-[22px]">
                        {/* Name field */}
                        <div className="p-[14px] rounded-lg bg-white border border-[#F3F3F3] flex items-center">
                            <label className="mr-[9px] block" htmlFor="name">Name</label>
                            <input
                                className="outline-none w-full"
                                name="name"
                                id="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

                        {/* Message field */}
                        <div className="p-[14px] bg-white border border-[#F3F3F3] rounded-lg">
                            <label className="mb-[9px] block" htmlFor="message">Message</label>
                            <textarea
                                className="outline-none w-full"
                                cols="30"
                                rows="2"
                                name="message"
                                id="message"
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                    </div>

                    {/* Submit button */}
                    <button
                        className="py-[9px] px-[18px] rounded-[4.5px] bg-[#36B864] hover:bg-[#111D15] text-white"
                        type="submit"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Sending...' : 'Send'}
                    </button>
                    {message && <p className="mt-4">{message}</p>}
                </form>
            </div>
        </div>
    );
};

export default Contact;