"use client";
import { useState } from "react";
import Link from "next/link";

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <footer>
      {/* Main Footer */}
      <div className="bg-navy px-8 py-16 border-t border-gold/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Col 1 - Logo + Description + Social */}
          <div>
            <div className="mb-4">
              <p className="text-white font-black text-2xl tracking-wider">
                LAWBRIDGE <span className="text-gold">LLP</span>
              </p>
              <div className="h-[2px] w-16 bg-gold mt-2"></div>
            </div>
            <p className="text-text-muted text-sm leading-relaxed mb-6">
              Lawbridge LLP is a Top Pakistan based law firm with offices in
              multiple cities. We offer expert legal services with a commitment
              to excellence, ensuring comprehensive solutions for all your legal needs.
            </p>
            <div className="flex items-center gap-3">
              {["f", "in", "ig", "yt"].map((icon, index) => (
                <Link
                  key={index}
                  href="#"
                  className="w-10 h-10 border border-gold/30 flex items-center justify-center text-text-muted hover:bg-gold hover:text-white hover:border-gold transition text-sm font-bold"
                >
                  {icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 2 - Contact Info */}
          <div>
            <h4 className="text-white font-black text-xs tracking-[3px] uppercase mb-6">
              Contact Info
            </h4>
            <div className="h-[2px] w-8 bg-gold mb-6"></div>

            <div className="flex gap-3 mb-4">
              <span className="text-gold mt-1">📍</span>
              <p className="text-text-muted text-sm leading-relaxed">
                Suit No 308, Farid Tower, 19 Temple Road, Lahore.
              </p>
            </div>

            <Link
              href="https://maps.app.goo.gl/R9Zy4KXySWyoRc5b6"
              target="_blank"
              className="text-gold text-xs font-bold tracking-widest uppercase border-b border-gold pb-1 hover:text-white hover:border-white transition mb-6 inline-block"
            >
              GET DIRECTIONS
            </Link>

            <div className="flex gap-3 mb-4 mt-6">
              <span className="text-gold">📞</span>
              <div>
                <span className="text-text-muted text-sm">Mob: </span>
                <Link
                  href="tel:+923457866677"
                  className="text-white text-sm font-bold hover:text-gold transition"
                >
                   +92 304 5159223
                </Link>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="text-gold">🕐</span>
              <div>
                <p className="text-white text-sm font-bold mb-1">Office Hours:</p>
                <p className="text-text-muted text-sm">Mon - Fri 09:00 A.M - 8:00 P.M</p>
              </div>
            </div>
          </div>

          {/* Col 3 - Quick Links */}
          <div>
            <h4 className="text-white font-black text-xs tracking-[3px] uppercase mb-6">
              Quick Links
            </h4>
            <div className="h-[2px] w-8 bg-gold mb-6"></div>
            <ul className="flex flex-col gap-3">
              {[
                { name: "Home", href: "/" },
                { name: "Terms Of Use", href: "/terms-of-use" },
                { name: "Privacy Policy", href: "/privacy-policy" },
                { name: "Disclaimer", href: "/disclaimer" },
                { name: "Contact Us", href: "/contact" },
                { name: "Accessibility Statement", href: "/accessibility-statement" },
              ].map((link, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-gold rounded-full"></div>
                  <Link
                    href={link.href}
                    className="text-text-muted text-sm hover:text-gold transition tracking-wide uppercase"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 - Newsletter */}
          <div>
            <h4 className="text-white font-black text-xs tracking-[3px] uppercase mb-6">
              Subscribe To Our Newsletter
            </h4>
            <div className="h-[2px] w-8 bg-gold mb-6"></div>

            <input
              type="text"
              placeholder="Please Enter Your Name Here"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-navy-light border border-gold/20 text-white px-4 py-3 text-sm mb-3 focus:outline-none focus:border-gold placeholder-text-muted transition"
            />
            <input
              type="email"
              placeholder="Please Enter Your Email Here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-navy-light border border-gold/20 text-white px-4 py-3 text-sm mb-3 focus:outline-none focus:border-gold placeholder-text-muted transition"
            />
            <div className="flex items-center gap-3 border border-gold/20 bg-navy-light px-4 py-3 mb-4">
              <input type="checkbox" className="w-5 h-5 accent-gold cursor-pointer" />
              <span className="text-text-muted text-sm">I'm not a robot</span>
            </div>
            <button className="w-full bg-gold text-white font-black py-3 text-xs tracking-widest uppercase hover:bg-gold-dark transition">
              SUBMIT
            </button>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gold px-8 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white text-xs font-bold tracking-wide">
            Copyright©2026. Law Bridge LLP. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            {[
              { name: "Home", href: "/" },
              { name: "Terms Of Service", href: "/terms-of-use" },
              { name: "Privacy Policy", href: "/privacy-policy" },
              { name: "Contact Us", href: "/contact" },
            ].map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-white text-xs font-bold hover:text-navy transition tracking-wide"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;