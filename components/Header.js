import styles from "../styles/Header.module.css"
import {useState} from 'react'

export const Header = (props) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    return (
        <div className={styles.main}>
            <title>Dynamic Data NextJS Page</title>
            
            <div className={styles.leftContainer}>
                <h1 className={styles.rightTitleMessage}>
                    <strong>The Best {props.value?.service || "[service]"} Treatment In {props.value?.city || "[city]"}.</strong>
                </h1>
                <h3 className={styles.rightColoredMessage}>
                    <strong>Mobile. Painless. Comprehensive.</strong>
                </h3>
                <p className={styles.rightMessage}>
                    <span>Visit us, or we will travel to you - Schedule your in-clinic or mobile appointment today!</span>
                </p>
            </div>
            <div className={styles.rightContainer}>
                <h2 className={styles.leftTitleMessage}>Get {props.value?.service || "[service]"} Treatment Now!</h2>
                <p className={styles.leftMessage}>Let’s be healthy and confident. Fill out the form to schedule an appointment today.</p>
                <form className={styles.form}>
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
                        <button type="submit">Submit Information</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
