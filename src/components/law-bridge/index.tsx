"use client";

import Link from "next/link";

const points = [
  {
    title: "Client Interests First",
    desc: "We take time to learn what clients need. We look at their context and the challenges and opportunities they face.",
  },
  {
    title: "Practical Advice",
    desc: "We draw on the huge range and depth of our expertise to develop commercial, effective solutions for clients.",
  },
  {
    title: "Teams Are More Powerful",
    desc: "To achieve success, we unite groups with the right mix of sector, product, and jurisdictional knowledge.",
  },
  {
    title: "We Invest For The Future",
    desc: "We invest today to build the firm our clients will need 15, 20, or more years into the future.",
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
          <span className="text-gold">LawBridge LLP</span>
        </h2>

        {/* Sub Heading */}
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-text-secondary text-center text-lg mb-10 max-w-2xl mx-auto italic"
        >
          Focused to provide best legal services you can count on
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
            We are one of{" "}
            <span className="text-gold font-semibold">Pakistan's best law firms</span>,
            with significant depth and range of resources across Pakistan. We are a single,
            integrated firm. We take pride in being approachable, fostering a friendly atmosphere,
            and promoting teamwork. We aim to surpass our clients' expectations. We offer top-notch
            legal advice, litigation, and legal insights to people living in Pakistan and abroad
            (Overseas Pakistani). Our work blends{" "}
            <span className="text-gold font-semibold">global standards</span> with deep
            local knowledge.
          </p>
          <p className="mb-6">
            Pakistanis around the globe consult us for their legal matters, whether they need a
            family dispute lawyer, a real estate lawyer in Lahore, a business or corporate lawyer
            in Pakistan, or assistance with any other legal issues. They place us in this position
            of trust because:
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
              <h3 className="text-text-primary font-bold text-sm tracking-wider uppercase mb-3 group-hover:text-gold transition">
                {point.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {point.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Paragraph */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="max-w-4xl mx-auto"
        >
          <p className="text-text-secondary text-base leading-relaxed mb-4">
            As a leader in our field, we hold ourselves to high standards in all our actions.
            We commit to inspiring the trust of our stakeholders by making{" "}
            <span className="text-gold font-semibold">Responsible Business</span> a central
            part of our strategy. This encompasses how we do business and manage risk, as well as
            our commitment to our people, communities, and the environment.
          </p>
          <p className="text-text-secondary text-base leading-relaxed mb-8">
            Last, but not least, we aim to be{" "}
            <span className="text-gold font-semibold">easy to work with</span>,
            down-to-earth, and approachable.
          </p>

          {/* CTA Button */}
          <div data-aos="fade-up" data-aos-delay="400">
            <Link
              href="/firm-overview"
              className="inline-block border-2 border-gold text-gold font-bold px-10 py-3 text-xs tracking-widest uppercase hover:bg-gold hover:text-white transition"
            >
              LEARN MORE ABOUT US
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LawBridge;