import { useState } from 'react';
import { Header } from './components/Header';
import { Login } from './components/Login';
import { Homepage } from './components/Homepage';
import { Article } from './components/Article';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { GlobalStyles } from '@mui/material';
import { NotFound } from './components/NotFound';
import { CreateAccount } from './components/CreateAccount';

const theme = createTheme({
  palette: {
    background: {
      default: 'lightgreen', 
    },
  },
});

function App() {
  const [articleId, setArticleId] = useState("");
  const [loggedInUser, setLoggedInUser] = useState({
    "username": "tickle122",
    "name": "Tom Tickle",
    "avatar_url": "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953"
  });//change prior to launch

  const hideHeaderRoutes = ['/', '/create-account'];

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
      {!hideHeaderRoutes.includes(location.pathname) && (
          <Header loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />
        )}
        <Routes>
          <Route exact path="/" element={<Login setLoggedInUser={setLoggedInUser}/>} />
          <Route exact path="/homepage" element={<Homepage setArticleId={setArticleId} />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route exact path="/homepage/:topic" element={<Homepage setArticleId={setArticleId} />} />
          <Route exact path="/article/:id" element={<Article articleId={articleId} loggedInUser={loggedInUser}/>} />
          <Route exact path="*"element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;