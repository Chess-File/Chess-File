import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import logo from '~/assets/logo.jpg';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [displayMenu, setDisplayMenu] = useState(false);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (width > 768) {
            setIsMenuOpen(false);
            setTimeout(() => {
                setDisplayMenu(false);
            }, 300);
        }
    }, [width]);

    return (
        <>
            <nav className="sticky top-0 z-50 bg-white shadow h-16 flex flex-row items-center justify-between px-4 md:px-6 lg:px-8 w-full">
                <Link href="/" className="w-1/3">
                    <Image src={logo} alt="Chess-File Logo" className="w-20 md:w-28" />
                </Link>

                <div className="hidden md:flex md:space-x-10 w-1/3 items-center justify-center">
                    <Link href="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
                        Home
                    </Link>
                    <Link href="/about" className="text-base font-medium text-gray-500 hover:text-gray-900">
                        About Us
                    </Link>
                    <Link href="/features" className="text-base font-medium text-gray-500 hover:text-gray-900">
                        Features
                    </Link>
                </div>
                <button className="md:hidden" title="Open Menu" onClick={() => {
                    if (isMenuOpen) {
                        setTimeout(() => {
                            setDisplayMenu(false);
                        }, 300);
                        setIsMenuOpen(false);
                    } else {
                        setDisplayMenu(true);
                        setTimeout(() => {
                            setIsMenuOpen(true);
                        }, 30);
                    }
                }}>
                    <Image src="hamburger.svg" alt="Hamburger Menu" width={20} height={20} />
                </button>

                <div className="flex items-center justify-end w-1/3">
                    {/* placeholder */}
                </div>
            </nav>
            {<div className={`flex flex-col space-y-2 items-center shadow p-4 mb-4 ${!displayMenu && "hidden"}`} style={{ opacity: isMenuOpen ? 100 : 0, transition: "opacity 0.2s ease-in-out" }}>
                <Link href="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
                    Home
                </Link>
                <Link href="/about" className="text-base font-medium text-gray-500 hover:text-gray-900">
                    About Us
                </Link>
                <Link href="/features" className="text-base font-medium text-gray-500 hover:text-gray-900">
                    Features
                </Link>
            </div>}
        </>
    )
}