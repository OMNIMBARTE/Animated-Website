import { Link, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navigation/Navbar'
import "remixicon/fonts/remixicon.css";

import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'


const App = () => {
  return (
    <div>

    <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agence' element={<Agence />} />
        <Route path='/project' element={<Projects />} />
      </Routes>
    </div>
  )
}

export default App;