import { AuthContainers } from '@containers/adminAuth/adminAuth'
import router from 'next/router'
import { useEffect } from 'react'
/**
 * Homepage
 */
const HomePage: React.FC = () => {
  useEffect(() => {
    window.localStorage.removeItem('token')
    router.push('/admin/auth')
  }, [])

  return <></>
}

export default HomePage
