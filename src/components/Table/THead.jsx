import React from 'react';
import { array } from 'prop-types';

const THead = ({ keys }) =>
    <thead>
    {console.log(keys)}
        <tr>
            {keys.map(key => <th>{key}</th>)}
        </tr>
    </thead>
;

THead.propTypes = {
    keys: array.isRequired,
};

export default THead;
