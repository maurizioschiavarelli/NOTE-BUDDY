import Hero from './Hero'
import DescriptionHome from './DescriptionHome'
import { Helmet } from 'react-helmet'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Header () {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll ogni volta che cambia la rotta
  }, [location]);

  return (
    <>
      <Helmet>
        <title>noteBuddy</title>
      </Helmet>

      <Hero />
      <DescriptionHome />
    </>
  )
}

export default Header
