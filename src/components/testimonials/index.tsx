"use client";

import Link from "next/link";

const Testimonials = () => {
  return (
    <section className="relative py-24 px-6 bg-page-bg">

      <div className="relative z-10 max-w-4xl mx-auto text-center">

        {/* Top Label */}
        <div
          data-aos="fade-down"
          data-aos-delay="100"
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="h-[1px] w-12 bg-gold"></div>
          <p className="text-gold text-xs font-bold tracking-[4px] uppercase">
            What Clients Say
          </p>
          <div className="h-[1px] w-12 bg-gold"></div>
        </div>

        {/* Heading */}
        <h2
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-4xl md:text-5xl font-black text-black mb-3"
        >
          CLIENT <span className="text-gold">TESTIMONIALS</span>
        </h2>

        {/* Divider */}
        <div
          data-aos="zoom-in"
          data-aos-delay="300"
          className="flex items-center justify-center gap-3 mb-12"
        >
          <div className="h-[2px] w-24 bg-gold"></div>
          <div className="w-2 h-2 bg-gold rotate-45"></div>
          <div className="h-[2px] w-24 bg-gold"></div>
        </div>

        {/* Single Review */}
        <div data-aos="fade-up" data-aos-delay="400">
          <p className="text-black text-xl md:text-2xl leading-relaxed font-light italic mb-8">
            "I needed to file back income taxes and found LawBridge LLP online.
            I contacted them and working with their Taxation attorney was a positive experience.
            There was constant communication. They worked on my behalf."
          </p>
          <p className="text-gold font-bold text-sm tracking-widest uppercase mb-10">
            — Muhammad Hafeez
          </p>
        </div>

        {/* Read More Button */}
        <div data-aos="fade-up" data-aos-delay="500">
          <Link
            href="/client-testimonials"
            className="inline-block bg-gold text-white font-black px-10 py-4 text-xs tracking-widest uppercase hover:bg-gold-dark transition"
          >
            READ MORE
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;