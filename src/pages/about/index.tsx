import Head from "next/head";
import Image from "next/image";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import { env } from "~/env.js";
import logo from "~/assets/logoNoText.png";
import flo from "~/assets/flo.jpg";
import daniel from "~/assets/daniel.jpg";
import nicolas from "~/assets/nico.jpg";
import paul from "~/assets/paul.jpg";

export default function About() {
    return (
        <>
            <Head>
                <title>{env.NEXT_PUBLIC_SITENAME}</title>
                <meta name="description" content="The next-gen file sharing for your chess files" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main className="bg-white min-h-screen flex flex-col py-16 md:py-0 items-center relative overflow-hidden">
                <div className="mt-16 mb-24 z-10">
                    <h1 className="text-6xl font-bold text-gray-800 text-center">Meet the <span className="underline text-red-500">Team</span></h1>
                    <p className="text-2xl text-gray-500 mt-4 text-center font-light">Behind Chess-File</p>
                </div>
                {/* <div className="hidden xl:block absolute w-full aspect-square rounded-full translate-x-1/2 translate-y-[20%] bg-red-100"></div>
                <div className="hidden xl:block absolute w-full aspect-square rounded-full -translate-x-1/2 -translate-y-[80%] bg-red-100"></div>
                <div className="md:block xl:hidden absolute w-[200%] aspect-square rounded-full translate-y-[30%] translate-x-[50%] md:translate-x-[30%] bg-red-100"></div>
                <div className="md:block xl:hidden absolute w-[200%] aspect-square rounded-full -translate-y-[70%] -translate-x-[50%] bg-red-200 opacity-50"></div>
                <div className="md:block xl:hidden absolute w-[200%] aspect-square rounded-full -translate-y-[90%] -translate-x-[10%] bg-red-300 opacity-50"></div> */}
                <div className="container mx-auto relative flex md:flex-row flex-col items-center px-4 md:py-8">
                    <div className="text-center w-full md:w-1/2 flex flex-col mb-12 md:mb-0 space-y-4 md:space-y-24 items-center">
                        <Image src={logo} alt="About Us" className="mx-auto max-w-[40%]" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-1/2">
                        <div className="text-center">
                            <Image src={daniel} alt="Daniel Kristoferitsch" className="mx-auto rounded-full object-cover h-36 w-36 mb-4" />
                            <h2 className="text-lg font-semibold">Daniel Kristoferitsch</h2>
                            <p className="mt-2 text-gray-500">Daniel, our chess strategist, brings years of competitive experience to the table to make sure Chess-File lives up to the highest standards.</p>
                        </div>

                        <div className="text-center">
                            <Image src={flo} alt="Florentin Wassilikos" className="mx-auto rounded-full object-cover h-36 w-36 mb-4" />
                            <h2 className="text-lg font-semibold">Florentin Wassilikos</h2>
                            <p className="mt-2 text-gray-500">Flo, the versatile brain behind our operations, innovates and helps connect the dots across the disciplines.</p>
                        </div>

                        <div className="text-center">
                            <Image src={nicolas} alt="Nicolas Weissenbach" className="mx-auto rounded-full object-cover h-36 w-36 mb-4" />
                            <h2 className="text-lg font-semibold">Nicolas Weissenbach</h2>
                            <p className="mt-2 text-gray-500">Nicolas safeguards Chess-File&apos;s digital fortress with expertise in cybersecurity and copyright laws.</p>
                        </div>

                        <div className="text-center">
                            <Image src={paul} alt="Paul Graf" className="mx-auto rounded-full object-cover h-36 w-36 mb-4" />
                            <h2 className="text-lg font-semibold">Paul Graf</h2>
                            <p className="mt-2 text-gray-500">Paul, our lead developer, ensures that Chess-File&apos;s platform is robust, scalable, and ahead of the curve.</p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}
