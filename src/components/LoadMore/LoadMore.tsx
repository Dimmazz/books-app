import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'
import { LOAD_MORE_CARDS, REQUEST_LOOKING_BOOKS } from '../../store/actions'
import { resultFilter } from '../../utils/resultFilter'
import { KEYAPI, URLAPI } from '../../vars'
import './LoadMore.scss'

const LoadMore = () => {

  const dispatch = useDispatch()

  const searchValue = useSelector((state: any) => state.searchQuery)
  const numberCard = useSelector((state: any) => state.numberCard)
  const sortResult = useSelector((state: any) => state.sortResults)
  const filter = useSelector((state: any) => state.filterResults)


  const LoadMoreCards = async (dispatch: Dispatch<AnyAction>) => {
    console.log(sortResult);
    
    try {
      await axios.get(`${URLAPI}?q=${searchValue}&key=${KEYAPI}&startIndex=0&maxResults=${numberCard}&orderBy=${sortResult}`)
        .then(
          (answer) => {
            const answerCards: IBook[] = answer.data.items
            LOAD_MORE_CARDS(dispatch)
            let cards: IBook[] = []
            if (filter === 'all') {
              cards = answerCards
            } else {
              cards = resultFilter(answerCards, filter)
            }
            REQUEST_LOOKING_BOOKS(dispatch, cards)
          })
    } catch (error: any) {
      throw new Error(error);
    }
  }


  return (
    <button
      className="cards__load-more"
      onClick={_e => LoadMoreCards(dispatch)}
      type="button"
    >
      Load More
    </button>
  )
}

export default LoadMore