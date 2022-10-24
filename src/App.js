import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//Components
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

//Pages
import Home from './Pages/Home/Home';
import Favorite from './Pages/Favorite/Favorite';
import Terdekatku from './Pages/Terdekatku/Terdekatku';
import Popular from './Pages/Popular/Popular';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
          <Routes>
              {/* <Route path='/'></Route> */}
            <Route path="/" exact/>
            <Route path="/Home" element={<Home/>} />
            <Route path='/Favorite' element={<Favorite/>}/>
            <Route path='/Terdekatku' element={<Terdekatku/>}/>
            <Route path='/Popular' element={<Popular/>}/>
          </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
