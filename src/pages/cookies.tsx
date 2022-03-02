import { HeaderContainers } from '@containers/header/Header'
import { CookiesContainers } from '@containers/cookies/Cookies'
import { FooterContainers } from '@containers/footer/Footer'

/**
 * Homepage
 */
const HomePage: React.FC = () => {
  return (
    <>
      <HeaderContainers />
      <CookiesContainers />
      <FooterContainers />
    </>
  )
}

export default HomePage
