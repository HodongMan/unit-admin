import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { PartnerContainer } from './containers';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends React.Component {
  
    public render() {
        return (
          <Router>
              <div>
                  <Switch>
                      <Route exact={true} path="/" component={PartnerContainer} />
                  </Switch>
              </div>
          </Router>
        );
    }
}

export default App;
