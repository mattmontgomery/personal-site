import { Router, Route } from 'react-router';
import { history } from 'react-router/lib/HashHistory';
import React from 'react';
import App from './components/App.jsx';
import { About, Projects } from './components/Pages/index.js'
// import About from './Pages/About.jsx';
// import Projects from './Pages/Projects.jsx';

React.render(
    (
        <Router history={history}>
            <Route component={App} path="/">
                <Route path="about" component={About} />
                <Route path="projects" component={Projects} />
            </Route>
        </Router>
    ),
    document.getElementById('app')
);
