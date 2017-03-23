import React from 'react';
import ReactDOM from 'react-dom';
import DispatchTask from './js/taskManager/DispatchTask';
import AutoDeploy from './js/taskManager/AutoDeploy';
import DeployHistory from './js/taskManager/DeployHistory';
import businessSystem from './js/taskManager/businessSystem';
import App from './app'
import editPage from './js/editPage'
import home from './js/home'
import realHome from './js/realHome'
import testPage from './js/drag/Container'

import loginPage from './js/loginPage'
import rechart from './js/rechart'

import personTable from './js/personTable'
import addPerson from './js/addPerson'
import wizard from './js/form/WizardPage'
import { Router,Route,browserHistory,IndexRoute,IndexRedirect} from 'react-router';


ReactDOM.render((
  <Router history={browserHistory}>
     <Route path="/" component={App}>

        <IndexRoute component={loginPage}/>
        <Route path="login" component={loginPage}/>
        <IndexRedirect to="login"/>
        <Route path="home" component={home}>

            <IndexRoute component={realHome}/>
            <Route path="DispatchTask" component={DispatchTask}/>
            <Route path="AutoDeploy" component={App}>
                <IndexRoute component={AutoDeploy}/>
                <Route path="DeployHistory" component={DeployHistory}/>
            </Route>
            <Route path="businessSystem" component={businessSystem}/>
            <Route path="edit" component={editPage}/>
            <Route path="personTable" component={personTable}/>
            <Route path="rechart" component={rechart}/>
            <Route path="addPerson" component={addPerson}/>
            <Route path="wizard" component={wizard}/>
            <Route path="testPage" component={testPage}/>
    	   </Route>
    </Route>
  </Router>
), document.getElementById('app'));
