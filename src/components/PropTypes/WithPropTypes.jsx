import React from 'react';
import { string } from 'prop-types';

const WithPropTypes = ({ string }) => <p>{string}</p>;

WithPropTypes.propTypes = {
    string: string.isRequired,
};

export default WithPropTypes;
