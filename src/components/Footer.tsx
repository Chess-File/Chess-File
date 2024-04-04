import Link from "next/link";

import Image from "next/image";

export default function Footer() {
    return (
        <footer className="border-t">
            <div className="max-w-screen-xl px-4 pt-8 pb-6 mx-auto overflow-hidden sm:px-6 lg:px-8">
                <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
                    <div className="px-5 py-2">
                        <Link href="/about" className="text-base text-gray-500 hover:text-gray-900">
                            About Us
                        </Link>
                    </div>
                    <div className="px-5 py-2">
                        <Link href="/imprint" className="text-base text-gray-500 hover:text-gray-900">
                            Imprint
                        </Link>
                    </div>
                </nav>
                <div className="mt-8 flex justify-center space-x-6">
                    {/* <a href="https://www.facebook.com/temp" className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Facebook</span>
                        <Image src="/socials/facebook.svg" alt="Facebook" width={20} height={20} />
                    </a>
                    <a href="https://www.twitter.com/temp" className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">X</span>
                        <Image src="/socials/x.svg" alt="X" width={20} height={20} />
                    </a> */}
                    <a href="https://www.youtube.com/@ChessFile_AT" className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">YouTube</span>
                        <Image src="/socials/youtube.svg" alt="YouTube" width={20} height={20} />
                    </a>
                    <a href="https://www.instagram.com/chess_file" className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Instagram</span>
                        <Image src="/socials/instagram.svg" alt="Instagram" width={20} height={20} />
                    </a>
                    <a href="https://www.github.com/Chess-File" className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">GitHub</span>
                        <Image src="/socials/github.svg" alt="GitHub" width={20} height={20} />
                    </a>
                </div>
                <p className="mt-8 text-center text-base text-gray-400">
                    © {new Date().getFullYear()} Chess-File. All rights reserved. Dive into the vast world of chess with us.
                </p>
            </div>
        </footer>
    )
}