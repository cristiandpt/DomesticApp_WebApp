import Footer from "@/components/common/Footer";
import RenderLogo from "@/components/common/RenderLogo";
import Button from "@mui/material/Button";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <main
      className={`flex min-h-screen flex-col  justify-between  ${inter.className}`}
    >
      <div>
        <header className="relative">
          <div className="container px-6 py-6 mx-auto lg:flex lg:items-center lg:justify-between">
            <div className="flex items-center justify-between ">
              <a className="flex items-center -mx-1" href="#">
              <RenderLogo></RenderLogo>
                <svg
                  className="w-8 h-8 mx-1 sm:h-10 sm:w-10"
                  viewBox="0 0 49 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                

                </svg>

              </a>
              <button
                className="text-gray-600 lg:hidden "
                onClick={() => setShowMenu((prev) => !prev)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
            <div
              className={`${
                showMenu ? "opacity-100 " : "opacity-0 -translate-x-full "
              } absolute lg:static transition-all duration-300 w-full py-12 lg:py-0 left-1/2 lg:opacity-100 lg:translate-x-0 lg:bg-transparent lg:w-auto -translate-x-1/2 top-20 sm:top-24 bg-[#15135e]`}
            >
              <nav className="flex flex-col items-center space-y-8 lg:flex-row lg:space-y-0 lg:-mx-4">
                <a
                  href="#"
                  className="font-medium text-white lg:text-[#15135e] lg:hover:text-gray-400 lg:mx-4"
                >
                  Home
                </a>

                <a
                  href="/aboutUs"
                  className="font-medium text-white lg:text-[#15135e] lg:hover:text-gray-400 lg:mx-4"
                >
                  About us
                </a>

                <a
                  href="/contactUs"
                  className="font-medium text-white lg:text-[#15135e] lg:hover:text-gray-400 lg:mx-4"
                >
                  Contact us
                </a>

                <Link
                  className="px-8 py-2.5 text-white lg:text-[#15135e] lg:hover:bg-[#15135e] lg:hover:text-white duration-300 transition-colors font-medium lg:mx-4 border-2 lg:border-[#15135e] border-white"
                  href="client/home"
                >
                  Log in
                </Link>
                <Link
                  className="px-8 py-2.5 text-white lg:text-[#15135e] lg:hover:bg-[#15135e] lg:hover:text-white duration-300 transition-colors font-medium lg:mx-4 border-2 lg:border-[#15135e] border-white"
                  href="/sign-up"
                >
                  Sign up
                </Link>
              </nav>
            </div>
          </div>
        </header>
        <section className="container flex flex-col items-center px-6 py-12 mx-auto lg:flex-row">
          <div className="lg:w-1/2">
            <h1 className="max-w-xl font-serif text-4xl font-medium tracking-wide text-[#1aad57] capitalize md:text-6xl ">
              Give us a try!
            </h1>
            <p className="max-w-lg mt-4 text-gray-500">
              Let us be the best option to suit all your neccesities, all according to your budget and preferences.
            </p>
            <div className="mt-6 sm:flex sm:items-center">
              <a
                href="#"
                className="bg-[#15135e] hover:bg-[#15135e]/80 duration-300 transition-colors border-2 border-[#15135e] px-6 block text-center py-3 uppercase text-sm font-bold leading-4 tracking-widest text-white "
              >
                Try it now!
              </a>
              <a
                href="#"
                className="border-2 text-sm duration-300 transition-colors hover:bg-[#15135e] hover:text-white font-bold leading-4 mt-4 sm:mt-0 tracking-widest text-[#15135e] sm:mx-4 border-[#15135e] px-6 block text-center py-3 uppercase"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="h-[38rem] mt-12 lg:mt-0 w-full mx-auto max-w-md overflow-hidden rounded-t-full outline outline-4 outline-offset-4 outline-[#15135e]/40">
            <img
              className="object-cover w-full h-full rounded-t-full "
              src="https://images.unsplash.com/photo-1531163859947-fa484f6eacd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="main page"
            />
          </div>
        </section>
        <section className="bg-[#303175] mt-12">
          <div className="container flex flex-col px-6 py-16 mx-auto mt-12">
            <div className="order-2 mt-8 lg:order-1 lg:mt-0 lg:flex lg:items-center lg:-mx-6">
              <img
                className="object-cover w-full lg:w-1/2 lg:mx-6 h-72 lg:h-96"
                src="https://images.unsplash.com/photo-1598901847919-b95dd0fabbb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                alt="Side image"
              />
              <div className="mt-8 lg:w-1/2 lg:mx-6 lg:mt-0">
                <h3 className="font-serif text-2xl text-white capitalize md:text-4xl lg:text-5xl">
                  More time to enjoy the important of life.
                </h3>
                <p className="mt-4 text-gray-200 ">
                  Give yourself a break from the home work and the routine. Book now our services and let the time be for the important things in life.
                </p>
                <a
                  className="inline-flex px-6 py-3 mt-6 text-white border-2 border-white hover:bg-[#15135e] duration-300 transition-colors"
                  href="#"
                >
                  Learn More
                </a>
              </div>
            </div>
            <img
              className="order-1 object-cover lg:order-2 w-ful h-72 lg:h-96 lg:mt-12"
              src="https://images.unsplash.com/photo-1610462275440-4ea0976f46f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
              alt="Side image"
            />
          </div>
        </section>
        <section className="container px-6 py-12 mx-auto lg:py-16">
          <h3 className="font-serif text-3xl text-[#303175] capitalize md:text-4xl lg:text-5xl">
            News &amp; Updates
          </h3>
          <div className="mt-8 xl:-mx-6 xl:flex">
            <div className="xl:w-1/2 xl:mx-6">
              <img
                className="object-cover w-full h-96"
                src="https://images.unsplash.com/photo-1626838524909-7c584c2266f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="Side image"
              />
              <h2 className="mt-6 font-serif text-3xl font-medium text-gray-700">
              Experience the ultimate convenience with DomesticApp
              </h2>
              <p className="mt-2 text-gray-500">
              Your one-stop solution for seamless domestic services. From household chores to skilled tasks, our app connects you with trusted professionals, ensuring your home is taken care of effortlessly.              </p>
              <p className="mt-4 italic text-gray-600">December 23, 2021</p>
            </div>
            <div className="mt-8 space-y-8 xl:w-1/2 xl:mx-6 xl:mt-0">
              <div className="md:-mx-4 md:flex md:items-center">
                <img
                  className="object-cover w-full h-56 md:h-48 md:mx-4 md:w-80 shrink-0"
                  src="https://images.unsplash.com/photo-1556426356-0fdc8b663467?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1498&q=80"
                  alt="Side image"
                />
                <div className="mt-6 md:mx-4 md:mt-0">
                  <h2 className="font-serif text-2xl font-medium text-gray-700 ">
                  Transform your life with DomesticApp!
                  </h2>
                  <p className="mt-2 text-gray-500">
                  Discover a world of reliable and efficient domestic services at your fingertips. Whether you need a cleaner, handyman, or any other service, our app makes finding and booking professionals quick, easy, and stress-free.
                  </p>
                  <p className="mt-4 italic text-gray-600">December 16, 2021</p>
                </div>
              </div>
              <div className="md:-mx-4 md:flex md:items-center">
                <img
                  className="object-cover w-full h-56 md:h-48 md:mx-4 md:w-80 shrink-0"
                  src="https://images.unsplash.com/photo-1583470790878-4f4f3811a01f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"
                  alt="Side image"
                />
                <div className="mt-6 md:mx-4 md:mt-0">
                  <h2 className="font-serif text-2xl font-medium text-gray-700 ">
                  Unlock a new level of efficiency.
                  </h2>
                  <p className="mt-2 text-gray-500">
                  The go-to platform for all your domestic needs. Connect with skilled workers, schedule services with ease, and enjoy a personalized experience tailored to your lifestyle.
                  </p>
                  <p className="mt-4 italic text-gray-600">November 11, 2021</p>
                </div>
              </div>
              <div className="md:-mx-4 md:flex md:items-center">
                <img
                  className="object-cover w-full h-56 md:h-48 md:mx-4 md:w-80 shrink-0"
                  src="https://images.unsplash.com/photo-1638790491374-a2affccd8c8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="Side image"
                />
                <div className="mt-6 md:mx-4 md:mt-0">
                  <h2 className="font-serif text-2xl font-medium text-gray-700 ">
                    Simple. Powerful.
                  </h2>
                  <p className="mt-2 text-gray-500">
                  Give yourself the oportunity to simplify your life with DomesticApp today!"

                  </p>
                  <p className="mt-4 italic text-gray-600">November 3, 2021</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </div>
    </main>
  );
}
