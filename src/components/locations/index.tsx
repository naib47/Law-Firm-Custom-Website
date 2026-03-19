"use client";

import Link from "next/link";

const locations = [
  {
    city: "Lahore",
    address: "Suit No. 308, Farid Tower, 19 Temple Road, Lahore.",
  },
  {
    city: "Karachi",
    address: "3rd Floor, Building 29-C Khayabban-e-Seher, Shahbaz Commercial Area, Phase 6 DHA Karachi.",
  },
  {
    city: "Islamabad / Rawalpindi",
    address: "Chamber No. 1, Main Gate, Near Account Office, Main Jehlum Road, Rawalpindi.",
  },
  {
    city: "Peshawar",
    address: "TF-42, Deans Trade Center, Islamia Road, Sadar, Peshawar.",
  },
  {
    city: "Murree",
    address: "Office No: 12-B, Jeeka Gali, District Court, Murree.",
  },
  {
    city: "Multan",
    address: "Office No: 111, Shopping Plaza Multan Cantt.",
  },
  {
    city: "Mandi Bahauddin",
    address: "Office 449 Block, C New Judicial Complex Mandi Bahauddin.",
  },
];

const Locations = () => {
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
            Find Us
          </p>
          <div className="h-[1px] w-12 bg-gold"></div>
        </div>

        {/* Heading */}
        <h2
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-4xl md:text-5xl font-black  text-center mb-3"
        >
          Our <span className="text-gold">Office Locations</span>
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

        {/* Phone Number */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-center mb-12"
        >
          <p className="text-text-muted text-sm tracking-widest uppercase mb-2">Call Us</p>
          <Link
            href="tel:+923457866677"
            className="text-gold text-3xl font-black tracking-wider hover:text-text-primary transition"
          >
            +92 304 5159223
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((loc, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
              className="bg-card-bg border border-card-border p-6 hover:border-gold transition-all duration-300 group shadow-sm"
            >
              {/* Gold Top Line */}
              <div className="h-[2px] w-8 bg-gold mb-4 group-hover:w-full transition-all duration-500"></div>

              {/* City */}
              <h3 className="text-gold font-black text-sm tracking-widest uppercase mb-3">
                {loc.city}
              </h3>

              {/* Address */}
              <p className="text-text-secondary text-sm leading-relaxed">
                {loc.address}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Locations;