import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/*import App from './components/Singin/Singin';*/
/*import App from './components/Login/Login';*/
/*import App from './components/ProfilePick/ProfilePick';*/
/*import App from './components/Profile/Profile';*/
/*import App from './components/PerfilUser/PerfilUser';*/
/*import App from './components/SelectedCategorie/SelectedCategorie';*/

/*import App from './components/Categories/Categories';*/
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
