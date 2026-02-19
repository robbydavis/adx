import React, { ButtonHTMLAttributes } from 'react';
export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
    variant?: 'primary' | 'secondary';
    size?: 'large' | 'medium' | 'small' | 'xsmall';
    icon?: boolean;
    iconBrand?: boolean;
    loading?: boolean;
    type?: 'button' | 'submit' | 'reset';
    children: React.ReactNode;
}
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=Button.d.ts.map