import { getSiteSettings } from "@/sanity/lib/siteSettings/getSiteSettings";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

async function Loading() {
  const siteSettings = await getSiteSettings();

  return (
    <div className="fixed inset-0 flex items-center justify-center glass-light">
      {siteSettings?.headerLogo && (
        <div className="flex items-center justify-center">
          <Image
            src={urlFor(siteSettings?.headerLogo).url()}
            alt={siteSettings?.siteTitle || ""}
            width={100}
            height={100}
            className="h-32 w-32 rounded-full animate-pulse"
            priority
          />
        </div>
      )}
    </div>
  );
}

export default Loading;