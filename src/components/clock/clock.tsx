import React, {useRef} from "react";
import classnames from "classnames";

import useClock from "../../hooks/use-clock";
import {ClockProps} from "./clock.interface";
import HourHand from "./components/hour-hand";
import MinuteHand from "./components/minute-hand";
import Numbers from "./components/numbers";
import SecondHand from "./components/second-hand";
import Tooltip from "./components/tooltip";
import ClockContext from "./context";
import styles from "./clock.module.scss";

function Clock({secondHand = false}: ClockProps) {
    const clockContainerRef = useRef<HTMLDivElement>(null);
    const clock = useClock();

    return (
        <ClockContext.Provider value={clock}>
            <div ref={clockContainerRef} className={classnames(styles.container)}>
                <Numbers />
                <HourHand />
                <MinuteHand />
                {secondHand && <SecondHand />}
                <Tooltip targetRef={clockContainerRef}>
                    <div className={classnames(styles.tooltipContainer)}>
                        {String(clock.raw.getHours()).padStart(2, "0")}:
                        {String(clock.raw.getMinutes()).padStart(2, "0")}:
                        {String(clock.raw.getSeconds()).padStart(2, "0")}
                    </div>
                </Tooltip>
            </div>
        </ClockContext.Provider>
    );
}

export default Clock;
