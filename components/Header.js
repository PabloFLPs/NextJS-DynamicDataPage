

export const Header = (props) => {
    return (
        <div>
            <h1>Get {props.value?.service.name || "[service]"} to {props.value?.city.name || "[city]"} </h1>
        </div>
    )
}
