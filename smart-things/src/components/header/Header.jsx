import React from 'react';
import './header.css'

const Header = ({title}) => {
    return (
        <div className={'wrapper'}>
           <h1 className={'title'}>{title}</h1>
        </div>
    );
};

export default Header;