"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import './Header.css';
import logo from "../images/logo.png";

const page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="navbar">
          <div className="logo">
            <Link href="/">
              <Image 
                src={logo} 
                alt="Logo" 
                className="logo1"
                width={150}
                height={50}
                priority
              />
            </Link>
            <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>
          
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li>
              <Link 
                href="/" 
                className={pathname === '/' ? 'active' : ''}
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/about"  // Changed from "/About" to "/about" (lowercase)
                className={pathname === '/about' ? 'active' : ''}
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/services" 
                className={pathname === '/services' ? 'active' : ''}
                onClick={closeMenu}
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
              href="/portfolio" 
              className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors"
              onClick={closeMenu}>
              Portfolio
              </Link>
            </li>
            <li>
              <Link 
                href="/faq" 
                className={pathname === '/faq' ? 'active' : ''}
                onClick={closeMenu}
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className={pathname === '/contact' ? 'active' : ''}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
            
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default page;