import Link from "next/link";
import { Poppins } from 'next/font/google';

const poppins = Poppins({ weight: "400", subsets: ['latin'] })

function Footer() {
  return (
    <div className={poppins.className}>
      <div className="flex justify-center items-center py-2">
          <div>Website designed & {" "}
              <Link 
                  href="https://www.builtbysophia.com/" 
                  rel="noreferrer" 
                  target = '_blank'
                  className="font-bold"
              >
                  <span className="text-[#F5C15D]">Built By Sophia</span>
              </Link>
          </div>
      </div>
    </div>
  )
}

export default Footer;