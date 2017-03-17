import React from 'react';
import ReactDOM from 'react-dom';

import tabel from './js/tabel.jsx';
import editPage from './js/editPage'
import home from './js/home'
import { Router,Route,browserHistory} from 'react-router';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={home}>
    
    	<Route path="tabel" component={tabel}/>
    	<Route path="edit/:xuehao" component={editPage}/>
    </Route>

  </Router>
), document.getElementById('app'));