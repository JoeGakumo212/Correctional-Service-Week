import { useMemo, useState } from 'react';
import { ArrowRight, CalendarDays, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import './NewsPage.css';
import newsItems from './newsContent';

const categories = [
  'All News',
  'Latest Updates',
  'Announcements',
  'Media Resources',
];

export default function NewsPage({ initialCategory = 'All News' }) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredNews = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    return newsItems.filter((item) => {
      const matchesCategory =
        activeCategory === 'All News' || item.category === activeCategory;
      const matchesSearch =
        !query ||
        `${item.title} ${item.excerpt} ${item.category}`
          .toLowerCase()
          .includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  const featured = newsItems.find((item) => item.featured);

  return (
    <div className="news-page">
      <Navbar />

      <header className="news-hero">
        <div className="news-container">
          <span className="news-eyebrow">
            State Department for Correctional Services
          </span>
          <h1>
            News &amp; <span>Updates</span>
          </h1>
          <p>
            Stay informed about programmes, announcements, partnerships and
            stories shaping correctional services.
          </p>
        </div>
      </header>

      <main>
        <section
          className="news-feature-section"
          aria-labelledby="featured-news-title"
        >
          <div className="news-container">
            <div className="news-feature-grid">
              <div className="news-feature-image">
                <img src={featured.image} alt={featured.title} />
              </div>
              <div className="news-feature-copy">
                <span className="news-kicker">Featured update</span>
                <p className="news-date">
                  <CalendarDays size={15} /> {featured.date}
                </p>
                <h2 id="featured-news-title">{featured.title}</h2>
                <p>{featured.excerpt}</p>
                <Link className="news-link" to={`/news/${featured.id}`}>
                  Read full story <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section
          className="news-list-section"
          aria-labelledby="latest-news-title"
        >
          <div className="news-container">
            <div className="news-toolbar">
              <div>
                <span className="news-kicker">Newsroom</span>
                <h2 id="latest-news-title">Latest stories</h2>
              </div>
              <label className="news-search">
                <Search size={18} aria-hidden="true" />
                <span className="sr-only">Search news</span>
                <input
                  type="search"
                  placeholder="Search news"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                />
              </label>
            </div>

            <div
              className="news-categories"
              role="tablist"
              aria-label="News categories"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === category}
                  className={activeCategory === category ? 'active' : ''}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            {filteredNews.length > 0 ? (
              <div className="news-grid">
                {filteredNews.map((item) => (
                  <article className="news-card" key={item.id}>
                    <Link className="news-card-image" to={`/news/${item.id}`}>
                      <img src={item.image} alt={item.title} loading="lazy" />
                      <span>{item.category}</span>
                    </Link>
                    <div className="news-card-body">
                      <p className="news-date">
                        <CalendarDays size={14} /> {item.date}
                      </p>
                      <h3>
                        <Link to={`/news/${item.id}`}>{item.title}</Link>
                      </h3>
                      <p>{item.excerpt}</p>
                      <Link className="news-card-link" to={`/news/${item.id}`}>
                        Read more <ArrowRight size={16} />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <p className="news-empty">
                No stories match your search or selected category.
              </p>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
