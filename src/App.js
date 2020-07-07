import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useFirebaseApp } from 'reactfire';
import Dashboard from './components/dashboard/Dashboard.jsx';
import Orders from './components/orders/Orders'
import SignIn from './components/auth/SignIn';
import 'materialize-css/dist/css/materialize.min.css';

function App() {

  const firebase = useFirebaseApp();
  //console.log(firebase);

  const [datos, setDatos] = useState({
    numeroMesa: '',
    numeroComensales: '',
    productos: []

})

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' render={() => <Dashboard datos={datos} setDatos={setDatos} />} />
          <Route path='/signin' component={SignIn} />
          <Route path='/orders' render={() => <Orders datos={datos} setDatos={setDatos} />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App; 