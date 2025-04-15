import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Detail from './pages/Detail/Detail'

function App() {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/detail" element={<Detail />} />
  </Routes>
  )
}

export default App
