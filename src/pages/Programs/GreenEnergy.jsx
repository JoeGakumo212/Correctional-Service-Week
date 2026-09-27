import React from 'react';
import {
  ArrowRight,
  Droplets,
  Leaf,
  Lightbulb,
  Recycle,
  Sun,
  TreePine,
  Wind,
  Zap,
} from 'lucide-react';

import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

import './ProgramsPage.css';

export default function GreenEnergy() {
  const areas = [
    {
      icon: Sun,
      title: 'Solar Energy',
      text: 'Promoting renewable solar energy solutions for correctional institutions and supporting cleaner and more sustainable energy use.',
    },
    {
      icon: Zap,
      title: 'Energy Efficiency',
      text: 'Encouraging efficient use of energy and responsible institutional consumption through practical conservation measures.',
    },
    {
      icon: Recycle,
      title: 'Waste Management',
      text: 'Supporting responsible waste reduction, reuse, recycling and environmentally appropriate disposal practices.',
    },
    {
      icon: TreePine,
      title: 'Environmental Conservation',
      text: 'Promoting environmental responsibility, conservation and sustainable practices within institutions and communities.',
    },
    {
      icon: Droplets,
      title: 'Resource Conservation',
      text: 'Encouraging responsible management of water and other essential resources to support resilient institutions.',
    },
    {
      icon: Wind,
      title: 'Sustainable Solutions',
      text: 'Exploring practical approaches that improve institutional resilience, sustainability and environmental performance.',
    },
  ];

  return (
    <>
      {/* =========================
          NAVIGATION
      ========================== */}
      <Navbar />

      <main className="program-page">
        {/* =========================
            HERO
        ========================== */}
        <section className="program-hero green-energy-hero">
          <div className="program-hero-overlay">
            <div className="program-container">
              <div className="program-hero-content">
                <span className="program-eyebrow">
                  CORRECTIONAL SERVICE WEEK 2026
                </span>

                <h1>
                  Green Energy
                  <span> & Sustainability</span>
                </h1>

                <p>
                  Promoting sustainable practices, renewable energy and
                  responsible resource management for efficient, resilient and
                  environmentally responsible correctional institutions.
                </p>

                <div className="program-theme">
                  <Sun size={20} />

                  <div>
                    <span>2026 THEME</span>

                    <strong>“Rehabilitation for a Safer Tomorrow”</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            INTRODUCTION
        ========================== */}
        <section className="program-introduction">
          <div className="program-container">
            <div className="program-intro-grid">
              <div className="program-intro-heading">
                <span className="section-kicker">PROGRAMME THREE</span>

                <h2>
                  Building
                  <span> sustainable institutions</span>
                </h2>
              </div>

              <div className="program-intro-text">
                <p>
                  Green energy and sustainability provide opportunities to
                  improve institutional efficiency while strengthening
                  environmental responsibility across correctional services.
                </p>

                <p>
                  Through renewable energy, energy conservation, responsible
                  resource management, waste reduction and environmental
                  conservation, correctional institutions can adopt practical
                  approaches that contribute to long-term resilience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            MAIN PROGRAMME
        ========================== */}
        <section
          className="program-section green-energy-section"
          id="green-energy"
        >
          <div className="program-container">
            {/* SECTION HEADER */}
            <div className="program-section-header">
              <div className="program-section-number">03</div>

              <div>
                <span className="section-kicker">
                  GREEN ENERGY & SUSTAINABILITY
                </span>

                <h2>
                  Cleaner energy.
                  <span> Smarter resources.</span>
                </h2>

                <p className="program-section-subtitle">
                  Sustainable solutions for efficient and resilient correctional
                  institutions.
                </p>
              </div>
            </div>

            {/* =========================
                FEATURE GRID
            ========================== */}
            <div className="program-feature-grid">
              {/* LEFT CONTENT */}
              <div className="program-feature-content">
                <p>
                  Sustainable practices provide opportunities to improve
                  institutional efficiency while supporting environmental
                  responsibility.
                </p>

                <p>
                  Green energy initiatives can contribute to more resilient
                  correctional institutions through renewable energy, energy
                  conservation, responsible resource management and
                  environmentally conscious practices.
                </p>

                <p>
                  The programme creates an opportunity to showcase practical
                  approaches that can support sustainability while also creating
                  opportunities for skills development and productive
                  activities.
                </p>

                <div className="green-energy-message">
                  <Leaf size={24} />

                  <div>
                    <strong>Building sustainable institutions</strong>

                    <span>
                      Promoting responsible use of resources for present and
                      future generations.
                    </span>
                  </div>
                </div>

                <a href="#sustainability-areas" className="program-text-link">
                  Explore sustainability areas
                  <ArrowRight size={17} />
                </a>
              </div>

              {/* RIGHT FEATURE CARD */}
              <div className="program-feature-card green-card">
                <div className="green-sun-icon">
                  <Sun size={50} />
                </div>

                <span>SUSTAINABILITY</span>

                <h3>
                  Cleaner energy. Smarter resources. Resilient institutions.
                </h3>

                <p>
                  Advancing practical environmental and energy solutions within
                  correctional institutions.
                </p>

                <div className="green-icons">
                  <Lightbulb size={22} />
                  <Sun size={22} />
                  <Leaf size={22} />
                  <Recycle size={22} />
                </div>
              </div>
            </div>

            {/* =========================
                IMPACT MESSAGE
            ========================== */}
            <div className="green-energy-impact">
              <div className="green-impact-icon">
                <Leaf size={30} />
              </div>

              <div>
                <span className="section-kicker">OUR APPROACH</span>

                <h3>Sustainability through practical action</h3>

                <p>
                  Sustainable correctional services require practical solutions
                  that improve resource efficiency, strengthen institutional
                  resilience and promote responsible environmental practices.
                </p>
              </div>
            </div>

            {/* =========================
                KEY AREAS
            ========================== */}
            <div className="program-areas" id="sustainability-areas">
              <div className="program-areas-heading">
                <span className="section-kicker">KEY AREAS</span>

                <h3>Sustainability in action</h3>

                <p>
                  Areas where environmental responsibility and sustainable
                  solutions can contribute to modern correctional services.
                </p>
              </div>

              <div className="program-area-grid green-area-grid">
                {areas.map((area) => {
                  const Icon = area.icon;

                  return (
                    <div className="program-area-card" key={area.title}>
                      <div className="program-area-icon">
                        <Icon size={23} />
                      </div>

                      <h4>{area.title}</h4>

                      <p>{area.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            CTA
        ========================== */}
        <section className="program-cta">
          <div className="program-container">
            <div className="program-cta-content">
              <span className="section-kicker">
                CORRECTIONAL SERVICE WEEK 2026
              </span>

              <h2>
                Building a<span> sustainable future.</span>
              </h2>

              <p>
                Discover the programmes, innovations and initiatives
                contributing to safer, stronger and more resilient correctional
                services.
              </p>

              <div className="program-cta-actions">
                <a href="/programs" className="program-btn primary">
                  Explore All Programs
                  <ArrowRight size={18} />
                </a>

                <a href="/events/register" className="program-btn secondary">
                  Register / RSVP
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* =========================
          FOOTER
      ========================== */}
      <Footer />
    </>
  );
}
