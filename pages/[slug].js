import {Header} from "../components/Header"

export const Data = ({service, city}) => {
    return (
        <div>
            <Header value={{service, city}}/>
        </div>
    )
}

export const getServerSideProps = async (pageContext) => {
    const {slug: pageSlug} = pageContext.query

    if(!pageSlug) return {notFound: true}

    const query = encodeURIComponent(
        `*[ _type == "service" && slug.current == "${pageSlug}" ]{name, service, city}`
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

    console.log(result.result[0])

    const {name, service, city} = result.result[0]

    if(!service && !city) return {notFound: true}
    else return {
        props: {
            name: name,
            service: service,
            city: city
        }
    }
}

export default Data
