import { Mail, MapPin, Phone, Clock3, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

import './ContactPage.css';

export default function ContactPage() {
  return (
    <div className="contact-page">
      <Navbar />

      <header className="contact-hero">
        <div className="contact-container">
          <span className="contact-eyebrow">
            Correctional Service Week 2026
          </span>

          <h1>
            Contact the <span>Secretariat</span>
          </h1>

          <p>
            Get in touch with the Correctional Service Week 2026 Secretariat for
            information about the programme, participation, registration, media
            engagement and other event-related enquiries.
          </p>
        </div>
      </header>

      <main>
        <section className="contact-intro">
          <div className="contact-container">
            <div className="contact-intro-grid">
              <div>
                <span className="contact-kicker">Get In Touch</span>
                <h2>
                  We are here to help you
                  <br />
                  plan your participation.
                </h2>
              </div>

              <p>
                Whether you are a delegate, partner, member of the media,
                invited guest or member of the public, the Secretariat can
                provide guidance on Correctional Service Week activities,
                registration, venue arrangements and programme information.
              </p>
            </div>
          </div>
        </section>

        <section className="contact-information">
          <div className="contact-container">
            <div className="contact-section-heading">
              <span className="contact-kicker">Secretariat</span>
              <h2>Contact information</h2>
            </div>

            <div className="contact-card-grid">
              <article className="contact-card">
                <div className="contact-card-icon">
                  <MapPin size={23} />
                </div>

                <span>Secretariat Office</span>
                <h3>State Department for Correctional Services</h3>
                <p>Nairobi, Kenya</p>
              </article>

              <article className="contact-card">
                <div className="contact-card-icon">
                  <Mail size={23} />
                </div>

                <span>Email</span>
                <h3>General Enquiries</h3>
                <a href="mailto:info@example.go.ke">info@example.go.ke</a>
              </article>

              <article className="contact-card">
                <div className="contact-card-icon">
                  <Phone size={23} />
                </div>

                <span>Telephone</span>
                <h3>Secretariat Desk</h3>
                <a href="tel:+254000000000">+254 000 000 000</a>
              </article>

              <article className="contact-card">
                <div className="contact-card-icon">
                  <Clock3 size={23} />
                </div>

                <span>Office Hours</span>
                <h3>Monday – Friday</h3>
                <p>8:00 AM – 5:00 PM</p>
              </article>
            </div>
          </div>
        </section>

        <section className="contact-guidance">
          <div className="contact-container">
            <div className="contact-guidance-box">
              <div>
                <span className="contact-kicker">Plan Your Visit</span>

                <h2>
                  Find the venue, accommodation and frequently asked questions.
                </h2>
              </div>

              <div className="contact-guidance-links">
                <Link to="/contact/venue">
                  Venue & Directions
                  <ArrowRight size={17} />
                </Link>

                <Link to="/contact/hotels">
                  Hotels & Accommodation
                  <ArrowRight size={17} />
                </Link>

                <Link to="/contact/faq">
                  Frequently Asked Questions
                  <ArrowRight size={17} />
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
