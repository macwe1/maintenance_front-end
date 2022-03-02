import styles from './header.module.scss'
import { Icon } from '@components/icon/Icon'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@common/img/logo.png'

export const Header: React.FunctionComponent = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_logo}>
        <Image className={styles.header_logo_img} src={logo} alt="step" />
      </div>
      <div className={styles.header_top}>
        <div className={styles.header_top_container}>
          <div className={styles.header_top_container_socLink}>
            <a href="http://vk.com/">
              <Icon className={styles.icon} name="vk" />
            </a>
            <a href="http://youtube.com/">
              <Icon className={styles.icon} name="youtube" />
            </a>
            <a href="http://whatsapp.com/">
              <Icon className={styles.icon} name="whatsapp" />
            </a>
            <a href="http://telegram.com/">
              <Icon className={styles.icon} name="telegram" />
            </a>
          </div>
          <div className={styles.header_top_container_separator}></div>
          <div className={styles.header_top_container_workTime}>
            <Icon className={styles.icon} name="clockRegular" />
            <p>Часы работы: с 6:00 до 20:00, пн-сб</p>
          </div>
          <div className={styles.header_top_container_separator}></div>
          <div className={styles.header_top_container_menu}>
            <a href="http://instagram.com/">
              <Icon className={styles.icon} name="instagramBrands" />
            </a>
            <a href="tel:89123037544">
              <Icon className={styles.icon} name="phoneAlt" />
            </a>
            <a href="http://telegram.com/">
              <Icon className={styles.icon} name="telegram" />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.header_menuWrapper}>
        <div className={styles.header_menuWrapper_container}>
          <div className={styles.header_menuWrapper_container_link}>
            <Link href="/" passHref>
              <a>Главная</a>
            </Link>
          </div>
          <div className={styles.header_menuWrapper_container_link}>
            <Link href="#ListServices" passHref>
              <a>Услуги</a>
            </Link>
          </div>
          <div className={styles.header_menuWrapper_container_link}>
            <Link href="#Feedback" passHref>
              <a>Отзывы</a>
            </Link>
          </div>
          <div className={styles.header_menuWrapper_container_link}>
            <Link href="aboutUs" passHref>
              <a>О нас</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
