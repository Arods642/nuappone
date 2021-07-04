import React, { Component } from 'react';
import HeaderComponent from './HeaderComponent';
import NavComponent from './NavComponent';



class MainComponent extends Component {
    render() {
        return (
            <div>
                <NavComponent />
                <HeaderComponent />
                
            </div>
        )
    }
}

export default MainComponent;