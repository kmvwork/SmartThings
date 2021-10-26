import React from 'react';
import BtnUser from "../btnUser/BtnUser";
import {useDispatch} from "react-redux";
import {updateSmartThings} from "../../redux/smartThingsSlice";
import {dataDBSmartThings} from "../../dataDB/dataDB";

import './errorPage.css'

const ErrorPage = ({active, setActive, text, error, background}) => {
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
                    <BtnUser action={repeatRequest} type={'update'} text={'Повторить'} color={'#232198'}/>
                </div>
            </div>

        </div>
    );
};

export default ErrorPage;