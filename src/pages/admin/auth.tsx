import { AuthContainers } from '@containers/adminAuth/adminAuth'
import router from 'next/router'
import { useEffect } from 'react'
/**
 * Homepage
 */
const HomePage: React.FC = () => {
  useEffect(() => {
    window.localStorage.getItem('token') && router.push('/admin')
  }, [])

  return (
    <>
      <AuthContainers />
    </>
  )
}

export default HomePage