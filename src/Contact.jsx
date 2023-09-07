import React from 'react' 

export default function Contact(props) {  

    let textBadge

    if (props.availability === false) { 
        textBadge = "No Availability"
    } else if (props.rating > 4.5) { 
        textBadge = props.rating
    }
    
    return (
        <div className="card contact-card">
            {textBadge && <div className='card--badge'>{textBadge}</div>}
            <img src={props.img}/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src="" />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src="" />
                <p>{props.email}</p>
            </div>
        </div>
    )
}