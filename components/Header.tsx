import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/images/whiteColorLogo.png';

function Header() {
  return (
    <header className="flex justify-between p-5 mx-auto max-w-7xl bg-[#FFBD39]">
    <div className="flex items-center space-x-5">
        <Link href="/">
            <Image 
                className="w-44 object-contain cursor-pointer" 
                src={Logo}
                width={175}
                height={50}
                alt="Sophiastic Living logo" 
            />
        </Link>
        <div className="hidden md:inline-flex items-center space-x-5 text-[#FFEED0]">
            <h3>About</h3>
            <h3>Contact</h3>
            <h3 className="text-white bg-[#118DF0] px-4 py-1 rounded-full">Follow</h3>
        </div>
    </div>

    <div className="flex items-center space-x-5 text-[#FFEED0]">
        <h3>Sign In</h3>
        <h3 className="px-4 py-1 rounded-full bg-[#090088] text-white">Get Started</h3>
    </div>
</header>
  )
}

export default Header;