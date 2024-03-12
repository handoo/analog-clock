import {useState} from "react";

import useInterval from "../use-interval";

function useClock() {
    const [time, setTime] = useState<Date>(new Date());

    useInterval(() => {
        const now = new Date();
        setTime(now);
    }, 1000);

    return {
        hours: time.getHours() % 12,
        minutes: time.getMinutes(),
        seconds: time.getSeconds(),
        raw: time,
    };
}

export default useClock;
