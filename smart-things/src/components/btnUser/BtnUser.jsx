import React from 'react';
import './btnUser.css'

const BtnUser = (props) => {
    return (
        <button className={'btnUser'} style={{backgroundColor:props.color}}>
            {props.text}
        </button>
    );
};

export default BtnUser;