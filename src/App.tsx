
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import ProductDetails from './components/ProductDetails'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </>
  )
}

export default App
