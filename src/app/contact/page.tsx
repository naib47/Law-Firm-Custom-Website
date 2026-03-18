import Link from "next/link";

const Contact = () => {
  return (
    <main>
      {/* Hero Banner */}
      <section
        className="relative bg-cover bg-center py-24 px-6"
        style={{ backgroundImage: "url('/images/banner.jpg')" }}
      >
        <div className="relative z-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1px] w-12 bg-gold"></div>
            <p className="text-gold text-xs font-bold tracking-[4px] uppercase">
              Get In Touch
            </p>
            <div className="h-[1px] w-12 bg-gold"></div>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
            Contact <span className="text-gold">Us</span>
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm">
            <Link href="/" className="text-gray-300 hover:text-gold transition">
              Home
            </Link>
            <span className="text-gold">»</span>
            <span className="text-white">Contact Us</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
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
              Reach Us
            </p>
            <div className="h-[1px] w-12 bg-gold"></div>
          </div>

          <h2
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-4xl font-black text-center mb-3"
          >
            Get In <span className="text-gold">Touch</span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-text-secondary text-center text-base mb-14 max-w-2xl mx-auto"
          >
            Have a legal question? Our expert team is ready to help you.
            Contact us today for a consultation.
          </p>

          {/* Two Column */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">

            {/* Left - Contact Info */}
            <div data-aos="fade-right" data-aos-delay="300">

              {/* Phone */}
              <div className="bg-card-bg border border-card-border hover:border-gold p-6 mb-4 transition group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold flex items-center justify-center text-white text-xl flex-shrink-0">
                    📞
                  </div>
                  <div>
                    <p className="font-black text-xs tracking-widest uppercase mb-1">
                      Call Us
                    </p>
                    <a href="tel:+923457866677" className="text-gold font-bold text-lg hover:text-black transition">
                      +92 345 786 6677
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-card-bg border border-card-border hover:border-gold p-6 mb-4 transition group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold flex items-center justify-center text-white text-xl flex-shrink-0">
                    ✉️
                  </div>
                  <div>
                    <p className="font-black text-xs tracking-widest uppercase mb-1">
                      Email Us
                    </p>
                    <a href="mailto:info@lawbridgechambers.com" className="text-gold font-bold text-base hover:text-black transition">
                      info@lawbridgechambers.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="bg-card-bg border border-card-border hover:border-gold p-6 mb-4 transition group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold flex items-center justify-center text-white text-xl flex-shrink-0">
                    📍
                  </div>
                  <div>
                    <p className="font-black text-xs tracking-widest uppercase mb-1">
                      Main Office
                    </p>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      Suit No 308, Farid Tower,<br />
                      19 Temple Road, Lahore.
                    </p>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-card-bg border border-card-border hover:border-gold p-6 transition group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold flex items-center justify-center text-white text-xl flex-shrink-0">
                    🕐
                  </div>
                  <div>
                    <p className="font-black text-xs tracking-widest uppercase mb-1">
                      Office Hours
                    </p>
                    <p className="text-text-secondary text-sm">
                      Mon - Fri: 09:00 AM - 8:00 PM
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right - Form */}
            <div data-aos="fade-left" data-aos-delay="400">
              <div className="bg-card-bg border border-card-border p-8 shadow-sm">
                <h3 className="font-black text-xl mb-6">
                  Send Us A <span className="text-gold">Message</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full border border-card-border text-text-secondary px-4 py-3 text-sm focus:outline-none focus:border-gold transition placeholder-text-muted"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full border border-card-border text-text-secondary px-4 py-3 text-sm focus:outline-none focus:border-gold transition placeholder-text-muted"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full border border-card-border text-text-secondary px-4 py-3 text-sm focus:outline-none focus:border-gold transition placeholder-text-muted"
                  />
                  <select className="w-full border border-card-border text-text-muted px-4 py-3 text-sm focus:outline-none focus:border-gold transition appearance-none">
                    <option value="">Select Service</option>
                    <option>Family Law</option>
                    <option>Criminal Law</option>
                    <option>Corporate Law</option>
                    <option>Real Estate Law</option>
                    <option>Tax Law</option>
                    <option>Civil Litigation</option>
                    <option>Intellectual Property</option>
                    <option>Other</option>
                  </select>
                </div>

                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full border border-card-border text-text-secondary px-4 py-3 text-sm focus:outline-none focus:border-gold transition placeholder-text-muted resize-none mb-4"
                />

                <div className="flex items-center gap-3 border border-card-border px-4 py-3 mb-4">
                  <input type="checkbox" className="w-5 h-5 accent-gold cursor-pointer" />
                  <span className="text-text-secondary text-sm">I'm not a robot</span>
                </div>

                <button className="w-full bg-gold text-white font-black py-4 text-xs tracking-widest uppercase hover:bg-gold-dark transition">
                  SEND MESSAGE
                </button>
              </div>
            </div>
          </div>

          {/* Office Locations */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="font-black text-2xl text-center mb-10">
              Our <span className="text-gold">Office Locations</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { city: "Lahore", address: "Suit No. 308, Farid Tower, 19 Temple Road, Lahore." },
                { city: "Karachi", address: "3rd Floor, Building 29-C Khayabban-e-Seher, Phase 6 DHA Karachi." },
                { city: "Islamabad", address: "Chamber No. 1, Main Gate, Near Account Office, Main Jehlum Road, Rawalpindi." },
                { city: "Peshawar", address: "TF-42, Deans Trade Center, Islamia Road, Sadar, Peshawar." },
                { city: "Murree", address: "Office No: 12-B, Jeeka Gali, District Court, Murree." },
                { city: "Multan", address: "Office No: 111, Shopping Plaza Multan Cantt." },
                { city: "Mandi Bahauddin", address: "Office 449 Block, C New Judicial Complex Mandi Bahauddin." },
              ].map((loc, index) => (
                <div
                  key={index}
                  className="bg-card-bg border border-card-border hover:border-gold p-5 transition group shadow-sm"
                >
                  <div className="h-[2px] w-8 bg-gold mb-3 group-hover:w-full transition-all duration-500"></div>
                  <h4 className="font-black text-sm tracking-wider uppercase mb-2 group-hover:text-gold transition">
                    {loc.city}
                  </h4>
                  <p className="text-text-muted text-xs leading-relaxed">{loc.address}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
};

export default Contact;