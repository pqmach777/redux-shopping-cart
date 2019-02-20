import React from 'react';
import {Link} from 'react-router-dom'

class Baselayout extends React.Component {

    render() {
        return (
            <div>
                {this.props.children}           
            </div>
        );
    }
}




export default Baselayout
