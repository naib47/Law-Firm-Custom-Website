"use client";
import { useState } from "react";

const practiceAreas = [
  "Civil Litigation",
  "Corporate",
  "Energy and Natural Resources",
  "Dispute Resolution",
  "Banking & Finance",
  "Healthcare",
  "Infrastructure, Construction and Transport",
  "Intellectual Property",
  "Real Estates",
  "Sports Law",
  "Taxation",
  "Technology",
  "White Collar Crimes",
];

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    area: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <section className="bg-page-bg py-20 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Top Label */}
        <div
          data-aos="fade-down"
          data-aos-delay="100"
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="h-[1px] w-12 bg-gold"></div>
          <p className="text-gold text-xs font-bold tracking-[4px] uppercase">
            Get In Touch
          </p>
          <div className="h-[1px] w-12 bg-gold"></div>
        </div>

        {/* Heading */}
        <h2
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-4xl md:text-5xl font-black text-black text-center mb-3"
        >
          Request Now For A{" "}
          <span className="text-gold">Consultation</span>
        </h2>

        {/* Divider */}
        <div
          data-aos="zoom-in"
          data-aos-delay="300"
          className="flex items-center justify-center gap-3 mb-12"
        >
          <div className="h-[1px] w-24 bg-card-border"></div>
          <div className="w-2 h-2 bg-gold rotate-45"></div>
          <div className="h-[1px] w-24 bg-card-border"></div>
        </div>

        {/* Form Box */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="bg-card-bg border border-card-border p-8 shadow-sm"
        >
          {/* Row 1 - Name + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="name"
              placeholder="Please type your name here"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-white border border-card-border text-text-primary px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-gold placeholder-text-muted"
            />
            <input
              type="email"
              name="email"
              placeholder="Please type a valid email address"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-white border border-card-border text-text-primary px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-gold placeholder-text-muted"
            />
          </div>

          {/* Row 2 - Phone + Dropdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="tel"
              name="phone"
              placeholder="Please type 10-digit phone number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-white border border-card-border text-text-primary px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-gold placeholder-text-muted"
            />
            <div className="relative">
              <select
                name="area"
                value={formData.area}
                onChange={handleChange}
                className="w-full bg-white border border-card-border text-text-secondary px-5 py-4 text-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold"
              >
                <option value="" disabled>I need help with</option>
                {practiceAreas.map((area, index) => (
                  <option key={index} value={area}>{area}</option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none">
                ▾
              </div>
            </div>
          </div>

          {/* Row 3 - Message */}
          <div className="mb-4">
            <textarea
              name="message"
              placeholder="Please type your message here"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full bg-white border border-card-border text-text-primary px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-gold placeholder-text-muted resize-none"
            />
          </div>

          {/* Captcha Box */}
          <div className="mb-6">
            <div className="inline-flex items-center gap-3 border-2 border-card-border bg-white px-5 py-3">
              <input type="checkbox" className="w-5 h-5 cursor-pointer accent-gold" />
              <span className="text-text-secondary text-sm">I'm not a robot</span>
            </div>
          </div>

          {/* Button */}
          <div className="text-center">
            <button
              onClick={handleSubmit}
              className="inline-block bg-gold text-white font-black px-16 py-4 text-xs tracking-widest uppercase hover:bg-gold-dark transition border-2 border-gold"
            >
              GET HELP NOW
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ConsultationForm;