import React, { useState } from 'react';
import LG_Sinarmas_Logo_Vector from '../assets/icons/LG_Sinarmas_Logo_Vector.svg';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Topbar: React.FC = () => {
    const [currentLink] = useState(window.location.pathname);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header id='topbar' className='px-[31px] md:px-[62px] drop-shadow-sm md:drop-shadow-md flex items-center bg-white h-[62px] md:h-[72px] py-10 text-lg w-full fixed -top-1 z-50 justify-between'>
            <a href={'/'}>
                <img src={LG_Sinarmas_Logo_Vector} alt="LG Sinarmas" className="md:h-[32px]" />
            </a>
            <div className='hidden md:flex items-center'>
                <div className="flex items-center gap-15 absolute" style={{ left: "41.5vw" }}>
                    <Link to={'/'} className={`hover:text-lgsm-red ${currentLink === "/" ? " text-lgsm-red font-bold" : ""}`}>Home</Link>
                    <Link to={'/business'} className={`hover:text-lgsm-red ${currentLink === "/business" ? " text-lgsm-red font-bold" : ""}`}>Business</Link>
                    <Link to={'/about'} className={`hover:text-lgsm-red ${currentLink === "/about" ? " text-lgsm-red font-bold" : ""}`}>About Us</Link>
                </div>
                <button className="text-lg rounded-full border-black border-1 px-5 py-2 hover:text-white hover:bg-black duration-300 ease-in-out">
                    Contact Us
                </button>
            </div>
            <div className="md:hidden">
                <div
                    className={`transform transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : 'rotate-0'}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X className="md:hidden" /> : <Menu className="md:hidden" />}
                </div>
            </div>

            {
                isMenuOpen && (
                    <div className="md:hidden absolute top-[72px] left-0 right-0 bg-white flex flex-col items-center py-5 gap-2">
                        <Link to={'/'} className={`hover:text-lgsm-red ${currentLink === "/" ? " text-lgsm-red font-bold" : ""}`}>Home</Link>
                        <Link to={'/business'} className={`hover:text-lgsm-red ${currentLink === "/business" ? " text-lgsm-red font-bold" : ""}`}>Business</Link>
                        <Link to={'/about'} className={`hover:text-lgsm-red ${currentLink === "/about" ? " text-lgsm-red font-bold" : ""}`}>About Us</Link>
                        <Link to={'/contact'} className={`hover:text-lgsm-red ${currentLink === "/contact" ? " text-lgsm-red font-bold" : ""}`}>Contact Us</Link>
                    </div>
                )
            }
        </header>
    );
}

export default Topbar;
