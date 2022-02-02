import styles from './footer.module.scss'
import Image from 'next/image'
import Logo from '@common/img/logo.png'
import Link from 'next/link'

export const Footer: React.FunctionComponent = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.footer_container_top}>
          <div className={styles.footer_container_top_logo}>
            <Image src={Logo} />
          </div>
          <div className={styles.footer_container_top_links}>
            <Link href="#">Главная</Link>
            <Link href="#">Услуги</Link>
            <Link href="#">Отзывы</Link>
            <Link href="#">О нас</Link>
            <Link href="#">Контакты</Link>
          </div>
        </div>
        <div className={styles.footer_container_separator}></div>
        <div className={styles.footer_container_bottom}>
          <div className={styles.footer_container_top_logo}></div>
          <div className={styles.footer_container_top_links}></div>
        </div>
      </div>
    </div>
  )
}
