import React from 'react';
import PropTypes from 'prop-types';

const themeProvider = (Component)=>{
    return class extends React.Component {
        static displayName = `${Component.name}Container`;
        static contextTypes = {
            theme: PropTypes.object
        }
        render(){
            return <Component {...this.props} theme={this.context.theme} />
        }
    }
}

export default themeProvider;
