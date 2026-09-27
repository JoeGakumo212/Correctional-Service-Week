import {
  ArrowRight,
  CalendarDays,
  Leaf,
  Lightbulb,
  MapPin,
  ShieldCheck,
  Users,
} from 'lucide-react';
import EventMotif from '../common/EventMotif';

const eventHighlights = [
  {
    icon: Lightbulb,
    title: 'Technology & Innovation',
    description:
      'Exploring innovative and technology-driven approaches that can support the transformation of correctional services.',
  },
  {
    icon: Leaf,
    title: 'Green Solutions',
    description:
      'Highlighting sustainable and environmentally responsible approaches for the future of correctional services.',
  },
  {
    icon: ShieldCheck,
    title: 'Safer & More Humane Services',
    description:
      'Supporting a vision of correctional services that contributes to safer, greener and more humane outcomes.',
  },
];

export default function AboutSection() {
  const scrollToEvents = () => {
    document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="about-section"
      id="about"
      aria-labelledby="about-heading"
    >
      {' '}
      <EventMotif variant="decorative" className="about-section__motif" />
      <div className="container about-grid">
        {/* Main introduction */}
        <div className="about-copy">
          <div className="eyebrow">
            <span aria-hidden="true" />
            ABOUT THE EVENT
          </div>

          <h2 id="about-heading">
            A platform for transforming correctional services
          </h2>

          <p>
            Correctional Service Week 2026 is centred on the theme “Transforming
            Correctional services through Technology and Green Solutions.”
          </p>

          <p>
            The event provides a platform to explore how technology, innovation
            and green solutions can contribute to the transformation of
            correctional services.
          </p>

          <p>
            It brings attention to the opportunity to develop correctional
            services that are safer, greener and more humane, while creating
            space for stakeholders to engage around ideas and approaches for the
            future.
          </p>

          <button
            className="button button-green"
            type="button"
            onClick={scrollToEvents}
          >
            Explore the Event
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Event image */}
        <div className="about-image">
          <img
            src="/images/correctional-week.jpeg"
            alt="Correctional Services building"
          />

          <div className="about-image-caption">
            <span>CSW 2026</span>
            <strong>Transforming Correctional Services</strong>
          </div>
        </div>

        {/* Event information */}
        <aside className="about-event-card">
          <div className="about-event-card-heading">
            <span>CSW 2026</span>
            <h3>Event at a glance</h3>
          </div>

          <div className="about-event-detail">
            <div className="about-event-detail-icon">
              <CalendarDays size={19} />
            </div>

            <div>
              <small>DATES</small>
              <strong>13 – 15 October 2026</strong>
            </div>
          </div>

          <div className="about-event-detail">
            <div className="about-event-detail-icon">
              <MapPin size={19} />
            </div>

            <div>
              <small>VENUE</small>
              <strong>
                The Edge Convention Centre,
                <br />
                Nairobi
              </strong>
            </div>
          </div>

          <div className="about-event-detail">
            <div className="about-event-detail-icon">
              <Users size={19} />
            </div>

            <div>
              <small>THEME</small>
              <strong>
                Transforming Correctional services through Technology and Green
                Solutions
              </strong>
            </div>
          </div>
        </aside>

        {/* Event highlights */}
        <div className="highlights">
          <div className="eyebrow">
            <span aria-hidden="true" />
            EVENT HIGHLIGHTS
          </div>

          <div className="highlights-list">
            {eventHighlights.map(({ icon: Icon, title, description }) => (
              <article className="highlight-item" key={title}>
                <div className="highlight-icon" aria-hidden="true">
                  <Icon size={21} strokeWidth={1.8} />
                </div>

                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
