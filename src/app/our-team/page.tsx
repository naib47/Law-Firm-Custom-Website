import Link from "next/link";

const team = [
  {
    name: "Barrister Bilal Ashraf",
    role: "Senior Partner",
    location: "Lahore | Islamabad | Faisalabad",
    bio: "Bilal Ashraf is a Lahore Based Barrister with 18 plus years of experience, working with National & International well reputed Law firms. He practices in Constitutional, Criminal, Consumer, Telecommunication, Taxation, Property, Family & Corporate Law. Member of Lincoln's Inn, United Kingdom and Advocate of High Court.",
    initials: "BA",
  },
  {
    name: "Barrister Akhtar Hussain Jabbar",
    role: "Senior Partner",
    location: "Karachi",
    bio: "A distinguished legal professional with over 15 years of experience. Barrister and member of Lincoln's Inn UK, Advocate of the High Court of Pakistan. Completed Masters in Law from City University London.",
    initials: "AJ",
  },
  {
    name: "Shoukat Ghallu",
    role: "Partner",
    location: "Multan - Bahawalpur",
    bio: "An accomplished legal professional with over 18 years of experience managing the Multan & Bahawalpur offices. Advocate of the High Court of Pakistan and proud member of the Punjab Bar Council.",
    initials: "SG",
  },
  {
    name: "Darmaan Shafi",
    role: "Partner",
    location: "Peshawar - Islamabad",
    bio: "A highly accomplished legal professional with over a decade of experience. Advocate of the High Court and member of KPK Bar Council. Specializes in criminal law with Master's degree from City University London.",
    initials: "DS",
  },
  {
    name: "Mehr un Nisa",
    role: "Senior Associate",
    location: "Lahore",
    bio: "Studied law from Quaid e Azam Law College, Lahore in 2015. Masters in Political Science from University of Punjab in 2017. A detail-oriented & result-driven female corporate/family lawyer.",
    initials: "MN",
  },
  {
    name: "Hassan Mahmood Sipra",
    role: "Associate",
    location: "Lahore",
    bio: "Law degree from University Law College of Punjab University. Expertise in Constitutional, Civil, Criminal, Banking, Consumer, Intellectual Property, Family and Corporate litigation.",
    initials: "HS",
  },
  {
    name: "Noraiz Ismail Gondal",
    role: "Senior Associate",
    location: "Lahore",
    bio: "A dedicated lawyer with six years of experience. Completed law degree from University Law College. Key role in providing strategic legal advice and effective representation at Zia Law Associate.",
    initials: "NG",
  },
  {
    name: "Asia Irfan Abbasi",
    role: "Senior Associate",
    location: "Murree",
    bio: "Seasoned Advocate of the High Court with over 15 years of experience in family, civil, and criminal law. LL.B from Punjab University 2006. Former Vice President of District Bar Association Murree.",
    initials: "AA",
  },
];

const OurTeam = () => {
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
              Meet The Team
            </p>
            <div className="h-[1px] w-12 bg-gold"></div>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
            Our <span className="text-gold">Team</span>
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm">
            <Link href="/" className="text-gray-400 hover:text-gold transition">
              Home
            </Link>
            <span className="text-gold">»</span>
            <span className="text-white">Our Team</span>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-page-bg py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <div
            data-aos="fade-down"
            data-aos-delay="100"
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-[1px] w-12 bg-gold"></div>
            <p className="text-gold text-xs font-bold tracking-[4px] uppercase">
              Our Lawyers
            </p>
            <div className="h-[1px] w-12 bg-gold"></div>
          </div>

          <h2
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-4xl font-black text-center mb-4"
          >
            Meet Our <span className="text-gold">Legal Experts</span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-text-secondary text-center text-base mb-14 max-w-2xl mx-auto"
          >
            Our team of the{" "}
            <span className="text-gold font-semibold">best lawyers in Pakistan</span>{" "}
            is dedicated to providing exceptional legal representation across all practice
            areas. Meet the experts behind{" "}
            <span className="text-gold font-semibold">Zia Law Associate</span>.
          </p>

          {/* Team Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={100 * (index % 4 + 1)}
                className="bg-card-bg border border-card-border hover:border-gold transition-all duration-300 group shadow-sm"
              >
                {/* Avatar */}
                <div className="bg-page-bg p-6 flex items-center justify-center border-b border-card-border">
                  <div className="w-20 h-20 bg-gold/10 border-2 border-gold flex items-center justify-center rounded-full">
                    <span className="text-gold font-black text-xl">
                      {member.initials}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="h-[2px] w-8 bg-gold mb-3 group-hover:w-full transition-all duration-500"></div>
                  <h3 className="font-black text-sm mb-1 group-hover:text-gold transition">
                    {member.name}
                  </h3>
                  <p className="text-gold text-xs font-bold tracking-wider uppercase mb-1">
                    {member.role}
                  </p>
                  <p className="text-text-muted text-xs mb-3">
                    📍 {member.location}
                  </p>
                  <p className="text-text-secondary text-xs leading-relaxed">
                    {member.bio}
                  </p>
                </div>
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
              Call Now For A Consultation
            </p>
            <Link
              href="tel:+923045159223"
              className="text-gold text-3xl font-black tracking-wider hover:text-black transition block mb-6"
            >
              +92 304 5159223
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

export default OurTeam;