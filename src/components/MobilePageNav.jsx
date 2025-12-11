import { useNavigate, useLocation } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function MobilePageNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const pages = [
    { path: '/', name: 'Home' },
    { path: '/servizi', name: 'Servizi' },
    { path: '/abbonamenti', name: 'Prezzi' },
    { path: '/chi-siamo', name: 'About' },
    { path: '/social', name: 'Social' },
    { path: '/contatti', name: 'Info' }
  ];

  const currentIndex = pages.findIndex(page => page.path === location.pathname);
  const prevPage = currentIndex > 0 ? pages[currentIndex - 1] : null;
  const nextPage = currentIndex < pages.length - 1 ? pages[currentIndex + 1] : null;

  return (
    <div className="mobile-page-nav">
      {prevPage && (
        <button
          className="mobile-nav-btn prev-btn"
          onClick={() => navigate(prevPage.path)}
          aria-label={`Vai a ${prevPage.name}`}
        >
          <FaChevronLeft />
          <span>{prevPage.name}</span>
        </button>
      )}
      {nextPage && (
        <button
          className="mobile-nav-btn next-btn"
          onClick={() => navigate(nextPage.path)}
          aria-label={`Vai a ${nextPage.name}`}
        >
          <span>{nextPage.name}</span>
          <FaChevronRight />
        </button>
      )}
    </div>
  );
}

