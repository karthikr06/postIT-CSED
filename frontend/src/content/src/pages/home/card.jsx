import "./home.css"

function card(props){
    let title = props.title
    let desc = props.description
    let tag = props.tags

    if((props.title).length > 20){
        title = (props.title).substring(0, 20) + "..."
    }
    if((props.description).length > 70){
        desc = (props.description).substring(0, 70) + "..."
    }
    if((props.tags).length > 2){
        tag = props.tags.filter((tag, index) => index < 2)
        tag = tag.join(", ") + "..."
    }

    return(<div className="card" onClick={props.onClick}>
        <img />
        <h4>{title}</h4>
        <p>{desc}</p>
        <h6>{tag}</h6>
    </div>)
}

export default card