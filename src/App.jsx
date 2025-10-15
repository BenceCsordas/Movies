import './App.css'
import {Route, Routes} from 'react-router'
import {Movies} from './pages/Movies'
import {TVSeries} from './pages/TVSeries'
import {SearchPage} from './pages/SearchPage'
import { MyLayout } from './components/MyLayout'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {

  return (
    <Routes>
      <Route path='/' element={<MyLayout/>}>
        <Route path="/" element={<Movies/>}/>
        <Route path="/tvseries" element={<TVSeries/>}/>
        <Route path="/search" element={<SearchPage/>}/>
      </Route>
    </Routes>
  )
}

export default App
