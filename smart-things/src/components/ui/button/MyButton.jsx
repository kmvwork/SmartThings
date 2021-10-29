import React from 'react';

import './myButton.css'

const MyButton = ({style, text, size, action}) => {

    return (
        <button
            className={'btn ' + style + ' ' + size}
            onClick={action}
            >
            {text}
        </button>
    );
};

export default MyButton;