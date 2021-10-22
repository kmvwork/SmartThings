import React from 'react';
import './cardItem.css'
import img from '../../img/roobotVacuum.svg'
import rocket from '../../img/rocket.svg'
import clock from '../../img/Monochrome.svg'


const CardItem = () => {
    return (
        <div className={'cardItemWrapper'}>
            <div className={'cardItemOnlineWrapper'}>
                <h3 className={'cardItemOnline'}>On line</h3>
                {/*<h3 className={'cardItemOffline'}>OFF line</h3>*/}
            </div>
            <span className={'cardItemTitle'}>Робот пылесос</span>
            <div className={'cardItemImg'}>
                IMAGES
                {/*<img style={{width: '90px', height: '100px'}} src={'/img/roobotVacuum.svg'}  alt="Vacuum"/>*/}
                <img style={{width: '90px', height: '100px'}} src={require(`public/img/roobotVacuum.svg`).default}  alt="Vacuum"/>
            </div>
            <div className={'cardItemStatus'}>
                {/*<img src={rocket} alt="rocket"/>*/}
                <span onClick={'cardItemStatusWork'}>Работает</span>
                {/*<span onClick={'cardItemStatusNoWork'}>Не работает</span>*/}
            </div>
            <div className={'cardItemTimeWrapper'}>
                <span className={'cardItemTime'}>03:12:16</span>
            </div>
        </div>
    );
};

export default CardItem;