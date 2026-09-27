import { ArrowRight, CalendarDays, Leaf, Lightbulb, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import EventMotif from '../common/EventMotif';

const programmeAreas = [
  {
    number: '01',
    icon: Lightbulb,
    title: 'Technology & Innovation',
    description:
      'Explore technology, innovation and practical approaches that can contribute to the transformation of correctional services.',
    tone: 'green',
  },
  {
    number: '02',
    icon: Leaf,
    title: 'Green Solutions',
    description:
      'Consider sustainable and environmentally responsible approaches that can support the future of correctional services.',
    tone: 'yellow',
  },
  {
    number: '03',
    icon: Users,
    title: 'Stakeholder Engagement',
    description:
      'Create space for stakeholders to exchange ideas, experiences and opportunities connected to the transformation of correctional services.',
    tone: 'blue',
  },
];

export default function ProgramsSection() {
  const navigate = useNavigate();

  return (
    <section className="programs-section" id="programs">
      <div className="programmes-flag-line" aria-hidden="true">
        <div className="programmes-flag-line__track">
          <span className="programmes-flag-line__green" />
          <span className="programmes-flag-line__yellow" />
          <span className="programmes-flag-line__red" />
          <span className="programmes-flag-line__blue" />

          <span className="programmes-flag-line__green" />
          <span className="programmes-flag-line__yellow" />
          <span className="programmes-flag-line__red" />
          <span className="programmes-flag-line__blue" />
        </div>
      </div>
      <EventMotif
        variant="decorative"
        className="programs-section__motif--right"
      />
      <EventMotif
        variant="strong"
        className="contact-section__motif contact-section__motif--left"
      />
      <div className="container section-heading">
        <div className="eyebrow">
          <span aria-hidden="true" />
          PROGRAMME
        </div>

        <h2>A week focused on transformation</h2>

        <p>
          Correctional Service Week 2026 provides a platform for exploring
          technology, innovation and green solutions within correctional
          services.
        </p>
      </div>

      <div className="container programme-date-banner">
        <div className="programme-date-banner__icon">
          <CalendarDays size={23} strokeWidth={1.8} aria-hidden="true" />
        </div>

        <div>
          <span>CONFERENCE DATES</span>
          <strong>13 – 15 October 2026</strong>
        </div>

        <button
          type="button"
          className="programme-date-banner__action"
          onClick={() => navigate('/events/schedule')}
        >
          <span>View full schedule</span>
          <ArrowRight size={17} aria-hidden="true" />
        </button>
      </div>

      <div className="container programme-grid">
        {programmeAreas.map(
          ({ number, icon: Icon, title, description, tone }) => (
            <article
              className={`programme-card programme-card--${tone}`}
              key={number}
            >
              <div className="programme-card__top">
                <div className="programme-card__icon">
                  <Icon size={24} strokeWidth={1.8} aria-hidden="true" />
                </div>

                <span>{number}</span>
              </div>

              <h3>{title}</h3>

              <p>{description}</p>

              <button
                type="button"
                className="programme-card__link"
                onClick={() => navigate('/events/schedule')}
              >
                <span>Explore programme</span>

                <ArrowRight size={16} aria-hidden="true" />
              </button>
            </article>
          ),
        )}
      </div>

      <div className="container programme-note">
        <p>
          Detailed programme information will be provided through the official
          event programme and communication channels.
        </p>
      </div>
    </section>
  );
}
