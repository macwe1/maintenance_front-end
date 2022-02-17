import Link from 'next/link'
import styles from './footer.module.scss'

export const Footer: React.FunctionComponent = () => {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footerWrapper_content}>
        <div className={styles.footerWrapper_ft}></div>
        <div className={styles.footerWrapper_content_links}>
          <div className={styles.footerWrapper_content_links_link}>
            <Link href="#">Политика конфиденциальности</Link>
          </div>
          <div className={styles.footerWrapper_content_links_link}>
            <Link href="#">Использование cookies</Link>
          </div>
        </div>
      </div>
      <div className={styles.footerWrapper_separator}></div>
      <div className={styles.footerWrapper_content_terms}>
        <p>© Created by Macwel Group</p>
        <div className={styles.footerWrapper_content_terms_created}>
          <p>
            Copyright © 2022 Carobar.
            <span>
              <Link href="#"> All rights reserved.</Link>
            </span>{' '}
            and
            <span>
              <Link href="#"> cookies</Link>
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
