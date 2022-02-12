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
            <Icon className={styles.icon} name="vk" />
            <Icon className={styles.icon} name="youtube" />
            <Icon className={styles.icon} name="whatsapp" />
            <Icon className={styles.icon} name="telegram" />
          </div>
          <div className={styles.header_top_container_separator}></div>
          <div className={styles.header_top_container_workTime}>
            <Icon className={styles.icon} name="clockRegular" />
            <p>Working Hours - 6 AM To 8 PM SUNDAY CLOSED</p>
          </div>
          <div className={styles.header_top_container_separator}></div>
          <div className={styles.header_top_container_menu}>
            <Icon className={styles.icon} name="telegram" />
            <Icon className={styles.icon} name="telegram" />
            <Icon className={styles.icon} name="telegram" />
          </div>
        </div>
      </div>
      <div className={styles.header_menuWrapper}>
        <div className={styles.header_menuWrapper_container}>
          <div className={styles.header_menuWrapper_container_link}>
            <Link href="#" passHref>
              <a>Главная</a>
            </Link>
          </div>
          <div className={styles.header_menuWrapper_container_link}>
            <Link href="#" passHref>
              <a>Услуги</a>
            </Link>
          </div>
          <div className={styles.header_menuWrapper_container_link}>
            <Link href="#" passHref>
              <a>Отзывы</a>
            </Link>
          </div>
          <div className={styles.header_menuWrapper_container_link}>
            <Link href="#" passHref>
              <a>О нас</a>
            </Link>
          </div>
          <div className={styles.header_menuWrapper_container_link}>
            <Link href="#" passHref>
              <a>Контакты</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
