import styles from "../styles/ServiceData.module.css"

import {Header} from "../components/Header"
import {Home} from "../components/Home"
import {Contact} from "../components/Contact"
import {RatingsSection} from "../components/RatingsSection"
import {ServiceAreas} from "../components/ServiceAreas"
import {Footer} from "../components/Footer"

import BlockContent from '@sanity/block-content-to-react'

export const Data = ({name, service, city, image, content}) => {

    return (
        <div>
            <Header value={{name, service, city, image}}/>
            <Home value={{name, service, city, image}}/>

            <div className={styles.serviceData}>
                <h1 className={styles.serviceTitle}>{service || "[service]"} in {city || "[city]"}</h1>
                <BlockContent className={styles.blockContent} blocks={content}/>
            </div>

            <Contact value={{name, service, city, image}}/>
            <RatingsSection/>
            <ServiceAreas/>
            <Footer value={{name, service, city, image}}/>
        </div>
    )
}

export const getServerSideProps = async (pageContext) => {
    const {slug: pageSlug} = pageContext.params

    if(!pageSlug) return {notFound: true}

    const query = encodeURIComponent(
        `*[ _type == "service" && slug.current == "${pageSlug}" ]{name, service, city, image, content}`
    )

    /*
        example:
        https://vq7ukn0r.api.sanity.io/v1/data/query/production?query=*%5B%20_type%20%3D%3D%20%22service%22%20%26%26%20slug.current%20%3D%3D%20%22m-toronto%22%20%5D%7Bname%2C%20service%2C%20city%7D
    */

    const url = `https://vq7ukn0r.api.sanity.io/v1/data/query/production?query=${query}`

    const result = await fetch(url)
        .then((res) => res.json())
        .catch((error) => {
            return {notFound: true}
        })

    const {name, service, city, image, content} = result.result[0]

    const imageSrc = image.asset._ref.replace("image-","").split("").reverse().join("").replace("-",".").split("").reverse().join("")
    const serviceImage = `https://cdn.sanity.io/images/vq7ukn0r/production/${imageSrc}`

    if(!service && !city) return {notFound: true}
    else return {
        props: {
            name: name,
            service: service,
            city: city,
            image: serviceImage,
            content: content,
        }
    }
}

export default Data
