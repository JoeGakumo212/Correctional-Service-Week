import { useEffect, useRef, useState } from 'react';
import './events-moments.css';

import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
const moments = [
  {
    category: 'rehabilitation',
    tag: 'Rehabilitation',
    title: 'Rehabilitation Graduation',
    description:
      'Celebrating determination and the completion of a meaningful stage in a rehabilitation journey.',
    modalDescription: 'Recognising progress, achievement and new beginnings.',
    label: 'Progress',
    image: '/images/image1.jpeg',
    alt: 'A participant receiving a certificate at a rehabilitation graduation ceremony',
  },
  {
    category: 'community',
    tag: 'Community',
    title: 'Community Celebration',
    description:
      'Creating space for connection, recognition and participation beyond the institution.',
    modalDescription:
      'Shared moments that connect programmes with the wider community.',
    label: 'Belonging',
    image: '/images/image2.jpeg',
    alt: 'Participants and guests celebrating together during a community programme',
  },
  {
    category: 'learning',
    tag: 'Learning',
    title: 'Learning Together',
    description:
      'Building skills through focused discussion, practical sessions and shared experience.',
    modalDescription:
      'Practical learning and dialogue in a shared working environment.',
    label: 'Skills',
    image: '/images/image3.jpeg',
    alt: 'A group taking part in a facilitated learning session',
  },
  {
    category: 'talent',
    tag: 'Talent',
    title: 'Talent Showcase',
    description:
      'Making room for creativity, confidence and the talents that bring people together.',
    modalDescription:
      'Creative expression as part of a holistic rehabilitation experience.',
    label: 'Expression',
    image: '/images/image4.jpeg',
    alt: 'A performer presenting on stage during a talent showcase',
  },
];

const filters = [
  { value: 'all', label: 'All moments' },
  { value: 'rehabilitation', label: 'Rehabilitation' },
  { value: 'community', label: 'Community' },
  { value: 'learning', label: 'Learning' },
  { value: 'talent', label: 'Talent' },
];

export default function EventsMoments() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedMoment, setSelectedMoment] = useState(null);
  const lastFocusedElement = useRef(null);

  const visibleMoments = moments.filter(
    (moment) => activeFilter === 'all' || moment.category === activeFilter,
  );

  useEffect(() => {
    if (!selectedMoment) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedMoment(null);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedMoment]);

  useEffect(() => {
    if (!selectedMoment && lastFocusedElement.current) {
      lastFocusedElement.current.focus();
      lastFocusedElement.current = null;
    }
  }, [selectedMoment]);

  const openMoment = (moment, event) => {
    lastFocusedElement.current = event.currentTarget;
    setSelectedMoment(moment);
  };

  return (
    <>
      <Navbar />
      <main className="events-page">
        <section className="events-content" aria-labelledby="moments-title">
          <div className="events-container">
            <div className="events-toolbar">
              <div>
                <h2 id="moments-title" className="events-section-title">
                  Captured moments
                </h2>
                <p className="events-section-intro">
                  Explore stories from graduation ceremonies, community
                  engagement, learning sessions and talent showcases.
                </p>
              </div>

              <div className="events-filters" aria-label="Filter event moments">
                {filters.map((filter) => (
                  <button
                    className="events-filter"
                    key={filter.value}
                    type="button"
                    aria-pressed={activeFilter === filter.value}
                    onClick={() => setActiveFilter(filter.value)}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>

            {visibleMoments.length > 0 ? (
              <div className="events-moments-grid">
                {visibleMoments.map((moment) => (
                  <article className="events-moment" key={moment.title}>
                    <button
                      className="events-moment-image"
                      type="button"
                      onClick={(event) => openMoment(moment, event)}
                      aria-label={`View ${moment.title}`}
                    >
                      <span className="events-moment-tag">{moment.tag}</span>
                      <img src={moment.image} alt={moment.alt} loading="lazy" />
                      <span className="events-image-overlay" aria-hidden="true">
                        View moment
                      </span>
                    </button>

                    <div className="events-moment-body">
                      <h3>{moment.title}</h3>
                      <p>{moment.description}</p>
                      <div className="events-moment-meta">
                        <strong>{moment.label}</strong>
                        <span>Event moment</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <p className="events-empty-state">
                No moments match this category yet.
              </p>
            )}
          </div>
        </section>

        {selectedMoment && (
          <div
            className="events-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="events-modal-title"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setSelectedMoment(null);
            }}
          >
            <div className="events-modal-panel">
              <button
                className="events-modal-close"
                type="button"
                aria-label="Close image viewer"
                onClick={() => setSelectedMoment(null)}
              >
                ×
              </button>
              <img
                className="events-modal-image"
                src={selectedMoment.image}
                alt={selectedMoment.alt}
              />
              <div className="events-modal-caption">
                <h2 id="events-modal-title">{selectedMoment.title}</h2>
                <p>{selectedMoment.modalDescription}</p>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
