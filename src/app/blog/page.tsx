"use client";

import Link from "next/link";

const blogs = [
  {
    title: "How to File a Property Case in Pakistan",
    category: "Property Law",
    date: "June 10, 2025",
    slug: "property-case-pakistan",
    desc: "Complete guide on filing a property dispute case in Pakistan with legal requirements.",
  },
  {
    title: "Divorce Procedure in Pakistan – Complete Guide",
    category: "Family Law",
    date: "June 08, 2025",
    slug: "divorce-procedure-pakistan",
    desc: "Step-by-step legal process for divorce, khula and family court matters.",
  },
  {
    title: "Tax Filing Guide for Businesses in Pakistan",
    category: "Tax Law",
    date: "June 05, 2025",
    slug: "tax-filing-guide-pakistan",
    desc: "Learn how to file taxes for your business and avoid penalties.",
  },
  {
    title: "Company Registration Process in Pakistan",
    category: "Corporate Law",
    date: "June 03, 2025",
    slug: "company-registration-pakistan",
    desc: "A complete guide to register your company legally in Pakistan.",
  },
  {
    title: "How to Handle Criminal Cases in Pakistan",
    category: "Criminal Law",
    date: "May 30, 2025",
    slug: "criminal-cases-pakistan",
    desc: "Understanding criminal law procedures and legal rights.",
  },
  {
    title: "Real Estate Investment Legal Tips",
    category: "Property Law",
    date: "May 28, 2025",
    slug: "real-estate-legal-tips",
    desc: "Important legal tips before investing in property in Pakistan.",
  },
  {
    title: "Child Custody Laws in Pakistan",
    category: "Family Law",
    date: "May 25, 2025",
    slug: "child-custody-laws",
    desc: "Detailed explanation of custody rights and family court decisions.",
  },
  {
    title: "FBR Notices – What to Do?",
    category: "Tax Law",
    date: "May 22, 2025",
    slug: "fbr-notice-guide",
    desc: "How to respond legally to FBR notices and avoid penalties.",
  },
  {
    title: "Breach of Contract – Legal Action Guide",
    category: "Corporate Law",
    date: "May 20, 2025",
    slug: "breach-of-contract",
    desc: "Legal remedies and steps for contract violation cases.",
  },
  {
    title: "Cyber Crime Laws in Pakistan",
    category: "Criminal Law",
    date: "May 18, 2025",
    slug: "cyber-crime-laws",
    desc: "Overview of cyber laws and online crime legal actions.",
  },
  {
    title: "Property Transfer Process in Pakistan",
    category: "Property Law",
    date: "May 15, 2025",
    slug: "property-transfer-process",
    desc: "Step-by-step legal procedure for transferring property ownership.",
  },
  {
    title: "Nikah Nama Legal Importance",
    category: "Family Law",
    date: "May 12, 2025",
    slug: "nikah-nama-importance",
    desc: "Understanding clauses and legal value of Nikah Nama.",
  },
  {
    title: "Sales Tax Registration Guide",
    category: "Tax Law",
    date: "May 10, 2025",
    slug: "sales-tax-registration",
    desc: "How to register for sales tax and comply with FBR rules.",
  },
  {
    title: "Startup Legal Requirements in Pakistan",
    category: "Corporate Law",
    date: "May 08, 2025",
    slug: "startup-legal-guide",
    desc: "Legal checklist for startups and new businesses.",
  },
  {
    title: "Bail Process in Pakistan",
    category: "Criminal Law",
    date: "May 05, 2025",
    slug: "bail-process",
    desc: "How to apply for bail and legal procedures involved.",
  },
];

const BlogPage = () => {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative bg-cover bg-center py-24 px-6"
        style={{ backgroundImage: "url('/images/banner.jpg')" }}
      >
        <div className="relative z-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[1px] w-12 bg-gold"></div>
            <p className="text-gold text-xs font-bold tracking-[4px] uppercase">
              Legal Insights
            </p>
            <div className="h-[1px] w-12 bg-gold"></div>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
            Our <span className="text-gold">Blog</span>
          </h1>

          <p className="text-gray-300 text-sm">
            Latest legal updates, guides and expert insights
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-page-bg py-20 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <h2
            data-aos="fade-up"
            className="text-4xl font-black text-center mb-3"
          >
            Latest <span className="text-gold">Articles</span>
          </h2>

          {/* Divider */}
          <div
            data-aos="zoom-in"
            className="flex items-center justify-center gap-3 mb-14"
          >
            <div className="h-[1px] w-24 bg-card-border"></div>
            <div className="w-2 h-2 bg-gold rotate-45"></div>
            <div className="h-[1px] w-24 bg-card-border"></div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={100 * (index + 1)}
                className="bg-card-bg border border-card-border hover:border-gold transition-all duration-300 group p-6 shadow-sm"
              >
                {/* Top */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-gold text-xs font-bold uppercase tracking-wider border border-gold/30 px-2 py-1">
                    {blog.category}
                  </span>
                  <span className="text-text-muted text-xs">
                    📅 {blog.date}
                  </span>
                </div>

                {/* Line */}
                <div className="h-[2px] w-8 bg-gold mb-3 group-hover:w-full transition-all duration-500"></div>

                {/* Title */}
                <h3 className="font-black text-base mb-3 group-hover:text-gold transition">
                  {blog.title}
                </h3>

                {/* Desc */}
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  {blog.desc}
                </p>

                {/* Read More */}
                <Link
                  href={`/blog/${blog.slug}`}
                  className="text-gold text-xs font-bold tracking-widest uppercase flex items-center gap-2"
                >
                  Read More →
                </Link>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            data-aos="fade-up"
            className="text-center bg-card-bg border border-card-border p-8 mt-16 shadow-sm"
          >
            <p className="text-text-muted text-sm tracking-widest uppercase mb-2">
              Need Legal Advice?
            </p>
            <h3 className="font-black text-2xl mb-4">
              Call Now For A <span className="text-gold">Consultation</span>
            </h3>

            <a
              href="tel:+923045159223"
              className="text-gold text-3xl font-black tracking-wider block mb-6"
            >
              +92 304 5159223
            </a>

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

export default BlogPage;