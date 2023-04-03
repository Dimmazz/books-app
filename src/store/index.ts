import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'


const defaultState: any = {
  currentBookList: [],
  searchQuery: '',
  numberCard: 0,
  allCardsFound: 0,
  sortResults: 'relevance',
  filterResults: 'all',
  currentBook: {} as IBook,
  status: 'START'
}

// Names types of reducer
const REQUEST_LOOKING_BOOKS = 'REQUEST_LOOKING_BOOKS'
const REQUEST_BOOK = 'REQUEST_BOOK'
const CHANGE_SEARCH_QUERY = 'CHANGE_SEARCH_QUERY'
const LOAD_MORE_CARDS = 'LOAD_MORE_CARDS'
const ALL_CARDS_FOUND = 'ALL_CARDS_FOUND'
const TOGGLE_SORTING_RESULTS = 'TOGGLE_SORTING_RESULTS'
const FILTER_RESULTS = 'FILTER_RESULTS'
const CHANGE_STATUS = 'CHANGE_STATUS'
// status:
// START, HAVEBOOK, HAVEBOOKS

// reducer
const reducer = (state = defaultState, action: { type: string; payload?: any }) => {
  switch (action.type) {
    case REQUEST_LOOKING_BOOKS:
      return { ...state, currentBookList: [...state.currentBookList, ...action.payload]}
    
    case REQUEST_BOOK:
      return { ...state, currentBook: action.payload }

    case CHANGE_SEARCH_QUERY:
      return { ...state, searchQuery: action.payload }

    case ALL_CARDS_FOUND:
      return { ...state, allCardsFound: action.payload }

    case LOAD_MORE_CARDS:
      const allCardsFound = state.allCardsFound
      if (allCardsFound > 30) {
        return { ...state, numberCard: state.numberCard + 30 }
      } else {
        return { ...state, numberCard: allCardsFound }
      }

    case TOGGLE_SORTING_RESULTS:
      return { ...state, sortResults: action.payload }

    case FILTER_RESULTS:
      return { ...state, filterResults: action.payload }

    case CHANGE_STATUS:
      return {...state, status: action.payload}

    default:
      return state
  }
}

// store
export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))