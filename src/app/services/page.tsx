import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Family Law",
    icon: "⚖️",
    desc: "Our family law attorneys provide compassionate and expert legal guidance for all family-related matters including divorce, child custody, guardianship, inheritance disputes, and matrimonial issues. We understand the emotional complexity of family disputes and work to protect your rights and interests.",
    points: ["Divorce & Separation", "Child Custody & Guardianship", "Inheritance & Will Disputes", "Matrimonial Issues", "Family Mediation"],
  },
  {
    num: "02",
    title: "Criminal Law",
    icon: "🏛️",
    desc: "Our criminal defense lawyers provide aggressive representation for individuals facing criminal charges. From minor offenses to serious criminal matters, we ensure your rights are protected throughout the legal process with expert defense strategies.",
    points: ["Criminal Defense", "Bail Applications", "Appeals & Revisions", "White Collar Crimes", "Cybercrime Defense"],
  },
  {
    num: "03",
    title: "Corporate Law",
    icon: "🏢",
    desc: "We provide comprehensive corporate legal services to businesses of all sizes. From company formation to complex commercial transactions, our corporate lawyers ensure your business operates within the legal framework while maximizing growth opportunities.",
    points: ["Company Formation", "Mergers & Acquisitions", "Contract Drafting", "Corporate Governance", "Commercial Disputes"],
  },
  {
    num: "04",
    title: "Real Estate Law",
    icon: "🏠",
    desc: "Our real estate lawyers handle all property-related legal matters including purchase, sale, lease agreements, property disputes, and title verification. We ensure your property transactions are legally sound and your investments are protected.",
    points: ["Property Purchase & Sale", "Title Verification", "Lease Agreements", "Property Disputes", "Housing Society Issues"],
  },
  {
    num: "05",
    title: "Civil Litigation",
    icon: "📋",
    desc: "Our civil litigation team provides strong representation in civil courts across Pakistan. We handle a wide range of civil disputes with strategic legal approaches to achieve the best possible outcomes for our clients.",
    points: ["Civil Suits", "Contract Disputes", "Injunctions", "Recovery Suits", "Civil Appeals"],
  },
  {
    num: "06",
    title: "Tax Law",
    icon: "💼",
    desc: "Our tax lawyers provide expert guidance on all taxation matters including tax planning, compliance, and dispute resolution. We help individuals and businesses navigate the complex Pakistani tax system efficiently.",
    points: ["Tax Planning", "FBR Disputes", "Tax Appeals", "Corporate Taxation", "Income Tax Returns"],
  },
  {
    num: "07",
    title: "Intellectual Property",
    icon: "💡",
    desc: "We protect your intellectual property rights including trademarks, patents, copyrights, and trade secrets. Our IP lawyers ensure your creative works and business innovations are legally protected from infringement.",
    points: ["Trademark Registration", "Patent Filing", "Copyright Protection", "IP Litigation", "Trade Secret Protection"],
  },
  {
    num: "08",
    title: "Banking & Finance Law",
    icon: "🏦",
    desc: "Our banking and finance lawyers handle all financial legal matters including loan agreements, banking disputes, and financial regulatory compliance. We represent both financial institutions and their clients.",
    points: ["Loan Agreements", "Banking Disputes", "Financial Regulation", "Debt Recovery", "Islamic Finance"],
  },
  {
    num: "09",
    title: "Insurance Law",
    icon: "🛡️",
    desc: "We represent clients in insurance-related legal matters including policy disputes, claim rejections, and insurance fraud cases. Our lawyers ensure you receive fair treatment from insurance companies.",
    points: ["Insurance Claims", "Policy Disputes", "Claim Rejection Appeals", "Insurance Fraud", "Regulatory Compliance"],
  },
  {
    num: "10",
    title: "Sports Law",
    icon: "🏆",
    desc: "Our sports law practice covers all legal aspects of the sports industry including contracts, disputes, regulatory matters, and player rights. We represent athletes, clubs, and sports organizations.",
    points: ["Player Contracts", "Sports Disputes", "Doping Cases", "Club Governance", "Sports Arbitration"],
  },
  {
    num: "11",
    title: "Health Law",
    icon: "⚕️",
    desc: "We provide specialized legal services for the healthcare industry including medical negligence, regulatory compliance, and healthcare facility matters. Our lawyers understand the unique legal challenges of the healthcare sector.",
    points: ["Medical Negligence", "Healthcare Regulation", "Hospital Disputes", "Pharmaceutical Law", "Patient Rights"],
  },
  {
    num: "12",
    title: "International Business Law",
    icon: "🌍",
    desc: "Our international business lawyers assist clients with cross-border transactions, foreign investment, and international trade matters. We combine global expertise with deep knowledge of Pakistani law.",
    points: ["Foreign Investment", "Cross-border Transactions", "International Trade", "Joint Ventures", "International Arbitration"],
  },
  {
    num: "13",
    title: "Alternate Dispute Resolution",
    icon: "🤝",
    desc: "We offer expert ADR services as an efficient alternative to lengthy court proceedings. Our mediators and arbitrators help parties resolve disputes quickly and cost-effectively while preserving business relationships.",
    points: ["Mediation", "Arbitration", "Negotiation", "Conciliation", "Settlement Agreements"],
  },
];

const Services = () => {
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
              What We Do
            </p>
            <div className="h-[1px] w-12 bg-gold"></div>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
            Our <span className="text-gold">Services</span>
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm">
            <Link href="/" className="text-gray-400 hover:text-gold transition">
              Home
            </Link>
            <span className="text-gold">»</span>
            <span className="text-white">Services</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
              Legal Expertise
            </p>
            <div className="h-[1px] w-12 bg-gold"></div>
          </div>

          <h2
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-4xl font-black text-center mb-3"
          >
            Our Practice <span className="text-gold">Areas</span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-text-secondary text-center text-base mb-14 max-w-2xl mx-auto"
          >
            We offer comprehensive legal services across all major areas of law in Pakistan
          </p>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={100 * (index % 2 + 1)}
                className="bg-card-bg border border-card-border hover:border-gold transition-all duration-300 group p-8 shadow-sm"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gold/10 border border-gold/30 flex items-center justify-center text-2xl flex-shrink-0 group-hover:bg-gold transition">
                    {service.icon}
                  </div>
                  <div>
                    <p className="text-gold/40 font-black text-xs mb-1">{service.num}</p>
                    <h3 className="font-black text-lg group-hover:text-gold transition">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Gold Line */}
                <div className="h-[2px] w-8 bg-gold mb-4 group-hover:w-full transition-all duration-500"></div>

                {/* Description */}
                <p className="text-text-secondary text-sm leading-relaxed mb-5">
                  {service.desc}
                </p>

                {/* Points */}
                <ul className="flex flex-col gap-2">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-2 text-text-secondary text-sm">
                      <div className="w-1.5 h-1.5 bg-gold rotate-45 flex-shrink-0"></div>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-center mt-16 bg-card-bg border border-card-border p-8 shadow-sm"
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

export default Services;