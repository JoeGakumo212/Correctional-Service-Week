import React from 'react';
import {
  ArrowRight,
  BookOpen,
  HeartHandshake,
  Sprout,
  Users,
  Wrench,
} from 'lucide-react';

import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

export default function Rehabilitation() {
  const areas = [
    {
      icon: BookOpen,
      title: 'Education',
      text: 'Supporting literacy, education and lifelong learning opportunities.',
    },
    {
      icon: Wrench,
      title: 'Skills Development',
      text: 'Equipping individuals with practical, technical and vocational skills.',
    },
    {
      icon: HeartHandshake,
      title: 'Psychosocial Support',
      text: 'Providing counselling and support that contributes to positive transformation.',
    },
    {
      icon: Sprout,
      title: 'Productive Activities',
      text: 'Promoting agriculture, enterprise and other productive rehabilitation activities.',
    },
    {
      icon: Users,
      title: 'Reintegration',
      text: 'Preparing individuals for successful return and participation in society.',
    },
  ];

  return (
    <>
      <Navbar />

      <main className="program-page">
        <section
          className="program-section rehabilitation-section"
          id="rehabilitation"
        >
          <div className="program-container">
            {/* SECTION HEADER */}
            <div className="program-section-header">
              <div className="program-section-number">01</div>

              <div>
                <span className="section-kicker">PROGRAMME ONE</span>

                <h2>
                  Rehabilitation
                  <span> &amp; Reintegration</span>
                </h2>

                <p className="program-section-subtitle">
                  Restoring dignity. Building skills. Supporting successful
                  reintegration.
                </p>
              </div>
            </div>

            {/* FEATURE CONTENT */}
            <div className="program-feature-grid">
              <div className="program-feature-content">
                <p>
                  Rehabilitation is central to the correctional mandate. It
                  focuses on supporting positive behavioural change, developing
                  skills and addressing the factors that contribute to
                  offending.
                </p>

                <p>
                  Through education, vocational training, counselling,
                  productive activities and preparation for reintegration,
                  correctional programmes create opportunities for individuals
                  to develop the knowledge and skills needed for constructive
                  participation in society.
                </p>

                <p>
                  The programme also recognises the importance of families,
                  communities and partners in supporting successful
                  reintegration and reducing barriers to productive community
                  participation.
                </p>

                <a href="#rehabilitation-areas" className="program-text-link">
                  Explore rehabilitation areas
                  <ArrowRight size={17} />
                </a>
              </div>

              {/* FEATURE CARD */}
              <div className="program-feature-card rehabilitation-card">
                <div className="program-feature-card-icon">
                  <HeartHandshake size={46} />
                </div>

                <span>THE GOAL</span>

                <h3>
                  Rehabilitation that creates pathways for positive change.
                </h3>

                <p>
                  Supporting individuals to acquire skills, develop positive
                  values and prepare for responsible participation in their
                  communities.
                </p>
              </div>
            </div>

            {/* KEY AREAS */}
            <div className="program-areas" id="rehabilitation-areas">
              <div className="program-areas-heading">
                <span className="section-kicker">KEY AREAS</span>

                <h3>Rehabilitation in action</h3>
              </div>

              <div className="program-area-grid">
                {areas.map((area) => {
                  const Icon = area.icon;

                  return (
                    <div className="program-area-card" key={area.title}>
                      <div className="program-area-icon">
                        <Icon size={23} />
                      </div>

                      <h4>{area.title}</h4>

                      <p>{area.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
