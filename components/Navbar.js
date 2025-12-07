'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Menu, X, ChevronDown } from 'lucide-react'; // Icons
import { navLinks } from '@/lib/navigationData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-3">
             {/* Replace src with your actual logo path */}
             <div className="w-12 h-12 relative">
               {/* Use standard img tag if Image component fails setup initially */}
               <img src="/images/home/ees-logo.png" alt="EES Logo" className="object-contain" /> 
             </div>
             <span className={`text-xl font-bold tracking-tight uppercase ${scrolled ? 'text-ees-900' : 'text-slate-800'}`}>
               Electrical Engineers' Society
             </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative group"
                onMouseEnter={() => setHoveredMenu(link.name)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <Link href={link.href || '#'} className="flex items-center text-sm font-semibold text-slate-700 hover:text-ees-700 py-2">
                  {link.name}
                  {link.submenu && <ChevronDown size={14} className="ml-1" />}
                </Link>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {link.submenu && hoveredMenu === link.name && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 w-56 bg-white shadow-xl rounded-lg overflow-hidden border border-slate-100 py-2"
                    >
                      {link.submenu.map((subItem) => (
                        <Link key={subItem.name} href={subItem.href} className="block px-4 py-2 text-sm text-slate-600 hover:bg-ees-50 hover:text-ees-700 transition-colors">
                          {subItem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Search & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
             <button className="p-2 text-slate-600 hover:text-ees-700 transition-colors">
               <Search size={20} />
             </button>
             <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
               {isOpen ? <X /> : <Menu />}
             </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Simplified for brevity) */}
      {isOpen && (
        <div className="lg:hidden bg-white h-screen absolute top-full w-full border-t p-4">
           {navLinks.map(link => (
             <div key={link.name} className="py-2 border-b">
               <span className="font-bold text-slate-800">{link.name}</span>
             </div>
           ))}
        </div>
      )}
    </nav>
  );
}