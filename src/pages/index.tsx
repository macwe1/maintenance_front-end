import { HeaderContainers } from '@containers/header/Header'
import { SliderContainers } from '@containers/slider/Slider'
import { ListServicesContainers } from '@containers/listServices/ListServices'
import { RequestContainers } from '@containers/request/Request'
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
    </>
  )
}

export default HomePage
