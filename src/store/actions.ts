import { Dispatch } from "react"
import { AnyAction } from "redux"

export const REQUEST_LOOKING_BOOKS = (dispatch: Dispatch<AnyAction>, payload: object) => {
  dispatch({
    type: 'REQUEST_LOOKING_BOOKS',
    payload: payload
  })
}

export const REQUEST_BOOK = (dispatch: Dispatch<AnyAction>, payload: object) => {
  dispatch({
    type: 'REQUEST_BOOK',
    payload: payload
  })
}

export const LOAD_MORE_CARDS = (dispatch: Dispatch<AnyAction>) => {
  dispatch({
    type: 'LOAD_MORE_CARDS',
  })
}

export const CHANGE_SEARCH_QUERY = (dispatch: Dispatch<AnyAction>, payload: string) => {
  dispatch({
    type: 'CHANGE_SEARCH_QUERY',
    payload
  })
}

export const ALL_CARDS_FOUND = (dispatch: Dispatch<AnyAction>, payload: number) => {
  dispatch({
    type: 'ALL_CARDS_FOUND',
    payload
  })
}

export const TOGGLE_SORTING_RESULTS = (dispatch: Dispatch<AnyAction>, payload: string) => {
  dispatch({
    type: 'TOGGLE_SORTING_RESULTS',
    payload
  })
}

export const FILTER_RESULTS = (dispatch: Dispatch<AnyAction>, payload: string) => {
  dispatch({
    type: 'FILTER_RESULTS',
    payload
  })
}

export const CHANGE_STATUS = (dispatch: Dispatch<AnyAction>, payload: string) => {
  dispatch({
    type: 'CHANGE_STATUS',
    payload
  })
}