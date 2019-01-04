import React from 'react';
import { instanceOf } from 'prop-types';
import { Map } from 'immutable';

const TBody = ({ items }) =>
    <tbody>
    {items.map((item, keyItem) =>
        <tr key={keyItem}>
            {item.map(value => <td>{value}</td>)}
        </tr>
    )}
    </tbody>
;

TBody.propTypes = {
    items: instanceOf(Map).isRequired,
};

export default TBody;
