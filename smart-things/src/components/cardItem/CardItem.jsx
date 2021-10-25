import React, {useEffect, useRef, useState} from 'react';
import Moment from 'react-moment';
import flus from '../../img/flus.png'

import './cardItem.css'

import {ReactComponent as Rocket} from '../../img/rocket.svg'
import {ReactComponent as NotDetected} from '../../img/notDetected.svg'
import {useSelector} from "react-redux";


const CardItem = (props) => {

    const {id, name, online, img, status, activeStatus, workTime, statusImg} = props.data

    let loading = useSelector(store => store.smartThings.loading)

    const [showTime, setShowTime] = useState(workTime)

    const block = useRef(null)

    return (
        <>
            {
                loading === false  ?  (<div ref={block}  className={'cardItemWrapper'}>
                    <div className={'cardItemOnlineWrapper'}>
                        {online === 'true' ? <h3 className={'cardItemOnline'}>On line</h3> :
                            <h3 className={'cardItemOffline'}>OFF line</h3>}
                    </div>

                    <span className={'cardItemTitle'}>{name}</span>

                    <div className={'cardItemImg'}>
                        <img src={img} alt={name}/>
                    </div>

                    <div className={'cardItemStatus'}>
                        <img className={'cardItemStatusImg'} src={statusImg[activeStatus]} alt={name}/>
                        <span className={'cardItemStatusWork'}>{status[activeStatus]}</span>
                    </div>
                    {
                        workTime === 'true' ? <div className={'cardItemTimeWrapper'}>
                            <Moment interval={1000} format="hh:mm:ss">
                            </Moment>
                        </div> : null
                    }
                </div>) : (<div className={'trans'}><img src={flus} alt=""/></div>)
            }
        </>

        // <div className={'cardItemWrapper'}>
        //     <div className={'cardItemOnlineWrapper'}>
        //         {online === 'true' ? <h3 className={'cardItemOnline'}>On line</h3> :
        //             <h3 className={'cardItemOffline'}>OFF line</h3>}
        //     </div>
        //
        //     <span className={'cardItemTitle'}>{name}</span>
        //
        //     <div className={'cardItemImg'}>
        //         <img src={img} alt={name}/>
        //     </div>
        //
        //     <div className={'cardItemStatus'}>
        //         <img className={'cardItemStatusImg'} src={statusImg[activeStatus]} alt={name}/>
        //         <span className={'cardItemStatusWork'}>{status[activeStatus]}</span>
        //     </div>
        //     {
        //         workTime === 'true' ? <div className={'cardItemTimeWrapper'}>
        //             <Moment interval={1000} format="hh:mm:ss">
        //             </Moment>
        //         </div> : null
        //     }
        // </div>
    );
};

export default CardItem;