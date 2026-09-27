import {
  CalendarDays,
  Clock3,
  Leaf,
  Lightbulb,
  MapPin,
  Users,
} from 'lucide-react';
import { Link } from 'react-router-dom';

import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import EventMotif from '../../components/common/EventMotif';

import './Events.css';

const programmeDays = [
  {
    day: 'DAY 01',
    date: '13 OCTOBER 2026',
    title: 'Programme information',
  },
  {
    day: 'DAY 02',
    date: '14 OCTOBER 2026',
    title: 'Programme information',
  },
  {
    day: 'DAY 03',
    date: '15 OCTOBER 2026',
    title: 'Programme information',
  },
];

const programmeThemes = [
  {
    icon: Lightbulb,
    title: 'Technology & Innovation',
    description:
      'Technology and innovative approaches supporting the transformation of correctional services.',
    tone: 'green',
  },
  {
    icon: Leaf,
    title: 'Green Solutions',
    description:
      'Sustainable and environmentally responsible approaches within correctional services.',
    tone: 'yellow',
  },
  {
    icon: Users,
    title: 'Stakeholder Engagement',
    description:
      'Engagement, collaboration and exchange among institutions, partners and stakeholders.',
    tone: 'blue',
  },
];

export default function ProgrammePage() {
  return (
    <div className="app events-page">
      <Navbar />

      <main>
        {/* HERO */}

        {/* THEME */}
        <section className="events-theme">
          <div className="container events-theme__inner">
            <span>THEME</span>
            <p>
              Transforming Correctional services through Technology and Green
              Solutions.
            </p>
          </div>
        </section>

        <section className="events-content">
          <div className="container">
            {' '}
            <EventMotif variant="strong" />
            {/* EVENT DETAILS */}
            <div className="programme-details">
              <div className="programme-details__intro">
                <p className="events-label">CONFERENCE PROGRAMME</p>

                <h2>13 – 15 October 2026</h2>

                <p>
                  Correctional Service Week 2026 will take place at The Edge
                  Convention Centre in Nairobi. Detailed programme information
                  will be provided through the official event programme and
                  communication channels.
                </p>
              </div>

              <div className="programme-details__facts">
                <div>
                  <CalendarDays size={20} aria-hidden="true" />

                  <span>
                    <small>DATES</small>
                    <strong>13 – 15 October 2026</strong>
                  </span>
                </div>

                <div>
                  <MapPin size={20} aria-hidden="true" />

                  <span>
                    <small>VENUE</small>
                    <strong>
                      The Edge Convention Centre,
                      <br />
                      Nairobi, Kenya
                    </strong>
                  </span>
                </div>
              </div>
            </div>
            {/* PROGRAMME STATUS */}
            <div className="programme-status">
              <div className="programme-status__icon">
                <Clock3 size={25} aria-hidden="true" />
              </div>

              <div>
                <p className="events-label">PROGRAMME UPDATE</p>

                <h3>Detailed schedule coming soon</h3>

                <p>
                  The detailed conference programme, session times and programme
                  activities will be published through the official event
                  communication channels once confirmed.
                </p>
              </div>
            </div>
            {/* DAYS */}
            <div className="programme-days">
              <div className="events-section-heading">
                <p className="events-label">EVENT DATES</p>

                <h2>Three days of engagement</h2>

                <p>
                  The conference runs from 13 to 15 October 2026. The detailed
                  activities for each day will be added once the official
                  programme is available.
                </p>
              </div>

              <div className="programme-days__grid">
                {programmeDays.map((item) => (
                  <article className="programme-day" key={item.day}>
                    <span className="programme-day__number">{item.day}</span>

                    <h3>{item.date}</h3>

                    <div className="programme-day__line" />

                    <p>{item.title}</p>

                    <span className="programme-day__status">
                      To be announced
                    </span>
                  </article>
                ))}
              </div>
            </div>
            {/* THEMATIC AREAS */}
            <div className="programme-themes">
              <div className="events-section-heading">
                <p className="events-label">THEMATIC AREAS</p>

                <h2>Areas connected to the 2026 theme</h2>

                <p>
                  The programme will explore the event's central focus on
                  technology and green solutions through engagement, innovation
                  and practical approaches.
                </p>
              </div>

              <div className="programme-themes__grid">
                {programmeThemes.map(
                  ({ icon: Icon, title, description, tone }) => (
                    <article
                      className={`programme-theme programme-theme--${tone}`}
                      key={title}
                    >
                      <div className="programme-theme__icon">
                        <Icon size={23} strokeWidth={1.8} aria-hidden="true" />
                      </div>

                      <h3>{title}</h3>

                      <p>{description}</p>
                    </article>
                  ),
                )}
              </div>
            </div>
            {/* VENUE */}
            <div className="programme-venue">
              <div>
                <p className="events-label">VENUE</p>

                <h2>The Edge Convention Centre</h2>

                <p>Nairobi, Kenya</p>
              </div>

              <MapPin size={34} strokeWidth={1.5} aria-hidden="true" />
            </div>
            {/* ACTIONS */}
            <div className="events-next">
              <div>
                <p className="events-label">TAKE PART</p>

                <h2>Join Correctional Service Week 2026</h2>

                <p>
                  Registration and participation information will be provided
                  through the official event channels.
                </p>
              </div>

              <div className="events-next__links">
                <Link to="/events/register">
                  Register / RSVP
                  <span>→</span>
                </Link>

                <Link to="/contact">
                  Contact the event team
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
