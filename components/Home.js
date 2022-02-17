import styles from "../styles/Home.module.css"

import { HiOutlineSearch, HiOutlineSun } from "react-icons/hi";
import { AiFillCar } from "react-icons/ai";

import Image from 'next/image'

export const Home = (props) => {
    //console.log(props.value?.content)

    return (
        <div className={styles.main}>
            <div className={styles.slogan}>
                <h2 className={styles.titleMessage}>
                    <strong>WHY CHOOSE US</strong>
                </h2>
                <p className={styles.message}>
                    <span>{props.value?.service.replace("Removal", "") || "[service]"} appear in all shapes and sizes? We can help!</span>
                </p>
            </div>
            <div className={styles.iconsSection}>
                <div className={styles.itemsContainer}>
                    <HiOutlineSearch className={styles.icons}/>
                    <h3 className={styles.iconSectionTitle}>
                        <span>Full Body Skin Exams</span>
                    </h3>
                    <p className={styles.iconDescription}>
                        <span>Using cutting-edge dermoscopy techniques, let us be your safety net after all those years in the dangerous sun. Skin cancer is not your friend, but we are.</span>
                    </p>
                </div>
                <div className={styles.itemsContainer}>
                    <HiOutlineSun className={styles.icons}/>
                    <h3 className={styles.iconSectionTitle}>
                        <span>Free of Pain, Full of Comfort</span>
                    </h3>
                    <p className={styles.iconDescription}>
                        <span>Go back to wearing your favourite clothes, no more obstacles in your way! Guaranteed results, satisfied customers.</span>
                    </p>
                </div>
                <div className={styles.itemsContainer}>
                    <AiFillCar className={styles.icons}/>
                    <h3 className={styles.iconSectionTitle}>
                        <span>Doctor to You!</span>
                    </h3>
                    <p className={styles.iconDescription}>
                        <span>Mobile specialists offering in-home services as an option to you. Professional care in the comfort of your home.</span>
                    </p>
                </div>
            </div>
            <div className={styles.contactPhone}>
                <span>Do you need a FREE consultation? <strong>Call us now!</strong></span>
                <div className={styles.buttonContainer}>
                    <button type="button">Call Us: +1 (289) 206-0046</button>
                </div>
            </div>
            <div className={styles.imageContainer}>
                {props.value?.image && <Image className={styles.image} src={props.value?.image} width="720" height="480"/>}
            </div>
        </div>
    )
}
