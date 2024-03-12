import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import classnames from "classnames";

import {TooltipProps} from "./tooltip.interface";
import styles from "./tooltip.module.scss";

function Tooltip({targetRef, children}: TooltipProps) {
    const tooltipRef = useRef<HTMLDivElement>(null);
    const [isShowTooltip, setIsShowTooltip] = useState<boolean>(false);

    const updateTooltipPos = (evt: MouseEvent) => {
        if (tooltipRef.current) {
            const tooltipRect = tooltipRef.current.getBoundingClientRect();
            const xPos = evt.clientX + 10;
            const yPos = evt.clientY - tooltipRect.height - 10;

            tooltipRef.current.style.left = xPos + "px";
            tooltipRef.current.style.top = yPos + "px";
        }
    };
    const handleMouseEnter = (evt: MouseEvent) => {
        setIsShowTooltip(true);
        updateTooltipPos(evt);
    };

    const handleMouseLeave = (evt: MouseEvent) => {
        setIsShowTooltip(false);
        updateTooltipPos(evt);
    };
    const handleMouseMove = (evt: MouseEvent) => {
        updateTooltipPos(evt);
    };

    useLayoutEffect(() => {
        if (tooltipRef.current) {
            tooltipRef.current.style.display = isShowTooltip ? "inline-block" : "none";
        }
    }, [isShowTooltip]);

    useEffect(() => {
        if (targetRef.current) {
            targetRef.current.addEventListener("mouseenter", handleMouseEnter);
            if (isShowTooltip) {
                targetRef.current.addEventListener("mouseleave", handleMouseLeave);
                targetRef.current.addEventListener("mousemove", handleMouseMove);
            }
        }
        return () => {
            if (targetRef.current) {
                targetRef.current.removeEventListener("mouseenter", handleMouseEnter);
                if (isShowTooltip) {
                    targetRef.current.removeEventListener("mouseleave", handleMouseLeave);
                    targetRef.current.removeEventListener("mousemove", handleMouseMove);
                }
            }
        };
    }, [isShowTooltip]);

    return (
        <React.Fragment>
            <div ref={tooltipRef} className={classnames(styles.container)}>
                {children}
            </div>
        </React.Fragment>
    );
}

export default Tooltip;
