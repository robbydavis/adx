import React, { HTMLAttributes } from 'react';
export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';
export interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    position?: TooltipPosition;
    className?: string;
}
export declare const Tooltip: React.ForwardRefExoticComponent<TooltipProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Tooltip.d.ts.map