import "./home.css"

function card(props){
    let title = props.title
    let desc = props.description
    let tag = props.tags

    if((props.title).length > 40){
        title = (props.title).substring(0, 40) + "..."
    }
    if((props.description).length > 70){
        desc = (props.description).substring(0, 70) + "..."
    }
    if((props.tags).length > 4){
        tag = props.tags.filter((tag, index) => index < 4)
        tag = tag.join(", ") + "..."
    }
    tag = tag.join(", ");

    return(<div className="card" onClick={props.onClick}>
        <h4>{title}</h4>
        <p>{desc}</p>
        <h6>{tag}</h6>
    </div>)
}

export default card