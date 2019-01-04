import React, { Component } from 'react';
import { instanceOf } from 'prop-types'
import { List } from 'immutable';

import THead from './THead';
import TBoby from './TBoby';

class TableWithImmutable extends Component {
    static propTypes = {
        items: instanceOf(List).isRequired,
    };

    render() {
        const { items } = this.props;
        const [ ...keys ] = items.first().keys();
        console.log(keys);
        return (
            <table>
                <THead keys={keys} />
                <TBoby items={items} />
            </table>
        )
    }
}

export default TableWithImmutable;
