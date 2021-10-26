import React, {useEffect, useState} from 'react';
import moment from "moment";

const Footer = () => {
    const [timeNow, setTimeNow] = useState()
    let nowDate = moment().format('YYYY-MM-DD HH:mm:ss')

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeNow(nowDate)
        },1000)

        return () => clearInterval(interval)
    }, [timeNow])

    return (
        <div>
            {timeNow}
        </div>
    );
};

export default Footer;