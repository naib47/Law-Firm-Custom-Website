import Link from "next/link";

const FirmOverview = () => {
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
              About Us
            </p>
            <div className="h-[1px] w-12 bg-gold"></div>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
            Firm <span className="text-gold">Overview</span>
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm">
            <Link href="/" className="text-gray-400 hover:text-gold transition">
              Home
            </Link>
            <span className="text-gold">»</span>
            <span className="text-white">Firm Overview</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-page-bg py-20 px-6">
        <div className="max-w-5xl mx-auto">

          {/* Who We Are */}
          <div data-aos="fade-up" data-aos-delay="100" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[1px] w-12 bg-gold"></div>
              <p className="text-gold text-xs font-bold tracking-[4px] uppercase">
                Who We Are & How We Work
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              At <span className="text-gold">Zia Law Associate</span>
            </h2>
            <p className="text-text-secondary text-base leading-relaxed mb-4">
              <span className="text-gold font-semibold">Zia Law Associate</span> is proudly
              recognized as one of the{" "}
              <span className="text-gold font-semibold">best law firms in Pakistan</span>,
              offering top-notch legal services with a strong presence across the country.
              Whether you're looking for the{" "}
              <span className="text-gold font-semibold">best lawyer in Karachi</span> or the{" "}
              <span className="text-gold font-semibold">best lawyer in Lahore</span>, our fully
              integrated team delivers unmatched expertise and personalized support to our clients.
            </p>
            <p className="text-text-secondary text-base leading-relaxed mb-4">
              Our clientele includes businesses from various commercial and industrial sectors,
              government bodies, regulators, trade organizations, and non-profits. Combining
              <span className="text-gold font-semibold"> global legal standards</span> with
              deep local knowledge, we provide practical solutions for even the most complex
              legal matters across Pakistan.
            </p>
            <p className="text-text-secondary text-base leading-relaxed">
              As one of the{" "}
              <span className="text-gold font-semibold">best law firms in Lahore</span>,
              we are committed to excellence in every case we handle — from family law and
              criminal defense to corporate law and real estate disputes. Our{" "}
              <span className="text-gold font-semibold">best lawyers in Pakistan</span> work
              tirelessly to protect your rights and deliver the results you deserve.
            </p>
          </div>

          {/* Why Trusted */}
          <div data-aos="fade-up" data-aos-delay="200" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[1px] w-12 bg-gold"></div>
              <p className="text-gold text-xs font-bold tracking-[4px] uppercase">
                Why Choose Us
              </p>
            </div>
            <h2 className="text-3xl font-black mb-8">
              Why We're Trusted as the{" "}
              <span className="text-gold">Best Lawyers in Pakistan</span>
            </h2>
            <p className="text-text-secondary text-base leading-relaxed mb-4">
              Leading organizations in Pakistan and across the globe trust{" "}
              <span className="text-gold font-semibold">Zia Law Associate</span> not
              just for legal representation but for guidance on critical legal issues.
            </p>
            <p className="text-text-secondary text-base leading-relaxed mb-8">
              From multinational corporations to individual clients, our reputation as the{" "}
              <span className="text-gold font-semibold">best law firm in Pakistan</span> is
              built on years of delivering exceptional legal outcomes with integrity,
              dedication, and professionalism.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  num: "01",
                  title: "Client-Focused Approach",
                  desc: "We prioritize your interests by understanding your business, challenges, and opportunities to deliver the best legal outcomes.",
                },
                {
                  num: "02",
                  title: "Actionable Solutions",
                  desc: "Our best lawyers in Pakistan provide advice that is clear, practical, and effective for every unique situation.",
                },
                {
                  num: "03",
                  title: "Collaborative Teamwork",
                  desc: "We believe in the power of teams. By bringing together specialists with the perfect mix of knowledge, we ensure the best outcomes.",
                },
                {
                  num: "04",
                  title: "Forward-Thinking Vision",
                  desc: "We invest in the future to build the best law firm that continues to meet your evolving needs with advanced resources and innovative strategies.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={150 * (index + 1)}
                  className="bg-card-bg border border-card-border p-6 hover:border-gold transition group shadow-sm"
                >
                  <p className="text-gold font-black text-3xl mb-3 opacity-30">
                    {item.num}
                  </p>
                  <h3 className="font-bold text-sm tracking-wider uppercase mb-3 group-hover:text-gold transition">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Commitment */}
          <div data-aos="fade-up" data-aos-delay="300" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[1px] w-12 bg-gold"></div>
              <p className="text-gold text-xs font-bold tracking-[4px] uppercase">
                Our Commitment
              </p>
            </div>
            <h2 className="text-3xl font-black mb-6">
              Commitment to <span className="text-gold">Excellence</span>
            </h2>
            <p className="text-text-secondary text-base leading-relaxed mb-4">
              As a leader in the legal field,{" "}
              <span className="text-gold font-semibold">Zia Law Associate</span> is committed
              to the highest standards of professionalism and responsibility. We integrate
              ethical and sustainable practices into our work, ensuring that we serve not only
              our clients but also the broader community.
            </p>
            <p className="text-text-secondary text-base leading-relaxed">
              Our commitment to being the{" "}
              <span className="text-gold font-semibold">best law firm in Pakistan</span> means
              we never compromise on quality, ethics, or client satisfaction — in every case,
              at every stage.
            </p>
          </div>

          {/* Why Choose */}
          <div data-aos="fade-up" data-aos-delay="400" className="mb-12 bg-card-bg border border-card-border p-8 shadow-sm">
            <h2 className="text-3xl font-black mb-4">
              Why Choose <span className="text-gold">Zia Law Associate?</span>
            </h2>
            <p className="text-text-secondary text-base leading-relaxed mb-4">
              We're not just about expertise; we're about approachability. At{" "}
              <span className="text-gold font-semibold">Zia Law Associate</span>,
              we pride ourselves on being friendly, down-to-earth, and easy to work with.
              When you choose us, you're choosing a reliable partner who puts your success first.
            </p>
            <p className="text-text-secondary text-base leading-relaxed mb-4">
              For the{" "}
              <span className="text-gold font-semibold">best lawyers in Pakistan</span>,
              whether you need the{" "}
              <span className="text-gold font-semibold">best lawyer in Karachi</span>, the{" "}
              <span className="text-gold font-semibold">best lawyer in Lahore</span>,
              or legal expertise anywhere else in Pakistan — trust{" "}
              <span className="text-gold font-semibold">Zia Law Associate</span> to
              deliver exceptional results.
            </p>
            <p className="text-text-secondary text-base leading-relaxed">
              Our track record speaks for itself. With hundreds of successful cases across
              all major practice areas, we are the{" "}
              <span className="text-gold font-semibold">best law firm in Pakistan</span>{" "}
              you can count on for all your legal needs.
            </p>
          </div>

          {/* CTA */}
          <div data-aos="fade-up" data-aos-delay="500" className="text-center bg-card-bg border border-card-border p-8 shadow-sm">
            <p className="text-text-muted text-sm tracking-widest uppercase mb-2">
              Call Now For A Consultation
            </p>
            <Link
              href="tel:+923457866677"
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

export default FirmOverview;