import React from 'react'

function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
        <div>
            <h1 className="text-7xl">Sophia&lsquo;s Daily Blog</h1>
            <h2 className="mt-5 md:mt-0">Welcome to{" "}
                <span className="underline decoration-4 decoration-[#F7AB0A]">Sophiastic Living</span>{' '}- 
                A witty wellness blog where you can find humorous reviews, playful insights, and a quirky take on living life to the fullest!
            </h2>
        </div>

        <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
            Join Sophia as she navigates the realms of health, beauty, and lifestyle with laughter as her compass. Discover the fun side of self-care and product exploration with Sophia&apos;s quirky take on living life to the fullest!
        </p>
    </div>
  )
}

export default Banner;