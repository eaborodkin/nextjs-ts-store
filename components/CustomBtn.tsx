"use client"

import {CustomBtnProps} from "@/types";
import Image from "next/image"

const CustomBtn = ({title, containerStyles, handleClick, btnType, textStyles, rightIcon, isDisabled}:CustomBtnProps) => {
    return (
        <button
            disabled={isDisabled || false}
            type={btnType || "button"}
            className={`custom-btn ${containerStyles}`}
            onClick={handleClick}
        >
            <span className={`flex-1 ${textStyles}`}>{title}</span>
            {rightIcon && (
                <div className="relative w-6 h-6">
                    <Image
                        src={rightIcon}
                        alt="Right icon"
                        fill
                        className="object-contain"
                    />
                </div>
            )}
        </button>
    )
}
export default CustomBtn
