import { useEffect, useRef, useState } from 'react';
import { CalendarDays, ChevronDown, Menu, Moon, Sun, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import './Navbar.css';

const navItems = [
  {
    label: 'Home',
    href: '/',
  },

  {
    label: 'About',
    children: [
      { label: 'About the Event', href: '/about' },
      { label: 'Our Mandate', href: '/about/mandate' },
      { label: 'Leadership & Partners', href: '/about/leadership' },
    ],
  },

  {
    label: 'Events',
    children: [
      { label: 'Event Overview', href: '/events' },
      { label: 'Programme Schedule', href: '/events/schedule' },
      { label: 'Register / RSVP', href: '/events/register' },
    ],
  },

  {
    label: 'Programs',
    children: [
      {
        label: 'Programs Overview',
        href: '/programs',
      },
      {
        label: 'Rehabilitation',
        href: '/programs/rehabilitation',
      },
      {
        label: 'Innovation & Technology',
        href: '/programs/innovation',
      },
      {
        label: 'Green Energy Initiatives',
        href: '/programs/green-energy',
      },
    ],
  },

  {
    label: 'Gallery',
    children: [
      { label: 'Gallery Overview', href: '/gallery' },
      { label: 'Photo Gallery', href: '/gallery/photos' },
      { label: 'Video Highlights', href: '/gallery/videos' },
      { label: 'Event Moments', href: '/gallery/moments' },
    ],
  },

  {
    label: 'News',
    children: [
      { label: 'Latest Updates', href: '/news' },
      { label: 'Announcements', href: '/news/announcements' },
      { label: 'Media Resources', href: '/news/media-resources' },
    ],
  },

  {
    label: 'Contact',
    children: [
      { label: 'Contact the Secretariat', href: '/contact' },
      { label: 'Venue & Directions', href: '/contact/venue' },
      { label: 'Hotels & Accommodation', href: '/contact/hotels' },
      { label: 'Frequently Asked Questions', href: '/contact/faq' },
    ],
  },
];

const defaultAccessibility = {
  fontScale: 1,
  highContrast: false,
  grayscale: false,
  lightBackground: false,
  underlineLinks: false,
  readableFont: false,
};

export default function Navbar() {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [accessibilityOpen, setAccessibilityOpen] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === 'undefined') return false;

    return window.localStorage?.getItem('theme') === 'dark';
  });

  const [accessibility, setAccessibility] = useState(() => {
    if (typeof window === 'undefined') {
      return defaultAccessibility;
    }

    try {
      return {
        ...defaultAccessibility,
        ...JSON.parse(window.localStorage?.getItem('accessibility') || '{}'),
      };
    } catch {
      return defaultAccessibility;
    }
  });

  const accessibilityRef = useRef(null);

  const closeMenus = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  const navigateTo = (href) => {
    closeMenus();
    navigate(href);
  };

  useEffect(() => {
    document.documentElement.dataset.theme = isDarkMode ? 'dark' : 'light';

    window.localStorage?.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  useEffect(() => {
    const root = document.documentElement;

    root.style.setProperty('--font-scale', String(accessibility.fontScale));

    root.classList.toggle(
      'accessibility-high-contrast',
      accessibility.highContrast,
    );

    root.classList.toggle('accessibility-grayscale', accessibility.grayscale);

    root.classList.toggle(
      'accessibility-light-background',
      accessibility.lightBackground,
    );

    root.classList.toggle(
      'accessibility-underline-links',
      accessibility.underlineLinks,
    );

    root.classList.toggle(
      'accessibility-readable-font',
      accessibility.readableFont,
    );

    window.localStorage?.setItem(
      'accessibility',
      JSON.stringify(accessibility),
    );
  }, [accessibility]);

  useEffect(() => {
    const closeOnOutsideClick = (event) => {
      if (!accessibilityRef.current?.contains(event.target)) {
        setAccessibilityOpen(false);
      }
    };

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setAccessibilityOpen(false);
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', closeOnOutsideClick);
    document.addEventListener('keydown', closeOnEscape);

    return () => {
      document.removeEventListener('mousedown', closeOnOutsideClick);

      document.removeEventListener('keydown', closeOnEscape);
    };
  }, []);

  const updateAccessibility = (key, value) => {
    setAccessibility((current) => ({
      ...current,
      [key]: value,
    }));
  };

  const resetAccessibility = () => {
    setAccessibility(defaultAccessibility);
  };

  return (
    <header className="navbar">
      <div className="container nav-container">
        {/* BRAND */}
        <a
          href="/"
          className="brand"
          onClick={(event) => {
            event.preventDefault();
            navigateTo('/');
          }}
        >
          <div className="brand-identity">
            <img
              src="/images/crest1.webp"
              alt="Arms of Government"
              className="crest"
            />

            <span className="brand-divider" aria-hidden="true" />

            <img
              src="/images/correctional-service-stripes-original.png"
              alt="Correctional Service Week"
              className="service-stripes"
            />
          </div>

          <div className="brand-text">
            <strong>STATE DEPARTMENT FOR CORRECTIONAL SERVICES</strong>

            <span>Rehabilitation • Security • A Safer Society</span>
          </div>
        </a>

        {/* MOBILE ACTIONS */}
        <div className="nav-actions-mobile">
          <button
            className="nav-icon-button"
            type="button"
            onClick={() => setIsDarkMode((value) => !value)}
            aria-label={isDarkMode ? 'Use light mode' : 'Use dark mode'}
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            className="mobile-toggle"
            type="button"
            onClick={() => {
              setMenuOpen((value) => !value);
              setOpenDropdown(null);
            }}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* NAVIGATION */}
        <nav
          id="primary-navigation"
          className={`nav-links ${menuOpen ? 'open' : ''}`}
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <div className="nav-item" key={item.label}>
              {item.children ? (
                <>
                  <button
                    className="nav-link nav-dropdown-trigger"
                    type="button"
                    onClick={() =>
                      setOpenDropdown((current) =>
                        current === item.label ? null : item.label,
                      )
                    }
                    aria-haspopup="menu"
                    aria-expanded={openDropdown === item.label}
                  >
                    {item.label}

                    <ChevronDown size={14} aria-hidden="true" />
                  </button>

                  <div
                    className={`dropdown-menu ${
                      openDropdown === item.label ? 'open' : ''
                    }`}
                    role="menu"
                  >
                    {item.children.map((child) => (
                      <a
                        href={child.href}
                        key={child.label}
                        role="menuitem"
                        onClick={(event) => {
                          event.preventDefault();
                          navigateTo(child.href);
                        }}
                      >
                        <span className="dropdown-link-label">
                          {child.label}
                        </span>
                      </a>
                    ))}
                  </div>
                </>
              ) : (
                <a
                  className="nav-link"
                  href={item.href}
                  onClick={(event) => {
                    event.preventDefault();
                    navigateTo(item.href);
                  }}
                >
                  {item.label}
                </a>
              )}
            </div>
          ))}

          {/* REGISTER BUTTON */}
          <button
            className="register-button"
            type="button"
            onClick={() => navigateTo('/events/register')}
          >
            <CalendarDays size={17} aria-hidden="true" />
            Register / RSVP
          </button>
        </nav>

        {/* DESKTOP TOOLS */}
        <div className="nav-tools" ref={accessibilityRef}>
          <div className="nav-utility-group">
            <button
              className="nav-tool-button"
              type="button"
              onClick={() => setIsDarkMode((value) => !value)}
              aria-label={isDarkMode ? 'Use light mode' : 'Use dark mode'}
            >
              {isDarkMode ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            <button
              className="accessibility-trigger"
              type="button"
              onClick={() => setAccessibilityOpen((value) => !value)}
              aria-expanded={accessibilityOpen}
              aria-controls="accessibility-panel"
            >
              A<span className="accessibility-trigger-plus">+</span>
              <span className="sr-only">Accessibility tools</span>
            </button>
          </div>

          {/* ACCESSIBILITY PANEL */}
          {accessibilityOpen && (
            <aside
              id="accessibility-panel"
              className="accessibility-panel"
              aria-label="Accessibility tools"
            >
              <div className="accessibility-heading">
                <strong>Accessibility tools</strong>

                <button
                  type="button"
                  onClick={() => setAccessibilityOpen(false)}
                  aria-label="Close accessibility tools"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="accessibility-size-row">
                <button
                  type="button"
                  onClick={() =>
                    updateAccessibility(
                      'fontScale',
                      Math.min(1.35, accessibility.fontScale + 0.1),
                    )
                  }
                >
                  A+ Increase text
                </button>

                <button
                  type="button"
                  onClick={() =>
                    updateAccessibility(
                      'fontScale',
                      Math.max(0.9, accessibility.fontScale - 0.1),
                    )
                  }
                >
                  A− Decrease text
                </button>
              </div>

              <p className="accessibility-status">
                Text size: {Math.round(accessibility.fontScale * 100)}%
              </p>

              <label>
                <input
                  type="checkbox"
                  checked={accessibility.grayscale}
                  onChange={(event) =>
                    updateAccessibility('grayscale', event.target.checked)
                  }
                />
                Grayscale
              </label>

              <label>
                <input
                  type="checkbox"
                  checked={accessibility.highContrast}
                  onChange={(event) =>
                    updateAccessibility('highContrast', event.target.checked)
                  }
                />
                High contrast
              </label>

              <label>
                <input
                  type="checkbox"
                  checked={accessibility.lightBackground}
                  onChange={(event) =>
                    updateAccessibility('lightBackground', event.target.checked)
                  }
                />
                Light background
              </label>

              <label>
                <input
                  type="checkbox"
                  checked={accessibility.underlineLinks}
                  onChange={(event) =>
                    updateAccessibility('underlineLinks', event.target.checked)
                  }
                />
                Underline links
              </label>

              <label>
                <input
                  type="checkbox"
                  checked={accessibility.readableFont}
                  onChange={(event) =>
                    updateAccessibility('readableFont', event.target.checked)
                  }
                />
                Readable font
              </label>

              <button
                className="accessibility-reset"
                type="button"
                onClick={resetAccessibility}
              >
                Reset all settings
              </button>
            </aside>
          )}
        </div>
      </div>

      <div className="navbar-kenya-line" aria-hidden="true" />
    </header>
  );
}
