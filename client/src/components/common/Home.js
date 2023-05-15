import React from 'react'
import { Footer, Navber } from '../shop/partials'
import SlideShow from './HomeComp/SlideShow'
import HomeAbout from './HomeComp/HomeAbout'

function Home() {
  return (
    <>
    <Navber/>
        <div style={{marginTop:"100px"}}>
            <SlideShow/>
            <HomeAbout/>
        </div>
    <Footer/>
    </>
  )
}

export default Home