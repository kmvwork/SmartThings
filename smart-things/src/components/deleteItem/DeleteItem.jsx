import React from 'react';
import BtnUser from "../btnUser/BtnUser";

import './deleteIte.css'

const DeleteItem = ({active, setActive, text}) => {
    return (
        <div className={active ? 'modal active' : 'modal'}  onClick={()=> setActive(false)}>
            <div className={'modalContent'} onClick={event => event.stopPropagation()}>
                <p className={'deleteItemText'}>{text}</p>
                <div className={'deleteItemWrapperBtn'}>
                    <BtnUser text={'Отмена'} color={'#BFC5CF'}/>
                    <BtnUser text={'Удалить'} color={'#FF6969'}/>
                </div>
            </div>

        </div>
    );
};

export default DeleteItem;