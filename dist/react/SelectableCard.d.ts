import React from 'react';
export interface SelectableCardProps {
    children: React.ReactNode;
    selected?: boolean;
    error?: boolean;
    disabled?: boolean;
    onClick?: () => void;
    className?: string;
    'aria-label'?: string;
    id?: string;
}
export declare const SelectableCard: React.ForwardRefExoticComponent<SelectableCardProps & React.RefAttributes<HTMLButtonElement>>;
export interface SelectableCardGroupProps {
    children: React.ReactNode;
    className?: string;
    'aria-label'?: string;
    'aria-labelledby'?: string;
}
export declare const SelectableCardGroup: React.ForwardRefExoticComponent<SelectableCardGroupProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=SelectableCard.d.ts.map