import React, {useState} from 'react';
import {useSelector} from "react-redux";
import DeleteItem from "../deleteItem/DeleteItem";
import Time from "../time/Time";
import clock from '../../img/Monochrome.svg'
import flus from '../../img/flus.png'

import './cardItem.css'

const CardItem = (props) => {

    const {id, name, online, img, status, activeStatus, workTime, statusImg} = props.data

    let loading = useSelector(store => store.smartThings.loading)

    const [showModalDelete, setShowModalDelete] = useState(false)

    return (
        <>
            {
                loading === false ? (<div className={'cardItemWrapper'}>
                    <div className={'cardItemOnlineWrapper'}>
                        {online === 'true' ? <h3 className={'cardItemOnline'}>On line</h3> :
                            <h3 className={'cardItemOffline'}>OFF line</h3>}
                    </div>

                    <span className={'cardItemTitle'}>{name}</span>

                    <button onClick={() => setShowModalDelete(!showModalDelete)} className={'deleteItemCard'}>Удалить
                    </button>

                    <div className={'cardItemImg'}>
                        <img src={img} alt={name}/>
                    </div>

                    <div className={'cardItemStatus'}>
                        <img className={'cardItemStatusImg'} src={statusImg[activeStatus]} alt={name}/>
                        <span className={'cardItemStatusWork'}>{status[activeStatus]}</span>
                    </div>
                    {
                        workTime === 'true' ? <div className={'cardItemTimeWrapper'}>
                            <img src={clock} alt="time"/>
                            <Time styleClass={'cardItemTime'} format={'HH:mm:ss'}/>
                        </div> : null
                    }
                </div>) : (<div className={'trans'}><img src={flus} alt=""/></div>)
            }
            {
                showModalDelete === true ?
                    <DeleteItem active={showModalDelete} setActive={setShowModalDelete} text={`Вы хотите удалить `}
                                name={name} id={id}/> : null
            }
        </>
    );
};

export default CardItem;