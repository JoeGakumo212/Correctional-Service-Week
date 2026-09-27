import './EventDivider.css';

export default function EventDivider({ variant = 'default', className = '' }) {
  return (
    <div
      className={`event-divider event-divider--${variant} ${className}`}
      aria-hidden="true"
    >
      <div className="event-divider__track">
        <span className="event-divider__flow event-divider__flow--green" />
        <span className="event-divider__flow event-divider__flow--yellow" />
        <span className="event-divider__flow event-divider__flow--red" />
        <span className="event-divider__flow event-divider__flow--blue" />

        {/* Duplicate set for seamless infinite movement */}
        <span className="event-divider__flow event-divider__flow--green" />
        <span className="event-divider__flow event-divider__flow--yellow" />
        <span className="event-divider__flow event-divider__flow--red" />
        <span className="event-divider__flow event-divider__flow--blue" />
      </div>

      <span className="event-divider__gold-line" />
    </div>
  );
}
