import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "./ui/button";
import { HeartIcon } from "lucide-react";
import Image from "next/image";
import { IoIosFitness } from "react-icons/io";
import { poppinsRegular } from "@/utils/fonts";
import { MdOutlineFoodBank } from "react-icons/md";
import { getSiteSettings } from "@/sanity/lib/siteSettings/getSiteSettings";
import { urlFor } from "@/sanity/lib/image";
import CurrentTierBadge from "./Badge/CurrentTierBadge";

async function Header() {
  const siteSettings = await getSiteSettings();

  return (
    <header className="">
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        {/* Left Side */}

        <Link href="/">
          {siteSettings?.headerLogo ? (
            <Image
              className="w-16 h-16 rounded-full object-cover aspect-square"
              priority
              src={urlFor(siteSettings?.headerLogo).url()}
              width={100}
              height={100}
              alt={siteSettings?.headerLogo?.alt || "StellaFlex Logo"}
            />
          ) : (
            <h2>{siteSettings?.siteTitle}</h2>
          )}
        </Link>

        <div className="flex items-center justify-between space-x-6 pr-2 sm:pr-0">
          <div className="flex items-center bg-black rounded-full justify-center px-3 py-1">
            <MdOutlineFoodBank className="h-7 w-7 cursor-pointer text-white" />
            <div className="">
              <p
                className={`${poppinsRegular.className} text-sm text-white pl-1 tracking-wide `}
              >
                Recipes
              </p>
            </div>
          </div>
          <div className="flex items-center bg-black rounded-full justify-center px-3 py-1">
            <IoIosFitness className="h-7 w-7 cursor-pointer text-white" />
            <div className={poppinsRegular.className}>
              <p className="text-white pl-1 text-sm tracking-wide ">Workouts</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <SignedIn>
            <div className="flex items-center gap-2 hover:gap-4 px-2 py-2 hover:px-4 hover:bg-gray-100 transition-all duration-200 border border-gray-200 rounded-full">
              <CurrentTierBadge />
              <UserButton />
            </div>
          </SignedIn>
          <SignedOut>
            <Button
              asChild
              variant="outline"
              className="px-4 py-2 bg-red-500 text-white rounded-lg"
            >
              <div>
                <SignInButton mode="modal" />
                <HeartIcon className="w-4 h-4" />
              </div>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
}

export default Header;
