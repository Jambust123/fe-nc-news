import { useState } from 'react'
import { Header } from './components/Header'
import { Login } from './components/Login'
import { Homepage } from './components/Homepage'
import { Article } from './components/Article'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Login/>} />
      <Route exact path="/homepage" element={<Homepage/>} />
      <Route exact path="/article/:id" element={<Article/>} />      
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
