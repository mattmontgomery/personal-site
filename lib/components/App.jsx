import React from 'react';
import classnames from 'classnames';

import Header from './Header.jsx';
import Navigation from './Navigation.jsx'

import "normalize.scss/normalize.scss"

import './style/App.scss';

var App = React.createClass({
    render() {
        var classes = {
            'app': true
        };
        return (
            <div className={classnames(classes)}>
                <Header>
                    <Navigation />
                </Header>
                <div className="app-container">
                    {this.props.children}
                </div>
            </div>
        );
    }
});

export default App;
