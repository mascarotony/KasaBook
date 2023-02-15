//Utils
import React from 'react'
import { Link } from 'react-router-dom'

//Datas
import cardItems from '../../../assets/Datas/logements'

//Style
import './LogementCard.css'

//Function
function LogementCard() {
  return (
    <div className="CardList">
      {cardItems.map((item) => {
        return (
          <Link key={item.id} to={`/api/logement/${item.id}`}>
            <div className="Card">
              <img src={item.cover} alt={item.title} />
              <b>{item.title}</b>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default LogementCard
