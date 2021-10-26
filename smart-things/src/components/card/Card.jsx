import React, {useEffect} from 'react';
import CardItem from "../cardItem/CardItem";
import {useDispatch, useSelector} from "react-redux";
import {loadedSmartThings} from "../../redux/smartThingsSlice";

const Card = () => {
    const dataSmartThings = useSelector((state) => state.smartThings.listSmartThings)

    const loading = useSelector((state) => state.smartThings.loading)
    const dispatch = useDispatch()

    useEffect(() => {
        setTimeout(() => {
            dispatch(loadedSmartThings())
        }, 3000)
    }, [loading])

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