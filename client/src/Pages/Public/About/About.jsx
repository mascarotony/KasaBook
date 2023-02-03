//Utils
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

//Assets
import Panel from '../../../Components/Public/DropPanel/DropPanel'

//Datas
import AboutItems from '../../../assets/Datas/AboutItem'

//Style
import './About.css'

//Function
function About() {
  const Items = AboutItems()
  const [mode, setMode] = useState('desktop')

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setMode('desktop')
    } else {
      setMode('mobile')
    }
    window.addEventListener('resize', onResize)

    function onResize() {
      if (window.innerWidth >= 768 && mode === 'mobile') {
        setMode('desktop')
      }
      if (window.innerWidth < 768 && mode === 'desktop') {
        setMode('mobile')
      }
    }
  }, [mode])

  return (
    <div className="AboutPage">
      <Helmet>
        <title>KasaBook | À Propos</title>
      </Helmet>
      <b className="AboutTitle">À Propos !</b>
      {Items.map((item) => {
        return <Panel title={item.title} texte={item.text} key={item.id} />
      })}
    </div>
  )
}

export default About
