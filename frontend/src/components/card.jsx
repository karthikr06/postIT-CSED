import "../pages/home/home.css"

function Card(props){
    let title = props.title || "Untitled Resource";
    let desc = props.description || "No description provided.";
    let category = props.category || "General"; 

    if(title.length > 40){
        title = title.substring(0, 40) + "..."
    }
    if(desc.length > 70){
        desc = desc.substring(0, 70) + "..."
    }

    return(
        <div className="card" onClick={props.onClick}>
            <h4>{title}</h4>
            <p>{desc}</p>
            <h6>{category}</h6>
        </div>
    )
}

export default Card