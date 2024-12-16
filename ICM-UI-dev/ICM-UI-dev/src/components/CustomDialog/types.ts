import { ReactNode } from 'react';

export interface CustomDialogTypes extends React.HTMLAttributes<HTMLDialogElement> {
    width?: string;
    height?: string;
    closeIcon?: ButtonPropType;
    okayButton?: ButtonPropType;
    closeButton?: ButtonPropType;
    open: boolean;
    children: ReactNode;
    onCloseEvent: () => void;
    buttonPosition?: ButtonPositions;
}

interface ButtonPropType {
    buttonVisibility: boolean;
    buttonLabel?: string;
    onClickButtonEvent?: () => void;
}

type ButtonPositions = "center" | "left" | "right";