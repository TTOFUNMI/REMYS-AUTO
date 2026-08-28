import { useState } from "react"

const ContactForm = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmittedForm = (e) => {
        e.preventDefault()
        alert("submitted")
        console.log(name)
        console.log(email)
        console.log(message)
        setName("")
        setEmail("")
        setMessage("")
    }

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleMessage = (e) => {
        setMessage(e.target.value)
    }

    return (
        <form onSubmit={handleSubmittedForm}>
            <h1>Contact Form</h1>
            <div className="contact"><p>Name:</p><input onChange={handleName} value={name} type="text"></input></div>
            <div className="contact"><p>Email:</p><input onChange={handleEmail} value={email} type="email"></input></div>
            <div><p>What would you like us to know?</p><textarea onChange={handleMessage} value={message}></textarea></div>
            <button type="submit">Submit</button>

        </form>
    )
}

export default ContactForm;