import {
  ArrowRight,
  CalendarDays,
  Leaf,
  Lightbulb,
  MapPin,
  Users,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import EventMotif from '../common/EventMotif';

const eventCards = [
  {
    icon: CalendarDays,
    number: '01',
    eyebrow: 'THE CONFERENCE',
    title: 'Correctional Service Week 2026',
    description:
      'A platform for stakeholders to engage around the transformation of correctional services through technology, innovation and sustainable approaches.',
    action: 'View event details',
    target: '/about',
    tone: 'green',
  },
  {
    icon: Lightbulb,
    number: '02',
    eyebrow: 'THEME',
    title: 'Technology & Green Solutions',
    description:
      'Explore the ideas, approaches and opportunities connected to the 2026 theme and the future of correctional services.',
    action: 'Explore the theme',
    target: '/about',
    tone: 'yellow',
  },
  {
    icon: Users,
    number: '03',
    eyebrow: 'PARTICIPATION',
    title: 'Stakeholder Engagement',
    description:
      'The event provides space for institutions, partners and stakeholders to connect, share perspectives and explore opportunities for collaboration.',
    action: 'Get involved',
    target: '/contact',
    tone: 'blue',
  },
];

export default function EventSection() {
  const navigate = useNavigate();

  return (
    <section className="events-section" id="events">
      {' '}
      <EventMotif variant="decorative" className="events-section__motif" />
      <div className="container events-section__heading">
        <div className="eyebrow events-section__eyebrow">
          <span aria-hidden="true" />
          THE EVENT
        </div>

        <h2>Explore Correctional Service Week 2026</h2>

        <p>
          Discover the event, its theme and the opportunities for engagement
          during Correctional Service Week 2026.
        </p>
      </div>
      <div className="container event-details-strip">
        <div className="event-detail">
          <div className="event-detail__icon">
            <CalendarDays size={20} aria-hidden="true" />
          </div>

          <div>
            <span>DATES</span>
            <strong>13 – 15 October 2026</strong>
          </div>
        </div>

        <div className="event-detail">
          <div className="event-detail__icon">
            <MapPin size={20} aria-hidden="true" />
          </div>

          <div>
            <span>VENUE</span>
            <strong>The Edge Convention Centre, Nairobi</strong>
          </div>
        </div>

        <div className="event-detail">
          <div className="event-detail__icon">
            <Leaf size={20} aria-hidden="true" />
          </div>

          <div>
            <span>THEME</span>
            <strong>
              Transforming Correctional services through Technology and Green
              Solutions.
            </strong>
          </div>
        </div>
      </div>
      <div className="container events-section__cards">
        {eventCards.map(
          ({
            icon: Icon,
            number,
            eyebrow,
            title,
            description,
            action,
            target,
            tone,
          }) => (
            <article className={`event-card event-card--${tone}`} key={number}>
              <div className="event-card__topline">
                <div className="event-card__icon" aria-hidden="true">
                  <Icon size={25} strokeWidth={1.8} />
                </div>

                <span className="event-card__number">{number}</span>
              </div>

              <p className="event-card__eyebrow">{eyebrow}</p>

              <h3>{title}</h3>

              <p className="event-card__description">{description}</p>

              <button
                className="event-card__action"
                type="button"
                onClick={() => navigate(target)}
              >
                <span>{action}</span>
                <ArrowRight size={17} aria-hidden="true" />
              </button>
            </article>
          ),
        )}
      </div>
    </section>
  );
}
