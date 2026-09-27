import { ArrowUpRight, Mail, MapPin, Navigation } from 'lucide-react';
import { Link } from 'react-router-dom';

import './Footer.css';

const conferenceLinks = [
  ['About CSW', '/about'],
  ['Programme', '/events/schedule'],
  ['Events', '/events'],
  ['Registration', '/events/register'],
  ['Gallery', '/gallery/photos'],
  ['News & Updates', '/news'],
  ['FAQs', '/contact/faq'],
];

const participationLinks = [
  ['Get Involved', '/events/register'],
  ['Contact', '/contact'],
  ['Downloads', '/account/login'],
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="site-footer">
      {/* CSW COLOUR LINE */}
      <div className="site-footer__flag" aria-hidden="true">
        <span className="site-footer__flag-green" />
        <span className="site-footer__flag-yellow" />
        <span className="site-footer__flag-red" />
        <span className="site-footer__flag-blue" />
      </div>

      <div className="container site-footer__content">
        {/* =====================================================
            BRAND
        ====================================================== */}
        <div className="site-footer__brand-column">
          <Link
            to="/"
            className="site-footer__brand"
            aria-label="Correctional Service Week 2026 home"
          >
            <div className="site-footer__crest-box">
              <img
                src="/images/crest.png.jpg"
                alt="State Department for Correctional Services crest"
              />
            </div>

            <div className="site-footer__brand-name">
              <strong>Correctional Service</strong>
              <strong>Week 2026</strong>
            </div>
          </Link>

          <h2>Correctional Service Week 2026</h2>

          <p className="site-footer__description">
            A platform for exploring technology, innovation and green solutions
            in the transformation of correctional services.
          </p>

          <div className="site-footer__details">
            <strong>13 – 15 October 2026</strong>

            <span>The Edge Convention Centre, Nairobi, Kenya</span>
          </div>

          {/* SOCIAL LINKS */}
          <div className="site-footer__socials">
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >
              YT
            </a>

            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              IG
            </a>

            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              f
            </a>
          </div>

          {/* ORGANISERS */}
          <div className="site-footer__organised">
            <span>ORGANISED BY</span>

            <div className="site-footer__organised-list">
              <span>Kenya Prisons Service</span>

              <span>Probation &amp; Aftercare Service</span>
            </div>
          </div>
        </div>

        {/* =====================================================
            CONFERENCE
        ====================================================== */}
        <nav className="site-footer__column" aria-label="Conference">
          <h3>CONFERENCE</h3>

          {conferenceLinks.map(([label, href]) => (
            <Link to={href} key={label}>
              {label}
            </Link>
          ))}
        </nav>

        {/* =====================================================
            PARTICIPATION
        ====================================================== */}
        <nav className="site-footer__column" aria-label="Participation">
          <h3>PARTICIPATION</h3>

          {participationLinks.map(([label, href]) => (
            <Link to={href} key={label}>
              {label}
            </Link>
          ))}

          {/* THEME */}
          <div className="site-footer__theme">
            <span>THEME</span>

            <p>
              Transforming Correctional services through Technology and Green
              Solutions.
            </p>
          </div>
        </nav>

        {/* =====================================================
            SECRETARIAT CONTACT
        ====================================================== */}
        <div className="site-footer__column site-footer__contact">
          <h3>SECRETARIAT CONTACT</h3>

          {/* EMAIL */}
          <a
            href="mailto:csw@correctional.go.ke"
            className="site-footer__contact-link"
          >
            <Mail size={15} aria-hidden="true" />

            <span>csw@correctional.go.ke</span>
          </a>

          {/* LOCATION */}
          <div className="site-footer__contact-link">
            <MapPin size={15} aria-hidden="true" />

            <span>
              The Edge Convention Centre,
              <br />
              Nairobi, Kenya
            </span>
          </div>

          {/* =================================================
              MAP PREVIEW
          ================================================== */}
          <Link
            to="/contact/venue"
            className="site-footer__map-card"
            aria-label="View venue and directions"
          >
            <div className="site-footer__map-preview">
              <iframe
                title="The Edge Convention Centre location"
                src="https://www.google.com/maps?q=The%20Edge%20Convention%20Centre%2C%20Nairobi&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                tabIndex="-1"
              />

              <div className="site-footer__map-overlay">
                <span>
                  <Navigation size={14} aria-hidden="true" />
                  View Venue
                </span>
              </div>
            </div>

            <div className="site-footer__map-caption">
              <div>
                <strong>Venue &amp; Directions</strong>

                <span>The Edge Convention Centre</span>
              </div>

              <ArrowUpRight size={17} aria-hidden="true" />
            </div>
          </Link>

          {/* OFFICIAL WEBSITE */}
          <a
            href="https://www.correctional.go.ke"
            target="_blank"
            rel="noreferrer"
            className="site-footer__website"
          >
            <strong>Correctional Services website</strong>

            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* =====================================================
          BOTTOM BAR
      ====================================================== */}
      <div className="site-footer__bottom">
        <div className="container site-footer__bottom-inner">
          <p>
            © 2026 State Department for Correctional Services. All rights
            reserved.
          </p>

          <div className="site-footer__legal">
            <Link to="/privacy">Privacy Notice</Link>

            <span>•</span>

            <Link to="/terms">Terms</Link>

            <span>•</span>

            <button type="button" onClick={scrollToTop}>
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
