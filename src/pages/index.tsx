import Head from "next/head";
import Image from "next/image";
import heroImage from "~/assets/heroImg.webp";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import { env } from "~/env.js";

export default function Home() {
    return (
        <>
            <Head>
                <title>{env.NEXT_PUBLIC_SITENAME}</title>
                <meta name="description" content="The next-gen file sharing for your chess files" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main className="flex min-h-screen flex-col items-center">
                <section className="bg-white">
                    <div className="grid max-w-screen-xl px-4 py-8 mx-auto grid-cols-2 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                        <div className="mr-auto place-self-center col-span-2 lg:col-span-7 mx-auto lg:order-1 order-3">
                            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl xl:text-6xl ">
                                Tired of spending <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-500">hours searching</span> for the right <span className="chess-file-title underline">Chess-File</span>?
                            </h1>
                            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">
                                Dive into a world of chess strategies with Chess-File. Share, rate, and refine your chess analyses with enthusiasts around the globe.
                            </p>
                            <form className="mt-8 sm:flex items-end">
                                <div className="flex flex-col">
                                    <label htmlFor="email-address" className="ml-2 mt-2 text-gray-400 font-normal text-sm">Want to stay updated?</label>
                                    <input id="email-address" name="email" type="email" autoComplete="email" required className="px-5 py-3 placeholder-gray-500 border border-gray-300 rounded-md sm:max-w-xs" placeholder="Enter your email" />
                                </div>
                                <button type="submit" className="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-500 hover:bg-red-600 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0">
                                    Notify Me
                                </button>
                            </form>
                        </div>
                        <div className="order-2 mb-12 max-w-[50%] col-span-2 mx-auto lg:mb-0 lg:mt-0 lg:col-span-5 lg:max-w-[100%] lg:flex relative">
                            <div className="hidden md:block absolute w-full h-full top-0 left-0 z-10" style={{ boxShadow: "inset 0 0 6px 10px white" }}></div>
                            <Image src={heroImage} alt="mockup" className="rounded-full md:rounded-none " />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
