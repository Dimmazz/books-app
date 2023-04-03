import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store/index'
import App from './components/MainContainer/MainContainer'
import './styles/normalize.scss'
import './styles/main.scss'
import RoutesWrapper from './components/RoutesWrapper/RoutesWrapper'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <RoutesWrapper />
  </Provider>,
)
