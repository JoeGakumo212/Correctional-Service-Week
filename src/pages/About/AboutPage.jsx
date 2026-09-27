import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

import EventMotif from '../../components/common/EventMotif';

import './About.css';

const themes = [
  {
    number: '01',
    title: 'Technology',
    description:
      'Exploring technology and digital approaches that can strengthen modern correctional services.',
  },
  {
    number: '02',
    title: 'Green Solutions',
    description:
      'Highlighting sustainable and environmentally responsible approaches within correctional services.',
  },
  {
    number: '03',
    title: 'Innovation',
    description:
      'Creating space for new ideas, practical solutions and approaches that can transform correctional services.',
  },
  {
    number: '04',
    title: 'Rehabilitation',
    description:
      'Recognising programmes and approaches that support positive change and rehabilitation.',
  },
  {
    number: '05',
    title: 'Safer Communities',
    description:
      'Connecting effective correctional services with the broader goal of safer communities.',
  },
  {
    number: '06',
    title: 'Humanity',
    description:
      'Promoting correctional services that are professional, humane and focused on positive outcomes.',
  },
];

export default function AboutPage() {
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
                  About the <span className="accent">Event</span>
                </h1>

                <p className="about-hero-intro">
                  Correctional Service Week 2026 provides a platform for
                  highlighting transformation, innovation and sustainable
                  approaches within correctional services.
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
            <div className="event-introduction">
              <div className="event-introduction-text">
                <p className="about-section-label">
                  About Correctional Service Week
                </p>

                <h2>Transforming correctional services</h2>

                <p>
                  Correctional Service Week 2026 brings attention to the
                  changing role of correctional services and the opportunities
                  created by technology, innovation and sustainable solutions.
                </p>

                <p>
                  The event provides an opportunity for stakeholders to engage
                  around approaches that can contribute to safer, greener and
                  more humane correctional services.
                </p>

                <p>
                  It also creates a platform for leadership, institutions,
                  partners and communities to share ideas, experiences and
                  opportunities for collaboration.
                </p>
              </div>

              <aside className="event-highlight-card">
                <h3>Event Focus</h3>

                <ul className="event-highlight-list">
                  <li>Technology and innovation</li>
                  <li>Green solutions</li>
                  <li>Rehabilitation</li>
                  <li>Community safety</li>
                  <li>Partnership and collaboration</li>
                </ul>
              </aside>
            </div>

            <div className="about-themes">
              <div className="about-section-heading">
                <p className="about-section-label">Key Areas</p>

                <h2>A week focused on transformation</h2>

                <p>
                  The event theme provides a foundation for exploring practical
                  ideas and approaches for the future of correctional services.
                </p>
              </div>

              <div className="about-theme-grid">
                {themes.map((theme) => (
                  <article className="about-theme-card" key={theme.number}>
                    <div className="about-theme-number">{theme.number}</div>

                    <h3>{theme.title}</h3>

                    <p>{theme.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
