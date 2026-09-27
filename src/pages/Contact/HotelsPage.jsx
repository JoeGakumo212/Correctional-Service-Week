import { ArrowRight, BedDouble, MapPin, Plane } from 'lucide-react';
import { Link } from 'react-router-dom';

import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

import './ContactPage.css';

const hotels = [
  {
    name: 'Sarova Stanley',
    area: 'Nairobi CBD',
    type: 'Rooms & Suites',
    description:
      'A historic Nairobi hotel in the heart of the city centre, offering accommodation, dining and conference facilities.',
    image: '/images/sarova.jpeg',
    website: 'https://www.sarovahotels.com/stanley-nairobi/',
  },
  {
    name: 'Fairmont The Norfolk',
    area: 'Nairobi CBD',
    type: 'Rooms & Suites',
    description:
      'A landmark Nairobi hotel offering accommodation, restaurants, gardens and conference facilities close to the city centre.',
    image: '/images/a5f5.webp',
    website:
      'https://www.fairmont.com/en/hotels/nairobi/fairmont-the-norfolk.html',
  },
  {
    name: 'Nairobi Serena Hotel',
    area: 'Nairobi CBD',
    type: 'Rooms & Suites',
    description:
      'A centrally located full-service hotel offering accommodation, dining, wellness and conference facilities.',
    image: '/images/serena.webp',
    website: 'https://www.serenahotels.com/nairobi',
  },
  {
    name: 'Villa Rosa Kempinski',
    area: 'Westlands',
    type: 'Rooms & Suites',
    description:
      'A luxury hotel offering a range of rooms and suites, restaurants, wellness facilities and conference services.',
    image: '/images/hotels/villa-rosa-kempinski.jpg',
    website: 'https://www.kempinski.com/en/hotel-villa-rosa',
  },
  {
    name: 'Sarova Panafric',
    area: 'Upper Hill',
    type: 'Rooms & Suites',
    description:
      'A Nairobi hotel providing accommodation, dining and conference facilities with convenient access to Upper Hill and the CBD.',
    image: '/images/hotels/sarova-panafric.jpg',
    website: 'https://www.sarovahotels.com/panafric-nairobi/',
  },
  {
    name: 'Weston Hotel',
    area: 'South Nairobi',
    type: 'Rooms & Suites',
    description:
      'A full-service Nairobi hotel offering accommodation, dining, conference and event facilities near Wilson Airport.',
    image: '/images/hotels/weston-hotel.jpg',
    website: 'https://www.westonhotelnairobi.com/',
  },
  {
    name: 'Radisson Blu Hotel Nairobi Upper Hill',
    area: 'Upper Hill',
    type: 'Rooms & Suites',
    description:
      'A modern hotel in Upper Hill offering rooms and suites, dining, wellness and meeting facilities.',
    image: '/images/hotels/radisson-blu-upper-hill.jpg',
    website:
      'https://www.radissonhotels.com/en-us/hotels/radisson-blu-nairobi-upper-hill',
  },
  {
    name: 'Fairview Hotel',
    area: 'Kilimani',
    type: 'Rooms & Suites',
    description:
      'A well-established Nairobi hotel offering accommodation, gardens, dining and facilities for business and leisure travellers.',
    image: '/images/hotels/fairview-hotel.jpg',
    website: 'https://www.fairviewkenya.com/',
  },
  {
    name: 'Best Western Plus Meridian Hotel',
    area: 'Nairobi CBD',
    type: 'Rooms & Suites',
    description:
      'A centrally located hotel offering accommodation, dining and meeting facilities within Nairobi CBD.',
    image: '/images/hotels/best-western-meridian.jpg',
    website:
      'https://www.bestwestern.com/en_US/book/hotels-in-nairobi/best-western-plus-meridian-hotel/propertyCode.75112.html',
  },
  {
    name: 'Mercure Nairobi Upper Hill',
    area: 'Upper Hill',
    type: 'Rooms & Suites',
    description:
      'A contemporary hotel in Upper Hill offering accommodation, dining and facilities for business and event visitors.',
    image: '/images/hotels/mercure-upper-hill.jpg',
    website: 'https://all.accor.com/hotel/7296/index.en.shtml',
  },
];

