import {
  ArrowRight,
  CalendarDays,
  HelpCircle,
  Mail,
  MapPin,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import EventMotif from '../common/EventMotif';
const contactOptions = [
  {
    icon: CalendarDays,
    title: 'Event Information',
    description:
      'Find information about the event, programme and participation.',
    action: 'View event information',
    target: '/events',
  },
  {
    icon: MapPin,
    title: 'Venue',
    description:
      'Find information about The Edge Convention Centre and the event location.',
    action: 'View venue',
    target: '/contact/venue',
  },
  {
    icon: HelpCircle,
    title: 'Frequently Asked Questions',
    description:
      'Find answers to common questions about Correctional Service Week 2026.',
    action: 'View FAQs',
    target: '/contact/faq',
  },
];

export default function ContactSection() {
  const navigate = useNavigate();

  return (
    <section
      className="contact-section"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <EventMotif variant="decorative" className="contact-section__motif" />
      <div className="container">
        <div className="contact-intro">
          <div>
            <div className="eyebrow">
              <span aria-hidden="true" />
              GET IN TOUCH
            </div>

            <h2 id="contact-heading">
              Connect with Correctional Service Week 2026
            </h2>

            <p>
              Find official event information, venue details and answers to
              common questions about Correctional Service Week 2026.
            </p>
          </div>

          <div className="contact-intro__action">
            <Mail size={20} aria-hidden="true" />

            <div>
              <span>EVENT ENQUIRIES</span>
              <strong>Contact the event team</strong>
            </div>

            <button
              type="button"
              onClick={() => navigate('/contact')}
              aria-label="Contact the event team"
            >
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="contact-options">
          {contactOptions.map(
            ({ icon: Icon, title, description, action, target }) => (
              <article className="contact-option" key={title}>
                <div className="contact-option__icon">
                  <Icon size={23} strokeWidth={1.8} aria-hidden="true" />
                </div>

                <h3>{title}</h3>

                <p>{description}</p>

                <button
                  type="button"
                  className="contact-option__link"
                  onClick={() => navigate(target)}
                >
                  <span>{action}</span>

                  <ArrowRight size={16} aria-hidden="true" />
                </button>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
