import Cards from '../Cards/Cards'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import SearchBox from '../SearchBox/SearchBox'
import './MainContainer.scss'


function MainContainer() {
  return (
    <div className="main-container">
      <Header />

      <main className="main">
        <SearchBox />
        <Outlet />
        {/* <Cards /> */}
      </main>
    </div>
  )
}

export default MainContainer
