import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Newspaper,
  Sparkles,
} from 'lucide-react';
import { Link } from 'react-router-dom';

import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import './LatestUpdates.css';

const updates = [
  {
    date: '24 September 2026',
    title: 'Correctional Service Week 2026 preparations take shape',
    text: 'Preparations for Correctional Service Week 2026 continue with activities focused on service, rehabilitation, innovation and stronger engagement with communities and partners.',
    tag: 'Event Update',
  },
  {
    date: '20 September 2026',
    title: 'Institutions prepare programmes for Correctional Service Week',
    text: 'Correctional institutions are preparing activities that showcase rehabilitation programmes, skills development, staff contributions and community engagement.',
    tag: 'Programme Update',
  },
  {
    date: '16 September 2026',
    title: 'Rehabilitation remains central to service transformation',
    text: 'The week provides an opportunity to highlight practical rehabilitation initiatives that support personal development, skills acquisition and successful reintegration.',
    tag: 'Rehabilitation',
  },
  {
    date: '12 September 2026',
    title: 'Digital innovation continues to support public service delivery',
    text: 'Technology and information systems remain an important part of improving coordination, information management and service delivery across correctional institutions.',
    tag: 'Innovation',
  },
  {
    date: '08 September 2026',
    title: 'Partners continue to support rehabilitation and reintegration',
    text: 'Engagement with public institutions, private organisations and community partners continues to strengthen opportunities for learning, skills development and reintegration.',
    tag: 'Partnerships',
  },
  {
    date: '04 September 2026',
    title: 'Community engagement activities receive renewed attention',
    text: 'Community participation remains an important element of creating awareness, strengthening relationships and supporting safer communities.',
    tag: 'Community',
  },
];

const highlights = [
  {
    icon: CheckCircle2,
    title: 'Service & Transformation',
    text: 'Highlighting the evolving role of correctional services and the people supporting change.',
  },
  {
    icon: Sparkles,
    title: 'Rehabilitation',
    text: 'Showcasing programmes that support skills, responsibility and successful reintegration.',
  },
  {
    icon: Newspaper,
    title: 'Public Information',
    text: 'Sharing timely information about activities, programmes and institutional developments.',
  },
];

export default function LatestUpdates() {
  return (
    <div className="latest-updates-page">
      <Navbar />

      {/* HERO */}
      <header className="latest-updates-hero">
        <div className="latest-updates-container">
          <span className="latest-updates-eyebrow">
            State Department for Correctional Services
          </span>

          <h1>
            Latest <span>Updates</span>
          </h1>

          <p>
            Follow the latest developments, activities and stories from
            Correctional Service Week 2026.
          </p>
        </div>
      </header>

      {/* INTRO */}
      <section className="latest-updates-intro">
        <div className="latest-updates-container">
          <div className="latest-updates-intro-grid">
            <div>
              <span className="latest-updates-kicker">Newsroom</span>
              <h2>What is happening across the service</h2>
            </div>

            <p>
              This section brings together current updates on Correctional
              Service Week activities, institutional programmes, partnerships,
              rehabilitation initiatives and transformation across the
              correctional service.
            </p>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="latest-updates-highlights">
        <div className="latest-updates-container">
          <div className="latest-updates-section-heading">
            <span className="latest-updates-kicker">In Focus</span>
            <h2>Key areas of the week</h2>
          </div>

          <div className="latest-updates-highlight-grid">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  className="latest-updates-highlight-card"
                  key={item.title}
                >
                  <div className="latest-updates-highlight-icon">
                    <Icon size={23} />
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* UPDATES */}
      <section className="latest-updates-list">
        <div className="latest-updates-container">
          <div className="latest-updates-section-heading">
            <span className="latest-updates-kicker">Recent Stories</span>
            <h2>Latest from Correctional Service Week</h2>
          </div>

          <div className="latest-updates-grid">
            {updates.map((update) => (
              <article className="latest-update-card" key={update.title}>
                <div className="latest-update-card-top">
                  <span>{update.tag}</span>

                  <CalendarDays size={16} />
                </div>

                <p className="latest-update-date">{update.date}</p>

                <h3>{update.title}</h3>

                <p className="latest-update-excerpt">{update.text}</p>

                <Link to="/news" className="latest-update-link">
                  Explore News
                  <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* UPCOMING */}
      <section className="latest-updates-upcoming">
        <div className="latest-updates-container">
          <div className="latest-updates-upcoming-box">
            <div className="latest-updates-upcoming-icon">
              <Clock3 size={25} />
            </div>

            <div>
              <span className="latest-updates-kicker">Coming Up</span>

              <h2>Correctional Service Week 2026</h2>

              <p>
                Stay connected for programme announcements, event activities,
                stories and media coverage as the week approaches.
              </p>
            </div>

            <Link to="/events" className="latest-updates-button">
              View Events
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="latest-updates-cta">
        <div className="latest-updates-container">
          <span className="latest-updates-kicker">Stay Informed</span>

          <h2>
            Follow the journey of service,
            <br />
            transformation and rehabilitation.
          </h2>

          <Link to="/news/media-resources" className="latest-updates-button">
            Visit Media Resources
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
