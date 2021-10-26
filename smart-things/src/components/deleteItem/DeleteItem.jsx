import React from 'react';
import {useDispatch} from "react-redux";
import {deleteSmartThings} from "../../redux/smartThingsSlice";
import BtnUser from "../btnUser/BtnUser";

import './deleteIte.css'

const DeleteItem = ({active, setActive, text, name, id}) => {
    const dispatch = useDispatch()

    const updateDataSmartThings = () => {
        dispatch(deleteSmartThings(id))
        setActive(false)
    }

    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={'modalContent'} onClick={event => event.stopPropagation()}>
                <p className={' deleteText'}>{text + name}</p>
                <div className={'deleteItemWrapperBtn'}>
                    <BtnUser text={'Отмена'} color={'#BFC5CF'} action={setActive}/>
                    <BtnUser text={'Удалить'} color={'#FF6969'} action={updateDataSmartThings}/>
                </div>
            </div>

        </div>
    );
};

export default DeleteItem;