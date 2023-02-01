//Utils
import React from 'react'
import { Helmet } from 'react-helmet'

//Style
import './About.css'

//Function
function About() {
  return (
    <div className="AboutPage">
      <Helmet>
        <title>KasaBook | À Propos</title>
      </Helmet>
      <b className="AboutTitle">À Propos !</b>
    </div>
  )
}

export default About
