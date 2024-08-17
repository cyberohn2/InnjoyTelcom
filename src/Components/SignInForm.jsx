import { useState } from "react";
import OptionalNoForm from "./OptionalNoForm";
import { Link } from "react-router-dom";

const SignInForm = () => {
    const [formData, setFormData] = useState([
        { firstName: "", lastName: "", phoneNumber: "", nin: "" }, // Pilot Account
        { firstName: "", lastName: "", phoneNumber: "", nin: "" }, // Secondary Airtel Line (Default)
    ]);

    const [errors, setErrors] = useState([{}, {}]); // Initialize errors array
    const [message, setMessage] = useState("");
    const [messageColor, setMessageColor] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false); // State to handle submission status

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const newFormData = [...formData];
        newFormData[index][name] = value;

        setFormData(newFormData);
    };

    const handleAddNewNumber = (e) => {
        e.preventDefault();
        setFormData([...formData, { firstName: "", lastName: "", phoneNumber: "", nin: "" }]);
        setErrors([...errors, {}]); // Extend errors array to match the form data
    };

    const validate = () => {
        const newErrors = formData.map((user) => {
            const userErrors = {};
            if (!user.firstName) userErrors.firstName = "First Name is required";
            if (!user.lastName) userErrors.lastName = "Last Name is required";
            if (!user.phoneNumber) userErrors.phoneNumber = "AIRTEL Phone Number is required";
            if (!user.nin) userErrors.nin = "NIN Number is required";

            return userErrors;
        });

        setErrors(newErrors);

        return newErrors.every((userErrors) => Object.keys(userErrors).length === 0);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSubmitting) return; // Prevent multiple submissions

        if (validate()) {
            setIsSubmitting(true); // Set submitting status
            setMessage("Submitting, please wait...");
            setMessageColor("text-blue-500");

            // Prepare data to send as JSON
            let formDataToSend = {};

            // Append each user's data individually with correct keys
            formData.forEach((user, index) => {
                formDataToSend[index] = user;
            });

            fetch('https://innjoy-signup-production.up.railway.app/sign-in', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formDataToSend),
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to submit form");
                }
                return response.json();
            })
            .then(() => {
                setMessage("Registration Successfull, contact us on whatsapp to make your payment.");
                setMessageColor("text-green-500");
                setFormData([
                    { firstName: "", lastName: "", phoneNumber: "", nin: "" },
                    { firstName: "", lastName: "", phoneNumber: "", nin: "" },
                ]);
            })
            .catch(() => {
                setMessage("There was an error submitting the form. Please try again.");
                setMessageColor("text-red-500 font-bold");
            })
            .finally(() => {
                setIsSubmitting(false); // Reset submitting status
            });
        }
    };

    return (
        <div id="contact" className="py-[56px] flex flex-col sm:flex-row-reverse sm:items-start justify-between gap-4 max-w-[1080px] mx-auto px-8 relative">
            <div className="basis-[40%] sm:sticky top top-20">
                <h2 className="font-bold text-2xl sm:text-[2.5rem] leading-tight max-w-[400px]">Add More AIRTEL Lines To Your Existing Account</h2>
                <p className="text-[12px] text-[#666666] max-w-[350px]">
                    Fill in details of the Existing Pilot Account and the details of the number you want to add to it. Phone Number, First Name, Last Name and NIN of each user of the bonanza calls must be the same as captured by Airtel in their system during SIM registration.
                </p>
            </div>
            <div></div>
            <div className="basis-[50%]">
                <form onSubmit={handleSubmit}>
                    <p className="text-sm font-semibold text-gray-600 mb-6">New Subscriber? <Link className="underline text-blue-500" to="/select-plan">Create New Account</Link></p>
                    <p><a className="text-green-500 underline font-bold" href="https://wa.me/+2349076612310?text=Hi+there,+I+just+added+a+new+number+to+my+subscription+and+would+like+to+make+the+payment+for+it">CONTACT US ON WHATSAPP FOR PAYMENT AFTER REGISTERING</a></p>
                    <OptionalNoForm 
                        title="Pilot Details To Add Number To"
                        user={formData[0]} 
                        handleChange={(e) => handleChange(e, 0)} 
                        errors={errors[0]}  
                    />

                    {formData.slice(1).map((user, index) => (
                        <OptionalNoForm 
                            key={index + 1}
                            title="Secondary Airtel Lines and Details"
                            user={user} 
                            handleChange={(e) => handleChange(e, index + 1)} 
                            errors={errors[index + 1]}  
                        />
                    ))}

                    <div className="flex gap-2 mt-6">
                        <button onClick={handleAddNewNumber} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                            Add New Number
                        </button>
                        <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600" disabled={isSubmitting}>
                            Submit
                        </button>
                    </div>
                    {message && <p className={`${messageColor} mt-4`}>{message}</p>}
                </form>
            </div>
        </div>
    );
};

export default SignInForm;
