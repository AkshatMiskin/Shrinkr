import Image from "next/image";
import localfont from "next/font/local";
import Link from "next/link";

const poppins = localfont({
  src:"./fonts/Poppins-ExtraBoldItalic.ttf",
  variable: "--font-poppins",
  weights: "100, 900",
});

export default function Home() {
  return (
    <main className="bg-purple-100">
      {/* Hero Section */}
      <section className="grid grid-cols-2 h-[50vh]">
        <div className=" flex flex-col gap-4 items-center justify-center">
          <p className={`text-3xl font-bold ${poppins.className}`}>The best URL Shortener in the market</p>
          <p className="px-40 text-center">Shrinkr is the best URL shortener in the world because it truly understands what users want — simplicity, speed, and privacy. Unlike others, it doesn't bombard you with sign-ups, data collection, or unnecessary steps. With Shrinkr, you just paste, shorten, and go.</p>
          <div className='flex gap-3'>
                    <Link href='/shorten'><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white'>Try Now</button></Link>
                    <Link href='/generate'><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white'>Github</button></Link>
          </div>
        </div>
        <div className=" flex justify-start relative">
          <Image className="mix-blend-darken" alt="Alternative for a image of a vector" src={"/vector.jpeg"} fill={true}/>
        </div>
      </section>

      {/* Why Choose Shrinkr Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-bold text-gray-800 mb-4 ${poppins.className}`}>Why Choose Shrinkr?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Experience the difference with a URL shortener that puts your needs first</p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-purple-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Generate short URLs in milliseconds. No waiting, no delays - just instant results.</p>
            </div>

            <div className="bg-purple-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">💻</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Open Source</h3>
              <p className="text-gray-600">Fully transparent and open source. Contribute, customize, or audit the code on GitHub.</p>
            </div>

            <div className="bg-purple-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">✓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">100% Reliable</h3>
              <p className="text-gray-600">99.9% uptime guarantee. Your shortened URLs work when you need them most.</p>
            </div>

            <div className="bg-purple-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">✨</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Clean & Simple</h3>
              <p className="text-gray-600">No clutter, no ads, no distractions. Just a clean, intuitive interface that works.</p>
            </div>

            <div className="bg-purple-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">⚙️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Custom Options</h3>
              <p className="text-gray-600">Customize your short URLs with meaningful names that make sense to you.</p>
            </div>

            <div className="bg-purple-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Always Free</h3>
              <p className="text-gray-600">Core features are completely free forever. No hidden costs or premium barriers.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-purple-100 py-16">
        <div className="max-w-4xl mx-auto text-center px-8">
          <h2 className={`text-3xl font-bold text-gray-800 mb-4 ${poppins.className}`}>Ready to Shrink Your URLs?</h2>
          <p className="text-lg text-gray-600 mb-8">Experience the simplest way to shorten and manage your URLs</p>
          <div className="flex gap-4 justify-center">
            <Link href='/shorten'>
              <button className='bg-purple-500 hover:bg-purple-600 rounded-lg shadow-lg px-8 py-3 font-bold text-white transition-colors duration-200'>
                Start Shortening
              </button>
            </Link>
            <Link href='/about'>
              <button className='bg-white hover:bg-gray-50 border-2 border-purple-500 rounded-lg shadow-lg px-8 py-3 font-bold text-purple-500 transition-colors duration-200'>
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}