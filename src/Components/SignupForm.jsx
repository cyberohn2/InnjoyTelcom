import { useState } from "react";
import UserForm from "./UserForm";
import OptionalNoForm from "./OptionalNoForm";
import { Link, useLocation } from "react-router-dom";

const SignupForm = () => {
    const location = useLocation();
    const chosedPackage = location.state;
    
    const [formData, setFormData] = useState([
        { firstName: "", lastName: "", phoneNumber: "", nin: "", utilityBill: null, ninSlip: null }, // Pilot Account
        { firstName: "", lastName: "", phoneNumber: "", nin: "" }, // Phone 2 (Default Optional Number)
    ]);

    const [errors, setErrors] = useState([{}, {}]);
    const [message, setMessage] = useState("");
    const [messageColor, setMessageColor] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false); // State to handle submission status

    const handleChange = (e, index) => {
        const { name, value, files } = e.target;
        const newFormData = [...formData];
        const newErrors = [...errors];

        if (files) {
            const file = files[0];
            const validTypes = ["image/jpeg", "image/jpg", "image/png", "application/pdf"];

            if (file && !validTypes.includes(file.type)) {
                newErrors[index] = {
                    ...newErrors[index],
                    [name]: "Invalid file type. Only JPG, PNG, and PDF files are allowed.",
                };
                newFormData[index][name] = null;
            } else {
                newErrors[index][name] = null;
                newFormData[index][name] = file;
            }
        } else {
            newFormData[index][name] = value;
        }

        setFormData(newFormData);
        setErrors(newErrors);
    };

    const handleAddNewNumber = (e) => {
        e.preventDefault();
        setFormData([...formData, { firstName: "", lastName: "", phoneNumber: "", nin: "" }]);
        setErrors([...errors, {}]);
    };

    const validate = () => {
        const newErrors = formData.map((user, index) => {
            const userErrors = {};
            if (!user.firstName) userErrors.firstName = "First Name is required";
            if (!user.lastName) userErrors.lastName = "Last Name is required";
            if (!user.phoneNumber) userErrors.phoneNumber = "AIRTEL Phone Number is required";
            if (!user.nin) userErrors.nin = "NIN Number is required";
            
            if (index === 0) {
                if (!user.utilityBill) userErrors.utilityBill = "Utility Bill is required";
                if (!user.ninSlip) userErrors.ninSlip = "NIN Slip is required";
            }

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

            const formDataToSend = new FormData();
            formDataToSend.append(formData.length, JSON.stringify(chosedPackage));

            formData.forEach((user, index) => {
                const formattedData = { [index]: user };
                formDataToSend.append(index, JSON.stringify(formattedData));

                if (index === 0) {
                    if (user.utilityBill) {
                        formDataToSend.append(`utilityBill`, user.utilityBill);
                    }
                    if (user.ninSlip) {
                        formDataToSend.append(`ninSlip`, user.ninSlip);
                    }
                }
            });

            fetch('https://innjoy-signup-production.up.railway.app/submit-form', {
                method: 'POST',
                body: formDataToSend,
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to submit form");
                }
                return response.json();
            })
            .then(() => {
                setMessage("You have successfully registered, you'll be contacted shortly.");
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
            <div className="basis-[40%] sm:sticky top-32">
                <h2 className="font-bold text-[2.5rem] leading-tight max-w-[400px]">Join the AIRTEL CALL BONANZA of InnJoy Telcom</h2>
                <p className="text-[12px] text-[#666666] max-w-[350px]">
                    Airtel Lines and Details. <b>Phone Number</b>, <b>First Name</b>, <b>Last Name</b> and <b>NIN</b> of each user of the bonanza calls must be the same as captured by Airtel in their system during SIM registration.
                </p>
            </div>
            <div></div>
            <div className="basis-[50%]">
                <form onSubmit={handleSubmit}>
                    <h3 className="font-semibold text-xl mb-4">Register for a {chosedPackage.package} package <Link className="underline text-blue-500" to="/select-plan">Change Plan</Link></h3>
                    <p className="text-sm font-semibold text-gray-600 mb-6">Are you already a subscriber? <Link className="underline text-blue-500" to="/sign-in#contact">Add new number to your account</Link></p>
                    <p><a className="text-green-500 underline font-bold" href="https://wa.me/+2349076612310?text=Hi+there,+I+just+added+a+new+number+to+my+subscription+and+would+like+to+make+the+payment+for+it">CONTACT US ON WHATSAPP FOR PAYMENT AFTER REGISTERING</a></p>

                    <UserForm 
                        user={formData[0]} 
                        handleChange={(e) => handleChange(e, 0)} 
                        errors={errors[0]}  
                    />

                    {formData.slice(1).map((user, index) => (
                        <OptionalNoForm 
                            key={index + 1}
                            title={`Phone ${index + 2}`}
                            user={user} 
                            handleChange={(e) => handleChange(e, index + 1)} 
                            errors={errors[index + 1]}  
                        />
                    ))}

                    <div className="flex gap-2">
                        <button onClick={handleAddNewNumber} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                            Add New Number
                        </button>
                        <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
                            Submit
                        </button>
                    </div>
                    {message && <p className={`${messageColor} mt-4`}>{message}</p>}
                </form>
            </div>
        </div>
    );
};

export default SignupForm;
