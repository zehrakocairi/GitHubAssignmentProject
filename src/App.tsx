import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import RepositoryDetail from './pages/RepositoryDetail/RepositoryDetail'

function App() {
  return (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/repo/:owner/:name" element={<RepositoryDetail />} />
  </Routes>
  )
}

export default App
