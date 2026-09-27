import {
  ArrowLeft,
  ArrowRight,
  Car,
  MapPin,
  Navigation,
  Plane,
  Train,
} from 'lucide-react';
import { Link } from 'react-router-dom';

import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

import './ContactPage.css';

export default function VenuePage() {
  return (
    <div className="venue-page">
      <Navbar />

      <header className="venue-hero">
        <div className="venue-container">
          <span className="venue-eyebrow">Correctional Service Week 2026</span>

          <h1>
            Venue & <span>Directions</span>
          </h1>

          <p>
            Plan your journey to the official event venue and find useful
            information for getting around Nairobi.
          </p>
        </div>
      </header>

      <main>
        <section className="venue-main">
          <div className="venue-container">
            <Link to="/contact" className="venue-back-link">
              <ArrowLeft size={17} />
              Back to Contact
            </Link>

            <div className="venue-layout">
              <div className="venue-details">
                <span className="venue-kicker">Event Venue</span>

                <h2>
                  Kenyatta International
                  <br />
                  Convention Centre
                </h2>

                <p className="venue-address">
                  Harambee Avenue
                  <br />
                  Nairobi, Kenya
                </p>

                <p>
                  The Kenyatta International Convention Centre (KICC) is located
                  in the heart of Nairobi's central business district and
                  provides a central location for conferences, exhibitions,
                  meetings and other major events.
                </p>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Kenyatta+International+Convention+Centre+Nairobi"
                  target="_blank"
                  rel="noreferrer"
                  className="venue-map-button"
                >
                  Open in Google Maps
                  <Navigation size={17} />
                </a>
              </div>

              <div className="venue-map">
                <iframe
                  title="Kenyatta International Convention Centre location"
                  src="https://www.google.com/maps?q=Kenyatta%20International%20Convention%20Centre%2C%20Nairobi&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="venue-directions">
          <div className="venue-container">
            <div className="venue-section-heading">
              <span className="venue-kicker">Getting Here</span>
              <h2>Directions to the venue</h2>
            </div>

            <div className="venue-direction-grid">
              <article className="venue-direction-card">
                <div className="venue-direction-icon">
                  <Car size={23} />
                </div>

                <h3>By Road</h3>

                <p>
                  KICC is centrally located within Nairobi's CBD and can be
                  accessed through the city's major roads. Visitors using
                  private vehicles or taxis should use Harambee Avenue as the
                  main approach to the venue.
                </p>
              </article>

              <article className="venue-direction-card">
                <div className="venue-direction-icon">
                  <Train size={23} />
                </div>

                <h3>Public Transport</h3>

                <p>
                  Visitors using public transport can access Nairobi CBD and
                  continue to the venue on foot or by local taxi services. Allow
                  additional travel time during peak hours.
                </p>
              </article>

              <article className="venue-direction-card">
                <div className="venue-direction-icon">
                  <Plane size={23} />
                </div>

                <h3>From JKIA</h3>

                <p>
                  International and domestic visitors arriving through Jomo
                  Kenyatta International Airport can travel towards Nairobi CBD
                  using road or rail connections and continue to KICC.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="venue-notice">
          <div className="venue-container">
            <div className="venue-notice-box">
              <span className="venue-kicker">Travel Information</span>

              <h2>Allow sufficient time for your journey.</h2>

              <p>
                Nairobi traffic conditions can vary considerably, particularly
                during morning and evening peak periods. Delegates are
                encouraged to plan their journeys in advance and arrive at the
                venue with sufficient time for registration and access
                procedures.
              </p>

              <Link to="/contact/hotels" className="venue-notice-link">
                Explore Nearby Hotels
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
