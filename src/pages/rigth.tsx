import { HeaderContainers } from '@containers/header/Header'
import { RightsContainers } from '@containers/rightReserv/Right'
import { FooterContainers } from '@containers/footer/Footer'

/**
 * Homepage
 */
const HomePage: React.FC = () => {
  return (
    <>
      <HeaderContainers />
      <RightsContainers />
      <FooterContainers />
    </>
  )
}

export default HomePage
