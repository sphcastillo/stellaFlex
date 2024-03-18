'use client'
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/images/stellaFlexLogo.png';
import { MdAccountCircle } from "react-icons/md";
import { IoIosFitness } from "react-icons/io";
import { Poppins } from 'next/font/google';
import { MdOutlineFoodBank } from "react-icons/md";

const poppins = Poppins({ weight: "400", subsets: ['latin'] })

function Header() {

    return (
        <header className="sticky top-0 z-50 grid grid-cols-2 shadow-md md:px-10 bg-[#f2f5f7]">

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

            <div className='flex items-center justify-end space-x-6 pr-2 sm:pr-0'>
            
            <div className='flex items-center bg-black rounded-full justify-center px-3 py-1'>
                <MdOutlineFoodBank className="h-7 w-7 cursor-pointer text-white" />
                <div className={poppins.className}>
                <p className='text-white pl-1 tracking-wide '>Recipes</p>
                </div>
            </div>
            <div className='flex items-center bg-black rounded-full justify-center px-3 py-1'>
                <IoIosFitness className="h-7 w-7 cursor-pointer text-white" />
                <div className={poppins.className}>
                <p className='text-white pl-1 tracking-wide '>Workouts</p>
                </div>
            </div>

            {/* <MdAccountCircle className="h-7 w-7 cursor-pointer" />
             */}
            </div>
            

        </header>
    )
}

export default Header;