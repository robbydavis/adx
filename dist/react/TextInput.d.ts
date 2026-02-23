import React, { InputHTMLAttributes } from 'react';
export type TextInputState = 'default' | 'hover' | 'focus' | 'warning' | 'error' | 'disabled';
export interface TextInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> {
    label: string;
    state?: TextInputState;
    message?: string;
    className?: string;
    leadingIcon?: React.ReactNode;
    trailingIcon?: React.ReactNode;
}
export declare const TextInput: React.ForwardRefExoticComponent<TextInputProps & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=TextInput.d.ts.map