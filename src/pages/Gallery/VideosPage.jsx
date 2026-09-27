import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  ExternalLink,
  Pause,
  Play,
  Volume2,
  VolumeX,
  X,
} from 'lucide-react';

import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import './video.css';

const videos = [
  {
    id: 'tf3ZYbmYKM8',
    title: 'Correctional Service Week 2026',
    description:
      'A look into the activities, programmes and initiatives of Correctional Service Week 2026.',
    youtubeId: 'tf3ZYbmYKM8',
    category: 'Correctional Service Week',
    duration: 'Preview',
  },
  {
    id: 'video-2',
    title: 'Rehabilitation and Reintegration',
    description:
      'Highlighting rehabilitation, skills development and successful reintegration initiatives.',
    youtubeId: 'tf3ZYbmYKM8',
    category: 'Rehabilitation',
    duration: 'Preview',
  },
  {
    id: 'video-3',
    title: 'Community Engagement',
    description:
      'Connecting correctional services with communities through meaningful engagement.',
    youtubeId: 'tf3ZYbmYKM8',
    category: 'Community',
    duration: 'Preview',
  },
  {
    id: 'video-4',
    title: 'Innovation in Correctional Services',
    description:
      'Exploring technology, innovation and digital transformation within correctional services.',
    youtubeId: 'tf3ZYbmYKM8',
    category: 'Innovation',
    duration: 'Preview',
  },
  {
    id: 'video-5',
    title: 'Correctional Institutions',
    description:
      'A visual journey through correctional institutions and the people who serve within them.',
    youtubeId: 'tf3ZYbmYKM8',
    category: 'Institutions',
    duration: 'Preview',
  },
  {
    id: 'video-6',
    title: 'Service and Commitment',
    description:
      'Celebrating the commitment and dedication of correctional officers and staff.',
    youtubeId: 'tf3ZYbmYKM8',
    category: 'Service',
    duration: 'Preview',
  },
  {
    id: 'video-7',
    title: 'Skills and Empowerment',
    description:
      'Showcasing vocational training, education and empowerment programmes.',
    youtubeId: 'tf3ZYbmYKM8',
    category: 'Empowerment',
    duration: 'Preview',
  },
  {
    id: 'video-8',
    title: 'A New Era of Corrections',
    description:
      'A glimpse into the future of correctional services and institutional transformation.',
    youtubeId: 'tf3ZYbmYKM8',
    category: 'Transformation',
    duration: 'Preview',
  },
];

const PREVIEW_SECONDS = 8;

function getYoutubeThumbnail(youtubeId) {
  return `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
}

function getYoutubeUrl(youtubeId) {
  return `https://www.youtube.com/watch?v=${youtubeId}`;
}

function getEmbedUrl(youtubeId, autoplay = false, muted = false) {
  const params = new URLSearchParams({
    autoplay: autoplay ? '1' : '0',
    mute: muted ? '1' : '0',
    rel: '0',
    modestbranding: '1',
    playsinline: '1',
  });

  return `https://www.youtube.com/embed/${youtubeId}?${params.toString()}`;
}

