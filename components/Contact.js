import styles from "../styles/Contact.module.css"
import {useState} from 'react'

export const Contact = (props) => {
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
            <h2 className={styles.titleMessage}>{props.value?.service || "[service]"} in {props.value?.city || "[city]"}</h2>
            <p className={styles.message}>Book your appointment today!.</p>
            <form className={styles.formContainer} onSubmit={onSubmit}>
                <div className={styles.formFields}>
                    <input type="text" id="name" name="name" value={name} onChange={event => setName(event.target.value)} placeholder="Enter Your Full Name" required/>
                </div>

                <div className={styles.formFields}>
                    <input type="email" id="email" name="email" value={email} onChange={event => setEmail(event.target.value)} placeholder="Enter Your Email Address" required/>
                </div>

                <div className={styles.formFields}>
                    <input name="phone" id="phone" value={phone} onChange={event => setPhone(event.target.value)} placeholder="Enter Your Phone Number" required/>
                </div>

                <div className={styles.formFields}>
                    <button type="submit" disabled={disableButtonState}>Get Now</button>
                </div>
            </form>
            <div className={styles.spamMessage}>
                <span>* Do not worry. We hate SPAM as much as you do!</span>
            </div>
        </div>
    )
}
