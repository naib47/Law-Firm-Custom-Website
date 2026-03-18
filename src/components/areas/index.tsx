"use client";

import Link from "next/link";
import Image from "next/image";
import Image1 from "../../../public/images/1.webp";
import Image2 from "../../../public/images/2.jpg";
import Image3 from "../../../public/images/3.jpg";

const practices = [
  {
    title: "Family Law",
    href: "/services",
    image: Image1,
    desc: "Expert legal guidance for family disputes, divorce, custody and more.",
  },
  {
    title: "Civil Litigation",
    href: "/services",
    image: Image2,
    desc: "Strong representation in civil courts across Pakistan.",
  },
  {
    title: "Corporate Law",
    href: "/services",
    image: Image3,
    desc: "Complete legal solutions for businesses and corporations.",
  },
];

const PracticeAreas = () => {
  return (
    <section className="bg-page-bg py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Top Label */}
        <div
          data-aos="fade-down"
          data-aos-delay="100"
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="h-[1px] w-12 bg-gold"></div>
          <p className="text-gold text-xs font-bold tracking-[4px] uppercase">
            What We Do
          </p>
          <div className="h-[1px] w-12 bg-gold"></div>
        </div>

        {/* Heading */}
        <h2
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-4xl md:text-5xl font-black text-black text-center mb-3"
        >
          Our <span className="text-gold">Practice Areas</span>
        </h2>

        {/* Divider */}
        <div
          data-aos="zoom-in"
          data-aos-delay="300"
          className="flex items-center justify-center gap-3 mb-14"
        >
          <div className="h-[1px] w-24 bg-card-border"></div>
          <div className="w-2 h-2 bg-gold rotate-45"></div>
          <div className="h-[1px] w-24 bg-card-border"></div>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {practices.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              data-aos="fade-up"
              data-aos-delay={200 * (index + 1)}
              className="group relative overflow-hidden bg-card-bg border border-card-border hover:border-gold transition-all duration-300 shadow-sm"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-gold/20 transition duration-300 z-10"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-text-primary font-bold text-sm tracking-wider uppercase mb-3 group-hover:text-gold transition">
                  {item.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  {item.desc}
                </p>
                <div className="flex items-center gap-2 text-gold text-xs font-bold tracking-widest uppercase">
                  <span>Read More</span>
                  <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                </div>
              </div>

              {/* Bottom Gold Line */}
              <div className="h-[2px] w-0 bg-gold group-hover:w-full transition-all duration-500"></div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div
          data-aos="fade-up"
          data-aos-delay="800"
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-block border-2 border-gold text-gold font-bold px-10 py-3 text-xs tracking-widest uppercase hover:bg-gold hover:text-white transition"
          >
            VIEW ALL PRACTICE AREAS
          </Link>
        </div>

      </div>
    </section>
  );
};

export default PracticeAreas;