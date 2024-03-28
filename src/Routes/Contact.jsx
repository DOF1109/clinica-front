import React from 'react'
import Form from '../Components/Form'
import "./Contact.css"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div className='contact'>
      <h2 className='contact__text'>Want to know more?</h2>
      <p className='contact__text'>Send us your questions and we will contact you</p>
      <Form />
    </div>
  )
}

export default Contact