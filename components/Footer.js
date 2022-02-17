import styles from "../styles/Footer.module.css"

export const Footer = (props) => {
    
  return (
    <div className={styles.main}>
        <div className={styles.leftContainer}>
            <h3>
                <a href="#">{props.value?.service} Near Me!</a>
            </h3>
            <p>We provides you with a full user management functionality that results in faster development, faster revenue, user and the ability to serve your users better engaging efficiently.</p>
        </div>
        <div className={styles.rightContainer}>
            <h3>Get in Touch</h3>
            <a href="#">Contact Us</a>
            <p/>
            <a href="#">Privacy Policy</a>
        </div>
    </div>
  )
}
