import styles from './index.module.scss'
import { useState } from 'react'
import { SideBar } from '@components/sidebar/Sidebar'
export const adminIndex: React.FunctionComponent = () => {
  const [activeBlock, setActiveBlock] = useState(2)
  return (
    <div className={styles.indexWrapper}>
      <SideBar />
      <div className={styles.indexWrapper_Overview}>
        <div className={styles.indexWrapper_Overview_header}>
          <div className={styles.indexWrapper_Overview_header_title}>
            <p>Обзор</p>
          </div>
          <div className={styles.indexWrapper_Overview_header_user}>
            <div className={styles.indexWrapper_Overview_header_user_nameUser}>
              <p>Admin</p>
            </div>
            <div
              className={styles.indexWrapper_Overview_header_user_iconUser}
            ></div>
          </div>
        </div>
        <div className={styles.indexWrapper_Overview_content}>
          <div className={styles.indexWrapper_Overview_content_description}>
            {/* 1 */}
            <div
              onClick={() => setActiveBlock(1)}
              className={
                activeBlock === 1
                  ? `${styles.indexWrapper_Overview_content_description_block} && ${styles.activeBlock}`
                  : styles.indexWrapper_Overview_content_description_block
              }
            >
              <p>Кол-во заявок</p>
              <p>90</p>
            </div>
            {/* 2 */}
            <div
              onClick={() => setActiveBlock(2)}
              className={
                activeBlock === 2
                  ? `${styles.indexWrapper_Overview_content_description_block} && ${styles.activeBlock}`
                  : styles.indexWrapper_Overview_content_description_block
              }
            >
              <p>Выполненные заявки</p>
              <p>0</p>
            </div>
            {/* 3 */}
            <div
              onClick={() => setActiveBlock(3)}
              className={
                activeBlock === 3
                  ? `${styles.indexWrapper_Overview_content_description_block} && ${styles.activeBlock}`
                  : styles.indexWrapper_Overview_content_description_block
              }
            >
              <p>Кол-во звонков</p>
              <p>339</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
