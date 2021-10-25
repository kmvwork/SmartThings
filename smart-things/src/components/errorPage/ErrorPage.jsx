import React from 'react';
import './errorPage.css'
import BtnUser from "../btnUser/BtnUser";
import {useDispatch} from "react-redux";
import {dataDBSmartThings} from "../../dataDB/dataDB";
import {updateSmartThings} from "../../redux/smartThingsSlice";

const ErrorPage = ({active, setActive, text, error, background}) => {
    const dispatch = useDispatch()
    
    return (
        <div className={active ? 'modal active' : 'modal'}  onClick={()=> dispatch(updateSmartThings(dataDBSmartThings))}>
            <div style={{backgroundColor: background}} className={'modalContent'} onClick={event => event.stopPropagation()}>
                <p className={'deleteItemText'}>{text + error}</p>
                <div className={'deleteItemWrapperBtn'}>
                    <BtnUser text={'Повторить'} color={'#232198'}/>
                </div>
            </div>

        </div>
    );
};

export default ErrorPage;