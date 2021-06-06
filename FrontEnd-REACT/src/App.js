import './App.css';

import {Home} from './Home';
import {Kompania} from './Kompania';
import {Navigation} from './Navigation';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <h3 className="m-3 d-flex justify-content-center">
        Ankandi
      </h3>
      
      <Navigation/>

      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/kompania' component={Kompania}/>
      </Switch>

    </div>
    </BrowserRouter>
  );
}

export default App;
