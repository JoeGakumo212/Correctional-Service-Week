import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

import EventMotif from '../../components/common/EventMotif';

import './Leadership.css';

const leaders = [
  {
    name: 'Leadership Profile',
    role: 'Cabinet Secretary',
    institution: 'Ministry of Interior and National Administration',
    image: '',
  },
  {
    name: 'Leadership Profile',
    role: 'Principal Secretary',
    institution: 'State Department for Correctional Services',
    image: '',
  },
  {
    name: 'Leadership Profile',
    role: 'Commissioner General',
    institution: 'Kenya Prisons Service',
    image: '',
  },
  {
    name: 'Leadership Profile',
    role: 'Secretary',
    institution: 'Probation and Aftercare Service',
    image: '',
  },
];

const partners = [
  'Government Institutions',
  'Correctional Stakeholders',
  'Community Organisations',
  'Development Partners',
  'Private Sector Partners',
  'Civil Society Organisations',
  'Academic Institutions',
  'Event Collaborators',
];

export default function LeadershipPage() {
  return (
    <div className="app leadership-page">
      <Navbar />

      <main>
        <section className="leadership-hero">
          <div className="container leadership-hero-content">
            <EventMotif />

            <div className="leadership-hero-copy">
              <p className="leadership-eyebrow">
                Correctional Service Week 2026
              </p>

              <h1>
                Leadership <span>& Partners</span>
              </h1>

              <p>
                Recognising the leadership, institutions and partners supporting
                Correctional Service Week 2026.
              </p>
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

        <section className="leadership-section">
          <div className="container">
            <div className="leadership-heading">
              <p className="leadership-label">Conference Leadership</p>

              <h2>Hosts & Leadership</h2>

              <p>
                The people and institutions supporting the organisation and
                delivery of Correctional Service Week 2026.
              </p>
            </div>

            <div className="leadership-grid">
              {leaders.map((leader, index) => (
                <article className="leadership-card" key={index}>
                  <div className="leadership-photo">
                    {leader.image ? (
                      <img src={leader.image} alt={leader.name} />
                    ) : (
                      <div className="leadership-photo-placeholder">
                        Leadership Photo
                      </div>
                    )}
                  </div>

                  <div className="leadership-info">
                    <h3>{leader.name}</h3>

                    <p className="leadership-role">{leader.role}</p>

                    <p className="leadership-institution">
                      {leader.institution}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="partners-section">
          <div className="container">
            <div className="partners-heading">
              <p className="leadership-label">Collaboration</p>

              <h2>Our Partners</h2>

              <p>
                Correctional Service Week 2026 brings together institutions and
                stakeholders around shared objectives for transforming
                correctional services.
              </p>
            </div>

            <div className="partners-grid">
              {partners.map((partner) => (
                <div className="partner-card" key={partner}>
                  <span>{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
