"use client";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center min-h-[88vh] flex flex-col items-center justify-center text-center"
      style={{ backgroundImage: "url('/images/banner.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="relative z-10 px-6 max-w-4xl">

        {/* Top Gold Line */}
        <div
          data-aos="fade-down"
          data-aos-delay="200"
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="h-[1px] w-16 bg-[#c9a84c]"></div>
          <p className="text-[#c9a84c] text-xs font-bold tracking-[4px] uppercase">
            Pakistan Top Law Firm
          </p>
          <div className="h-[1px] w-16 bg-[#c9a84c]"></div>
        </div>

        {/* Heading Line 1 */}
        <h1
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-5xl md:text-7xl font-black text-white leading-tight drop-shadow-lg"
        >
      Best Law 
        </h1>

        {/* Heading Line 2 */}
        <h1
          data-aos="fade-up"
          data-aos-delay="600"
          className="text-5xl md:text-7xl font-black leading-tight mb-6 drop-shadow-lg text-[#c9a84c]"
        >
        Consultant In Pakistan
        </h1>

        {/* Diamond Divider */}
        <div
          data-aos="zoom-in"
          data-aos-delay="800"
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="h-[1px] w-24 bg-white/40"></div>
          <div className="w-2 h-2 bg-[#c9a84c] rotate-45"></div>
          <div className="h-[1px] w-24 bg-white/40"></div>
        </div>

        {/* Buttons */}
        <div
          data-aos="fade-up"
          data-aos-delay="1000"
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="/contact"
            className="inline-block bg-[#c9a84c] text-white font-black px-10 py-4 text-xs tracking-widest uppercase hover:bg-[#b8963e] transition border-2 border-[#c9a84c]"
          >
            REQUEST A CONSULTATION
          </a>
          <a
            href="tel:+923457866677"
            className="inline-block bg-transparent text-white font-black px-10 py-4 text-xs tracking-widest uppercase hover:bg-white hover:text-[#0a1628] transition border-2 border-white"
          >
            CALL NOW
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;