import NavPrincipal from './components/NavPrincipal/NavPrincipal.js';
import './App.css';
import Title from './components/Title/Title.js';
import ButtonO from './components/Button/ButtonO.js';
import Login from './components/Login/Login.js'

import Singin from './components/Singin/Singin';
import ProfilePick from './components/ProfilePick/ProfilePick';
import Profile from './components/Profile/Profile';
import PerfilUser from './components/PerfilUser/PerfilUser';
import SelectedCategorie from './components/SelectedCategorie/SelectedCategorie';

import Categories from './components/Categories/Categories';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (

   <Router>
    
    
    <Switch>
      <Route path="/home">
      <div className="o-app">

        <div className="o-container-nav">
          <NavPrincipal></NavPrincipal>
        </div>

        <div className="o-center" >
          <Title></Title>        
          <p className="o-p">
                            Be independent while you study, with Uwork you can generate portfolio and money at the same time.<br></br>
                            Start your experience right now, learn about our services and encourage yourself to be part of our
                            great community.</p>
          <ButtonO btnText="About Us" bg='#56CCF2' ></ButtonO>
        </div>


      </div>

      </Route>

      <Route path="/Login">
        <Login></Login>
      </Route>

      <Route path="/Singin">
        <Singin></Singin>
      </Route>

      <Route path="/PickProfile">
        <ProfilePick></ProfilePick>
      </Route>

      <Route path="/Profile">
        <Profile></Profile>
      </Route>

      <Route path="/User">
        <PerfilUser></PerfilUser>
      </Route>

      <Route path="/Select">
        <SelectedCategorie></SelectedCategorie>
      </Route>

      <Route path="/Categorie">
        <Categories></Categories>
      </Route>

    </Switch>

    </Router>
    
  );
}

export default App;
