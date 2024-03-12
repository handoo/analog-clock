import React, {useContext, useLayoutEffect, useMemo, useRef} from "react";
import classnames from "classnames";

import ClockContext from "../../context";
import styles from "./hour-hand.module.scss";

function HourHand() {
    const calibrateDeg = useRef<number>(180).current;
    const hand = useRef<HTMLDivElement>(null);
    const {hours, minutes} = useContext(ClockContext);

    const deg = useMemo(() => ((30 * hours + 0.5 * minutes + calibrateDeg) % 360) + "deg", [hours, minutes]);

    useLayoutEffect(() => {
        if (hand.current) hand.current.style.rotate = deg;
    }, [deg]);

    return <div ref={hand} className={classnames(styles.hand)} />;
}

export default HourHand;
