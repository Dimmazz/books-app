import axios from 'axios'
import React, { Dispatch } from 'react'
import { KEYAPI, URLAPI } from '../../vars'
import { useDispatch, useSelector } from 'react-redux'
import './SearchBox.scss'
import { ALL_CARDS_FOUND, CHANGE_SEARCH_QUERY, CHANGE_STATUS, FILTER_RESULTS, LOAD_MORE_CARDS, REQUEST_LOOKING_BOOKS, TOGGLE_SORTING_RESULTS } from '../../store/actions'
import { AnyAction } from 'redux'
import { resultFilter } from '../../utils/resultFilter'

const SearchBox = () => {

  const dispatch = useDispatch()
  const searchValue = useSelector((state: any) => state.searchQuery)
  const sortResult = useSelector((state: any) => state.sortResults)
  const filter = useSelector((state: any) => state.filterResults)

  const searchTrigger = async (dispatch: Dispatch<AnyAction>) => {
    if (searchValue !== '') {
      try {
        const URL = `${URLAPI}?q=${searchValue}&key=${KEYAPI}&startIndex=0&maxResults=30&orderBy=${sortResult}`
        console.log(URL);
        await axios.get(URL)
          .then(
            (answer) => {
              const answerCards: IBook[] = answer.data.items
              const allCardsFound = answer.data.totalItems

              ALL_CARDS_FOUND(dispatch, allCardsFound)
              LOAD_MORE_CARDS(dispatch)
              let cards: IBook[] = []
              if (filter === 'all') {
                cards = answerCards
              } else {
                cards = resultFilter(answerCards, filter)
              }
              CHANGE_STATUS(dispatch, 'HAVEBOOKS')
              REQUEST_LOOKING_BOOKS(dispatch, cards)
            })
      } catch (error: any) {
        throw new Error(error);
      }
    }
  }

  return (
    <div className="search-box">
      <div className="search-box__search-line">
        <input
          className="input search-box__input"
          value={searchValue}
          onChange={(e) => CHANGE_SEARCH_QUERY(dispatch, e.target.value)}
          onKeyUp={(e) => e.key === 'Enter' ? searchTrigger(dispatch) : undefined}
          type="search"
        />
        <button
          className="search-box__btn"
          onClick={(_e) => searchTrigger(dispatch)}
          type="button"
        >
          SEARCH
        </button>
      </div>
      <div className="search-box__options">
        <div className="options__filter">
          <select
            className="options__select"
            onChange={e => FILTER_RESULTS(dispatch, e.target.value)}
          >
            <option value="all">All</option>
            <option value="art">art</option>
            <option value="biography">biography</option>
            <option value="computers">computers</option>
            <option value="history">history</option>
            <option value="medical">medical</option>
            <option value="poetry">poetry</option>
          </select>
        </div>

        <div className="options__sort">
          <select
            className="options__select"
            onChange={e => TOGGLE_SORTING_RESULTS(dispatch, e.target.value)}
          >
            <option value="relevance">relevance</option>
            <option value="newest">newest</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default SearchBox