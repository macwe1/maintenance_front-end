import styles from './index.module.scss'
import { useEffect, useState } from 'react'
import { SideBar } from '@components/sidebar/Sidebar'
import router from 'next/router'
import axios from 'axios'
export const adminIndex: React.FunctionComponent = () => {
  const [activeBlock, setActiveBlock] = useState(2)
  const [reqCounter, setReqCounter] = useState(null)
  const [reqCounterFinall, setreqCounterFinall] = useState(null)
  const [reqCounterCall, setreqCounterCall] = useState(null)
  const [token, setToken] = useState(null)
  useEffect(() => {
    setToken(window.localStorage.getItem('token'))
  }, [])
  useEffect(() => {
    !window.localStorage.getItem('token') && router.push('/admin/auth')
  }, [])
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  }
  axios
    .post(
      `http://127.0.0.1:3231/admin/stats`,
      {},
      {
        headers,
      }
    )
    .then((res) => {
      if (res.status === 200) {
        setReqCounter(res.data.requestCount)
        setreqCounterFinall(res.data.requestFinall)
        setreqCounterCall(res.data.requestCall)
      }
    })
    .catch((err) => {
      console.log(err)
    })
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
              <p>{reqCounter}</p>
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
              <p>{reqCounterFinall}</p>
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
              <p>{reqCounterCall}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
