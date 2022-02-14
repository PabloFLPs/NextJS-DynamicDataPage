import Image from 'next/image'
import styles from "../styles/Header.module.css"
import {useState} from 'react'

export const Header = (props) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const [disableButtonState, setDisableButtonState] = useState(false)

    async function onSubmit(event) {
        event.preventDefault()

        const formToBeSubmitted = {
            name: name,
            email: email,
            message: phone
        }

        setDisableButtonState(true)

        try {
            await axios.post("https://email-free-api.herokuapp.com/send-email", formToBeSubmitted)
        } catch (error) {}
        
        setDisableButtonState(false)
    }

    return (
        <div className={styles.main}>
            <div className={styles.leftContainer}>
                <h1>The Best {props.value?.service || "[service]"} Treatment In {props.value?.city || "[city]"}. </h1>
                <span>Mobile. Painless. Comprehensive.</span>
                <p>Visit us, or we will travel to you - Schedule your in-clinic or mobile appointment today!</p>
            </div>
            <div className={styles.rightContainer}>
                <h2>Get {props.value?.service || "[service]"} Treatment Now!</h2>
                <p>Let’s be healthy and confident. Fill out the form to schedule an appointment today.</p>
                <form className={styles.form} onSubmit={onSubmit}>
                    <div>
                        <input type="text" id="name" name="name" value={name} onChange={event => setName(event.target.value)} placeholder="Enter Your Full Name" required/>
                    </div>

                    <div>
                        <input type="email" id="email" name="email" value={email} onChange={event => setEmail(event.target.value)} placeholder="Enter Your Email Address" required/>
                    </div>

                    <div>
                        <input name="phone" id="phone" value={phone} onChange={event => setPhone(event.target.value)} placeholder="Enter Your Phone Number" required/>
                    </div>

                    <div>
                        <button type="submit" disabled={disableButtonState}>Submit Information</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
