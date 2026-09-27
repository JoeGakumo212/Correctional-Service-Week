import React from 'react';
import {
  Activity,
  BrainCircuit,
  Cpu,
  Database,
  MonitorSmartphone,
  Network,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

export default function Innovation() {
  const areas = [
    {
      icon: Cpu,
      title: 'Digital Transformation',
      text: 'Using digital technologies to improve correctional administration and service delivery.',
    },
    {
      icon: ShieldCheck,
      title: 'Security Technology',
      text: 'Exploring modern technologies that support institutional security and situational awareness.',
    },
    {
      icon: Database,
      title: 'Information Systems',
      text: 'Strengthening digital information management and access to reliable institutional information.',
    },
    {
      icon: BrainCircuit,
      title: 'Artificial Intelligence',
      text: 'Exploring responsible applications of emerging technologies within correctional services.',
    },
    {
      icon: MonitorSmartphone,
      title: 'Digital Learning',
      text: 'Using technology to expand access to learning and rehabilitation resources.',
    },
    {
      icon: Network,
      title: 'Connected Systems',
      text: 'Improving coordination, information sharing and interoperability between systems.',
    },
  ];

  return (
    <>
      <Navbar />

      <main className="program-page">
        <section className="program-section innovation-section" id="innovation">
          <div className="program-container">
            <div className="program-section-header">
              <div className="program-section-number">02</div>

              <div>
                <span className="section-kicker">PROGRAMME TWO</span>

                <h2>
                  Innovation
                  <span> & Technology</span>
                </h2>

                <p className="program-section-subtitle">
                  Digital transformation for modern, secure and efficient
                  correctional services.
                </p>
              </div>
            </div>

            <div className="program-feature-grid innovation-feature-grid">
              <div className="program-feature-card innovation-card">
                <div className="innovation-card-top">
                  <Sparkles size={32} />

                  <span>INNOVATION</span>
                </div>

                <h3>
                  Technology supporting the future of correctional services.
                </h3>

                <p>
                  Innovation creates opportunities to improve the way
                  correctional institutions manage information, deliver
                  services, strengthen security and support rehabilitation.
                </p>

                <div className="innovation-stat-grid">
                  <div>
                    <strong>01</strong>
                    <span>Digital Systems</span>
                  </div>

                  <div>
                    <strong>02</strong>
                    <span>Smart Security</span>
                  </div>

                  <div>
                    <strong>03</strong>
                    <span>Digital Learning</span>
                  </div>
                </div>
              </div>

              <div className="program-feature-content">
                <p>
                  Correctional Service Week provides a platform for showcasing
                  technologies, digital solutions and innovative approaches that
                  can contribute to better institutional management and public
                  safety.
                </p>

                <p>
                  Innovation also creates opportunities for collaboration
                  between correctional institutions, government agencies,
                  technology partners, researchers and other stakeholders.
                </p>

                <p>
                  The programme highlights how responsible use of technology can
                  strengthen information management, security, rehabilitation
                  and institutional efficiency.
                </p>

                <div className="innovation-highlight">
                  <Activity size={22} />

                  <div>
                    <strong>From ideas to practical solutions</strong>

                    <span>
                      Encouraging innovation that responds to real correctional
                      service needs.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="program-areas">
              <div className="program-areas-heading">
                <span className="section-kicker">KEY AREAS</span>

                <h3>Innovation in action</h3>
              </div>

              <div className="program-area-grid innovation-area-grid">
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
