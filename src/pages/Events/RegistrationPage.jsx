import { ArrowRight, LockKeyhole, UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';

import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import EventMotif from '../../components/common/EventMotif';

import './Events.css';

export default function RegistrationPage() {
  return (
    <div className="app events-page registration-page">
      <Navbar />

      <main>
        {/* Hero */}

        {/* Theme strip */}
        <section className="theme-strip">
          <div className="container theme-strip-inner">
            <span className="theme-label">THEME</span>

            <span className="theme-text">
              Transforming Correctional services through Technology and Green
              Solutions.
            </span>
          </div>
        </section>

        {/* Registration gateway */}
        <section className="registration-gateway">
          <div className="container">
            <div className="registration-gateway__heading">
              <p className="events-label">ACCOUNT REQUIRED</p>

              <h2>How would you like to continue?</h2>

              <p>
                To register for Correctional Service Week 2026, you need a
                Correctional Service Week account.
              </p>
            </div>

            <div className="registration-options">
              {/* Existing account */}
              <article className="registration-option registration-option--green">
                <div className="registration-option__icon">
                  <LockKeyhole size={28} aria-hidden="true" />
                </div>

                <div className="registration-option__number">01</div>

                <p className="registration-option__label">EXISTING ACCOUNT</p>

                <h3>Already have an account?</h3>

                <p>
                  Sign in to your account and continue with your Correctional
                  Service Week 2026 registration.
                </p>

                <Link to="/account/login" className="registration-option__link">
                  Sign in
                  <ArrowRight size={17} aria-hidden="true" />
                </Link>
              </article>

              {/* New account */}
              <article className="registration-option registration-option--blue">
                <div className="registration-option__icon">
                  <UserPlus size={28} aria-hidden="true" />
                </div>

                <div className="registration-option__number">02</div>

                <p className="registration-option__label">NEW PARTICIPANT</p>

                <h3>Don't have an account?</h3>

                <p>
                  Create your account first. You will then be able to continue
                  with your event registration.
                </p>

                <Link
                  to="/account/create"
                  className="registration-option__link"
                >
                  Create an account
                  <ArrowRight size={17} aria-hidden="true" />
                </Link>
              </article>
            </div>

            <div className="registration-gateway__note">
              <strong>Registration process</strong>

              <p>
                After authentication is connected to the event system, your
                account will be used to manage your event registration.
              </p>
            </div>
          </div>
        </section>

        {/* Event information */}
        <section className="registration-info">
          <div className="container">
            <div className="registration-info__grid">
              <div>
                <p className="events-label">EVENT DETAILS</p>

                <h2>Correctional Service Week 2026</h2>

                <p>
                  Correctional Service Week 2026 will provide a platform for
                  engagement around technology, innovation and green solutions
                  in correctional services.
                </p>
              </div>

              <div className="registration-info__details">
                <div>
                  <span>Date</span>
                  <strong>13 – 15 October 2026</strong>
                </div>

                <div>
                  <span>Venue</span>
                  <strong>The Edge Convention Centre, Nairobi</strong>
                </div>

                <div>
                  <span>Theme</span>
                  <strong>
                    Transforming Correctional services through Technology and
                    Green Solutions.
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="registration-contact">
          <div className="container registration-contact__inner">
            <div>
              <p className="events-label">NEED ASSISTANCE?</p>

              <h2>Have a question about registration?</h2>

              <p>
                For official event enquiries, contact the Correctional Service
                Week team.
              </p>
            </div>

            <a
              href="mailto:csw@correctional.go.ke"
              className="registration-contact__email"
            >
              csw@correctional.go.ke
              <ArrowRight size={17} aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
