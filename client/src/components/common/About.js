import React from 'react'
import AboutSection from './AboutComp/AboutSection'
import { Navber, Footer } from '../shop/partials'

function About() {
  return (
    <>
    <Navber/>
        <div style={{marginTop:"100px"}}>
            <AboutSection/>
        </div>
    <Footer/>
    </>
  )
}

export default About