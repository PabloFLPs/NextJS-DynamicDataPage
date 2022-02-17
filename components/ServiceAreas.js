import styles from "../styles/ServiceAreas.module.css"

export const ServiceAreas = () => {
    
  return (
    <div className={styles.main}>
        <h2 className={styles.title}>Services by Areas</h2>
        <div className={styles.container}>
            <div className={styles.itemsContainer}>
                <span>Skin Tag Removal:</span>
                <p/>
                <a href="#">Toronto, </a>
                <a href="#">Brampton, </a>
                <a href="#">New Tecumseth, </a>
                <a href="#">Whitchurch-Stouffville, </a>
                <span>and more...</span>
            </div>
            <div className={styles.itemsContainer}>
                <span>Mole Removal:</span>
                <p/>
                <a href="#">Toronto, </a>
                <a href="#">Brampton, </a>
                <a href="#">New Tecumseth, </a>
                <a href="#">Whitchurch-Stouffville, </a>
                <span>and more...</span>
            </div>
            <div className={styles.itemsContainer}>
                <span>Wart Removal:</span>
                <p/>
                <a href="#">Toronto, </a>
                <a href="#">Brampton, </a>
                <a href="#">New Tecumseth, </a>
                <a href="#">Whitchurch-Stouffville, </a>
                <span>and more...</span>
            </div>
        </div>
    </div>
  )
}
