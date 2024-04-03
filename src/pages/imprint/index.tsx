import Head from "next/head";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import { env } from "~/env.js";

export default function Imprint() {
    return (
        <>
            <Head>
                <title>{env.NEXT_PUBLIC_SITENAME}</title>
                <meta name="description" content="The next-gen file sharing for your chess files" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main className="text-gray-700 min-h-screen flex flex-col items-center">
                <div className="container mx-auto px-4 pt-12">
                    <h1 className="text-3xl font-bold text-center mb-8">Imprint</h1>

                    <section className="bg-white shadow-md shadow-gray-400 rounded-lg p-6 mb-6">
                        <h2 className="text-xl font-semibold mb-2">About Chess-File</h2>
                        <p className="mb-4">Chess-File is a conceptual project developed for a university course by four enthusiastic individuals: Paul, Daniel, Flo, and Nicolas. It is designed as a comprehensive chess analysis and sharing tool, aiming to foster a community of chess aficionados.</p>
                        <p>Please note, Chess-File is a hypothetical platform, created for educational purposes. It is not a commercial product or service.</p>
                    </section>

                    <section className="bg-white shadow-md shadow-gray-400 rounded-lg p-6 mb-6">
                        <h2 className="text-xl font-semibold mb-2">Data Collection and Privacy</h2>
                        <p className="mb-4">At Chess-File, we respect your privacy and are committed to protecting it. To enhance your experience and ensure the smooth operation of our platform, we may automatically collect data related to your visit. This includes, but is not limited to, IP addresses, hostnames, browser versions, and other relevant metadata.</p>
                        <p className="mb-4">Please be assured, this data is only collected to facilitate your access to our platform. We do not retain this information longer than necessary and adhere to strict privacy standards to safeguard your data.</p>
                    </section>

                    <section className="bg-white shadow-md shadow-gray-400 rounded-lg p-6">
                        <h2 className="text-xl font-semibold mb-2">Email Sign-Up Disclaimer</h2>
                        <p className="mb-4">The email sign-up feature on our website is designed for demonstration purposes only. As part of our commitment to privacy and data protection, please be informed that no email addresses submitted through our platform are saved, stored, or used in any manner. This feature is included to illustrate the intended functionality of Chess-File as a hypothetical project.</p>
                    </section>

                    <p className="text-center mt-8">For inquiries, please contact us through our university email addresses. We appreciate your interest in Chess-File and are excited to share our journey with you.</p>
                </div>
            </main>

            <Footer />
        </>
    );
}
