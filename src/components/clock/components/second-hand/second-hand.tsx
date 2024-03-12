import React, {useContext, useLayoutEffect, useMemo, useRef} from "react";
import classnames from "classnames";

import ClockContext from "../../context";
import styles from "./second-hand.module.scss";

function SecondHand() {
    const calibrateDeg = useRef<number>(180).current;
    const hand = useRef<HTMLDivElement>(null);
    const {seconds} = useContext(ClockContext);

    const deg = useMemo(() => ((6 * seconds + calibrateDeg) % 360) + "deg", [seconds]);

    useLayoutEffect(() => {
        if (hand.current) hand.current.style.rotate = deg;
    }, [deg]);

    return <div ref={hand} className={classnames(styles.hand)} />;
}

export default SecondHand;
