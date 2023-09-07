import React from "react"
import Contact from './Contact.jsx'
import data from '../data.js'

function App() { 

  const dataMap = data.map(point => { 
    return( 
      <Contact  
        img={point.img}
        name={point.name}
        phone={point.phone}
        email={point.email}
      />
    )
  })

  return ( 
    <div className="contacts-list"> 
      {dataMap}
    </div>
  )
}

export default App
