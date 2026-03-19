"use client";

import Link from "next/link";

const points = [
  {
    title: "Client Interests First",
    desc: "At Zia Law Associate, we prioritize our clients above everything else. We take time to deeply understand your needs, analyze your unique context, and identify the challenges and opportunities you face.",
  },
  {
    title: "Practical & Actionable Advice",
    desc: "Our best lawyers in Pakistan draw on decades of expertise to provide clear, practical, and commercially effective legal solutions tailored specifically to your situation.",
  },
  {
    title: "Teams Are More Powerful",
    desc: "We believe the best legal results come from collaboration. Our expert legal teams bring together specialists with the perfect mix of sector knowledge and jurisdictional expertise.",
  },
  {
    title: "We Invest For The Future",
    desc: "Zia Law Associate continuously invests in people, technology, and legal know-how to build the best law firm our clients will need today, tomorrow, and 20 years into the future.",
  },
];

const LawBridge = () => {
  return (
    <section className="bg-page-bg py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Top Label */}
        <div
          data-aos="fade-down"
          data-aos-delay="100"
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="h-[1px] w-12 bg-nav-bg"></div>
          <p className="text-gold text-xs font-bold tracking-[4px] uppercase">
            Who We Are
          </p>
          <div className="h-[1px] w-12 bg-nav-bg"></div>
        </div>

        {/* Main Heading */}
        <h2
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-4xl md:text-5xl font-black text-black text-center mb-3"
        >
          Welcome to{" "}
          <span className="text-gold">Zia Law Associate</span>
        </h2>

        {/* Sub Heading */}
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-text-secondary text-center text-lg mb-10 max-w-2xl mx-auto italic"
        >
          Pakistan's Best Law Firm — Trusted Legal Services You Can Count On
        </p>

        {/* Divider */}
        <div
          data-aos="zoom-in"
          data-aos-delay="350"
          className="flex items-center justify-center gap-3 mb-12"
        >
          <div className="h-[1px] w-24 bg-card-border"></div>
          <div className="w-2 h-2 bg-gold rotate-45"></div>
          <div className="h-[1px] w-24 bg-card-border"></div>
        </div>

{/* Main Content */}
<div
  data-aos="fade-up"
  data-aos-delay="400"
  className="text-text-secondary text-base leading-relaxed mb-6 max-w-4xl mx-auto"
>
  <p className="mb-4">
    <span className="text-gold font-semibold">Zia Law Associate</span> is recognized as one of the{" "}
    <span className="text-gold font-semibold">best law firms in Pakistan</span>,
    with significant depth and range of legal resources across the country. We are a single,
    fully integrated firm committed to delivering the highest standards of legal excellence.
    We take pride in being approachable, fostering a friendly atmosphere, and promoting
    teamwork at every level.
  </p>
  <p className="mb-4">
    Our team of the{" "}
    <span className="text-gold font-semibold">best lawyers in Pakistan</span> offers
    top-notch legal advice, litigation support, and legal insights to individuals,
    corporations, and overseas Pakistanis alike. Our work blends{" "}
    <span className="text-gold font-semibold">global legal standards</span> with
    deep local knowledge of Pakistani law — making us the preferred choice for
    clients across all sectors.
  </p>
  <p className="mb-4">
    As one of the{" "}
    <span className="text-gold font-semibold">best law firms in Lahore</span>,
    we are committed to providing exceptional legal representation across all practice
    areas. From the{" "}
    <span className="text-gold font-semibold">best criminal lawyers in Pakistan</span> to
    the most experienced tax and corporate advisors, our firm delivers results that
    matter most to our clients.
  </p>
  <p className="mb-6">
    Pakistanis around the globe consult{" "}
    <span className="text-gold font-semibold">Zia Law Associate</span> for their
    most important legal matters — whether they need the{" "}
    <span className="text-gold font-semibold">best family dispute lawyer</span>,
    the <span className="text-gold font-semibold">best real estate lawyer in Lahore</span>,
    or the <span className="text-gold font-semibold">best corporate lawyer in Pakistan</span>.
    They place their trust in us because:
  </p>
</div>

        {/* 4 Points Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {points.map((point, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={200 * (index + 1)}
              className="bg-card-bg border-l-4 border-gold p-6 hover:bg-gray-50 transition group shadow-sm"
            >
              <div className="w-8 h-8 bg-gold flex items-center justify-center mb-4">
                <span className="text-white font-black text-sm">{index + 1}</span>
              </div>
              <h3 className="font-bold text-sm tracking-wider uppercase mb-3 group-hover:text-gold transition">
                {point.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {point.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-center"
        >
          <Link
            href="/firm-overview"
            className="inline-block border-2 border-gold text-gold font-bold px-10 py-3 text-xs tracking-widest uppercase hover:bg-gold hover:text-white transition"
          >
            LEARN MORE ABOUT US
          </Link>
        </div>

      </div>
    </section>
  );
};

export default LawBridge;