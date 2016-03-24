import React from 'react';

import './style/Header.scss';

var Header = React.createClass({
    render() {
        return (
            <div className="app-header">
                {this.props.children}
            </div>
        );
    }
});

export default Header;
