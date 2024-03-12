import {ReactNode} from "react";

export interface TooltipProps {
    targetRef: React.RefObject<HTMLDivElement>;
    children: ReactNode;
}
