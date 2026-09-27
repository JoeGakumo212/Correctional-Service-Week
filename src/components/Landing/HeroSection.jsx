import { useEffect, useState } from 'react';
import {
  ArrowRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Eye,
  MapPin,
} from 'lucide-react';

const slides = [
  {
    image: '/images/galaDinnerAward.jpeg',
    eyebrow: 'CORRECTIONAL SERVICE WEEK 2026',
    title: 'TRANSFORMING',
    subtitle: 'CORRECTIONAL SERVICES',
    accent: '2026',
    description:
      'Innovating for safer, greener, and more humane correctional services.',
  },
  {
    image: '/images/green-solutions.jpg',
    eyebrow: 'TECHNOLOGY & GREEN SOLUTIONS',
    title: 'INNOVATION',
    subtitle: 'FOR THE FUTURE',
    accent: 'TOGETHER',
    description:
      'Exploring technology, innovation and green solutions for the transformation of correctional services.',
  },
  {
    image: '/images/crest.png.jpg',
    eyebrow: 'A SHARED PLATFORM',
    title: 'SAFER',
    subtitle: 'GREENER COMMUNITIES',
    accent: 'TOGETHER',
    description:
      'Bringing stakeholders together to engage, share ideas and support the future of correctional services.',
  },
];

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Event opening date: 13 October 2026, 9:00 AM EAT
    const eventDate = new Date('2026-10-13T09:00:00+03:00');

    const updateCountdown = () => {
      const difference = eventDate.getTime() - Date.now();

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    updateCountdown();

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const sliderTimer = setInterval(() => {
      setCurrentSlide((previous) => (previous + 1) % slides.length);
    }, 6500);

    return () => clearInterval(sliderTimer);
  }, []);

  const previousSlide = () => {
    setCurrentSlide(
      (previous) => (previous - 1 + slides.length) % slides.length,
    );
  };

  const nextSlide = () => {
    setCurrentSlide((previous) => (previous + 1) % slides.length);
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const activeSlide = slides[currentSlide];

  const countdownItems = [
    ['days', 'Days'],
    ['hours', 'Hours'],
    ['minutes', 'Minutes'],
    ['seconds', 'Seconds'],
  ];

  return (
    <section
      className="hero hero--full-height"
      id="home"
      aria-label="Correctional Service Week 2026"
    >
      {/* Background slides */}
      <div className="hero-slider" aria-hidden="true">
        {slides.map((slide, index) => (
          <div
            key={`${slide.title}-${index}`}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          />
        ))}
      </div>

      <div className="hero-overlay" />
      <div className="hero-gradient" />

      {/* Slider controls */}
      <button
        className="hero-slider-button hero-slider-prev"
        type="button"
        onClick={previousSlide}
        aria-label="Previous hero slide"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        className="hero-slider-button hero-slider-next"
        type="button"
        onClick={nextSlide}
        aria-label="Next hero slide"
      >
        <ChevronRight size={28} />
      </button>

      <div className="container hero-content">
        <div className="hero-copy" key={currentSlide}>
          <div className="eyebrow light">
            <span aria-hidden="true" />
            {activeSlide.eyebrow}
          </div>

          <h1>
            {activeSlide.title}
            <br />
            {activeSlide.subtitle} <span>{activeSlide.accent}</span>
          </h1>

          <p className="hero-subtitle">{activeSlide.description}</p>

          {/* Official event information */}
          <div className="event-meta">
            <div className="meta-item">
              <CalendarDays aria-hidden="true" />

              <div>
                <small>Dates</small>
                <strong>13 – 15 October 2026</strong>
              </div>
            </div>

            <div className="meta-item">
              <MapPin aria-hidden="true" />

              <div>
                <small>Venue</small>
                <strong>
                  The Edge Convention Centre,
                  <br />
                  Nairobi
                </strong>
              </div>
            </div>

            <div className="meta-item meta-item--theme">
              <div>
                <small>Theme</small>
                <strong>
                  Transforming Correctional services
                  <br />
                  through Technology and Green Solutions
                </strong>
              </div>
            </div>
          </div>

          <div className="hero-actions">
            <button
              className="button button-yellow"
              type="button"
              onClick={() => scrollToSection('events')}
            >
              Explore the Event
              <ArrowRight size={19} />
            </button>

            <button
              className="button button-outline"
              type="button"
              onClick={() => scrollToSection('programs')}
            >
              <Eye size={18} />
              View Programme
            </button>
          </div>
        </div>

        {/* Countdown */}
        <div className="countdown-card">
          <h3>EVENT STARTS IN</h3>

          <div className="countdown-grid">
            {countdownItems.map(([key, label]) => (
              <div className="countdown-item" key={key}>
                <strong>{String(timeLeft[key]).padStart(2, '0')}</strong>

                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="hero-slider-dots" aria-label="Hero slides">
        {slides.map((slide, index) => (
          <button
            key={slide.title}
            type="button"
            className={index === currentSlide ? 'active' : ''}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}: ${slide.title}`}
            aria-current={index === currentSlide ? 'true' : undefined}
          />
        ))}
      </div>

      <div className="hero-scroll-indicator">
        <span>SCROLL TO EXPLORE</span>
        <div />
      </div>
    </section>
  );
}
