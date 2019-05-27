import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.less';
import Nav from './components/Nav';
import About from './components/About';
import Shop from './components/Shop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ItemDetail from './components/ItemDetail';

const Home = () => {
    return <div><h1>Homepage!</h1></div>;
};

ReactDOM.render(
    <Router>
        <div className="App">
            <Nav />
            <Switch>
                <Route path = "/" exact component={Home} />
                <Route path = "/about" component={About} />
                <Route path = "/shop" exact component={Shop} />
                <Route path = "/shop/:id" component={ItemDetail} />
            </Switch>
        </div>
    </Router>,
    document.getElementById('root')
);
