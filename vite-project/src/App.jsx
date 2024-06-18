import { useState } from 'react'
import { Header } from './components/Header'
import { Login } from './components/Login'
import { Homepage } from './components/Homepage'
import { Article } from './components/Article'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  const [articleId, setArticleId] = useState("");

  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path="/" element={<Login/>} />
      <Route exact path="/homepage" element={<Homepage setArticleId={setArticleId} />} />
      <Route exact path="/article/:id" element={<Article articleId={articleId} />} />      
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
