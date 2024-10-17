import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import {Landscape1} from './components/Landscape1'
import {Landscape2} from './components/Landscape2'
import {Landscape3} from './components/Landscape3'
import {Landscape4} from './components/Landscape4'
import {Landscape5} from './components/Landscape5'
import {Landscape6} from './components/Landscape6'
import {Landscape7} from './components/Landscape7'
import {Landscape8} from './components/Landscape8'
import {Landscape9} from './components/Landscape9'
import {Landscape10} from './components/Landscape10'
import { Navigation } from './components/Navigation'



function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/landscape1' element={<Landscape1 className='main-img-container'/>} />
        <Route path='/landscape2' element={<Landscape2 className='main-img-container'/>} />
        <Route path='/landscape3' element={<Landscape3 className='main-img-container'/>} />
        <Route path='/landscape4' element={<Landscape4 className='main-img-container'/>} />
        <Route path='/landscape5' element={<Landscape5 className='main-img-container'/>} />
        <Route path='/landscape6' element={<Landscape6 className='main-img-container'/>} />
        <Route path='/landscape7' element={<Landscape7 className='main-img-container'/>} />
        <Route path='/landscape8' element={<Landscape8 className='main-img-container'/>} />
        <Route path='/landscape9' element={<Landscape9 className='main-img-container'/>} />
        <Route path='/landscape10' element={<Landscape10 className='main-img-container'/>} />
      </Routes>
      <div className="container">
        <Navigation />
      </div>
     </BrowserRouter>
    </>
  )
}

export default App
