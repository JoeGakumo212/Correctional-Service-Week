import { ArrowRight, CalendarDays, Handshake, UserPlus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import EventMotif from '../common/EventMotif';

const participationOptions = [
  {
    number: '01',
    label: 'REGISTRATION',
    icon: UserPlus,
    title: 'Register / RSVP',
    description:
      'Find the official participation information for Correctional Service Week 2026 and register when the event registration process is available.',
    action: 'Register / RSVP',
    target: '/events/register',
    tone: 'green',
  },
  {
    number: '02',
    label: 'PROGRAMME',
    icon: CalendarDays,
    title: 'Explore the programme',
    description:
      'Discover the programme, activities and key moments planned for Correctional Service Week 2026.',
    action: 'View programme',
    target: '/events/schedule',
    tone: 'yellow',
  },
  {
    number: '03',
    label: 'ENGAGEMENT',
    icon: Handshake,
    title: 'Participate',
    description:
      'Explore opportunities to engage with institutions, stakeholders, partners and communities throughout the week.',
    action: 'Explore participation',
    target: '/events/submit',
    tone: 'blue',
  },
];

export default function JoinSection() {
  const navigate = useNavigate();

  return (
    <section className="join-section" id="join">
      {/* LARGE FLAG / FLOW ELEMENTS */}

      <EventMotif
        variant="strong"
        className="join-section__motif join-section__motif--top-left"
      />

      <EventMotif
        variant="strong"
        className="join-section__motif join-section__motif--center"
      />

      <EventMotif
        variant="strong"
        className="join-section__motif join-section__motif--bottom-right"
      />

      <div className="container join-section__inner">
        {/* INTRO */}
        <div className="join-section__intro">
          <div className="eyebrow join-section__eyebrow">
            <span aria-hidden="true" />
            TAKE PART
          </div>

          <h2>Be part of the week.</h2>

          <p>
            Correctional Service Week 2026 brings together institutions,
            stakeholders, partners and communities around the transformation of
            correctional services through technology and green solutions.
          </p>
        </div>

        {/* PARTICIPATION CARDS */}
        <div className="join-section__cards">
          {participationOptions.map(
            ({
              number,
              label,
              icon: Icon,
              title,
              description,
              action,
              target,
              tone,
            }) => (
              <article className={`join-card join-card--${tone}`} key={number}>
                <div className="join-card__top">
                  <span className="join-card__number">{number}</span>

                  <div className="join-card__icon">
                    <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                  </div>
                </div>

                <p className="join-card__label">{label}</p>

                <h3>{title}</h3>

                <p className="join-card__description">{description}</p>

                <button
                  type="button"
                  className="join-card__action"
                  onClick={() => navigate(target)}
                >
                  <span>{action}</span>

                  <ArrowRight size={17} aria-hidden="true" />
                </button>
              </article>
            ),
          )}
        </div>

        {/* CONTACT CTA */}
        <div className="join-section__contact">
          <span>Need more information?</span>

          <button type="button" onClick={() => navigate('/contact')}>
            Contact the event team
            <ArrowRight size={17} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
