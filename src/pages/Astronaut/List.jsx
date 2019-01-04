import React, { Component, Fragment } from 'react';
import { fromJS } from 'immutable';

import TableWithImmutable from '../../components/Table/TableWithImmutable';
import { getAstronauts } from '../../api/astronaut';

class AstronautList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            astronautsJs: null,
            astronautsImmutable: null,
        };
    };

    componentDidMount() {
        this.setState({
            astronautsJs: getAstronauts(),
            astronautsImmutable: fromJS(getAstronauts()),
            isLoaded: true,
        });
    };

    render() {
        const { isLoaded, astronautsJs, astronautsImmutable } = this.state;

        return (
            <Fragment>
                {!isLoaded ? (
                    <Fragment>
                        <p>loading...</p>
                        {console.log('render "loading..." on pages AstronautList"')}
                    </Fragment>
                ) : (
                    <Fragment>
                        <TableWithImmutable items={astronautsImmutable} />
                        {console.log('render "TableWithImmutable" on pages AstronautList"')}
                    </Fragment>
                )}
            </Fragment>
        )
    };
}

export default AstronautList;