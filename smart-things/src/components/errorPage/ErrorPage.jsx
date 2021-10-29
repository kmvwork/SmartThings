import React from 'react';
import {useDispatch} from "react-redux";
import {updateSmartThings} from "../../redux/smartThingsSlice";
import {dataDBSmartThings} from "../../dataDB/dataDB";

import './errorPage.css'
import MyButton from "../ui/button/MyButton";

const ErrorPage = ({active, text, error, background}) => {
    const dispatch = useDispatch()

    const repeatRequest = () => {
        dispatch(updateSmartThings(dataDBSmartThings))
    }

    return (
        <div className={active ? 'modal active' : 'modal'}>
            <div style={{backgroundColor: background}} className={'modalContent'}
                 onClick={event => event.stopPropagation()}>
                <p className={'deleteItemText'}>{text + error}</p>
                <div className={'deleteItemWrapperBtn'}>
                    <MyButton text={'Повторить'} action={repeatRequest} style={'primary'}/>
                </div>
            </div>

        </div>
    );
};

export default ErrorPage;