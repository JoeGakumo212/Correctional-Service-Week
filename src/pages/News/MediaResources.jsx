import {
  ArrowRight,
  Camera,
  Download,
  FileText,
  Images,
  Play,
  Video,
} from 'lucide-react';
import { Link } from 'react-router-dom';

import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

import './MediaResources.css';

const photoCollections = [
  {
    image: '/images/image1.jpeg',
    title: 'Correctional Service Week 2026',
    description:
      'Selected photographs capturing service activities, engagement and transformation.',
  },
  {
    image: '/images/image4.jpeg',
    title: 'Community Engagement',
    description:
      'Visual stories highlighting interaction between correctional services and communities.',
  },
  {
    image: '/images/image6.jpeg',
    title: 'Programme Highlights',
    description:
      'Selected moments from rehabilitation, skills development and institutional programmes.',
  },
];

const videoStories = [
  {
    title: 'Correctional Service Week 2026',
    description:
      'Stories and highlights from activities taking place during the week.',
  },
  {
    title: 'Rehabilitation in Focus',
    description:
      'A closer look at rehabilitation, learning and skills development initiatives.',
  },
  {
    title: 'Service and Community',
    description:
      'Exploring partnerships and community engagement across correctional services.',
  },
];

const mediaDocuments = [
  {
    icon: FileText,
    title: 'Media Briefing Notes',
    text: 'Background information and key messages for media engagement.',
  },
  {
    icon: Download,
    title: 'Event Information',
    text: 'Programme information and supporting material for Correctional Service Week.',
  },
  {
    icon: FileText,
    title: 'Publication Guidance',
    text: 'Guidance for appropriate use of approved photographs, videos and written material.',
  },
];

export default function MediaResources() {
  return (
    <div className="media-resources-page">
      <Navbar />

      {/* HERO */}
      <header className="media-resources-hero">
        <div className="media-resources-container">
          <span className="media-resources-eyebrow">
            State Department for Correctional Services
          </span>

          <h1>
            Media <span>Resources</span>
          </h1>

          <p>
            Access approved photographs, videos, briefing materials and
            supporting resources for Correctional Service Week 2026.
          </p>
        </div>
      </header>

      {/* INTRO */}
      <section className="media-resources-intro">
        <div className="media-resources-container">
          <div className="media-resources-intro-grid">
            <div>
              <span className="media-resources-kicker">Media Centre</span>

              <h2>
                Resources for media,
                <br />
                partners and the public.
              </h2>
            </div>

            <p>
              Explore selected visual stories and supporting information
              relating to Correctional Service Week, rehabilitation,
              institutional programmes, community engagement and service
              transformation.
            </p>
          </div>
        </div>
      </section>

      {/* RESOURCE TYPES */}
      <section className="media-resource-types">
        <div className="media-resources-container">
          <div className="media-resources-section-heading">
            <span className="media-resources-kicker">Explore</span>
            <h2>Media resource centre</h2>
          </div>

          <div className="media-resource-type-grid">
            <Link to="/gallery/photos" className="media-resource-type-card">
              <div className="media-resource-type-icon">
                <Images size={25} />
              </div>

              <div>
                <h3>Photography</h3>
                <p>
                  Browse selected photographs and visual stories from
                  Correctional Service Week activities.
                </p>
              </div>

              <ArrowRight size={19} />
            </Link>

            <Link to="/gallery/videos" className="media-resource-type-card">
              <div className="media-resource-type-icon">
                <Video size={25} />
              </div>

              <div>
                <h3>Video Stories</h3>
                <p>
                  Watch visual stories covering service, rehabilitation,
                  innovation and community engagement.
                </p>
              </div>

              <ArrowRight size={19} />
            </Link>

            <div className="media-resource-type-card">
              <div className="media-resource-type-icon">
                <FileText size={25} />
              </div>

              <div>
                <h3>Briefing Materials</h3>
                <p>
                  Access approved background information, key messages and
                  supporting material.
                </p>
              </div>

              <ArrowRight size={19} />
            </div>
          </div>
        </div>
      </section>

      {/* PHOTO COLLECTIONS */}
      <section className="media-photo-section">
        <div className="media-resources-container">
          <div className="media-resources-section-heading">
            <span className="media-resources-kicker">Photography</span>

            <h2>Selected visual stories</h2>
          </div>

          <div className="media-photo-grid">
            {photoCollections.map((item) => (
              <article className="media-photo-card" key={item.title}>
                <div className="media-photo-image">
                  <img src={item.image} alt={item.title} />

                  <span className="media-photo-icon">
                    <Camera size={18} />
                  </span>
                </div>

                <div className="media-photo-content">
                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <Link to="/gallery/photos">
                    View Collection
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO STORIES */}
      <section className="media-video-section">
        <div className="media-resources-container">
          <div className="media-video-heading">
            <div>
              <span className="media-resources-kicker">Video Stories</span>

              <h2>Watch the work behind the service.</h2>
            </div>

            <Link to="/gallery/videos" className="media-outline-button">
              View All Videos
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="media-video-grid">
            {videoStories.map((video) => (
              <article className="media-video-card" key={video.title}>
                <div className="media-video-placeholder">
                  <div className="media-video-play">
                    <Play size={21} fill="currentColor" />
                  </div>
                </div>

                <div className="media-video-content">
                  <h3>{video.title}</h3>

                  <p>{video.description}</p>

                  <Link to="/gallery/videos">
                    Watch Story
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DOCUMENTS */}
      <section className="media-documents-section">
        <div className="media-resources-container">
          <div className="media-resources-section-heading">
            <span className="media-resources-kicker">
              Downloads & Information
            </span>

            <h2>Supporting media materials</h2>
          </div>

          <div className="media-document-grid">
            {mediaDocuments.map((item) => {
              const Icon = item.icon;

              return (
                <article className="media-document-card" key={item.title}>
                  <div className="media-document-icon">
                    <Icon size={22} />
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                  <button type="button">
                    Explore Resource
                    <ArrowRight size={16} />
                  </button>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* GUIDANCE */}
      <section className="media-guidance">
        <div className="media-resources-container">
          <div className="media-guidance-box">
            <span className="media-resources-kicker">Responsible Use</span>

            <h2>Using Department media responsibly</h2>

            <p>
              Media materials should be used in their approved context and with
              appropriate attribution. Particular care should be taken when
              publishing photographs or information involving individuals whose
              privacy, dignity or safeguarding may require additional
              protection.
            </p>

            <Link to="/contact">
              Contact the Department
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
