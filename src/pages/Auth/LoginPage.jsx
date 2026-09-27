import { LockKeyhole, Mail, UserPlus } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import EventMotif from '../../components/common/EventMotif';

import './Auth.css';

export default function LoginPage() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Backend authentication will be connected here.
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
                    Welcome <span>back.</span>
                  </h1>

                  <p>
                    Sign in to your Correctional Service Week account to
                    continue with event registration.
                  </p>
                </div>
              </div>

              <div className="auth-card">
                <div className="auth-card__heading">
                  <p className="events-label">ACCOUNT ACCESS</p>

                  <h2>Sign in</h2>

                  <p>Use your account credentials to continue.</p>
                </div>

                <form className="auth-form" onSubmit={handleSubmit}>
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
                    <span>Password</span>

                    <div className="auth-input">
                      <LockKeyhole size={17} aria-hidden="true" />

                      <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        required
                      />
                    </div>
                  </label>

                  <button type="submit" className="auth-submit">
                    Sign in
                  </button>
                </form>

                <div className="auth-divider">
                  <span>OR</span>
                </div>

                <div className="auth-create">
                  <p>Don't have an account?</p>

                  <Link to="/account/create">
                    <UserPlus size={16} aria-hidden="true" />
                    Create an account
                  </Link>
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
