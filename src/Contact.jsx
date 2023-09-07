import React from 'react' 

export default function Contact(props) { 
    console.log(props.availability)
    return (
    <div className="card contact-card">
        {props.availability === false && <div className='card--badge'>FULLY BOOKED</div>}
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