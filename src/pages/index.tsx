import { HeaderContainers } from '@containers/header/Header'
import SliderContainers from '@containers/slider/Slider'
import { ListServicesContainers } from '@containers/listServices/ListServices'
import { RequestContainers } from '@containers/request/Request'
import { ListBrandsContainers } from '@containers/listBrands/ListBrands'
import { FaqContainers } from '@containers/faq/FAQ'
import { FeedbackContainers } from '@containers/feedback/Feedback'
import { FooterContainers } from '@containers/footer/Footer'

/**
 * Homepage
 */
const HomePage: React.FC = () => {
  return (
    <>
      <HeaderContainers />
      <SliderContainers />
      <ListServicesContainers />
      <RequestContainers />
      <ListBrandsContainers />
      <FaqContainers />
      <FeedbackContainers />
      <FooterContainers />
    </>
  )
}

export default HomePage
