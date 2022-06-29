import styles from './requestAdmin.module.scss'
import { SideBar } from '../sidebar/Sidebar'
import Button from '../../Button/Button'
import { Formik, Field, Form } from 'formik'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css';
import stylesButton from '../../Button/button.module.scss';

import { useEffect, useState } from 'react'
import axios from 'axios'

import * as Yup from 'yup';

const AddGoodSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, 'Ф.И.О. должно быть не менее 2 символов!')
    .max(256, 'Слишком длинное Ф.И.О.')
    .required('Введите Ф.И.О.'),
  telephone: Yup.string()
    .min(2, 'Телефон должен быть не менее 2 символов!')
    .max(50, 'Слишком длинный телефон!')
    .required('Введите телефон'),
  jobs: Yup.string()
    .min(2, 'Должность должна быть не менее 2 символов!')
    .max(50, 'Слишком длинная должность!')
    .required('Введите должность'),
  email: Yup.string()
    .min(2, 'Емейл должно быть не менее 2 символов!')
    .max(50, 'Слишком большое емейл!')
    .required('Введите емейл'),
});

export const Agents = () => {
  const [reqs, setReqs] = useState([])
  const token = window.localStorage.getItem("token")

  if(!token){
    window.location.href = '/admin/auth'
  }

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  useEffect(() => {
    axios
      .post(
        `/admin/getAgents`,
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
  }, [])

  const addAgent = (data, setErrors) => {
    axios
      .post(
        `/admin/addAgent`,
        data,
        {
          headers,
        }
      )
      .then((res) => {
        console.log(res)
        if (res.status === 200) {
          setReqs(res.data.requests)
        }
      })
      .catch((err) => {
        console.log(err)
        setErrors({error: err.response.data.message})
      })
  }

  const handleClickAccept = (id, e) => {
    axios
    .post(
      `/admin/delAgent`,
      {id},
      {
        headers,
      }
    )
    .then((res) => {
      console.log(res)
      if (res.status === 200) {
        setReqs(res.data.req)
      }
    })
  }

  const exitAccount = () => {
    localStorage.removeItem("token");
    window.location.href = '/admin/auth'
  }

  return (
    <div className={styles.wrapper}>
      <SideBar />
      <div className={styles.wrapper_container}>
        <div className={styles.wrapper_container_header}>
          <div className={styles.wrapper_container_header_title}>
            <p>Агенты</p>
          </div>
          <div className={styles.wrapper_container_header_user}>
          <div className={styles.indexWrapper_Overview_header_user_nameUser}>
              <p onClick={exitAccount}>Выйти</p>
            </div>
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
                <p>Список агетов</p>
              </div>
            </div>
            <ul className={styles.table}>
              <li className={styles.table_header}>
                <div className={`${styles.col} ${styles.col1}`}>Емейл</div>
                <div className={`${styles.col} ${styles.col3}`}>Должность</div>
                <div className={`${styles.col} ${styles.col4}`}>Ф.И.О.</div>
                <div className={`${styles.col} ${styles.col4}`}>Телефон</div>
                <div className={`${styles.col} ${styles.col4}`}>Действия</div>
                <div
                  className={`${styles.col} ${styles.col5} ${styles.col6}`}
                ></div>
              </li>
              {reqs.length !== 0 ? (
                reqs.map((el) => (
                  <li style={{backgroundColor: "#fff"}} className={styles.table_header}>
                    <div className={`${styles.col} ${styles.col1}`}>{el.email}</div>
                    <div className={`${styles.col} ${styles.col3}`}>{el.jobs}</div>
                    <div className={`${styles.col} ${styles.col4}`}>{el.fullName}</div>
                    <div className={`${styles.col} ${styles.col4}`}>{el.telephone}</div>
                    <div className={`${styles.col} ${styles.col4}`}>
                      <Button type='2' click={handleClickAccept.bind(this, el.id)} text="Удалить"/>
                    </div>
                    <div
                      className={`${styles.col} ${styles.col5} ${styles.col6}`}
                    ></div>
                  </li>
                ))
              ) : (
                <div>Агентов нет</div>
              )}
               <div className={styles.interface}>
            <div className={styles.interface_container}>
            <div className={styles.interface_container_button}>
              <Popup trigger={
              <button className={stylesButton.primaryButton} style={{backgroundColor: "#F15B5B", color: "#fff"}}>Добавить агента</button>
              } position="right center"><div>
                <Formik
              validationSchema={AddGoodSchema}
              initialValues={{
                fullName: '',
                jobs: '',
                email: '',
                telephone: '',
              }}
              onSubmit={(values, { setErrors,resetForm: any }) => {
                addAgent(values,setErrors)
              }}
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              render={({ values, errors }) => (
                <Form>
                  <div className={styles.wrapper_container_authForm_inputEmail}>
                    <p>Ф.И.О.</p>
                    <Field
                      name="fullName"
                      placeholder="Введите Ф.И.О."
                      type="text"
                    />
                    {errors.fullName && (
                      <p className={styles.promoTitle}>{errors.fullName}</p>
                    )}
                  </div>
                  <div
                    className={styles.wrapper_container_authForm_inputPassword}
                    >
                    <p>Должность</p>
                    <Field
                      name="jobs"
                      placeholder="Введите должность"
                      type="text"
                    />
                    {errors.jobs && (
                      <p className={styles.promoTitle}>{errors.jobs}</p>
                    )}
                    <div className={styles.wrapper_container_authForm_passwordText}>
                  </div>
                  </div>
                  <div
                    className={styles.wrapper_container_authForm_inputPassword}
                    >
                    <p>Емейл</p>
                    <Field
                      name="email"
                      placeholder="Введите емейл"
                      type="text"
                    />
                    {errors.email && (
                      <p className={styles.promoTitle}>{errors.email}</p>
                    )}
                  </div>
                  <div
                    className={styles.wrapper_container_authForm_inputPassword}
                    >
                    <p>Телефон</p>
                    <Field
                      name="telephone"
                      placeholder="Введите телефон"
                      type="text"
                    />
                    {errors.telephone && (
                      <p className={styles.promoTitle}>{errors.telephone}</p>
                    )}
                  </div>
                  {errors.error && (
                      <p className={styles.promoTitle}>{errors.error}</p>
                    )}
                  <Button style={{paddingTop:'10px'}}type="button" text="Добавить" />
                </Form>
                )}
              ></Formik>
              </div>
              </Popup>
            </div>
        </div>
          </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Agents