import React, {Component} from 'react';

import { 
    Route,
    Switch    
} from 'react-router-dom';

import Header from '../components/Header';
import Auth from '../components/Auth';

import Dashboard from '../containers/Dashboard';
import Login from '../containers/Login';
import NoPage from '../containers/NoPage';

class Home extends Component {
    render(){
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path='/' component={Auth(Dashboard)}/>
                    <Route path='/login' key="login" component={Login}/>
                    <Route component={Auth(NoPage)}/>
                </Switch>
            </div>
        )
    }
}

export default Home;