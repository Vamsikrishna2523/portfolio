"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Plus, Copy } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ContactModal } from "@/components/contact-modal";
import { ToastNotification } from "@/components/toast-notification";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const copyEmailToClipboard = useCallback(() => {
    navigator.clipboard.writeText("cjvkrishna5@gmail.com");
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-black text-white p-4 md:p-6 lg:p-8 flex flex-col">
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
      <ToastNotification
        message="Email copied to clipboard!"
        isVisible={showToast}
      />

      <div className="max-w-7xl w-full mx-auto space-y-4">
        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-zinc-900/80 backdrop-blur-sm rounded-full p-2 md:p-3 sticky top-4 z-50"
        >
          <ul className="flex justify-between items-center px-4 md:px-6">
            <li>
              <Link
                href="#about"
                className="text-red-500 font-medium relative group"
              >
                ABOUT
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link href="#portfolio" className="font-medium relative group">
                PORTFOLIO
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="font-medium relative group"
              >
                CONTACT
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            </li>
          </ul>
        </motion.nav>

        {/* Profile Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-zinc-900/80 backdrop-blur-sm rounded-3xl p-6 md:p-8"
          id="about"
        >
          <div className="flex flex-col md:flex-row justify-between">
            <div className="space-y-6 md:w-2/3">
              <div className="flex justify-between items-start">
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-zinc-300"
                >
                  UI/UX Designer
                </motion.p>
                <div className="flex items-center gap-2 text-xs bg-black/40 rounded-full px-3 py-1 md:hidden">
                  <span className="h-2 w-2 bg-red-500 rounded-full animate-pulse"></span>
                  <span>AVAILABLE FOR JOB</span>
                </div>
              </div>

              <div className="space-y-2">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                  className="text-4xl md:text-5xl font-bold"
                >
                  I&apos;m Vamsi
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  className="text-zinc-300"
                >
                  I design digital products with
                  <br />
                  great experience.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex items-center gap-3"
              >
                <a
                  href="mailto:cjvkrishna5@gmail.com"
                  className="bg-gradient-to-r from-red-600 to-red-500 rounded-full px-4 py-2 flex items-center gap-2 hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Hire me
                  <Plus size={16} />
                </a>
                <button
                  onClick={copyEmailToClipboard}
                  className="bg-zinc-800 rounded-full px-4 py-2 flex items-center gap-2 hover:bg-zinc-700 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Copy Email
                  <Copy size={16} />
                </button>
              </motion.div>
            </div>

            <div className="mt-8 md:mt-0 flex flex-col items-center gap-6">
              <div className="hidden md:flex items-center gap-2 text-xs bg-black/40 rounded-full px-3 py-1">
                <span className="h-2 w-2 bg-red-500 rounded-full animate-pulse"></span>
                <span>AVAILABLE FOR JOB</span>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="relative h-32 w-32 rounded-full overflow-hidden border-4 border-zinc-800"
              >
                <Image
                  src="/vamsiPic.png"
                  alt="Vamsi profile picture"
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </div>
          </div>

          {/* Tools Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-8"
          >
            <div className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-4 md:p-6">
              <h3 className="text-xl font-medium mb-4">Tools</h3>
              <div className="flex justify-between items-center">
                <motion.div
                  whileHover={{ y: -5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="h-12 w-12 bg-zinc-800 rounded-xl flex items-center justify-center"
                >
                  <div className="h-8 w-8 relative">
                    <Image
                      src="/figma-icon.svg"
                      alt="Figma"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ y: -5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="h-12 w-12 bg-zinc-800 rounded-xl flex items-center justify-center"
                >
                  <div className="h-8 w-8 relative">
                    <Image
                      src="/xd-icon.svg"
                      alt="Adobe XD"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ y: -5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="h-12 w-12 bg-zinc-800 rounded-xl flex items-center justify-center"
                >
                  <div className="h-8 w-8 relative">
                    <Image
                      src="/canva-icon.svg"
                      alt="Canva"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ y: -5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="h-12 w-12 bg-zinc-800 rounded-xl flex items-center justify-center"
                >
                  <div className="h-8 w-8 relative">
                    <Image
                      src="/ai-icon.svg"
                      alt="Adobe Illustrator"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" id="portfolio">
          {/* Posters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/category/posters" className="block h-full">
              <div className="bg-gradient-to-br from-zinc-900 to-red-900/30 backdrop-blur-sm rounded-3xl p-6 aspect-square md:row-span-2 transition-all duration-500 hover:shadow-xl hover:shadow-red-500/10 group h-full">
                <div className="flex justify-between">
                  <h3 className="text-2xl font-medium">Posters</h3>
                  <motion.div
                    whileHover={{ rotate: 45 }}
                    transition={{ duration: 0.3 }}
                    className="bg-red-500 rounded-full p-1"
                  >
                    <ArrowUpRight size={16} />
                  </motion.div>
                </div>
                <div className="mt-4 h-[calc(100%-40px)] relative overflow-hidden rounded-xl">
                  <Image
                    src="/hackathonPoster.png"
                    alt="Posters preview"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Product Design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link href="/category/product-design" className="block h-full">
              <div className="bg-gradient-to-br from-zinc-900 to-red-900/30 backdrop-blur-sm rounded-3xl p-6 transition-all duration-500 hover:shadow-xl hover:shadow-red-500/10 group h-full">
                <div className="flex justify-between">
                  <h3 className="text-2xl font-medium">Product design</h3>
                  <motion.div
                    whileHover={{ rotate: 45 }}
                    transition={{ duration: 0.3 }}
                    className="bg-red-500 rounded-full p-1"
                  >
                    <ArrowUpRight size={16} />
                  </motion.div>
                </div>
                <div className="mt-4 h-[calc(100%-40px)] relative overflow-hidden rounded-xl">
                  <Image
                    src="/productDesign/ABHINAY-6.png"
                    alt="Product design preview"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Art & Illustrations and Logo's */}
          <div className="grid grid-cols-2 gap-4 md:col-span-2 h-auto min-h-[300px] md:min-h-[400px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link href="/category/illustrations" className="block h-full">
                <div className="bg-gradient-to-br from-zinc-900 to-red-900/30 backdrop-blur-sm rounded-3xl p-6 transition-all duration-500 hover:shadow-xl hover:shadow-red-500/10 group h-full">
                  <div className="flex justify-between">
                    <h3 className="text-xl font-medium">Art & Illustrations</h3>
                    <motion.div
                      whileHover={{ rotate: 45 }}
                      transition={{ duration: 0.3 }}
                      className="bg-red-500 rounded-full p-1"
                    >
                      <ArrowUpRight
                        size={16}
                        className="w-3 h-3 md:w-4 md:h-4"
                      />
                    </motion.div>
                  </div>
                  <div className="mt-4 h-[calc(100%-40px)] relative overflow-hidden rounded-xl">
                    <Image
                      src="/artWork/Untitled_Artwork 6.png"
                      alt="Illustrations preview"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link href="/category/logos" className="block h-full">
                <div className="bg-gradient-to-br from-zinc-900 to-red-900/30 backdrop-blur-sm rounded-3xl p-6 transition-all duration-500 hover:shadow-xl hover:shadow-red-500/10 group h-full">
                  <div className="flex justify-between">
                    <h3 className="text-xl font-medium">Logo&apos;s</h3>
                    <motion.div
                      whileHover={{ rotate: 45 }}
                      transition={{ duration: 0.3 }}
                      className="bg-red-500 rounded-full p-1"
                    >
                      <ArrowUpRight
                        size={16}
                        className="w-3 h-3 md:w-4 md:h-4"
                      />
                    </motion.div>
                  </div>
                  <div className="mt-4 h-[calc(100%-40px)] relative overflow-hidden rounded-xl">
                    <Image
                      src="/perperlyLogo.png"
                      alt="Logos preview"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>

          {/* iOS Mobile App */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-2"
          >
            <Link href="/category/ios-app" className="block">
              <div className="bg-zinc-900 backdrop-blur-sm rounded-3xl p-6 relative transition-all duration-500 hover:shadow-xl hover:shadow-red-500/10 group">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-medium">iOS Mobile app</h3>
                    <p className="text-zinc-400 text-sm">Product develop</p>
                  </div>
                  <motion.div
                    whileHover={{ rotate: 45 }}
                    transition={{ duration: 0.3 }}
                    className="bg-red-500 rounded-full p-1"
                  >
                    <ArrowUpRight size={16} />
                  </motion.div>
                </div>
                <div className="mt-4 flex justify-center md:justify-start md:flex-row gap-6 flex-wrap">
                  <motion.div
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="w-40 bg-white rounded-xl p-4 shadow-lg"
                  >
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
                        <input
                          type="checkbox"
                          id="remember"
                          className="h-3 w-3"
                        />
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
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="w-40 h-64 relative rounded-xl overflow-hidden"
                  >
                    <Image
                      src="/iosApp/Ongoing Order-1.png"
                      alt="iOS App Screen"
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="w-40 h-64 relative rounded-xl overflow-hidden"
                  >
                    <Image
                      src="/iosApp/menuPic.png"
                      alt="iOS App Screen"
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-zinc-900/80 backdrop-blur-sm rounded-3xl p-6 mt-4"
          id="contact"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h3 className="text-xl font-medium">Portfolio 2025</h3>
            </div>
            <div className="flex gap-4 my-4 md:my-0">
              <a
                href="https://x.com/cjvkrishna5?t=adH1qMUlD3ytdKS7B1CaSQ&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:text-white transition-colors duration-300"
              >
                Twitter
              </a>
              <a
                href="https://www.instagram.com/__vamsiii?igsh=MXJzeDJybm5icnp0Zg=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors duration-300"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/vamsi-krishna-017b62290"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors duration-300"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center gap-2 text-xs bg-black/40 rounded-full px-3 py-1">
              <span className="h-2 w-2 bg-red-500 rounded-full animate-pulse"></span>
              <span>AVAILABLE FOR JOB</span>
            </div>
          </div>
        </motion.footer>
      </div>
    </main>
  );
}
