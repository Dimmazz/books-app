import axios from 'axios'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import LoadBook from '../../Loaders/LoadBook/LoadBook'
import { CHANGE_STATUS, REQUEST_BOOK } from '../../store/actions'
import { KEYAPI, URLAPI } from '../../vars'
import Author from '../Author/Author'
import './Book.scss'

const Book = () => {

  const dispatch = useDispatch()
  const bookID = useParams().id

  const status = useSelector((state: any) => state.status)
  const book = useSelector((state: any) => state.currentBook)

  const requestBook = () => {
    const url = `${URLAPI}/${bookID}?key=${KEYAPI}`

    axios.get(url)
      .then((res) => {
        CHANGE_STATUS(dispatch, 'HAVEBOOK')
        REQUEST_BOOK(dispatch, res.data)
        return
      })
  }

  if (status === 'START') {
    requestBook()
  }

  console.log(book);
  if (book.volumeInfo === undefined) {
    return <LoadBook />
  }

  return (
    <div className="book">
      <div className="book__picture">
        {
          book.volumeInfo.imageLinks
            ?
            <img className="book__img" src={book.volumeInfo.imageLinks.
              thumbnail} alt="Picture of Book" />
            :
            <div className="book__img-banner" />
        }
      </div>
      <div className="book__wrapper">
        <h2 className="book__title">
          {book.volumeInfo.title}
        </h2>
        <h3 className="book__category">
          {book.volumeInfo.categories}
        </h3>
        <ul className="book__authors">
          {
            book.volumeInfo.authors
              ?
              book.volumeInfo.authors.map((author: string) => {
                return <Author
                  author={author}
                  key={author}
                />
              })
              :
              ''
          }
        </ul>
        <p
          className="book__desc"
          dangerouslySetInnerHTML={{
            __html:
              book.volumeInfo.description
                ?
                book.volumeInfo.description
                :
                ''

          }}
        >
        </p>
      </div>
    </div>
  )
}

export default Book