import React, { Component } from 'react';

//not need anymore, left for future use
import Toolbar from '../../components/UI/Toolbar/Toolbar';

// for multiple features
class Layout extends Component {

    render () {
        return (
            <React.Fragment>
                {/* <Toolbar /> */}
                <main>
                    {this.props.children}
                </main>
            </React.Fragment>
        )
    }
}



export default Layout;