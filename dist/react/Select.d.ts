import React from 'react';
export type SelectState = 'default' | 'hover' | 'focus' | 'warning' | 'error' | 'disabled';
export interface SelectOption {
    value: string;
    label: string;
    disabled?: boolean;
}
export interface SelectProps {
    label: string;
    options: SelectOption[];
    value?: string;
    placeholder?: string;
    state?: SelectState;
    message?: string;
    className?: string;
    onChange?: (value: string) => void;
    disabled?: boolean;
    leadingIcon?: React.ReactNode;
    trailingIcon?: React.ReactNode;
}
export declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Select.d.ts.map