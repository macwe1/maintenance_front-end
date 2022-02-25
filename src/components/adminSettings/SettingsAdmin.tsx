import styles from './settingsAdmin.module.scss'
import { SideBar } from '@components/sidebar/Sidebar'
import { feature } from '@components/feature/index'
import { useEffect, useState } from 'react'
import router from 'next/router'
import axios from 'axios'
export const Settings: React.FunctionComponent = () => {
  const [reqs, setReqs] = useState([])
  const [token, setToken] = useState(null)
  useEffect(() => {
    return setToken(window.localStorage.getItem('token'))
  }, [])

  useEffect(() => {
    !window.localStorage.getItem('token') && router.push('/admin/auth')
  }, [])
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  }
  useEffect(() => {
    axios
      .post(
        `http://api.vizet.macwel.live/admin/getAgents`,
        {},
        {
          headers,
        }
      )
      .then((res) => {
        if (res.status === 200) {
          setReqs(res.data.requests)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }, [token])
  return (
    <div className={styles.wrapper}>
      <SideBar />
      <div className={styles.wrapper_container}>
        <div className={styles.wrapper_container_header}>
          <div className={styles.wrapper_container_header_title}>
            <p>Контакты</p>
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
                <p>Все контакты</p>
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
            </div>
            {reqs.length !== 0 ? (
              reqs.map((el) => (
                <div className={styles.wrapper_container_tableTop_block_ticket}>
                  <div
                    className={
                      styles.wrapper_container_tableTop_block_ticket_one
                    }
                  >
                    <div
                      className={
                        styles.wrapper_container_tableTop_block_ticket_one_name
                      }
                    >
                      <p>{el.email}</p>
                    </div>
                    <div
                      className={
                        styles.wrapper_container_tableTop_block_ticket_one_desc
                      }
                    >
                      <p>{el.fullName}</p>
                    </div>
                  </div>
                  <div
                    className={
                      styles.wrapper_container_tableTop_block_ticket_two
                    }
                  >
                    <div
                      className={
                        styles.wrapper_container_tableTop_block_ticket_two_name
                      }
                    >
                      <p>{el.fullName}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div>Контактов нету</div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
