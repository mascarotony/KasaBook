//utils
import React from 'react'
import { Helmet } from 'react-helmet'

//Components
import Nav from '../../Components/Nav/Nav'

//Assets
import homeBanner from '../../assets/HomeBanner.jpg'

//Style
import './Home.css'

//Function
function Home() {
  return (
    <div className="HomePage">
      <Helmet>
        <title>KasaBook | Accueil</title>
      </Helmet>
      <Nav />
      <b className="Title">KasaBook</b>
      <div className="homeBanner">
        <p>Partagez vos lieux favoris !</p>
        <img src={homeBanner} alt="Bannière accueil" />
      </div>
    </div>
  )
}

export default Home
