import {createContext} from "react";

import {ClockContextInterface} from "./clock-context.interface";

const ClockContext = createContext<ClockContextInterface>({
    hours: 0,
    minutes: 0,
    seconds: 0,
    raw: new Date(),
});

export default ClockContext;
