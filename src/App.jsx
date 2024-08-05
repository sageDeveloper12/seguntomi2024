import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Events from './pages/Events';
import Upload from './pages/Upload';
import Gallery from './pages/Gallery';
import Header from './components/Header';
import Footer from './pages/Footer';

import './App.css'

function App() {


  return (
    <>
      <Router>
        <Header/>
        <Routes>
            
            <Route path ="/" element = {<Home/>}/>
            <Route path ="/events" element = {<Events/>}/>
            <Route path="/upload" element={<Upload />} />
            <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
