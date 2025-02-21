import React, { useState, useEffect } from 'react';
import Topbar from './Topbar';
import Footer from './Footer';
import arrowUp from '../assets/icons/arrow-up.svg';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className='flex flex-col min-h-screen text-lg md:text-xl'>
            <Topbar />
            <main id='main-content' className='flex-grow mt-[10vh] md:mt-[7.2vh]'>
                {children}
            </main>
            <Footer />
            <button
                onClick={scrollToTop}
                className={`flex flex-row items-center fixed bg-lgsm-white rounded-full shadow-lg z-50 border cursor-pointer
                    bottom-3 right-3 md:bottom-15 md:right-15
                    py-2 px-4 md:py-3 md:px-5 
                    transition duration-300 ease-in-out transform
                    hover:opacity-50
                    ${showButton ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}
                `}
            >
                <img src={arrowUp} alt="" />&nbsp;Top
            </button>

        </div>
    );
};

export default Layout;