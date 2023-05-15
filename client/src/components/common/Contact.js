import React from 'react'
import ContactUs from './ContactComp/ContactUs'
import { Navber, Footer } from '../shop/partials'

function Contact() {
  return (
    <>
    <Navber/>
        <div style={{marginTop:"100px"}}>
            <ContactUs/>
        </div>
    <Footer/>
    </>
  )
}

export default Contact