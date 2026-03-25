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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">

            {/* Left */}
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
                    {/* ✅ FIXED href */}
                    <a href="tel:+923045159223" className="text-gold font-bold text-lg hover:text-black transition">
                      +92 304 5159223
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
                    <a href="mailto:ziaulhaq223520@gmail.com" className="text-gold font-bold text-base hover:text-black transition">
                      ziaulhaq223520@gmail.com
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
                      Session Court Lahore.
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
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

            {/* Right (Form) — untouched */}
            <div data-aos="fade-left" data-aos-delay="400">
              <div className="bg-card-bg border border-card-border p-8 shadow-sm">
                <h3 className="font-black text-xl mb-6">
                  Send Us A <span className="text-gold">Message</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <input type="text" placeholder="Your Name" className="w-full border border-card-border px-4 py-3 text-sm" />
                  <input type="email" placeholder="Your Email" className="w-full border border-card-border px-4 py-3 text-sm" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <input type="tel" placeholder="Phone Number" className="w-full border border-card-border px-4 py-3 text-sm" />
                  <select className="w-full border border-card-border px-4 py-3 text-sm">
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

                <textarea placeholder="Your Message" rows={5} className="w-full border border-card-border px-4 py-3 text-sm mb-4" />

                <button className="w-full bg-gold text-white font-black py-4 text-xs uppercase">
                  SEND MESSAGE
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
};

export default Contact;