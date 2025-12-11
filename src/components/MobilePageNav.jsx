import { useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const PAGES = [
  { path: '/', name: 'Home' },
  { path: '/servizi', name: 'Servizi' },
  { path: '/abbonamenti', name: 'Prezzi' },
  { path: '/chi-siamo', name: 'About' },
  { path: '/social', name: 'Social' },
  { path: '/contatti', name: 'Info' }
];

/**
 * Mobile navigation component that shows previous/next page buttons
 * Only visible on mobile devices (< 768px)
 */
export default function MobilePageNav() {
  const navigate = useNavigate();
  const location = useLocation();

  // Memoize navigation data to avoid recalculation on every render
  const { prevPage, nextPage } = useMemo(() => {
    const currentIndex = PAGES.findIndex(page => page.path === location.pathname);

    return {
      prevPage: currentIndex > 0 ? PAGES[currentIndex - 1] : null,
      nextPage: currentIndex < PAGES.length - 1 ? PAGES[currentIndex + 1] : null
    };
  }, [location.pathname]);

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <nav className="mobile-page-nav" aria-label="Navigazione mobile tra pagine">
      {prevPage ? (
        <button
          className="mobile-nav-btn prev-btn"
          onClick={() => handleNavigation(prevPage.path)}
          aria-label={`Vai alla pagina precedente: ${prevPage.name}`}
          type="button"
        >
          <FaChevronLeft aria-hidden="true" />
          <span>{prevPage.name}</span>
        </button>
      ) : (
        <div className="mobile-nav-placeholder" aria-hidden="true" />
      )}

      {nextPage ? (
        <button
          className="mobile-nav-btn next-btn"
          onClick={() => handleNavigation(nextPage.path)}
          aria-label={`Vai alla pagina successiva: ${nextPage.name}`}
          type="button"
        >
          <span>{nextPage.name}</span>
          <FaChevronRight aria-hidden="true" />
        </button>
      ) : (
        <div className="mobile-nav-placeholder" aria-hidden="true" />
      )}
    </nav>
  );
}



