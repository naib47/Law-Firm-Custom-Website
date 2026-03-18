import Link from "next/link";

const pressReleases = [
  {
    date: "May 15, 2025",
    category: "Press Release",
    title: "Lawbridge LLP Helps Overseas Pakistanis Solve Legal Problems in Pakistan",
    slug: "lawbridge-helps-overseas-pakistanis",
    content: `Lawbridge LLP, one of Pakistan's leading law firms, has announced a dedicated legal support program for overseas Pakistanis facing legal challenges back home. With offices in major cities across Pakistan, Lawbridge LLP is now offering specialized services to help the Pakistani diaspora navigate complex legal matters remotely.

The firm has recognized a growing need among overseas Pakistanis — whether living in the UK, USA, Canada, Middle East, or elsewhere — who struggle to manage property disputes, family law matters, inheritance issues, and corporate legal matters in Pakistan without being physically present.

Lawbridge LLP's team of experienced barristers and advocates are equipped to handle all aspects of legal representation, documentation, and court appearances on behalf of their overseas clients. The firm utilizes modern communication tools to ensure seamless coordination between clients abroad and legal teams in Pakistan.

"We understand the unique challenges faced by Pakistanis living abroad," said Barrister Bilal Ashraf, Senior Partner at Lawbridge LLP. "Our mission is to bridge the gap and ensure that distance is never a barrier to justice."

The firm handles a wide range of matters for overseas clients including property and real estate disputes, family law and divorce cases, inheritance and will execution, corporate and business law, banking and financial matters, and citizenship and documentation issues.

Lawbridge LLP continues to expand its reach and services to better serve the Pakistani community both locally and internationally. For more information or to schedule a consultation, contact Lawbridge LLP at +92 345 786 6677.`,
  },
];

const PressRelease = () => {
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
              Latest News
            </p>
            <div className="h-[1px] w-12 bg-gold"></div>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
            Press <span className="text-gold">Release</span>
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm">
            <Link href="/" className="text-gray-400 hover:text-gold transition">
              Home
            </Link>
            <span className="text-gold">»</span>
            <span className="text-white">Press Release</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-page-bg py-20 px-6">
        <div className="max-w-5xl mx-auto">

          {/* Top Label */}
          <div
            data-aos="fade-down"
            data-aos-delay="100"
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-[1px] w-12 bg-gold"></div>
            <p className="text-gold text-xs font-bold tracking-[4px] uppercase">
              Latest News
            </p>
            <div className="h-[1px] w-12 bg-gold"></div>
          </div>

          <h2
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-4xl font-black text-center mb-14"
          >
            Press <span className="text-gold">Releases</span>
          </h2>

          {/* Press Release Cards */}
          {pressReleases.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
              className="bg-card-bg border border-card-border shadow-sm mb-8"
            >
              {/* Card Header */}
              <div className="border-b border-card-border p-6 flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <span className="bg-gold text-white text-xs font-bold px-3 py-1 tracking-widest uppercase">
                    {item.category}
                  </span>
                  <span className="text-text-muted text-xs tracking-wider">
                    📅 {item.date}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8">
                {/* Gold Line */}
                <div className="h-[2px] w-12 bg-gold mb-4"></div>

                {/* Title */}
                <h3 className="font-black text-2xl mb-6 leading-snug">
                  {item.title}
                </h3>

                {/* Full Content */}
                <div className="text-text-secondary text-base leading-relaxed space-y-4">
                  {item.content.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                {/* Services List */}
                <div className="mt-6 bg-page-bg border-l-4 border-gold p-6">
                  <h4 className="font-black text-sm tracking-wider uppercase mb-4">
                    Services For Overseas Pakistanis:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      "Property & Real Estate Disputes",
                      "Family Law & Divorce Cases",
                      "Inheritance & Will Execution",
                      "Corporate & Business Law",
                      "Banking & Financial Matters",
                      "Citizenship & Documentation",
                    ].map((service, i) => (
                      <li key={i} className="flex items-center gap-2 text-text-secondary text-sm">
                        <div className="w-1.5 h-1.5 bg-gold rotate-45 flex-shrink-0"></div>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quote */}
                <div className="mt-6 border-l-4 border-gold pl-6 py-2">
                  <p className="text-text-secondary text-base italic leading-relaxed">
                    "We understand the unique challenges faced by Pakistanis living abroad.
                    Our mission is to bridge the gap and ensure that distance is never a
                    barrier to justice."
                  </p>
                  <p className="text-gold font-bold text-sm mt-2 tracking-wider uppercase">
                    — Barrister Bilal Ashraf, Senior Partner
                  </p>
                </div>

              </div>

              {/* Card Footer */}
              <div className="border-t border-card-border p-6 flex items-center justify-between flex-wrap gap-4">
                <p className="text-text-muted text-xs tracking-wider uppercase">
                  LawBridge LLP — Press Release
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-gold text-white font-black px-8 py-3 text-xs tracking-widest uppercase hover:bg-gold-dark transition"
                >
                  CONTACT US
                </Link>
              </div>

            </div>
          ))}

          {/* CTA */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-center bg-card-bg border border-card-border p-8 shadow-sm mt-8"
          >
            <p className="text-text-muted text-sm tracking-widest uppercase mb-2">
              Need Legal Help?
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

export default PressRelease;