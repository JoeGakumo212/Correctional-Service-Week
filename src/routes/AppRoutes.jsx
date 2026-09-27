import { Routes, Route } from 'react-router-dom';

import LandingPage from '../pages/landingPage/LandingPage';

// ABOUT
import AboutPage from '../pages/About/AboutPage';
import MandatePage from '../pages/About/MandatePage';
import LeadershipPage from '../pages/About/LeadershipPage';

// EVENTS
import EventsPage from '../pages/Events/EventsPage';
import ProgrammePage from '../pages/Events/ProgrammePage';
import RegistrationPage from '../pages/Events/RegistrationPage';

// AUTH
import LoginPage from '../pages/Auth/LoginPage';
import AccountPage from '../pages/Auth/AccountPage';

// PROGRAMS
import ProgramsPage from '../pages/Programs/ProgramsPage';
import Rehabilitation from '../pages/Programs/Rehabilitation';
import Innovation from '../pages/Programs/Innovation';
import GreenEnergy from '../pages/Programs/GreenEnergy';

// GALLERY
import GalleryPage from '../pages/Gallery/GalleryPage';
import PhotosPage from '../pages/Gallery/PhotosPage';
import VideosPage from '../pages/Gallery/VideosPage';
import MomentsPage from '../pages/Gallery/MomentsPage';

// NEWS
import NewsPage from '../pages/News/NewsPage';
import LatestUpdates from '../pages/News/LatestUpdates';
import Announcements from '../pages/News/Announcements';
import MediaResources from '../pages/News/MediaResources';
import NewsDetail from '../pages/News/NewsDetail';

// CONTACT
import ContactPage from '../pages/Contact/ContactPage';
import VenuePage from '../pages/Contact/VenuePage';
import HotelsPage from '../pages/Contact/HotelsPage';
import FAQPage from '../pages/Contact/FAQPage';

export default function AppRoutes() {
  return (
    <Routes>
      {/* HOME */}
      <Route path="/" element={<LandingPage />} />

      {/* =========================
          ABOUT
      ========================= */}
      <Route path="/about" element={<AboutPage />} />
      <Route path="/about/mandate" element={<MandatePage />} />
      <Route path="/about/leadership" element={<LeadershipPage />} />

      {/* =========================
          EVENTS
      ========================= */}
      <Route path="/events" element={<EventsPage />} />
      <Route path="/events/schedule" element={<ProgrammePage />} />
      <Route path="/events/register" element={<RegistrationPage />} />

      <Route
        path="/events/submit"
        element={<div>Submission page coming next.</div>}
      />

      {/* =========================
          ACCOUNT
      ========================= */}
      <Route path="/account/login" element={<LoginPage />} />
      <Route path="/account/create" element={<AccountPage />} />

      {/* =========================
          PROGRAMS
      ========================= */}
      <Route path="/programs" element={<ProgramsPage />} />
      <Route path="/programs/rehabilitation" element={<Rehabilitation />} />
      <Route path="/programs/innovation" element={<Innovation />} />
      <Route path="/programs/green-energy" element={<GreenEnergy />} />

      {/* =========================
          GALLERY
      ========================= */}
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/gallery/photos" element={<PhotosPage />} />
      <Route path="/gallery/videos" element={<VideosPage />} />
      <Route path="/gallery/moments" element={<MomentsPage />} />

      {/* =========================
          NEWS
      ========================= */}

      <Route path="/news" element={<NewsPage />} />
      <Route path="/news/latest-updates" element={<LatestUpdates />} />
      <Route path="/news/announcements" element={<Announcements />} />
      <Route path="/news/media-resources" element={<MediaResources />} />
      <Route path="/news/:id" element={<NewsDetail />} />

      {/* =========================
          CONTACT
      ========================= */}
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/contact/venue" element={<VenuePage />} />
      <Route path="/contact/hotels" element={<HotelsPage />} />
      <Route path="/contact/faq" element={<FAQPage />} />
      {/* =========================
          LEGAL
      ========================= */}
      <Route path="/privacy" element={<div>Privacy notice coming next.</div>} />

      <Route path="/terms" element={<div>Terms coming next.</div>} />
    </Routes>
  );
}
