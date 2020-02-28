import React, { Component } from 'react';
import Header from '../components/Header';
import TabComponent from '../components/TabComponent';

class Main extends Component {
    state = {  }
    render() { 
        return ( <div>
            <Header />
            <TabComponent></TabComponent>
        </div> );
    }
}
 
export default Main;