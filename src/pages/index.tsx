import { HeaderContainers } from '@containers/header/Header'
import { SliderContainers } from '@containers/slider/Slider'
import { ListServicesContainers } from '@containers/listServices/ListServices'
import { RequestContainers } from '@containers/request/Request'
import { ListBrandsContainers } from '@containers/listBrands/ListBrands'
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
      <FooterContainers />
    </>
  )
}

export default HomePage
