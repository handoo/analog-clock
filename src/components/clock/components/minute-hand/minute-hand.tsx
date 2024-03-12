import React, {useContext, useLayoutEffect, useMemo, useRef} from "react";
import classnames from "classnames";

import ClockContext from "../../context";
import styles from "./minute-hand.module.scss";

function MinuteHand() {
    const calibrateDeg = useRef<number>(180).current;
    const hand = useRef<HTMLDivElement>(null);
    const {minutes, seconds} = useContext(ClockContext);

    const deg = useMemo(() => ((6 * minutes + 0.1 * seconds + calibrateDeg) % 360) + "deg", [minutes, seconds]);

    useLayoutEffect(() => {
        if (hand.current) hand.current.style.rotate = deg;
    }, [deg]);

    return <div ref={hand} className={classnames(styles.hand)} />;
}

export default MinuteHand;
