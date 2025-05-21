import { urlFor } from "@/sanity/lib/image";
import { getSiteSettings } from "@/sanity/lib/siteSettings/getSiteSettings";
import Image from "next/image";

async function HeroBanner() {
  const siteSettings = await getSiteSettings();

  return (
    <div className="relative w-full h-[52vh] xl:h-[72vh]">
      {siteSettings?.mainHeroImage && (
        <>
          <Image
            src={urlFor(siteSettings?.mainHeroImage).url()}
            alt="Hero Banner"
            width={1900}
            height={1100}
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 pointer-events-none" />
        </>
      )}
    </div>
  );
}

export default HeroBanner;