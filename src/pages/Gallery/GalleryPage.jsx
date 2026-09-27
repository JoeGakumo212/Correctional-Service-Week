import React, { useEffect, useState } from 'react';
import { ArrowRight, Camera, Images, Play, Sparkles, X } from 'lucide-react';

import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

import './GalleryPage.css';

export default function GalleryPage() {
  const [activeVideo, setActiveVideo] = useState(null);

  const galleryItems = [
    {
      icon: Images,
      number: '01',
      title: 'Photos',
      description:
        'Explore photographs capturing programmes, activities, people and key moments during Correctional Service Week 2026.',
      href: '/gallery/photos',
      image: '/images/image1.jpeg',
      type: 'image',
    },
    {
      icon: Play,
      number: '02',
      title: 'Videos',
      description:
        'Watch highlights, interviews, programme features and visual stories from Correctional Service Week 2026.',
      href: '/gallery/videos',
      image: 'https://img.youtube.com/vi/tf3ZYbmYKM8/hqdefault.jpg',
      type: 'video',
      videoId: 'tf3ZYbmYKM8',
    },
    {
      icon: Sparkles,
      number: '03',
      title: 'Moments',
      description:
        'Discover memorable moments and highlights celebrating service, rehabilitation and transformation.',
      href: '/gallery/moments',
      image: '/images/image2.jpeg',
      type: 'image',
    },
  ];

  const movingImages = [
    {
      image: '/images/image1.jpeg',
      category: 'CORRECTIONAL SERVICES',
      title: 'Service in Action',
    },
    {
      image: '/images/image2.jpeg',
      category: 'PEOPLE',
      title: 'People at the Centre',
    },
    {
      image: '/images/image3.jpeg',
      category: 'REHABILITATION',
      title: 'Rehabilitation & Reintegration',
    },
    {
      image: '/images/image4.jpeg',
      category: 'COMMUNITY',
      title: 'Community Engagement',
    },
    {
      image: '/images/image5.jpeg',
      category: 'INNOVATION',
      title: 'Innovation & Technology',
    },
    {
      image: '/images/image6.jpeg',
      category: 'TRANSFORMATION',
      title: 'Skills & Transformation',
    },
    {
      image: '/images/image7.jpeg',
      category: 'HIGHLIGHTS',
      title: 'Correctional Service Week',
    },
  ];

  const movingVideos = [
    {
      id: 'tf3ZYbmYKM8',
      title: 'Correctional Services Introduction Part 1',
    },
  ];

  const openVideo = (video) => {
    setActiveVideo(video);
    document.body.style.overflow = 'hidden';
  };

  const closeVideo = () => {
    setActiveVideo(null);
    document.body.style.overflow = '';
  };

  useEffect(() => {
    <section className="gallery-bottom-section">
      <div className="gallery-container">
        <div className="gallery-bottom-grid">
          <div className="video-stories-panel">
            <div className="gallery-section-heading">
              <span className="gallery-section-kicker">VIDEO STORIES</span>
              <h2>Watch the story unfold</h2>
              <p>
                Explore visual stories introducing the work, people and
                transformation taking place across correctional services.
              </p>
            </div>

            <div className="video-stories-grid">
              {movingVideos.map((video) => (
                <button
                  type="button"
                  className="video-story-card"
                  key={video.id}
                  onClick={() => openVideo(video)}
                  aria-label={`Watch ${video.title}`}
                >
                  <div className="video-story-thumbnail">
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                      onError={(event) => {
                        event.currentTarget.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                      }}
                      alt={video.title}
                      loading="lazy"
                    />
                    <div className="video-story-overlay">
                      <span className="video-story-play" aria-hidden="true">
                        <Play size={28} fill="currentColor" />
                      </span>
                    </div>
                  </div>

                  <div className="video-story-content">
                    <span>FEATURED VIDEO</span>
                    <h3>{video.title}</h3>
                    <span className="video-story-link">
                      Watch Video
                      <ArrowRight size={17} />
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="gallery-feature-panel">
            <div className="gallery-feature">
              <div className="gallery-feature-content">
                <span className="gallery-section-kicker">BEYOND THE LENS</span>
                <h2>Every image tells a story of service.</h2>
                <p>
                  Behind every photograph, video and moment are people committed
                  to rehabilitation, reintegration, community engagement and the
                  transformation of correctional services.
                </p>
              </div>

              <a href="/gallery" className="gallery-feature-link">
                Explore the Gallery
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="gallery-page">
      <Navbar />

      {/* =====================================================
          GALLERY OPTIONS
      ===================================================== */}
      <section className="gallery-options-section">
        <div className="gallery-container">
          <div className="gallery-section-heading">
            <span className="gallery-section-kicker">EXPLORE</span>

            <h2>Stories captured through different lenses</h2>

            <p>
              Discover the people, programmes, activities and moments that
              reflect the journey of correctional services.
            </p>
          </div>

          <div className="gallery-options-grid">
            {galleryItems.map((item) => {
              const Icon = item.icon;

              const cardContent = (
                <>
                  <div className="gallery-card-image">
                    <img src={item.image} alt={item.title} />

                    <div className="gallery-card-image-overlay">
                      {item.type === 'video' && (
                        <span className="gallery-card-play">
                          <Play size={22} fill="currentColor" />
                        </span>
                      )}

                      <span className="gallery-card-view">
                        {item.type === 'video' ? 'Watch Video' : 'Explore'}
                      </span>
                    </div>
                  </div>

                  <div className="gallery-card-body">
                    <div className="gallery-card-top">
                      <span className="gallery-card-number">{item.number}</span>

                      <div className="gallery-card-icon">
                        <Icon size={22} />
                      </div>
                    </div>

                    <h3>{item.title}</h3>

                    <p>{item.description}</p>

                    <span className="gallery-card-link">
                      {item.type === 'video' ? 'Watch' : 'Explore'}
                      <ArrowRight size={17} />
                    </span>
                  </div>
                </>
              );

              if (item.type === 'video') {
                return (
                  <button
                    type="button"
                    className="gallery-card gallery-card-button"
                    key={item.title}
                    onClick={() =>
                      openVideo({
                        id: item.videoId,
                        title: item.title,
                      })
                    }
                  >
                    {cardContent}
                  </button>
                );
              }

              return (
                <a href={item.href} className="gallery-card" key={item.title}>
                  {cardContent}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTAINED MOVING VISUAL SHOWCASE
      ===================================================== */}
      <section className="visual-showcase-section">
        <div className="gallery-container">
          <div className="gallery-section-heading showcase-heading">
            <span className="gallery-section-kicker">VISUAL SHOWCASE</span>

            <h2>Service in focus</h2>

            <p>
              A moving collection of moments from correctional services,
              rehabilitation, community engagement and transformation.
            </p>
          </div>

          {/* Contained animation viewport */}
          <div className="visual-showcase">
            {/* One continuous horizontal row */}
            <div className="visual-showcase-track">
              {[...movingImages, ...movingImages].map((item, index) => (
                <div
                  className="visual-showcase-item"
                  key={`${item.title}-${index}`}
                >
                  <img src={item.image} alt={item.title} />

                  <div className="visual-showcase-overlay">
                    <span>{item.category}</span>
                    <h3>{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          VIDEO STORIES + BEYOND THE LENS
          30% / 70%
      ===================================================== */}
      <section className="gallery-bottom-section">
        <div className="gallery-container">
          <div className="gallery-bottom-grid">
            <div className="video-stories-panel">
              <div className="gallery-section-heading">
                <span className="gallery-section-kicker">VIDEO STORIES</span>
                <h2>Watch the story unfold</h2>
                <p>
                  Explore visual stories introducing the work, people and
                  transformation taking place across correctional services.
                </p>
              </div>

              <div className="video-stories-grid">
                {movingVideos.map((video) => (
                  <button
                    type="button"
                    className="video-story-card"
                    key={video.id}
                    onClick={() => openVideo(video)}
                    aria-label={`Watch ${video.title}`}
                  >
                    <div className="video-story-thumbnail">
                      <img
                        src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                        onError={(event) => {
                          event.currentTarget.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                        }}
                        alt={video.title}
                        loading="lazy"
                      />
                      <div className="video-story-overlay">
                        <span className="video-story-play" aria-hidden="true">
                          <Play size={28} fill="currentColor" />
                        </span>
                      </div>
                    </div>

                    <div className="video-story-content">
                      <span>FEATURED VIDEO</span>
                      <h3>{video.title}</h3>
                      <span className="video-story-link">
                        Watch Video
                        <ArrowRight size={17} />
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="gallery-feature-panel">
              <div className="gallery-feature">
                <div className="gallery-feature-content">
                  <span className="gallery-section-kicker">
                    BEYOND THE LENS
                  </span>
                  <h2>Every image tells a story of service.</h2>
                  <p>
                    Behind every photograph, video and moment are people
                    committed to rehabilitation, reintegration, community
                    engagement and the transformation of correctional services.
                  </p>
                </div>

                <a href="/gallery/photos" className="gallery-feature-link">
                  Explore the Gallery
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          VIDEO MODAL
      ===================================================== */}
      {activeVideo && (
        <div
          className="gallery-video-modal"
          role="dialog"
          aria-modal="true"
          aria-label={activeVideo.title}
          onClick={closeVideo}
        >
          <div
            className="gallery-video-modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="gallery-video-close"
              onClick={closeVideo}
              aria-label="Close video"
            >
              <X size={24} />
            </button>

            <div className="gallery-video-frame">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1&rel=0`}
                title={activeVideo.title}
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="gallery-video-modal-info">
              <div>
                <span>VIDEO STORY</span>
                <h3>{activeVideo.title}</h3>
              </div>

              <a
                href={`https://www.youtube.com/watch?v=${activeVideo.id}`}
                target="_blank"
                rel="noreferrer"
                className="gallery-youtube-link"
              >
                Watch on YouTube
                <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
