import styles from "../styles/ServiceAreas.module.css"

export const ServiceAreas = () => {
    
    /*
    let hostName
    let hostProtocol
    
    if (typeof window !== "undefined"){
        hostName = window.location.host
        hostProtocol = window.location.protocol

        console.log(hostProtocol + "//" + hostName)
    }
    */
    
    return (
        <div className={styles.main}>
            <h2 className={styles.title}>Services by Areas</h2>
            <div className={styles.container}>
                <div className={styles.itemsContainer}>
                    <span>Skin Tag Removal:</span>
                    <p/>
                    <a href={"/s-toronto"}>Toronto, </a>
                    <a href={"/s-brampton"}>Brampton, </a>
                    <a href={"/s-new-tecumseth"}>New Tecumseth, </a>
                    <a href={"/s-whitchurch-stouffville"}>Whitchurch-Stouffville, </a>
                    <span>and more...</span>
                </div>
                <div className={styles.itemsContainer}>
                    <span>Mole Removal:</span>
                    <p/>
                    <a href={"/m-brampton"}>Toronto, </a>
                    <a href={"/m-brampton"}>Brampton, </a>
                    <a href={"/m-new-tecumseth"}>New Tecumseth, </a>
                    <a href={"/m-whitchurch-stouffville"}>Whitchurch-Stouffville, </a>
                    <span>and more...</span>
                </div>
                <div className={styles.itemsContainer}>
                    <span>Wart Removal:</span>
                    <p/>
                    <a href={"g-brampton"}>Toronto, </a>
                    <a href={"g-brampton"}>Brampton, </a>
                    <a href={"g-new-tecumseth"}>New Tecumseth, </a>
                    <a href={"g-whitchurch-stouffville"}>Whitchurch-Stouffville, </a>
                    <span>and more...</span>
                </div>
            </div>
        </div>
    )
}
