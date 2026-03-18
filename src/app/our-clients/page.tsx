import Link from "next/link";

const clients = [
  {
    name: "Nestle Pakistan",
    category: "Food & Beverage",
    desc: "Represented Nestle Pakistan in complex corporate and regulatory matters, ensuring compliance with Pakistani law.",
  },
  {
    name: "Federal Board of Revenue (FBR)",
    category: "Government Body",
    desc: "Provided expert legal counsel on taxation law, regulatory compliance and dispute resolution matters.",
  },
  {
    name: "Meezan Bank Limited",
    category: "Banking & Finance",
    desc: "Handled banking litigation, Islamic finance matters and regulatory compliance for one of Pakistan's leading banks.",
  },
  {
    name: "United Bank Limited",
    category: "Banking & Finance",
    desc: "Provided comprehensive legal services including debt recovery, banking disputes and financial regulatory matters.",
  },
  {
    name: "WAPDA",
    category: "Government Authority",
    desc: "Assisted with legal matters related to energy infrastructure, contracts and regulatory compliance.",
  },
  {
    name: "NTDC",
    category: "Energy Sector",
    desc: "Provided legal support for National Transmission & Despatch Company on energy law and corporate matters.",
  },
  {
    name: "Pakistan Customs",
    category: "Government Body",
    desc: "Represented Pakistan Customs in complex legal disputes, trade law and regulatory enforcement matters.",
  },
  {
    name: "Punjab Revenue Authority",
    category: "Government Authority",
    desc: "Provided expert legal advisory services on taxation, revenue collection and regulatory compliance.",
  },
  {
    name: "Ogilvy",
    category: "Marketing & Advertising",
    desc: "Handled intellectual property, contract disputes and corporate legal matters for this leading advertising agency.",
  },
  {
    name: "Hascol Petroleum Pvt Limited",
    category: "Energy & Petroleum",
    desc: "Provided legal services covering corporate matters, regulatory compliance and commercial disputes.",
  },
  {
    name: "Muller & Phipps Pvt. Limited",
    category: "Healthcare Distribution",
    desc: "Assisted with corporate law, commercial contracts and dispute resolution for this leading healthcare distributor.",
  },
  {
    name: "Fresenius Kabi Private Limited",
    category: "Pharmaceutical",
    desc: "Handled healthcare law, regulatory compliance and corporate legal matters for this global pharmaceutical company.",
  },
  {
    name: "Zarie Tarqiyati Bank Ltd",
    category: "Agriculture Banking",
    desc: "Provided legal support on banking law, agricultural finance and regulatory compliance matters.",
  },
  {
    name: "Salestech Private Limited",
    category: "Technology",
    desc: "Handled corporate law, technology contracts and intellectual property matters for this tech company.",
  },
  {
    name: "Pak Arab Housing Society",
    category: "Real Estate",
    desc: "Provided comprehensive real estate legal services including property disputes and housing society regulations.",
  },
  {
    name: "Sanam Garden Housing Society",
    category: "Real Estate",
    desc: "Assisted with real estate law, property documentation and housing society legal compliance.",
  },
  {
    name: "Walton Cantonment Board",
    category: "Government Authority",
    desc: "Provided legal advisory services on cantonment law, property matters and administrative disputes.",
  },
  {
    name: "Topspot Incorporation",
    category: "Corporate",
    desc: "Handled corporate legal matters, business contracts and dispute resolution services.",
  },
  {
    name: "Express Construction",
    category: "Construction",
    desc: "Provided legal services covering construction contracts, disputes and regulatory compliance matters.",
  },
  {
    name: "Union Steel Industries",
    category: "Manufacturing",
    desc: "Assisted with corporate law, labor disputes and commercial legal matters for this steel manufacturer.",
  },
  {
    name: "Green Mark Seeds Pvt Limited",
    category: "Agriculture",
    desc: "Handled corporate law, intellectual property and agricultural regulatory compliance matters.",
  },
  {
    name: "Pure N Healthy",
    category: "Health & Wellness",
    desc: "Provided corporate legal services, contract drafting and regulatory compliance support.",
  },
  {
    name: "Customs Pillows (SMC) Pvt Limited",
    category: "Manufacturing",
    desc: "Assisted with corporate matters, customs law and commercial dispute resolution services.",
  },
];

