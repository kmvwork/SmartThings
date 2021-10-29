import React from 'react';
import {useDispatch} from "react-redux";
import {deleteSmartThings} from "../../redux/smartThingsSlice";
import MyButton from "../ui/button/MyButton";

import './deleteIte.css'

const DeleteItem = ({active, setActive, text, name, id}) => {
    const dispatch = useDispatch()

    const updateDataSmartThings = () => {
        dispatch(deleteSmartThings(id))
        setActive(false)
    }

    const closeWindow = () => {
        setActive(false)
    }

    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={'modalContent'} onClick={event => event.stopPropagation()}>
                <p className={' deleteText'}>{text + name}</p>
                <div className={'deleteItemWrapperBtn'}>
                    <MyButton text={'Отмена'} style={'grey'} action={closeWindow}/>
                    <MyButton text={'Удалить'} style={'danger'} action={updateDataSmartThings}/>
                </div>
            </div>

        </div>
    );
};

export default DeleteItem;