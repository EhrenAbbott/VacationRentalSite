import React from "react"
import Contact from './Contact.jsx'
import data from '../data.js'

export default function App() { 

  const dataMap = data.map(point => { 
    return( 
      <Contact
        key={point.id}  
        img={point.img}
        name={point.name}
        phone={point.phone}
        email={point.email}
        availability={point.availability}
        rating={point.rating}
      />
    )
  })

  return ( 
    <div className="contacts-list"> 
      {dataMap}
    </div>
  )
}