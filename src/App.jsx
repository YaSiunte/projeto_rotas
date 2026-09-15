import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Produtos from './pages/Produtos'
import Contato from './pages/Contato'

const App = () => {
  return (
    <Router>
      <div className='min-h-screen bg-cyan-500 text-cyan-800'>
        <NavBar/>
        <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/sobre" element={<Sobre/>} />
            <Route path="/produtos" element={<Produtos/>} />
            <Route path="/contato" element={<Contato/>} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
