import React from 'react';
import { ArrowRight, CalendarDays } from 'lucide-react';

import Rehabilitation from './Rehabilitation';
import Innovation from './Innovation';
import GreenEnergy from './GreenEnergy';

import './ProgramsPage.css';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

export default function ProgramsPage() {
  return (
    <>
      <Navbar />
      <main className="program-page">
        {/* HERO */}
        <section className="program-hero">
          <div className="program-hero-overlay">
            <div className="program-container">
              <div className="program-hero-content">
                <span className="program-eyebrow">
                  CORRECTIONAL SERVICE WEEK 2026
                </span>

                <h1>
                  Our <span>Programs</span>
                </h1>

                <p>
                  Showcasing programmes and initiatives transforming
                  correctional services and contributing to safer, stronger and
                  more resilient communities.
                </p>

                <div className="program-theme">
                  <CalendarDays size={20} />

                  <div>
                    <span>2026 THEME</span>
                    <strong>“Rehabilitation for a Safer Tomorrow”</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="program-introduction">
          <div className="program-container">
            <div className="program-intro-grid">
              <div className="program-intro-heading">
                <span className="section-kicker">OUR PROGRAMMES</span>

                <h2>
                  Transforming correctional services
                  <span> through action and innovation</span>
                </h2>
              </div>

              <div className="program-intro-text">
                <p>
                  Correctional Service Week 2026 provides an opportunity to
                  showcase the work, programmes and initiatives being undertaken
                  within the correctional sector.
                </p>

                <p>
                  The programmes bring together rehabilitation, innovation,
                  technology, environmental sustainability and community
                  engagement to demonstrate the contribution of correctional
                  services to public safety and national development.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
