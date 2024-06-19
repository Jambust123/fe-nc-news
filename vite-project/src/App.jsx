import { useState } from 'react';
import { Header } from './components/Header';
import { Login } from './components/Login';
import { Homepage } from './components/Homepage';
import { Article } from './components/Article';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { GlobalStyles } from '@mui/material';

const theme = createTheme({
  palette: {
    background: {
      default: 'grey', 
    },
  },
});

function App() {
  const [articleId, setArticleId] = useState("");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: {
            backgroundColor: 'light', 
          },
        }}
      />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/homepage" element={<Homepage setArticleId={setArticleId} />} />
          <Route exact path="/homepage/:topic" element={<Homepage setArticleId={setArticleId} />} />
          <Route exact path="/article/:id" element={<Article articleId={articleId} />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;