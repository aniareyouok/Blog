import React, { useState} from 'react';
import './App.css';
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import { Switch, Route, } from 'react-router-dom'
import TopMenu from "./components/TopMenu";
import { useHistory } from 'react-router-dom'

// Implementeren:
// 1. Routing "bedenken" door het Switch en Route component te gebruiken in App.js
// 2. Maak een navigatiebalk met de links naar de paginas (netjes om ul te gebruiken!) Zorg dat deze op iedere pagina te zien is. Gebruik hiervoor het NavLink component en zoek op hoe het ookalweer werkte met die actieve CSS class
// 3. Maak op de Login pagina een knop "Inloggen". Wanneer de gebruiker daarop klikt, gebruik je useHistory om de gebruiker door te sturen naar BlogOverzichtPagina
// BLOGPOST OVERZICHT PAGINA MAKEN:
// 1. Maak eerst met eigen-bedachte tekst een structuur voor de overzichtspagina (wat moet er allemaal op? Maak ook alvast een Link-component, etc. )
// 2. Importeer de "echte" posts zoals beschreven in het voorbeeld
// 3. CHECK YOURSELF BEFORE YOU WRECK YOURSELF! Console log de data en bekijk wat het is? Array? Object? Object met Arrays of andersom?
// 4. Is er een handige manier om al die data niet handmatig uit te hoeven schrijven?
// 5. Zorg ervoor dat er een link en titel voor iedere post wordt gegenereerd

function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated ] = useState(false);

  const history = useHistory();

  function LoggedIn() {
      toggleIsAuthenticated(true)
      history.push("/blog")
  }

  function signOut() {
      toggleIsAuthenticated(false);
      history.push("/")
  }

  return (
    <div>
        <TopMenu />
      <Switch>
        <Route exact path="/">
            <HomePage />
        </Route>
        <Route path="/login">
            <LoginPage />
        </Route>
        <Route exact path="/blog">
            <BlogPage />
        </Route>
          <Route path="/blog/:id">
              <BlogPostPage />
          </Route>
      </Switch>
    </div>
  );
}

export default App;
