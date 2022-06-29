import styles from './header.module.scss'
import logo from '../../common/img/logo.png'
import { Vk, Youtube, Whatsapp, Telegram, ClockRegular, InstagramBrands, PhoneAlt } from '../SvgImporter'
export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_logo}>
        <img className={styles.header_logo_img} src={logo} alt="step" />
      </div>
      <div className={styles.header_top}>
        <div className={styles.header_top_container}>
          <div className={styles.header_top_container_socLink}>
            <a href="http://vk.com/">
              <Vk/>
            </a>
            <a href="http://whatsapp.com/">
              <Whatsapp/>
            </a>
          </div>
          <div className={styles.header_top_container_separator}></div>
          <div className={styles.header_top_container_workTime}>
            <ClockRegular/>
            <p>Часы работы: с 6:00 до 20:00, пн-сб</p>
          </div>
          <div className={styles.header_top_container_separator}></div>
          <div className={styles.header_top_container_menu}>
            <a href="tel:89123037544">
              <PhoneAlt/>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.header_menuWrapper}>
        <div className={styles.header_menuWrapper_container}>
          <div className={styles.header_menuWrapper_container_link}>
            <a href="/">
              Главная
            </a>
          </div>
          <div className={styles.header_menuWrapper_container_link}>
            <a href="/#ListServices">
             Услуги
            </a>
          </div>
          <div className={styles.header_menuWrapper_container_link}>
            <a href="/#Feedback">
              Отзывы
            </a>
          </div>
          <div className={styles.header_menuWrapper_container_link}>
            <a href="/About">
              О нас
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header
