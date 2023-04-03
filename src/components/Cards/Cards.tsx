import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../Card/Card'
import LoadMore from '../LoadMore/LoadMore'
import './Cards.scss'

const Cards = () => {

  const status = useSelector((state: any) => state.status)
  const cards = useSelector((state: any) => state.currentBookList)

  // if ()

  return (
    <div className="cards">
      <div className="cards__wrapper">
        {
          status !== 'START' ? cards.map((card: IBook) => {
            return (
              <Card
                card={card}
                key={card.id}
              />
            )
          })
            : ''
        }
      </div>
      {
        status !== 'START' ? <LoadMore /> : ''
      }
    </div>
  )
}

export default Cards