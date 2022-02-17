import React, { FC, useState } from 'react'
import { AppProps } from 'next/app'
import { storeWrapper } from '@store/store'
import '@common/css/layout.scss'
import { LoaderContainers } from '@containers/loader/Loader'

const CustomApp: FC<AppProps> = ({ Component, pageProps }) => {
  const [loading, setLoading] = useState(false)
  // console.log(`11111111111111111111111¶¶¶¶¶¶¶¶711111111
  // 111111111111111111111¶¶????????¶¶¶?11111
  // 11111111¶¶¶¶¶¶¶1111¶¶????????????¶¶?1111
  // 11111¶¶¶???????¶¶11¶??????????????¶¶?111
  // 111¶¶????????????¶¶¶???????????????¶¶?11
  // 11¶¶??????????????¶¶??¶¶¶¶?????????¶¶?11
  // 11¶??????????¶¶¶??¶¶??¶¶¶¶¶????????¶¶?11
  // 11¶?????????¶¶¶¶¶??¶¶??¶¶¶?????????¶¶?11
  // 11¶??????????¶¶¶???¶¶¶????????????¶¶¶¶?1
  // 11¶¶??????????????¶¶1¶¶¶????????¶¶¶11¶¶1
  // 111¶¶????????????¶¶1111¶¶¶¶¶¶¶¶¶¶1111¶¶1
  // 1111¶¶?????????¶¶¶?11111111111111111111¶
  // 1111¶¶¶¶¶¶¶¶¶¶¶¶11111111111111111111111¶
  // 1111¶1111111111111111111111111111111111¶
  // 111¶¶111111111111111111111111111111111¶¶
  // 111¶¶111111111111111111111111¶¶111111¶¶?
  // 1111¶¶11111111¶¶111111111111¶¶11111¶¶¶?1
  // 11111¶¶1111111111¶¶¶¶¶11111¶¶111¶¶¶¶¶?11
  // 1111111¶¶1111111111¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶?11111
  // 11111111¶¶¶¶¶1111111¶¶¶¶¶¶¶¶¶?1111111111`)

  setTimeout(() => {
    setLoading(false)
  }, 3000)

  return (
    <>
      {loading && <LoaderContainers />}
      <Component {...pageProps} />
    </>
  )
}

export default storeWrapper.withRedux(CustomApp)