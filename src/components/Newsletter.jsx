import { useState } from "react";

const Newsletter = () => {
    const [signedUp, setSignedUp] = useState("")
    const [emailInput,setEmailInput] = useState("")

    const handleEmail = (e) => {
        setEmailInput(e.target.value)
    }

    const handleNewsLetter = () => {
        if (emailInput) {
           setSignedUp("You will now receive newletters") 
        } else {
            setSignedUp("Invalid Email or Email Not recgnised")
        }       
    }

    return (
        <section className="newsletter">
            <p>Sign up for Newsletter</p>
            <input placeholder="Email...." type="email" onChange={handleEmail} value={emailInput}></input>
            <p>{signedUp}</p>
            <button onClick={handleNewsLetter}>Sign Up</button>
        </section>
    )
}

export default Newsletter;
