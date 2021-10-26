import React from 'react';

import './btnUser.css'

const BtnUser = ({color, text, action}) => {
    return (
        <button
            onClick={action}
            className={'btnUser'} style={{backgroundColor: color}}>
            {text}
        </button>
    );
};

export default BtnUser;