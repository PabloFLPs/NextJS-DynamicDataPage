

export const Header = (props) => {
    return (
        <div>
            <h1>Get {props.value.service || "[service]"} to {props.value.city || "[city]"} </h1>
        </div>
    )
}
