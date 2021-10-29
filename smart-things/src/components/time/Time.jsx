import React, {useEffect, useState} from 'react';
import moment from "moment";

const Time = ({format = 'YYYY-MM-DD HH:mm:ss',startTime = "2020-05-16 12:00:00",endTime = new Date(), styleClass }) => {
    const [time, setTime] = useState()
    let start = moment(startTime);
    let end = moment(endTime);
    let diff = end.diff(start);
    const date = moment.utc(diff).format(format)

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(date)
        }, 1000)

        return () => clearInterval(interval)
    }, [time])

    return (
        <div className={styleClass}>
            {time}
        </div>
    );
};

export default Time;