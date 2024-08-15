import { useState } from "react";
import OptionalNoForm from "./OptionalNoForm";

const SignInForm = () => {
    const [formData, setFormData] = useState([
        { firstName: "", lastName: "", phoneNumber: "", nin: "" }, // Pilot Account
        { firstName: "", lastName: "", phoneNumber: "", nin: "" }, // Secondary Airtel Line (Default)
    ]);

    const [errors, setErrors] = useState([
        {}, {}  // Initialized as an array of empty objects corresponding to formData
    ]);

    const [message, setMessage] = useState("");
    const [messageColor, setMessageColor] = useState("");

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
    
        const isValidForm = newErrors.every((userErrors) => Object.keys(userErrors).length === 0);
    
        return isValidForm;
    };
    

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            // Prepare data to send as JSON
            let formDataToSend = {};
        
            // Append each user's data individually with correct keys
            formData.forEach((user, index) => {
                formDataToSend[index] = user
            });
            console.log(JSON.stringify(formDataToSend))
    
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
            .then(data => {
                console.log('Success:', data);
                setMessage("You have successfully registered, you'll be contacted shortly.");
                setMessageColor("text-green-500");
            })
            .catch(error => {
                console.error('Error:', error);
                setMessage("There was an error submitting the form. Please try again.");
                setMessageColor("text-red-500 font-bold");
            });
    
            // Reset form data after successful submission
            // setFormData([
            //     { firstName: "", lastName: "", phoneNumber: "", nin: "" },
            //     { firstName: "", lastName: "", phoneNumber: "", nin: "" },
            // ]);
        }
    };
    


    return (
        <div id="contact" className="py-[56px] flex flex-col sm:flex-row-reverse sm:items-start justify-between gap-4 max-w-[1080px] mx-auto px-8 relative">
            <div className="basis-[40%] sm:sticky top-32">
                <h2 className="font-bold text-[2.5rem] leading-tight max-w-[400px]">Add More Numbers To Your Existing Account</h2>
                <p className="text-[12px] text-[#666666] max-w-[350px]">
                    <b>Fill in details of the Existing Pilot Account and the details of the number you want to add to it.</b> Airtel Lines and Details. <b>Phone Number</b>, <b>First Name</b>, <b>Last Name</b> and <b>NIN</b> of each user of the bonanza calls must be the same as captured by Airtel in their system during SIM registration.
                </p>
            </div>
            <div></div>
            <div className="basis-[50%]">
                <form onSubmit={handleSubmit}>
                    
                    {/* Render the first OptionalNoForm with title "Pilot Details To Add Number To" */}
                    <OptionalNoForm 
                        title="Pilot Details To Add Number To"
                        user={formData[0]} 
                        handleChange={(e) => handleChange(e, 0)} 
                        errors={errors[0]}  
                    />

                    {/* Render the secondary Airtel Line forms */}
                    {formData.slice(1).map((user, index) => (
                        <OptionalNoForm 
                            key={index + 1}
                            title={`Secondary Airtel Lines and Details`}
                            user={user} 
                            handleChange={(e) => handleChange(e, index + 1)} 
                            errors={errors[index + 1]}  
                        />
                    ))}
                    
                    <div className="flex gap-2 mt-6">
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

export default SignInForm;
