import SignInForm from "../Components/SignInForm";


const SignIn = () =>{
    useEffect(() => {
        document.title = "Add Number To Existing Account - InnjoyTelcom"; 
      }, []);
    return(
        <>
            <SignInForm />
        </>
    )
}

export default SignIn;