import { ArrowLeft, CalendarDays } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import newsItems from './newsContent';
import './NewsPage.css';
import './NewsDetail.css';

export default function NewsDetail() {
  const { id } = useParams();
  const article = newsItems.find((item) => String(item.id) === id);

  if (!article) {
    return (
      <div className="news-page">
        <Navbar />
        <main className="news-not-found">
          <div className="news-container">
            <span className="news-kicker">Newsroom</span>
            <h1>Story not found</h1>
            <p>The news story you are looking for is not available.</p>
            <Link className="news-link" to="/news">
              <ArrowLeft size={17} /> Back to News
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="news-page">
      <Navbar />

      <main>
        <article className="news-detail">
          <div className="news-container">
            <Link className="news-back-link" to="/news">
              <ArrowLeft size={17} /> Back to News
            </Link>

            <div className="news-detail-header">
              <span className="news-kicker">{article.category}</span>
              <p className="news-date">
                <CalendarDays size={15} /> {article.date}
              </p>
              <h1>{article.title}</h1>
              <p className="news-detail-intro">{article.excerpt}</p>
            </div>

            <div className="news-detail-image">
              <img src={article.image} alt={article.title} />
            </div>

            <div className="news-detail-layout">
              <div className="news-detail-body">
                <p>{article.body || article.excerpt}</p>
                <p>
                  The Department remains committed to clear public
                  communication, responsible partnerships and service approaches
                  that support rehabilitation, reintegration and safer
                  communities.
                </p>
              </div>

              <aside className="news-detail-aside">
                <span className="news-kicker">Related information</span>
                <p>
                  Explore more stories from the State Department for
                  Correctional Services.
                </p>
                <Link className="news-link" to="/news/latest-updates">
                  View Latest Updates
                </Link>
              </aside>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
