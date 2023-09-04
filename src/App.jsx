import React from "react"
import Contact from './Contact.jsx'

function App() {
  return (
    <div className='contacts'> 
      <Contact 
        img="./src/assets/classic.jpg" 
        name="estate"
        phone="(212) 555-1234"
        email="estate@gmail.com"
      />
      <Contact 
        img="./src/assets/rural.jpg" 
        name="bungalow"
        phone="(342) 009-3567"
        email="bungalow@gmail.com"
      />
      <Contact 
        img="./src/assets/modern.jpg" 
        name="modern house"
        phone="(567) 154-9977"
        email="modern@gmail.com"
      />
      <Contact 
        img="./src/assets/victorian.jpg" 
        name="vicorian"
        phone="(245) 099-4553"
        email="victorian@gmail.com"
      />
    </div>
  )
}

export default App
