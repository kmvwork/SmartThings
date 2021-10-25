import React from 'react';
import './card.css'
import CardItem from "../cardItem/CardItem";
import {useSelector} from "react-redux";

const Card = () => {
    const dataSmartThings = useSelector((state)=>state.smartThings.listSmartThings)

    return (
        <>
            {dataSmartThings.map((item, index) => {
                return (
                    <CardItem key={index} data={item}/>
                )
            })}
        </>
    );
};

export default Card;