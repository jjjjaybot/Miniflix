import React, { Component } from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import TabDoor from './tabs_nav/TabDoor';
import TabDevices from './tabs_nav/TabDevices';
import TabPrices from './tabs_nav/TabPrices';
import TabContentOne from './TabContentOne';
import TabContentTwo from './TabContentTwo';
import TabContentThree from './TabContentThree';
import '../css/TabNav.css';

class TabComponent extends Component {
    state = {
        tabIndex: 0
    }
    render() { 
        return ( 
            <div>
                <Tabs className="tabs" selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({tabIndex})}>
                    <TabList className="tab-nav-container">
                        <Tab className={`${this.state.tabIndex === 0 ? 'tab-selected' : 'null'}`}>
                            <TabDoor />
                            <p className="lgScreen"><strong>No commitments <br />
                            Cancel online at anytime</strong></p>
                            <br />
                            <span className="mdScreen" style={{marginTop:'0.4rem'}}>Cancel</span>
                        </Tab>
                        <Tab className={`${this.state.tabIndex === 1 ? 'tab-selected' : 'null'}`}>
                            <TabDevices />
                            <p className="lgScreen" style={{marginTop:'-5.3125rem'}}><strong>Watch anywhere</strong></p>
                            <span className="mdScreen" style={{marginTop:'-5.3125rem'}}>Devices</span>
                        </Tab>
                        <Tab className={`${this.state.tabIndex === 2 ? 'tab-selected' : 'null'}`}>
                            <TabPrices />
                            <p className="lgScreen"><strong>Pick your price</strong></p>
                            <br />
                            <span className="mdScreen">Price</span>
                        </Tab>
                    </TabList>
                    {/* Tabs content */}
                    <TabPanel>
                        <TabContentOne />
                    </TabPanel>
                    <TabPanel>
                        <TabContentTwo />
                    </TabPanel>
                    <TabPanel>
                        <TabContentThree />
                    </TabPanel>
                </Tabs>
            </div>
         );
    }
}
 
export default TabComponent;