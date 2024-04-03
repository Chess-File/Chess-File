import Head from "next/head";
import Image from "next/image";
import feature1 from "~/assets/feature1.webp";
import feature2 from "~/assets/feature2.webp";
import feature3 from "~/assets/feature3.webp";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import { env } from "~/env.js";

export default function Features() {
    return (
        <>
            <Head>
                <title>{env.NEXT_PUBLIC_SITENAME}</title>
                <meta name="description" content="The next-gen file sharing for your chess files" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main className="py-16 min-h-screen">
                <div className="container mx-auto px-4 flex flex-col items-center">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-800">Our Features</h1>
                        <p className="text-md text-gray-500 mt-4">Discover the tools and services that make Chess-File unique.</p>
                    </div>

                    <div className="flex flex-wrap items-center justify-around mb-12 max-w-[80%] bg-gradient-to-r from-gray-100 to-white rounded-l-xl">
                        <div className="md:w-1/2 p-4">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Chess Analysis Upload & Sharing</h2>
                            <p className="text-gray-600">Chess-File transforms your chess experiences into shared knowledge. Upload your PGN files effortlessly and dive into analyses created by players from around the world. Whether it is your groundbreaking opening or a classic endgame strategy, our platform is the perfect place to preserve these moments and invite discussion. Engage with contributions from a community that is as passionate about chess as you are, and discover insights that could change the way you play the game.</p>
                        </div>
                        <div className="md:w-1/2 p-4 max-w-96 transform transition-all duration-300 hover:scale-105 -rotate-3 hover:rotate-0">
                            <Image src={feature1} alt="Chess Analysis Upload" className="rounded-2xl shadow-lg shadow-gray-400" />
                        </div>
                    </div>

                    <div className="flex flex-wrap flex-row-reverse justify-around items-center mb-12 max-w-[80%] bg-gradient-to-l from-gray-100 to-white rounded-r-xl">
                        <div className="md:w-1/2 p-4">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Interactive Online Viewer</h2>
                            <p className="text-gray-600">Experience chess like never before with our Interactive Online Viewer. This feature allows you to step through games move by move, with powerful analysis tools at your fingertips. Highlight key moves, explore different game outcomes, and even receive suggestions from advanced AI analysis. It is the ideal learning tool for players of all levels, providing a hands-on way to improve your chess strategy and understanding.</p>
                        </div>
                        <div className="md:w-1/2 p-4 max-w-96 transform transition-all duration-300 hover:scale-105 rotate-3 hover:rotate-0">
                            <Image src={feature2} alt="Interactive Online Viewer" className="rounded-2xl shadow-lg shadow-gray-400" />
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-around mb-12 max-w-[80%] bg-gradient-to-r from-gray-100 to-white rounded-l-xl">
                        <div className="md:w-1/2 p-4">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Community Ratings & Recommendations</h2>
                            <p className="text-gray-600">At the heart of Chess-File is a vibrant community of chess enthusiasts. With our community ratings and recommendations, you can navigate the vast library of analyses with ease, discovering content that has been vetted and valued by users like you. Share your own recommendations, rate analyses, and contribute to an ever-growing repository of chess wisdom. It&apos;s not just about improving your game; it&apos;s about enriching the collective knowledge of the chess world.</p>
                        </div>
                        <div className="md:w-1/2 p-4 max-w-96 transform transition-all duration-300 hover:scale-105 -rotate-3 hover:rotate-0">
                            <Image src={feature3} alt="Community Rating" className="rounded-2xl shadow-lg shadow-gray-400" />
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}
