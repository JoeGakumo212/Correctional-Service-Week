import {
  Cpu,
  Leaf,
  Lightbulb,
  HeartHandshake,
  ShieldCheck,
  Users,
} from 'lucide-react';
import EventMotif from '../common/EventMotif';
const focusAreas = [
  {
    icon: Cpu,
    number: '01',
    title: 'Technology',
    description:
      'Exploring technology and digital approaches that can support the transformation of correctional services.',
  },
  {
    icon: Leaf,
    number: '02',
    title: 'Green Solutions',
    description:
      'Promoting sustainable and environmentally responsible solutions for correctional services.',
  },
  {
    icon: Lightbulb,
    number: '03',
    title: 'Innovation',
    description:
      'Creating space for new ideas, practical solutions and innovative approaches to correctional services.',
  },
  {
    icon: HeartHandshake,
    number: '04',
    title: 'Rehabilitation',
    description:
      'Supporting approaches that contribute to positive change and more humane correctional services.',
  },
  {
    icon: ShieldCheck,
    number: '05',
    title: 'Safer Communities',
    description:
      'Connecting transformed correctional services with the broader goal of safer communities.',
  },
  {
    icon: Users,
    number: '06',
    title: 'Partnership',
    description:
      'Bringing stakeholders together to share ideas, experiences and opportunities for collaboration.',
  },
];

export default function FocusAreas() {
  return (
    <section className="focus-section" aria-labelledby="focus-heading">
      <EventMotif variant="decorative" className="focus-section__motif" />
      <div className="container">
        <div className="focus-heading">
          <div className="eyebrow">
            <span aria-hidden="true" />
            OUR FOCUS
          </div>

          <h2 id="focus-heading">Transforming Correctional Services</h2>

          <p>
            Correctional Service Week 2026 brings attention to technology, green
            solutions and innovation as part of the future of safer, greener and
            more humane correctional services.
          </p>
        </div>

        <div className="focus-grid">
          {focusAreas.map(({ icon: Icon, number, title, description }) => (
            <article className="focus-item" key={number}>
              <div className="focus-item-top">
                <div className="focus-icon" aria-hidden="true">
                  <Icon size={24} strokeWidth={1.8} />
                </div>

                <span className="focus-number">{number}</span>
              </div>

              <div className="focus-item-content">
                <h3>{title}</h3>

                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
