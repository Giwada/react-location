import React, { Component } from 'react';
import './styles/App.css';

import Login from './containers/Login';
import Register from './containers/Register';
import Home from './containers/Home';

import { 
    BrowserRouter,
    Route,
    Switch    
} from 'react-router-dom';

class App extends Component {
    render(){
        return (
            
                <BrowserRouter>
                    <div className="App">
                        <Switch>
                            <Route path="/login" component={Login}/>
                            <Route path="/register" component={Register}/>
                            <Route path="/" component={Home}/>
                            <Route path="/chat" component={Chat}/>
                        </Switch> 
                    </div>
                </BrowserRouter>
            
        )
    }
}

export default App;