export default function HotelsPage() {
  return (
    <div className="hotels-page">
      <Navbar />

      {/* =====================================================
          HERO
      ====================================================== */}
      <header className="hotels-hero">
        <div className="hotels-container">
          <span className="hotels-eyebrow">Correctional Service Week 2026</span>

          <h1>
            Hotels & <span>Accommodation</span>
          </h1>

          <p>
            Explore accommodation options around Nairobi and plan your stay
            before attending Correctional Service Week 2026.
          </p>
        </div>
      </header>

      <main>
        {/* =====================================================
            INTRODUCTION
        ====================================================== */}
        <section className="hotels-intro">
          <div className="hotels-container">
            <div className="hotels-intro-grid">
              <div>
                <span className="hotels-kicker">Plan Your Stay</span>

                <h2>
                  Accommodation
                  <br />
                  around Nairobi.
                </h2>
              </div>

              <p>
                Nairobi offers a wide range of accommodation facilities for
                delegates, visitors and guests. The options below are provided
                as a convenience to help visitors plan their stay around the
                event venue and other parts of the city.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            HOTEL DIRECTORY
        ====================================================== */}
        <section className="hotels-list">
          <div className="hotels-container">
            <div className="hotels-section-heading">
              <span className="hotels-kicker">Accommodation Options</span>

              <h2>Find a place to stay.</h2>

              <p>
                Explore selected hotels and accommodation facilities in Nairobi.
                Select a hotel to visit its official website and make enquiries
                or reservations directly.
              </p>
            </div>

            <div className="hotels-grid">
              {hotels.map((hotel) => (
                <article className="hotel-card" key={hotel.name}>
                  {/* HOTEL IMAGE */}
                  <div className="hotel-card-image">
                    <img
                      src={hotel.image}
                      alt={`${hotel.name} accommodation`}
                      loading="lazy"
                    />

                    <span className="hotel-image-location">
                      <MapPin size={14} />
                      {hotel.area}
                    </span>
                  </div>

                  {/* HOTEL INFORMATION */}
                  <div className="hotel-card-content">
                    <div className="hotel-location">
                      <MapPin size={15} />
                      <span>{hotel.area}</span>
                    </div>

                    <h3>{hotel.name}</h3>

                    <div className="hotel-type">
                      <BedDouble size={15} />
                      <span>{hotel.type}</span>
                    </div>

                    <p className="hotel-description">{hotel.description}</p>

                    <a
                      href={hotel.website}
                      target="_blank"
                      rel="noreferrer"
                      className="hotel-book-button"
                    >
                      Visit Hotel
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            BOOKING INFORMATION
        ====================================================== */}
        <section className="hotels-guide">
          <div className="hotels-container">
            <div className="hotels-guide-grid">
              <div className="hotels-guide-icon">
                <BedDouble size={28} />
              </div>

              <div>
                <span className="hotels-kicker">Before Booking</span>

                <h2>Confirm your accommodation details.</h2>

                <p>
                  Hotel prices and availability can change depending on dates,
                  room type, occupancy and demand. Visitors should confirm
                  current rates, cancellation conditions, check-in requirements
                  and available facilities directly with the hotel before making
                  a reservation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            VENUE / AIRPORT
        ====================================================== */}
        <section className="hotels-airport">
          <div className="hotels-container">
            <div className="hotels-airport-box">
              <div className="hotels-airport-icon">
                <Plane size={24} />
              </div>

              <div>
                <span className="hotels-kicker">Travelling to Nairobi</span>

                <h2>Arriving through Jomo Kenyatta International Airport?</h2>

                <p>
                  Visitors arriving in Nairobi can plan their airport transfer
                  in advance and allow sufficient time for traffic and other
                  travel conditions before proceeding to their accommodation and
                  the event venue.
                </p>
              </div>

              <Link to="/contact/venue">
                Venue &amp; Directions
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>

        {/* =====================================================
            DISCLAIMER
        ====================================================== */}
        <section className="hotels-disclaimer">
          <div className="hotels-container">
            <div className="hotels-disclaimer-box">
              <strong>Accommodation information</strong>

              <p>
                The accommodation options listed on this page are provided for
                visitor convenience. Listing a hotel does not constitute an
                endorsement, partnership or official booking arrangement with
                Correctional Service Week 2026. Visitors should contact hotels
                directly to confirm availability, rates and booking conditions.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
