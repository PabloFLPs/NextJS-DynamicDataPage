import styles from "../styles/RatingsSection.module.css"

import Image from 'next/image'

import ratings from "../public/assets/rating-stars.png"

export const RatingsSection = () => {
  return (
    <div className={styles.main}>
        <h3 className={styles.title}>People Loved Our Services</h3>

        <div className={styles.itemsContainer}>
            <div>
                <span>I got the genital wart about one and a half years ago. I went to see a doctor and she removed warts and it was fully gone in a month time.</span>
                <p>Via Google Reviews</p>
                <Image src={ratings} width={"100px"} height={"40px"}/>
            </div>
            <div className={styles.darkBlue}>
                <span>Some pain, completely worth it! Cannot believe I did not have it done years ago. Would have been a scalpel job on the NHS so very pleased with this outcome. Bled for a couple of days but that was it! Almost immediately healed!</span>
                <p>Via Yelp.ca</p>
                <Image src={ratings} width={"100px"} height={"40px"}/>
            </div>
            <div>
                <span>Excellent treatment, everything went so easy and smooth, great balance between experience and politeness. He explained everything I wanted to know during the consultation and had no problem after the intervention.</span>
                <p>Via Google Maps</p>
                <Image src={ratings} width={"100px"} height={"40px"}/>
            </div>
        </div>
    </div>
  )
}
