import React, {useState} from 'react';
import './myBtn.css'
import {useDispatch, useSelector} from "react-redux";
import {updateSmartThings} from "../../redux/smartThingsSlice";
import {dataDBSmartThings} from "../../dataDB/dataDB";


const BtnUpdate = (props) => {
    const dispatch = useDispatch()
    const loading = useSelector(store => store.smartThings.loading)


    const setLoader = () => {
        dispatch(updateSmartThings(dataDBSmartThings))
    }
    return (
        <>
            {
                loading ? <div className={'btnUpdateActiveWrapper ' + props.classes}>
                    <div className={'btnUpdateActive'}></div>
                    </div> :
                    <button onClick={() => setLoader()} style={props.style}
                            className={'btnUpdate ' + props.classes}>
                        {props.data.title}
                    </button>
            }
        </>


    );
};

export default BtnUpdate;