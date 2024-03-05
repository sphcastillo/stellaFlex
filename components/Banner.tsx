import React from 'react'

function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
        <div className='text-[#002135]'>
            <h1 className="text-7xl">Stella Jacobs</h1>
            <h2 className="mt-5 md:mt-0 text-[#00c3d7]">Welcome to{" "}
                <span className="underline decoration-4 decoration-[#ff643c]">StellaFlex</span>{' '}- 
                Where Passion and Fitness Collide
            </h2>
        </div>

        <p className="mt-5 md:mt-2 text-[#ff643c] max-w-sm">
        My journey into the fitness world was never about the perfect body, it was about making a positive change to feel better mentally and physically.
        </p>
    </div>
  )
}

export default Banner;