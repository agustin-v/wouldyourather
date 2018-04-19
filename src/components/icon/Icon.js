import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ linearIcon }) => {
    return(
        <span class={ linearIcon }></span>
    )
}

Icon.propTypes = {
    linearIcon: PropTypes.string
}

export default Icon