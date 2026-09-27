import './EventMotif.css';

export default function EventMotif({ className = '', variant = 'default' }) {
  return (
    <div
      className={`event-motif event-motif--${variant} ${className}`}
      aria-hidden="true"
    >
      <span className="motif-stroke motif-green" />
      <span className="motif-stroke motif-yellow" />
      <span className="motif-stroke motif-red" />
      <span className="motif-stroke motif-blue" />
    </div>
  );
}
