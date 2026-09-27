import { useState } from 'react';
import { ChevronDown, Mail, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import './ContactPage.css';

const faqs = [
  {
    question: 'What is Correctional Service Week 2026?',
    answer:
      'Correctional Service Week 2026 is an opportunity to highlight correctional services, rehabilitation, reintegration, innovation, staff contributions, partnerships and engagement with communities.',
  },
  {
    question: 'Where will the event take place?',
    answer:
      'The event venue is the Kenyatta International Convention Centre (KICC), Harambee Avenue, Nairobi. Visitors can use the Venue & Directions page for location information and directions.',
  },
  {
    question: 'Who can participate in the activities?',
    answer:
      'Participation will depend on the specific activity and programme. Delegates, invited guests, partners, members of the media and members of the public may participate in activities designated as open to them.',
  },
  {
    question: 'Do I need to register?',
    answer:
      'Registration requirements may vary depending on the activity. Visitors should check the relevant event information and registration instructions before attending.',
  },
  {
    question: 'Where can I find the event programme?',
    answer:
      'The programme and schedule of activities are available through the Events section of the website. Programme information may be updated as preparations continue.',
  },
  {
    question: 'Where can I find accommodation in Nairobi?',
    answer:
      'The Hotels & Accommodation page provides a selection of hotels and accommodation options around Nairobi. Visitors should contact the respective hotel directly to confirm availability and current rates.',
  },
  {
    question: 'How can members of the media get information?',
    answer:
      'Members of the media can contact the Secretariat for information regarding media access, approved materials, interviews, photography, video coverage and other media-related enquiries.',
  },
  {
    question: 'Can I access photographs and videos from the event?',
    answer:
      'Selected photographs, videos and other approved media materials will be made available through the Gallery and Media Resources sections of the website.',
  },
  {
    question: 'How can I contact the Secretariat?',
    answer:
      'Visit the Contact the Secretariat page for official contact information and general enquiries relating to Correctional Service Week 2026.',
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <Navbar />

      <header className="faq-hero">
        <div className="faq-container">
          <span className="faq-eyebrow">Correctional Service Week 2026</span>

          <h1>
            Frequently Asked <span>Questions</span>
          </h1>

          <p>
            Find answers to common questions about the programme, venue,
            participation, accommodation and media resources.
          </p>
        </div>
      </header>

      <main>
        <section className="faq-section">
          <div className="faq-container">
            <Link to="/contact" className="faq-back-link">
              <ArrowLeft size={17} />
              Back to Contact
            </Link>

            <div className="faq-heading">
              <span className="faq-kicker">Help Centre</span>

              <h2>
                Everything you need to know
                <br />
                before you attend.
              </h2>

              <p>
                Browse the questions below for information about Correctional
                Service Week 2026. If you cannot find the information you need,
                contact the Secretariat.
              </p>
            </div>

            <div className="faq-list">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <article
                    className={`faq-item ${isOpen ? 'open' : ''}`}
                    key={faq.question}
                  >
                    <button
                      type="button"
                      className="faq-question"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={isOpen}
                    >
                      <span>{faq.question}</span>

                      <ChevronDown size={20} className="faq-chevron" />
                    </button>

                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="faq-contact">
          <div className="faq-container">
            <div className="faq-contact-box">
              <div className="faq-contact-icon">
                <Mail size={25} />
              </div>

              <div>
                <span className="faq-kicker">Still Have Questions?</span>

                <h2>Contact the Secretariat.</h2>

                <p>
                  For enquiries that are not covered above, contact the
                  Correctional Service Week 2026 Secretariat.
                </p>
              </div>

              <Link to="/contact">Contact Us</Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
