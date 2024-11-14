import Hero from './Hero'
import DescriptionHome from './DescriptionHome'
import { Helmet } from 'react-helmet'
function Header () {
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
