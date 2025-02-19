import React from 'react';
import Topbar from './Topbar';
import Footer from './Footer';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className='flex flex-col min-h-screen text-lg md:text-xl'>
            {/* padding top bottom is 62px */}
            <Topbar />
            {/* 85px is for content */}
            <main id='main-content' className='flex-grow mt-[82px]'>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout