'use client'
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/images/stellaFlexLogo.png';
import { IoSearchOutline } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";


function Header() {

    return (
        <header className="sticky top-0 z-50 grid grid-cols-2 shadow-md md:px-10 bg-gray-200">

            <div className="flex items-center space-x-2">
                <Link href="/">
                    <Image 
                        src={Logo}
                        width={80}
                        height={80}
                        alt="StellaFlex logo" 
                    />
                </Link>
            </div>



            <div className='flex items-center justify-end'>
            <Link
            href="/"
            className="text-sm md:text-base py-3 px-4 bg-blue-950 text-orange-400 flex items-center rounded-full text-center whitespace-nowrap"
            >
            Sign up to our newsletter
            </Link>
            <MdAccountCircle className="h-7 w-7 cursor-pointer ml-2" />
        </div>
            

        </header>
    )
}

export default Header;