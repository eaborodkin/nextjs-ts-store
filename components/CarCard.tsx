"use client"

import {CarProps} from "@/types"
import {calculateCarRent} from "@/utils"
import Image from "next/image"
import {CarDetails, CustomBtn} from "@/components/index"
import {useState} from "react"

interface CarCardProps {
    car: CarProps
}

const CarCard = ({car}: CarCardProps) => {
    const [isOpen, setIsOpen] = useState(false)

    const {
        city_mpg,
        drive, make, model, year, transmission
    } = car

    const carRent = calculateCarRent(city_mpg, year)

    return (
        <div className="car-card group">
            <div className="car-card__content">
                <h2 className="car-card__content-title">{make} {model}</h2>
            </div>

            <p className="flex mt-6 text-[32px] font-extrabold">
                <span className="self-start text-[14px] font-semibold">$</span>{carRent}
                <span className="self-end text-[14px] font-medium">/day</span>
            </p>

            <div className="relative w-full h-40 my-3 object-contain">
                <Image className="object-contain" src="/hero.png" fill priority alt="Car model image"/>
            </div>

            <div className="relative flex w-full mt-2">
                <div className="flex group-hover:invisible w-full justify-between text-gray">
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image src="/steering-wheel.svg" alt="Steering wheel image" width={20} height={20}/>
                        <p className="text-[14px]">
                            {transmission === 'a' ? 'Automatic' : 'Manual'}
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image src="/tire.svg" alt="Tire image" width={20} height={20}/>
                        <p className="text-[14px]">
                            {drive.toUpperCase()}
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image src="/gas.svg" alt="Gas image" width={20} height={20}/>
                        <p className="text-[14px]">
                            {city_mpg} MPG
                        </p>
                    </div>
                </div>

                <div className="car-card__btn-container">
                    <CustomBtn
                        title="More details"
                        containerStyles="w-full rounded-full py-[16px] bg-primary-blue"
                        textStyles="text-white text-[14px] leading-[17px] font-bold"
                        rightIcon="/right-arrow.svg"
                        handleClick={() => setIsOpen(true)}
                    />
                </div>

                <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car}/>
            </div>
        </div>
    )
}
export default CarCard