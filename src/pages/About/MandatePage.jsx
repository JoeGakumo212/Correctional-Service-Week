import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

import EventMotif from '../../components/common/EventMotif';

import './About.css';

const mandateAreas = [
  {
    number: '01',
    title: 'Custodial Security',
    description:
      'Maintaining secure and professionally managed custodial environments.',
  },
  {
    number: '02',
    title: 'Rehabilitation',
    description:
      'Supporting programmes and interventions that encourage positive change.',
  },
  {
    number: '03',
    title: 'Reintegration',
    description:
      'Supporting preparation and pathways for successful transition into society.',
  },
  {
    number: '04',
    title: 'Correctional Management',
    description:
      'Promoting effective management, professional standards and responsible administration.',
  },
  {
    number: '05',
    title: 'Community Safety',
    description:
      'Contributing to safer communities through effective correctional services.',
  },
  {
    number: '06',
    title: 'Partnership',
    description:
      'Working with institutions, communities and stakeholders to strengthen outcomes.',
  },
];

export default function MandatePage() {
  return (
    <div className="app about-page">
      <Navbar />

      <main>
        <section className="about-hero">
          <div className="container">
            <div className="about-hero-layout">
              <EventMotif />

              <div>
                <p className="about-eyebrow">Correctional Service Week 2026</p>

                <h1>
                  Our <span className="accent">Mandate</span>
                </h1>

                <p className="about-hero-intro">
                  Understanding the responsibilities and priorities that guide
                  correctional services.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="theme-strip">
          <div className="container theme-strip-inner">
            <span className="theme-label">Theme</span>

            <span className="theme-text">
              Transforming Correctional services through Technology and Green
              Solutions.
            </span>
          </div>
        </section>

        <section className="about-content">
          <div className="container">
            <div className="mandate-intro">
              <p className="about-section-label">Our Responsibility</p>

              <h2>Security, rehabilitation and reintegration</h2>

              <p>
                Correctional services have responsibilities that extend across
                custodial management, rehabilitation, reintegration and
                community safety.
              </p>
            </div>

            <div className="mandate-grid">
              {mandateAreas.map((area) => (
                <article className="mandate-card" key={area.number}>
                  <div className="mandate-card-number">{area.number}</div>

                  <h3>{area.title}</h3>

                  <p>{area.description}</p>
                </article>
              ))}
            </div>

            <div className="mandate-strip">
              <h3>Transforming correctional services</h3>

              <p>
                Correctional Service Week 2026 creates an opportunity to explore
                how technology, green solutions and innovation can contribute to
                the future of correctional services.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
