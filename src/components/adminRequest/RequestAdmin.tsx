import styles from './requestAdmin.module.scss'
import { SideBar } from '@components/sidebar/Sidebar'
import { feature } from '@components/feature/index'
export const Request: React.FunctionComponent = () => {
  feature({})
  return (
    <div className={styles.wrapper}>
      <SideBar />
      <div className={styles.wrapper_container}>
        <div className={styles.wrapper_container_header}>
          <div className={styles.wrapper_container_header_title}>
            <p>Заявки</p>
          </div>
          <div className={styles.wrapper_container_header_user}>
            <div className={styles.wrapper_container_header_user_nameUser}>
              <p>Admin</p>
            </div>
            <div
              className={styles.wrapper_container_header_user_iconUser}
            ></div>
          </div>
        </div>
        <div className={styles.wrapper_container_tableTop}>
          <div className={styles.wrapper_container_tableTop_block}>
            <div
              className={styles.wrapper_container_tableTop_block_headerBlock}
            >
              <div
                className={
                  styles.wrapper_container_tableTop_block_headerBlock_text
                }
              >
                <p>Все заявки</p>
              </div>
              <div
                className={
                  styles.wrapper_container_tableTop_block_headerBlock_sort
                }
              >
                <p>Sort</p>
              </div>
            </div>
            <div className={styles.wrapper_container_tableTop_block_table_top}>
              <div
                className={
                  styles.wrapper_container_tableTop_block_table_top_first
                }
              >
                Детали
              </div>
              <div
                className={
                  styles.wrapper_container_tableTop_block_table_top_second
                }
              >
                ФИО
              </div>
              <div
                className={
                  styles.wrapper_container_tableTop_block_table_top_three
                }
              >
                Дата
              </div>
            </div>
            <div className={styles.wrapper_container_tableTop_block_ticket}>
              <div
                className={
                  styles.wrapper_container_tableTop_block_ticket_separator
                }
              ></div>
              <div
                className={styles.wrapper_container_tableTop_block_ticket_one}
              >
                <div
                  className={
                    styles.wrapper_container_tableTop_block_ticket_one_name
                  }
                >
                  <p>Заявка</p>
                </div>
                <div
                  className={
                    styles.wrapper_container_tableTop_block_ticket_one_desc
                  }
                >
                  <p>Updating 1 day ago</p>
                </div>
              </div>
              <div
                className={styles.wrapper_container_tableTop_block_ticket_two}
              >
                <div
                  className={
                    styles.wrapper_container_tableTop_block_ticket_two_name
                  }
                >
                  <p>ФИО</p>
                </div>
                <div
                  className={
                    styles.wrapper_container_tableTop_block_ticket_two_desc
                  }
                >
                  <p>on 24 05 2022</p>
                </div>
              </div>
              <div
                className={styles.wrapper_container_tableTop_block_ticket_three}
              >
                <div
                  className={
                    styles.wrapper_container_tableTop_block_ticket_three_name
                  }
                >
                  <p>February 12.02.2022</p>
                </div>
                <div
                  className={
                    styles.wrapper_container_tableTop_block_ticket_three_desc
                  }
                >
                  <p>6:30 AM</p>
                </div>
              </div>
              <div
                className={
                  styles.wrapper_container_tableTop_block_ticket_separator
                }
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
