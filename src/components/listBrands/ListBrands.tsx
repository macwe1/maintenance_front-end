import styles from './listBrands.module.scss'
import Image from 'next/image'
import BMWBrand from '@common/img/bmw.webp'
import HondaBrand from '@common/img/honda.webp'
import FordBrand from '@common/img/ford.webp'
import Audirand from '@common/img/audi.webp'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const ListServices: React.FunctionComponent = () => {
  const banners = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  }
  return (
    <div className={styles.listBrands}>
      <div className={styles.listBrands_text}>
        <p>— TOP MANUFACTURERS</p>
        <p>Brands</p>
        <p>Our fleet includes the best cars of the following brands.</p>
      </div>
      <div className={styles.listBrands_backgroundAll}>
        <Slider {...banners}>
          <div className={styles.listBrands_backgroundAll_backgroundSlider}>
            <Image src={BMWBrand} alt="step" objectFit="contain" />
          </div>
          <div
            style={{ display: 'flex' }}
            className={styles.listBrands_backgroundAll_backgroundSlider}
          >
            <Image src={HondaBrand} alt="step" objectFit="contain" />
          </div>
          <div
            style={{ display: 'flex' }}
            className={styles.listBrands_backgroundAll_backgroundSlider}
          >
            <Image src={FordBrand} alt="step" objectFit="contain" />
          </div>
          <div
            style={{ display: 'flex' }}
            className={styles.listBrands_backgroundAll_backgroundSlider}
          >
            <Image src={Audirand} alt="step" objectFit="contain" />
          </div>
          <div
            style={{ display: 'flex' }}
            className={styles.listBrands_backgroundAll_backgroundSlider}
          >
            <Image src={HondaBrand} alt="step" objectFit="contain" />
          </div>
          <div
            style={{ display: 'flex' }}
            className={styles.listBrands_backgroundAll_backgroundSlider}
          >
            <Image src={FordBrand} alt="step" objectFit="contain" />
          </div>
        </Slider>
      </div>
    </div>
  )
}
