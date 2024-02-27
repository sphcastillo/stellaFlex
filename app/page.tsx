import Image from "next/image";
import collage from "@/images/blogCollage.png";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center bg-[#F23557] py-10 lg:py-0 h-[480px]">
        <div className="px-10 space-y-5 py-10">
          <h1 className="text-6xl py-5 max-w-xl font-serif">
            <span className="text-white">Sophiastic Living</span> {' '}
            
          </h1>
          <h2 className="text-white">
          Join Sophia on her journey as she navigates the world of wellness, beauty, and lifestyle products. Through firsthand experiences and candid reviews, Sophia opens the door to a world of knowledge, offering valuable insights and honest opinions to guide you towards a more radiant and fulfilling life. Explore with Sophia and uncover the secrets to a brighter tomorrow!
          </h2>
        </div>


          <Image 
          src={collage}
          alt="Sophiastic Living collage"
          className="hidden md:inline-flex h-32 lg:h-full"
          />

      </div>
    </main>
  );
}
