import {MouseEventHandler} from "react";

export interface CustomBtnProps {
    title: string
    btnType?: 'button' | 'submit'
    containerStyles?: string
    handleClick?: MouseEventHandler<HTMLButtonElement>
}