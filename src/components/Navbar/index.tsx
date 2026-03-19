"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/images/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <>
      {/* TOP BAR - White */}
      <div className="bg-card-bg px-24 py-3 flex items-center justify-between border-b border-card-border">
        <Link href="/">
          <div className="w-[250px] h-[107px] relative">
            <Image
              src={Logo}
              alt="LawBridge LLP"
              fill
              className="object-contain"
            />
          </div>
        </Link>
        <div className="hidden md:flex flex-col items-end gap-2">
          <p className="text-text-primary font-bold text-sm tracking-[3px] uppercase">
            CALL NOW FOR A CONSULTATION
          </p>
          <Link
            href="tel:+923457866677"
            className="text-text-muted font-bold text-3xl tracking-wide hover:text-nav-bg transition"
          >
            +92 345 786 6677
          </Link>
        </div>
      </div>

      {/* ORANGE NAVBAR */}
      <nav className="bg-nav-bg relative z-50">
        <ul className="hidden md:flex items-center justify-center">

          <li>
            <Link href="/" className="block px-5 py-5 text-white text-xs font-bold tracking-widest uppercase hover:bg-nav-hover transition border-r border-nav-border">
              HOME
            </Link>
          </li>

          {/* About Dropdown */}
          <li className="relative group border-r border-nav-border">
            <button className="flex items-center gap-1 px-5 py-5 text-white text-xs font-bold tracking-widest uppercase hover:bg-nav-hover transition">
              ABOUT US <span className="text-[10px]">▾</span>
            </button>
            <ul className="absolute top-full left-0 bg-nav-bg border-t-2 border-nav-border w-52 hidden group-hover:block z-50 shadow-xl">
              <li>
                <Link href="/firm-overview" className="block px-5 py-3 text-white text-sm border-b border-nav-border hover:bg-nav-hover transition">
                  Firm Overview
                </Link>
              </li>
              <li>
                <Link href="/our-team" className="block px-5 py-3 text-white text-sm hover:bg-nav-hover transition">
                  Our Team
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link href="/services" className="block px-5 py-5 text-white text-xs font-bold tracking-widest uppercase hover:bg-nav-hover transition border-r border-nav-border">
              SERVICES
            </Link>
          </li>

          <li>
            <Link href="/our-clients" className="block px-5 py-5 text-white text-xs font-bold tracking-widest uppercase hover:bg-nav-hover transition border-r border-nav-border">
              OUR CLIENTS
            </Link>
          </li>

          <li>
            <Link href="/press-release" className="block px-5 py-5 text-white text-xs font-bold tracking-widest uppercase hover:bg-nav-hover transition border-r border-nav-border">
              PRESS RELEASE
            </Link>
          </li>

          <li>
            <Link href="/contact" className="block px-5 py-5 text-white text-xs font-bold tracking-widest uppercase hover:bg-nav-hover transition border-r border-nav-border">
              CONTACT US
            </Link>
          </li>

          {/* <li>
            <Link href="/blog" className="block px-5 py-5 text-white text-xs font-bold tracking-widest uppercase hover:bg-nav-hover transition">
              BLOG
            </Link>
          </li> */}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center justify-between px-6 py-4">
          <span className="text-white font-bold text-sm uppercase tracking-widest">Menu</span>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-2xl">
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="bg-nav-bg text-white px-6 py-2 md:hidden flex flex-col z-50">
          <Link href="/" className="py-3 border-b border-nav-border text-xs font-bold uppercase tracking-widest">
            Home
          </Link>
          <button
            onClick={() => setAboutOpen(!aboutOpen)}
            className="text-left py-3 border-b border-nav-border text-xs font-bold uppercase"
          >
            About Us {aboutOpen ? "▴" : "▾"}
          </button>
          {aboutOpen && (
            <div className="pl-4 bg-nav-hover">
              <Link href="/firm-overview" className="block py-2 text-sm border-b border-nav-border">
                Firm Overview
              </Link>
              <Link href="/our-team" className="block py-2 text-sm">
                Our Team
              </Link>
            </div>
          )}
          <Link href="/services" className="py-3 border-b border-nav-border text-xs font-bold uppercase">
            Services
          </Link>
          <Link href="/our-clients" className="py-3 border-b border-nav-border text-xs font-bold uppercase">
            Our Clients
          </Link>
          <Link href="/press-release" className="py-3 border-b border-nav-border text-xs font-bold uppercase">
            Press Release
          </Link>
          <Link href="/contact" className="py-3 border-b border-nav-border text-xs font-bold uppercase">
            Contact Us
          </Link>
          <Link href="/blog" className="py-3 text-xs font-bold uppercase">
            Blog
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;