import Link from "next/link";
import Image from "next/image";
import {CustomBtn} from "@/components/index";

const NavBar = () => {
    return (
        <header className="w-full absolute z-10">
            <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
                <Link href="/" className="flex justify-center items-center">
                    <Image className="object-contain" src="/logo.svg" alt="logo" width={118} height={18}/>
                </Link>

                <CustomBtn
                    title="SignIn"
                    containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
                    btnType="button"
                />
            </nav>
        </header>
    )
}
export default NavBar
