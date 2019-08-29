import React from 'react';
import './App.css';
import Navbar from './Components/MenuSuperior/Navbar';
import Resumo from './Components/Resumo/Resumo';
import Consultas from './Components/Consultas/Consultas';
import Faturamento from './Components/Faturamento/Faturamento';
import {Switch, Route} from 'react-router-dom';
function App() {
  return (
    <div>
      <Navbar/>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <Switch>
              <Route path="/" exact component={Resumo}/>
              <Route path="/consultas" component={Consultas}/>
              <Route path="/faturamento" component={Faturamento}/>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
