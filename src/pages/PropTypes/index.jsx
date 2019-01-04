import React, { Component, Fragment } from 'react';

import WithPropTypes from '../../components/PropTypes/WithPropTypes';
import WithoutPropTypes from '../../components/PropTypes/WithoutPropTypes';

class PropTypes extends Component {
    render() {
        return (
            <Fragment>
                <p>WithPropTypes with string</p>
                <WithPropTypes string={'a string'}/>
                <p>WithPropTypes with number</p>
                <WithPropTypes string={1}/>
                <p>WithPropTypes without props</p>
                <WithPropTypes />
                <p>WithoutPropTypes with string</p>
                <WithoutPropTypes string={'a string'}/>
                <p>WithoutPropTypes with string</p>
                <WithoutPropTypes string={1} />
                <p>WithoutPropTypes with string</p>
                <WithoutPropTypes/>
            </Fragment>
        );
    };
}

export default PropTypes;