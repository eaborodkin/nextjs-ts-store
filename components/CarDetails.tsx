"use client"

import {CarProps} from "@/types"
import Image from "next/image"
import {Fragment} from "react"
import {Dialog, Transition} from "@headlessui/react"

interface CarDetailsProps {
    isOpen: boolean
    closeModal: () => void
    car: CarProps
}

const CarDetails = ({isOpen, closeModal, car}: CarDetailsProps) => {
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" onClose={closeModal} className="relative z-10">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25"></div>
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel
                                    className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl
                                    transform bg-white text-left shadow-xl transition-all flex flex-col gap-5 p-6">
                                    <button
                                        type="button"
                                        onClick={closeModal}
                                        className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
                                    >
                                        <Image alt="close" src="/close.svg" width={20} height={20}
                                               className="object-contain"/>
                                    </button>
                                    <div className="flex flex-1 flex-col gap-3">
                                        <div className="relative w-full h-40 bg-cover bg-pattern bg-center rounded-lg">
                                            <Image className="object-contain" src="/hero.png" fill priority
                                                   alt="Car model image"/>
                                        </div>

                                        <div className="flex gap-3">
                                            <div className="relative flex-1 w-full h-24 bg-primary-blue-100 rounded-lg">
                                                <Image className="object-contain" src="/hero.png" fill priority
                                                       alt="Car model image"/>
                                            </div>
                                            <div className="relative flex-1 w-full h-24 bg-primary-blue-100 rounded-lg">
                                                <Image className="object-contain" src="/hero.png" fill priority
                                                       alt="Car model image"/>
                                            </div>
                                            <div className="relative flex-1 w-full h-24 bg-primary-blue-100 rounded-lg">
                                                <Image className="object-contain" src="/hero.png" fill priority
                                                       alt="Car model image"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-1 flex-col gap-2">
                                        <h2 className="font-semibold text-xl capitalize">
                                            {car.make} {car.model}
                                        </h2>

                                        <div className="flex flex-wrap mt-1 gap-4">
                                            {Object.entries(car).map(([key, value]) => (
                                                <div className="flex w-full gap-5 justify-between text-right" key={key}>
                                                    <h4 className="text-grey capitalize">{key.split('_').join(' ')}</h4>
                                                    <p className="text-black-100 font-semibold">{value}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
export default CarDetails
