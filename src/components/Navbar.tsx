import { Briefcase, Code2, Home as HomeIcon, Moon, Sun } from 'lucide-react';
import React from 'react';
import { DarkModeProps } from '../types';

export const Navbar: React.FC<DarkModeProps> = ({ darkMode, setDarkMode }) => {

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-sm border-b border-white/20">
            <div className="container mx-auto px-5 py-3 flex justify-between items-center">
                <div className="flex gap-6">
                    <a href="#home" className="nav-link">
                        <HomeIcon className="w-5 h-5" />
                        <span>Home</span>
                    </a>
                    <a href="#projects" className="nav-link">
                        <Code2 className="w-5 h-5" />
                        <span>Projects</span>
                    </a>
                    <a href="#experience" className="nav-link">
                        <Briefcase className="w-5 h-5" />
                        <span>Experience</span>
                    </a>
                </div>
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                    {darkMode ? <Sun className="w-6 h-6 text-white" /> : <Moon className="w-6 h-6 text-primary-600" />}
                </button>
            </div>
        </nav>
    )
}
