function Centr() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Banner */}
      <div className="bg-gray-900 text-white text-center py-3 px-4">
        <p className="text-sm font-medium">
          Save 15% on the Centr App + get 7 days FREE
        </p>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gray-900 rounded-sm mr-2 flex items-center justify-center">
                  <span className="text-white text-lg font-bold">C</span>
                </div>
                <span className="text-2xl font-bold text-gray-900 tracking-wider">
                  CENTR
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                ABOUT US
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                HYROX
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                SHOP EQUIPMENT
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                BLOG
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                LOGIN
              </a>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded-md transition-colors">
                GET THE APP
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button className="text-gray-700 hover:text-gray-900">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between py-12 lg:py-20">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left lg:pr-12 mb-12 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              WHERE THE STRONG GET <span className="block">STRONGER</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Strength training hits harder with a personalized workout plan.
              Elite coaching meets performance equipment. One mission: stronger.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-md transition-colors text-lg">
                GET YOUR PLAN
              </button>
              <button className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-md transition-colors text-lg">
                SHOP EQUIPMENT
              </button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="flex-1 relative">
            <div className="relative bg-gray-100 rounded-lg overflow-hidden">
              {/* Background text overlay */}
              <div className="absolute inset-0 flex items-start justify-center pt-8 z-10">
                <div className="text-center">
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-yellow-400 leading-none">
                    THE HOME OF
                  </h2>
                  <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-yellow-400 leading-none mt-2">
                    STRENGTH
                  </h2>
                </div>
              </div>

              {/* Placeholder for the main image */}
              <div className="relative h-96 sm:h-[500px] lg:h-[600px] bg-gradient-to-b from-gray-200 to-gray-400">
                {/* This would be replaced with your actual image */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-80 bg-gradient-to-t from-orange-400 to-orange-300 rounded-t-full opacity-75"></div>
                <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-48 h-48 bg-orange-500 rounded-full opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Centr;
