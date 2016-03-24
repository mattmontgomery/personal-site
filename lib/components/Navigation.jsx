import React from 'react';
import { Link } from 'react-router';

import './style/Navigation.scss';

var Navigation = React.createClass({
    render() {
        return (
            <div className="app-navigation">
                <Link to="/" className="app-navigation__link">Home</Link>
                <Link to="/about" className="app-navigation__link">About</Link>
                <Link to="/projects" className="app-navigation__link">Projects</Link>
            </div>
        );
    }
});

export default Navigation;
