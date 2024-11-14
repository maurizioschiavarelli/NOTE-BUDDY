import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Fa scrollare la pagina in alto
  }, [location]); // Effettua lo scroll ogni volta che cambia la rotta

  return null; // Non viene renderizzato nulla, solo effetto collaterale
};

export default ScrollToTop;

