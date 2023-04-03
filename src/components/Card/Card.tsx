import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { CHANGE_STATUS, REQUEST_BOOK } from '../../store/actions'
import Author from '../Author/Author'
import './Card.scss'

interface IProps {
  card: IBook
}

const Card = ({ card }: IProps) => {

  const history = useNavigate()
  const dispatch = useDispatch()

  return (
    <div className="card"
      onClick={_e => {
        CHANGE_STATUS(dispatch, 'HAVEBOOK')
        REQUEST_BOOK(dispatch, card)
        history(`/book/${card.id}`)
      }}
    >
      <div className="card__picture">
        {
          card.volumeInfo.imageLinks
            ?
            <img className="card__img" src={card.volumeInfo.imageLinks.thumbnail} alt="Picture of Book" />
            :
            <div className="card__img-banner" />
        }
      </div>
      <p className="card__category">
        {
          card.volumeInfo.categories
            ?
            card.volumeInfo.categories[0]
            :
            ''
        }
      </p>
      <h3 className="card__title">
        {
          card.volumeInfo.title
            ?
            card.volumeInfo.title
            :
            ''
        }
      </h3>
      <ul className="card__authors">
        {
          card.volumeInfo.authors
            ?
            card.volumeInfo.authors.map((author: string) => {
              return <Author
                author={author}
                key={author.toLowerCase()}
              />
            })
            :
            ''
        }
      </ul>
    </div>
  )
}

export default Card