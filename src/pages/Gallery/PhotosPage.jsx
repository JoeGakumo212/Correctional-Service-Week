import React from 'react';
import { ArrowRight, Camera, Images } from 'lucide-react';

import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

export default function PhotosPage() {
  const photos = [
    {
      image: '/images/image1.jpeg',
      number: '01',
      title: 'Service in Action',
      category: 'CORRECTIONAL SERVICES',
    },
    {
      image: '/images/image2.jpeg',
      number: '02',
      title: 'People & Service',
      category: 'PEOPLE',
    },
    {
      image: '/images/image3.jpeg',
      number: '03',
      title: 'Rehabilitation',
      category: 'REHABILITATION',
    },
    {
      image: '/images/image4.jpeg',
      number: '04',
      title: 'Community Engagement',
      category: 'COMMUNITY',
    },
    {
      image: '/images/image5.jpeg',
      number: '05',
      title: 'Innovation & Technology',
      category: 'INNOVATION',
    },
    {
      image: '/images/image6.jpeg',
      number: '06',
      title: 'Skills & Transformation',
      category: 'TRANSFORMATION',
    },
    {
      image: '/images/image7.jpeg',
      number: '07',
      title: 'Correctional Service Week',
      category: 'HIGHLIGHTS',
    },
  ];

  return (
    <>
      <Navbar />

      <main className="gallery-page photos-page">
        {/* =====================================================
            PHOTO GRID
        ===================================================== */}
        <section
          className="gallery-options photo-gallery-section"
          id="photo-gallery"
        >
          <div className="gallery-container">
            <div className="gallery-section-heading">
              <span className="gallery-kicker">PHOTO GALLERY</span>

              <h2>
                Explore the
                <span> collection.</span>
              </h2>

              <p>
                A selection of photographs celebrating correctional service,
                people, programmes and transformation.
              </p>
            </div>

            <div className="photo-card-grid">
              {photos.map((photo) => (
                <article className="photo-card" key={photo.number}>
                  <div className="photo-card-image">
                    <img src={photo.image} alt={photo.title} loading="lazy" />

                    <span className="photo-card-number">{photo.number}</span>

                    <div className="photo-card-overlay">
                      <span>{photo.category}</span>

                      <h3>{photo.title}</h3>
                    </div>
                  </div>

                  <div className="photo-card-content">
                    <span>{photo.category}</span>

                    <h3>{photo.title}</h3>

                    <button
                      type="button"
                      className="photo-view-button"
                      onClick={() => window.open(photo.image, '_blank')}
                    >
                      View Image
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
    FEATURE + CTA ROW
===================================================== */}
        <section className="photo-bottom-section">
          <div className="gallery-container">
            <div className="photo-bottom-grid">
              {/* FEATURE MESSAGE */}
              <div className="photo-feature-card">
                <div className="photo-feature-icon">
                  <Camera size={30} />
                </div>

                <div className="photo-feature-content">
                  <span className="gallery-kicker">
                    CORRECTIONAL SERVICE WEEK 2026
                  </span>

                  <h2>
                    Behind every photograph is a story of
                    <span> people, service and transformation.</span>
                  </h2>

                  <p>
                    The gallery celebrates the individuals, teams, communities
                    and partners whose work contributes to the continuous
                    transformation of correctional services.
                  </p>
                </div>
              </div>

              {/* BOTTOM CTA */}
              <div className="photo-cta-card">
                <div className="photo-cta-content">
                  <span className="gallery-kicker">
                    CORRECTIONAL SERVICE WEEK 2026
                  </span>

                  <h2>
                    More stories.
                    <span> More moments.</span>
                  </h2>

                  <p>
                    Continue exploring the Correctional Service Week 2026
                    gallery.
                  </p>

                  <div className="gallery-cta-actions">
                    <a
                      href="/gallery/videos"
                      className="gallery-btn gallery-btn-primary"
                    >
                      Watch Videos
                      <ArrowRight size={17} />
                    </a>

                    <a
                      href="/gallery"
                      className="gallery-btn gallery-btn-secondary"
                    >
                      Back to Gallery
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
