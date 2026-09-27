import {
  CalendarDays,
  CheckCircle2,
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

const eventFocus = [
  {
    icon: Lightbulb,
    number: '01',
    title: 'Technology & Innovation',
    description:
      'Exploring technology, innovation and practical approaches that can contribute to the transformation of correctional services.',
    tone: 'green',
  },
  {
    icon: Leaf,
    number: '02',
    title: 'Green Solutions',
    description:
      'Highlighting sustainable and environmentally responsible approaches connected to the future of correctional services.',
    tone: 'yellow',
  },
  {
    icon: Users,
    number: '03',
    title: 'Stakeholder Engagement',
    description:
      'Creating space for stakeholders to exchange ideas, experiences and opportunities around correctional services.',
    tone: 'blue',
  },
];

export default function EventsPage() {
  return (
    <div className="app events-page">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="events-hero">
          <div className="container">
            <div className="events-hero__layout">
              <EventMotif variant="strong" />

              <div className="events-hero__content">
                <p className="events-eyebrow">Correctional Service Week 2026</p>

                <h1>
                  The <span>Event</span>
                </h1>

                <p className="events-hero__intro">
                  A platform for exploring technology, innovation and green
                  solutions in the transformation of correctional services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* EVENT SNAPSHOT */}
        <section className="events-content">
          <div className="container">
            <div className="events-snapshot">
              <div className="events-snapshot__intro">
                <p className="events-label">EVENT OVERVIEW</p>

                <h2>Correctional Service Week 2026</h2>

                <p>
                  Correctional Service Week 2026 provides a platform for
                  highlighting transformation within correctional services, with
                  particular attention to technology, green solutions and
                  innovation.
                </p>

                <p>
                  The event brings attention to approaches that can contribute
                  to safer, greener and more humane correctional services.
                </p>
              </div>

              <div className="events-facts">
                <div className="events-fact">
                  <div className="events-fact__icon">
                    <CalendarDays size={21} />
                  </div>

                  <div>
                    <span>DATES</span>
                    <strong>13 – 15 October 2026</strong>
                  </div>
                </div>

                <div className="events-fact">
                  <div className="events-fact__icon">
                    <MapPin size={21} />
                  </div>

                  <div>
                    <span>VENUE</span>
                    <strong>
                      The Edge Convention Centre,
                      <br />
                      Nairobi, Kenya
                    </strong>
                  </div>
                </div>

                <div className="events-fact">
                  <div className="events-fact__icon">
                    <CheckCircle2 size={21} />
                  </div>

                  <div>
                    <span>EVENT</span>
                    <strong>Correctional Service Week 2026</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* FOCUS */}
            <div className="events-focus">
              <div className="events-section-heading">
                <p className="events-label">EVENT FOCUS</p>

                <h2>Technology, green solutions and transformation</h2>

                <p>
                  The event theme provides a foundation for exploring ideas and
                  approaches relevant to the future of correctional services.
                </p>
              </div>

              <div className="events-focus__grid">
                {eventFocus.map(
                  ({ icon: Icon, number, title, description, tone }) => (
                    <article
                      className={`events-focus-card events-focus-card--${tone}`}
                      key={number}
                    >
                      <div className="events-focus-card__top">
                        <div className="events-focus-card__icon">
                          <Icon size={23} strokeWidth={1.8} />
                        </div>

                        <span>{number}</span>
                      </div>

                      <h3>{title}</h3>

                      <p>{description}</p>
                    </article>
                  ),
                )}
              </div>
            </div>

            {/* NAVIGATION */}
            <div className="events-next">
              <div>
                <p className="events-label">CONTINUE</p>

                <h2>Explore the event</h2>

                <p>
                  Programme and participation information will be made available
                  through the official event communication channels.
                </p>
              </div>

              <div className="events-next__links">
                <Link to="/events/schedule">
                  Programme Schedule
                  <span>→</span>
                </Link>

                <Link to="/events/register">
                  Register / RSVP
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
