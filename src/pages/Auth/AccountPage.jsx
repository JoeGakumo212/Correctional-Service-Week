import { LockKeyhole, Mail, Phone, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import EventMotif from '../../components/common/EventMotif';

import './Auth.css';

export default function AccountPage() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Backend account creation will be connected here.
    navigate('/events/register');
  };

  return (
    <div className="app auth-page">
      <Navbar />

      <main>
        <section className="auth-section">
          <div className="container">
            <div className="auth-layout">
              <div className="auth-intro">
                <EventMotif variant="strong" />

                <div>
                  <p className="auth-eyebrow">Correctional Service Week 2026</p>

                  <h1>
                    Create your <span>account.</span>
                  </h1>

                  <p>
                    Create an account before registering for Correctional
                    Service Week 2026.
                  </p>
                </div>
              </div>

              <div className="auth-card">
                <div className="auth-card__heading">
                  <p className="events-label">NEW ACCOUNT</p>

                  <h2>Create an account</h2>

                  <p>
                    Your account will be used to manage your event
                    participation.
                  </p>
                </div>

                <form className="auth-form" onSubmit={handleSubmit}>
                  <label>
                    <span>Full name</span>

                    <div className="auth-input">
                      <User size={17} aria-hidden="true" />

                      <input
                        type="text"
                        name="fullName"
                        placeholder="Full name"
                        required
                      />
                    </div>
                  </label>

                  <label>
                    <span>Email address</span>

                    <div className="auth-input">
                      <Mail size={17} aria-hidden="true" />

                      <input
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                  </label>

                  <label>
                    <span>Phone number</span>

                    <div className="auth-input">
                      <Phone size={17} aria-hidden="true" />

                      <input
                        type="tel"
                        name="phone"
                        placeholder="+254..."
                        required
                      />
                    </div>
                  </label>

                  <label>
                    <span>Password</span>

                    <div className="auth-input">
                      <LockKeyhole size={17} aria-hidden="true" />

                      <input
                        type="password"
                        name="password"
                        placeholder="Create a password"
                        required
                      />
                    </div>
                  </label>

                  <label>
                    <span>Confirm password</span>

                    <div className="auth-input">
                      <LockKeyhole size={17} aria-hidden="true" />

                      <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm your password"
                        required
                      />
                    </div>
                  </label>

                  <button type="submit" className="auth-submit">
                    Create account
                  </button>
                </form>

                <div className="auth-create">
                  <p>Already have an account?</p>

                  <Link to="/account/login">Sign in</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