function VideoCard({
  video,
  isSelected,
  isPreviewing,
  onSelect,
  onPreviewStart,
  onPreviewStop,
}) {
  const previewTimer = useRef(null);

  const handleMouseEnter = () => {
    if (isSelected) return;

    onPreviewStart(video.id);

    previewTimer.current = setTimeout(() => {
      onPreviewStop(video.id);
    }, PREVIEW_SECONDS * 1000);
  };

  const handleMouseLeave = () => {
    if (previewTimer.current) {
      clearTimeout(previewTimer.current);
      previewTimer.current = null;
    }

    if (!isSelected) {
      onPreviewStop(video.id);
    }
  };

  useEffect(() => {
    return () => {
      if (previewTimer.current) {
        clearTimeout(previewTimer.current);
      }
    };
  }, []);

  return (
    <article
      className={`video-card ${isSelected ? 'is-selected' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onSelect(video)}
    >
      <div className="video-card-media">
        {isPreviewing && !isSelected ? (
          <iframe
            className="video-preview-frame"
            src={getEmbedUrl(video.youtubeId, true, true)}
            title={`${video.title} preview`}
            allow="autoplay; encrypted-media"
          />
        ) : (
          <>
            <img
              src={getYoutubeThumbnail(video.youtubeId)}
              alt={video.title}
              className="video-thumbnail"
            />

            <div className="video-thumbnail-overlay">
              <span className="video-play-button">
                <Play size={20} fill="currentColor" />
              </span>
            </div>
          </>
        )}

        <span className="video-category">{video.category}</span>

        <span className="video-preview-label">
          {isPreviewing ? 'Previewing' : 'Play'}
        </span>
      </div>

      <div className="video-card-content">
        <h3>{video.title}</h3>

        <p>{video.description}</p>

        <button
          type="button"
          className="video-view-button"
          onClick={(event) => {
            event.stopPropagation();
            onSelect(video);
          }}
        >
          Watch Preview
          <ArrowRight size={16} />
        </button>
      </div>
    </article>
  );
}

export default function Video() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [previewingVideo, setPreviewingVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  const openVideo = (video) => {
    setPreviewingVideo(null);
    setSelectedVideo(video);
    setIsPlaying(true);
    setIsMuted(false);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
    setIsPlaying(false);
  };

  const handlePreviewStart = (id) => {
    setPreviewingVideo(id);
  };

  const handlePreviewStop = (id) => {
    setPreviewingVideo((current) => (current === id ? null : current));
  };

  const handlePlayToggle = () => {
    setIsPlaying((current) => !current);
  };

  const handleMuteToggle = () => {
    setIsMuted((current) => !current);
  };

  useEffect(() => {
    if (!selectedVideo) return;

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        closeVideo();
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [selectedVideo]);

  return (
    <>
      <Navbar />

      <main className="video-page">
        <section className="video-section">
          <div className="video-container">
            <div className="video-section-heading">
              <div>
                <span className="section-kicker">Watch &amp; Explore</span>

                <h2>Featured Videos</h2>
              </div>

              <p>
                Hover to preview. Select a video to watch it here, then visit
                YouTube for the complete video.
              </p>
            </div>

            <div className="video-grid">
              {videos.map((video) => (
                <VideoCard
                  key={video.id}
                  video={video}
                  isSelected={selectedVideo?.id === video.id}
                  isPreviewing={previewingVideo === video.id}
                  onSelect={openVideo}
                  onPreviewStart={handlePreviewStart}
                  onPreviewStop={handlePreviewStop}
                />
              ))}
            </div>
          </div>
        </section>

        {selectedVideo && (
          <section className="video-player-section">
            <div className="video-player-container">
              <div className="video-player-header">
                <div>
                  <span className="section-kicker">Now Playing</span>

                  <h2>{selectedVideo.title}</h2>
                </div>

                <button
                  type="button"
                  className="video-close-button"
                  onClick={closeVideo}
                  aria-label="Close video"
                >
                  <X size={22} />
                </button>
              </div>

              <div className="video-player-wrapper">
                <iframe
                  key={`${selectedVideo.id}-${isPlaying}-${isMuted}`}
                  src={getEmbedUrl(selectedVideo.youtubeId, isPlaying, isMuted)}
                  title={selectedVideo.title}
                  className="video-main-player"
                  allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                  allowFullScreen
                />

                <div className="video-player-controls">
                  <button
                    type="button"
                    onClick={handlePlayToggle}
                    aria-label={isPlaying ? 'Pause video' : 'Play video'}
                  >
                    {isPlaying ? (
                      <Pause size={18} />
                    ) : (
                      <Play size={18} fill="currentColor" />
                    )}

                    <span>{isPlaying ? 'Pause' : 'Play'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleMuteToggle}
                    aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                  >
                    {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}

                    <span>{isMuted ? 'Unmute' : 'Mute'}</span>
                  </button>

                  <a
                    href={getYoutubeUrl(selectedVideo.youtubeId)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="youtube-full-button"
                  >
                    Watch Full Video on YouTube
                    <ExternalLink size={17} />
                  </a>
                </div>
              </div>

              <div className="video-player-description">
                <div>
                  <span className="video-player-category">
                    {selectedVideo.category}
                  </span>

                  <h3>{selectedVideo.title}</h3>
                </div>

                <p>{selectedVideo.description}</p>
              </div>
            </div>
          </section>
        )}

        <section className="video-youtube-section">
          <div className="video-container">
            <div className="youtube-callout">
              <div>
                <span className="section-kicker">Continue Watching</span>

                <h2>Watch More on YouTube</h2>

                <p>
                  Discover the complete collection of Correctional Service Week
                  videos, highlights and stories on our YouTube channel.
                </p>
              </div>

              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="youtube-channel-button"
              >
                Visit YouTube
                <ExternalLink size={17} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
