import styles from './requestAdmin.module.scss'
import { SideBar } from '@components/sidebar/Sidebar'
import { feature } from '@components/feature/index'
export const Request: React.FunctionComponent = () => {
  feature({})
  return (
    <div className={styles.wrapper}>
      <SideBar />
      <div className={styles.wrapper_container}>
        <div className={styles.wrapper_container_header}>Все заявки</div>
        <div className={styles.wrapper_container_tableTop}>
          <div className={styles.wrapper_container_tableTop_first}>Детали</div>
          <div className={styles.wrapper_container_tableTop_second}>ФИО</div>
          <div className={styles.wrapper_container_tableTop_three}>Дата</div>
        </div>
      </div>
    </div>
  )
}