const OurClients = () => {
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
              Who We Serve
            </p>
            <div className="h-[1px] w-12 bg-gold"></div>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
            Our <span className="text-gold">Clients</span>
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm">
            <Link href="/" className="text-gray-400 hover:text-gold transition">
              Home
            </Link>
            <span className="text-gold">»</span>
            <span className="text-white">Our Clients</span>
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
              Trusted By Leaders
            </p>
            <div className="h-[1px] w-12 bg-gold"></div>
          </div>

          <h2
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-4xl font-black text-center mb-3"
          >
            Our Valued <span className="text-gold">Clients</span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-text-secondary text-center text-base mb-6 max-w-3xl mx-auto"
          >
            We are proud to have represented some of the most prestigious organizations
            across Pakistan — from multinational corporations and government bodies to
            leading banks and emerging businesses.
          </p>

          {/* Divider */}
          <div
            data-aos="zoom-in"
            data-aos-delay="350"
            className="flex items-center justify-center gap-3 mb-14"
          >
            <div className="h-[1px] w-24 bg-card-border"></div>
            <div className="w-2 h-2 bg-gold rotate-45"></div>
            <div className="h-[1px] w-24 bg-card-border"></div>
          </div>

          {/* Stats */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {[
              { number: "500+", label: "Cases Won" },
              { number: "23+", label: "Major Clients" },
              { number: "15+", label: "Years Experience" },
              { number: "98%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-card-bg border border-card-border p-6 text-center hover:border-gold transition shadow-sm"
              >
                <p className="text-gold text-4xl font-black mb-2">{stat.number}</p>
                <p className="text-text-muted text-xs tracking-widest uppercase">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Clients Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {clients.map((client, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={80 * (index % 3 + 1)}
                className="bg-card-bg border border-card-border hover:border-gold transition-all duration-300 group p-6 shadow-sm"
              >
                {/* Top Row */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-gold/40 font-black text-xs">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-gold text-xs font-bold tracking-wider uppercase border border-gold/30 px-2 py-1">
                    {client.category}
                  </span>
                </div>

                {/* Gold Line */}
                <div className="h-[2px] w-8 bg-gold mb-3 group-hover:w-full transition-all duration-500"></div>

                {/* Name */}
                <h3 className="font-black text-base mb-3 group-hover:text-gold transition">
                  {client.name}
                </h3>

                {/* Desc */}
                <p className="text-text-secondary text-sm leading-relaxed">
                  {client.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Text */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="bg-card-bg border border-card-border p-8 mb-12 shadow-sm"
          >
            <h3 className="font-black text-2xl mb-4">
              Why Leading Organizations <span className="text-gold">Trust Us</span>
            </h3>
            <p className="text-text-secondary text-base leading-relaxed mb-4">
              From multinational corporations to government authorities, our clients choose
              LawBridge LLP because of our unwavering commitment to excellence, deep legal
              expertise, and personalized approach to every case.
            </p>
            <p className="text-text-secondary text-base leading-relaxed">
              We understand that every client has unique needs, and we tailor our legal
              strategies accordingly. Our track record of success across diverse industries
              speaks for itself — when you choose LawBridge LLP, you choose a partner
              dedicated to your success.
            </p>
          </div>

          {/* CTA */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-center bg-card-bg border border-card-border p-8 shadow-sm"
          >
            <p className="text-text-muted text-sm tracking-widest uppercase mb-2">
              Join Our Growing List Of Clients
            </p>
            <h3 className="font-black text-2xl mb-4">
              Call Now For A <span className="text-gold">Consultation</span>
            </h3>
            <Link
              href="tel:+923457866677"
              className="text-gold text-3xl font-black tracking-wider hover:text-black transition block mb-6"
            >
              +92 345 786 6677
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-gold text-white font-black px-12 py-4 text-xs tracking-widest uppercase hover:bg-gold-dark transition"
            >
              CONTACT US TODAY
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
};

export default OurClients;