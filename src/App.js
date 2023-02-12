import RegisPage from '../src/components/Header/RegisPage'
import Header from '../src/components/Header/Header'
import './App.css'
import Main from './components/main/Main'
import Chavo from './components/pages/chavo/Chavo'
import DetailPage from './components/pages/news/detailPage/DetailPage'
import News from './components/pages/news/News'

import { Routes, Route } from 'react-router-dom'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
      <RegisPage />
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Main />}
        />

        <Route path='/chavo' element={<Chavo />}/>

        <Route
          path="/news"
          element={<News />}
        />
        <Route
          path="/news/detail-page/:id"
          element={<DetailPage />}
        />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
