import SignupForm from "../Components/SignupForm";
import { useEffect } from "react"


const SignUp = () =>{
    useEffect(() => {
        document.title = "Create New Account - InnjoyTelcom"; 
      }, []);

    return(
        <>
            <SignupForm />
        </>
    )
}

export default SignUp;

// make the pricing page show before the sign up page 