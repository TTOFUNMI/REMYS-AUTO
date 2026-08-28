import { useState } from "react";

const FAQ = () => {
    const [q1,setQ1] = useState("")
    const [q2,setQ2] = useState("")
    const [q3,setQ3] = useState("")
    const [q4,setQ4] = useState("")

    const showQ1Ans = () => {
      if (!q1) {
        setQ1("Yes, we are.")
        setQ4("")
        setQ3("")
        setQ2("")
      } else {
        setQ1("")
      }
    }

    const showQ2Ans = () => {
       if (!q2) {
        setQ2("Yes, you can.")
        setQ1("")
        setQ3("")
        setQ4("")
      } else {
        setQ2("")
      } 
    }

    const showQ3Ans = () => {
      if (!q3) {
        setQ3("Yes, we do provide warranty.")
        setQ1("")
        setQ4("")
        setQ2("")
      } else {
        setQ3("")
      }
    }

    const showQ4Ans = () => {
      if (!q4) {
        setQ4("Yes you can,we insist")
        setQ1("")
        setQ3("")
        setQ2("")
      } else {
        setQ4("")
      }
    }


    return (
        <section>
            <h1>FAQ ?</h1>
            <div>
                <div className="questions">
                    <h3>Are you Certified?</h3>
                    <button onClick={showQ1Ans}>{q1 ? "-" : "+"}</button>
                </div>
                <p>{q1}</p>
            </div>
            <div>
                <div className="questions">
                    <h3>Can i come with my mechanic?</h3>
                    <button onClick={showQ2Ans}>{q2 ? "-" : "+"}</button>
                </div>
                <p>{q2}</p>
            </div>
            <div>
                <div className="questions">
                    <h3>Do you have a warranty</h3>
                    <button onClick={showQ3Ans}>{q3 ? "-" : "+"}</button>
                </div>
                <p>{q3}</p>
            </div>
            <div>
                <div className="questions">
                    <h3>Can i come for inspection?</h3>
                    <button onClick={showQ4Ans}>{q4 ? "-" : "+"}</button>
                </div>
                <p>{q4}</p>
            </div>
        </section>
    )
}

export default FAQ;