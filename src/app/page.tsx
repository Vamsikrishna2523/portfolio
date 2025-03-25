import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Plus, Copy } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-4 md:p-6 lg:p-8 flex flex-col">
      <div className="max-w-7xl w-full mx-auto space-y-4">
        {/* Navigation */}
        <nav className="bg-zinc-900/80 rounded-full p-2 md:p-3">
          <ul className="flex justify-between items-center px-4 md:px-6">
            <li>
              <Link href="#about" className="text-red-500 font-medium">
                ABOUT
              </Link>
            </li>
            <li>
              <Link href="#portfolio" className="font-medium">
                PORTFOLIO
              </Link>
            </li>
            <li>
              <Link href="#contact" className="font-medium">
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>

        {/* Profile Section */}
        <section className="bg-zinc-900/80 rounded-3xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="space-y-6 md:w-2/3">
              <div className="flex justify-between items-start">
                <p className="text-zinc-300">UI/UX Designer</p>
                <div className="flex items-center gap-2 text-xs bg-black/40 rounded-full px-3 py-1 md:hidden">
                  <span className="h-2 w-2 bg-red-500 rounded-full"></span>
                  <span>AVAILABLE FOR JOB</span>
                </div>
              </div>

              <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl font-bold">
                  I&apos;m Vamsi
                </h1>
                <p className="text-zinc-300">
                  I design digital products with
                  <br />
                  great experience.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button className="bg-gradient-to-r from-red-600 to-red-500 rounded-full px-4 py-2 flex items-center gap-2">
                  Hire me
                  <Plus size={16} />
                </button>
                <button className="bg-zinc-800 rounded-full px-4 py-2 flex items-center gap-2">
                  Copy Email
                  <Copy size={16} />
                </button>
              </div>
            </div>

            <div className="mt-8 md:mt-0 flex flex-col items-center gap-6">
              <div className="hidden md:flex items-center gap-2 text-xs bg-black/40 rounded-full px-3 py-1">
                <span className="h-2 w-2 bg-red-500 rounded-full"></span>
                <span>AVAILABLE FOR JOB</span>
              </div>
              <div className="relative h-32 w-32 rounded-full overflow-hidden border-4 border-zinc-800">
                <Image
                  src="/vamsiPic.png"
                  alt="Vamsi profile picture"
                  width={256}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Tools Section */}
          <div className="mt-8">
            <div className="bg-zinc-800/50 rounded-2xl p-4 md:p-6">
              <h3 className="text-xl font-medium mb-4">Tools</h3>
              <div className="flex justify-between items-center">
                <div className="h-12 w-12 bg-zinc-800 rounded-xl flex items-center justify-center">
                  <div className="h-8 w-8 relative">
                    <Image
                      src="/figma-icon.svg"
                      alt="Figma"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="h-12 w-12 bg-zinc-800 rounded-xl flex items-center justify-center">
                  <div className="h-8 w-8 relative">
                    <Image
                      src="/xd-icon.svg"
                      alt="Adobe XD"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="h-12 w-12 bg-zinc-800 rounded-xl flex items-center justify-center">
                  <div className="h-8 w-8 relative">
                    <Image
                      src="/canva-icon.svg"
                      alt="Canva"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="h-12 w-12 bg-zinc-800 rounded-xl flex items-center justify-center">
                  <div className="h-8 w-8 relative">
                    <Image
                      src="/ai-icon.svg"
                      alt="Adobe Illustrator"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Posters */}
          <Link
            href="/category/posters"
            className="bg-gradient-to-br from-zinc-900 to-red-900/30 rounded-3xl p-6 aspect-square md:row-span-2 transition-transform hover:scale-[0.98]"
          >
            <div className="flex justify-between">
              <h3 className="text-2xl font-medium">Posters</h3>
              <div className="bg-red-500 rounded-full p-1">
                <ArrowUpRight size={16} />
              </div>
            </div>
          </Link>

          {/* Product Design */}
          <Link
            href="/category/product-design"
            className="bg-gradient-to-br from-zinc-900 to-red-900/30 rounded-3xl p-6 transition-transform hover:scale-[0.98]"
          >
            <div className="flex justify-between">
              <h3 className="text-2xl font-medium">Product design</h3>
              <div className="bg-red-500 rounded-full p-1">
                <ArrowUpRight size={16} />
              </div>
            </div>
          </Link>

          {/* Art & Illustrations and Logo's */}
          <div className="grid grid-cols-2 gap-4">
            <Link
              href="/category/illustrations"
              className="bg-gradient-to-br from-zinc-900 to-red-900/30 rounded-3xl p-6 transition-transform hover:scale-[0.98]"
            >
              <div className="flex justify-between">
                <h3 className="text-xl font-medium">Art & Illustrations</h3>
                <div className="bg-red-500 rounded-full p-1">
                  <ArrowUpRight size={16} className="w-3 h-3 md:w-4 md:h-4" />
                </div>
              </div>
            </Link>
            <Link
              href="/category/logos"
              className="bg-gradient-to-br from-zinc-900 to-red-900/30 rounded-3xl p-6 transition-transform hover:scale-[0.98]"
            >
              <div className="flex justify-between">
                <h3 className="text-xl font-medium">Logo&apos;s</h3>
                <div className="bg-red-500 rounded-full p-1">
                  <ArrowUpRight size={16} className="w-3 h-3 md:w-4 md:h-4" />
                </div>
              </div>
            </Link>
          </div>

          {/* AI Music Product */}
          <div className="bg-zinc-900 rounded-3xl p-6 relative">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-medium">AI Music product</h3>
                <p className="text-zinc-400 text-sm">UX Case study</p>
              </div>
              <div className="bg-red-500 rounded-full p-1">
                <ArrowUpRight size={16} />
              </div>
            </div>
          </div>

          {/* iOS Mobile App */}
          <Link
            href="/category/ios-app"
            className="bg-zinc-900 rounded-3xl p-6 relative transition-transform hover:scale-[0.98]"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-medium">iOS Mobile app</h3>
                <p className="text-zinc-400 text-sm">Product develop</p>
              </div>
              <div className="bg-red-500 rounded-full p-1">
                <ArrowUpRight size={16} />
              </div>
            </div>
            <div className="mt-4 flex justify-center">
              <div className="w-40 bg-white rounded-xl p-4">
                <div className="flex justify-center mb-2">
                  <Image
                    src="/preperly-logo.svg"
                    alt="Preperly logo"
                    width={120}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <div className="space-y-2 text-black text-xs">
                  <div>
                    <label className="block text-gray-700 text-xs mb-1">
                      Phone number
                    </label>
                    <input
                      type="text"
                      placeholder="Restaurant phone number"
                      className="w-full border border-gray-300 rounded px-2 py-1 text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-xs mb-1">
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="Enter password"
                      className="w-full border border-gray-300 rounded px-2 py-1 text-xs"
                    />
                  </div>
                  <div className="flex items-center gap-1">
                    <input type="checkbox" id="remember" className="h-3 w-3" />
                    <label htmlFor="remember" className="text-gray-700">
                      Remember me
                    </label>
                  </div>
                  <div className="flex items-center gap-1">
                    <input type="checkbox" id="terms" className="h-3 w-3" />
                    <label htmlFor="terms" className="text-gray-700">
                      Accept terms and conditions
                    </label>
                  </div>
                  <button className="w-full bg-red-600 text-white rounded py-1">
                    Login
                  </button>
                </div>
              </div>
            </div>
          </Link>

          {/* AI Map Redesign */}
          <div className="bg-zinc-900 rounded-3xl p-6 relative">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-medium">AI Map redesign</h3>
                <p className="text-zinc-400 text-sm">UX Case study</p>
              </div>
              <div className="bg-red-500 rounded-full p-1">
                <ArrowUpRight size={16} />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-zinc-900/80 rounded-3xl p-6 mt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h3 className="text-xl font-medium">Portfolio 2025</h3>
            </div>
            <div className="flex gap-4 my-4 md:my-0">
              <Link href="#" className="text-red-500">
                Twitter
              </Link>
              <Link href="#" className="text-zinc-400">
                Instagram
              </Link>
              <Link href="#" className="text-zinc-400">
                LinkedIn
              </Link>
            </div>
            <div className="flex items-center gap-2 text-xs bg-black/40 rounded-full px-3 py-1">
              <span className="h-2 w-2 bg-red-500 rounded-full"></span>
              <span>AVAILABLE FOR JOB</span>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
