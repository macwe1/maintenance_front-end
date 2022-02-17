import styles from './sidebar.module.scss'
import { Icon } from '@components/icon/Icon'
import { useRouter } from 'next/router'

export const SideBar: React.FunctionComponent = () => {
  const router = useRouter()
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar_title}>
        <p>Admin Panel</p>
      </div>
      <div className={styles.sidebar_items}>
        <div
          className={
            router.asPath === '/admin'
              ? `${styles.sidebar_items_overwiew} &&
                    ${styles.activePage}
                  `
              : styles.sidebar_items_overwiew
          }
          onClick={() => router.push('/admin')}
        >
          <Icon className={styles.icon} name="overview" />
          Обзор
        </div>
        <div
          className={
            router.asPath === '/admin/request'
              ? `${styles.sidebar_items_request} &&
                    ${styles.activePage}
                  `
              : styles.sidebar_items_request
          }
          onClick={() => router.push('/admin/request')}
        >
          <Icon className={styles.icon} name="tickets" />
          Заявки
        </div>
        <div
          className={
            router.asPath === '/admin/contacts'
              ? `${styles.sidebar_items_contacts} &&
                    ${styles.activePage}
                  `
              : styles.sidebar_items_contacts
          }
          onClick={() => router.push('/admin/contacts')}
        >
          <Icon className={styles.icon} name="contacts" />
          Контакты
        </div>
        <div
          className={
            router.asPath === '/admin/agents'
              ? `${styles.sidebar_items_agents} &&
                ${styles.activePage}
              `
              : styles.sidebar_items_contacts
          }
          onClick={() => router.push('/admin/agents')}
        >
          <Icon className={styles.icon} name="agents" />
          Агенты
        </div>
        <div className={styles.sidebar_items_separator}></div>
        <div className={styles.sidebar_items_settings}>
          <Icon className={styles.icon} name="settings" />
          Настройки
        </div>
      </div>
    </div>
  )
}
