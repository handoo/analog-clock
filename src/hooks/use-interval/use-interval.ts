import {useEffect, useRef} from "react";

import {Callback, Interval} from "./use-interval.interface";

function useInterval(callback: Callback, interval: Interval): void {
    const savedCallback = useRef<(() => void) | null>(null);

    useEffect(() => {
        savedCallback.current = callback;
    });

    useEffect(() => {
        function tick() {
            if (savedCallback.current) {
                savedCallback.current();
            }
        }

        const id = setInterval(tick, interval);
        return () => clearInterval(id);
    }, [interval]);
}

export default useInterval;
