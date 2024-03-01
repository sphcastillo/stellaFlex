import SL_logo from "@/images/roundLogo.png";
import Image from "next/image";

function Logo(props: any) {
    const { renderDefault, title } = props;
    return (
        <div className="flex items-center space-x-2">
            <Image 
                src={SL_logo}
                alt="Sophiastic Living Logo"
                width={100}
                height={100}
                className="rounded-full object-cover"
            />
            {renderDefault && <>{renderDefault(props)}</>}
        </div>
    )
}

export default Logo;