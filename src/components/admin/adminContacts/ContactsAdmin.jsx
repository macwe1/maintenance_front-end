import styles from './contactsAdmin.module.scss'
import { SideBar } from '../sidebar/Sidebar'
import Button from '../../Button/Button'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css';
import { Formik, Field, Form } from 'formik'
import stylesButton from '../../Button/button.module.scss';

import * as Yup from 'yup';
const AddContactSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, 'Ф.И.О. не должно быть менее 2 символов!')
    .max(256, 'Слишком длинное Ф.И.О.!')
    .required('Введите Ф.И.О.'),
    nameCompany: Yup.string()
    .min(2, 'Короткое название компании!')
    .max(50, 'Слишком длинное название компании!')
    .required('Введите тип'),
    telephone: Yup.string()
    .min(2, 'Слишком короткий номер телефона!')
    .max(50, 'Слишком большая сумма!')
    .required('Введите номер телефона'),
    email: Yup.string()
    .min(2, 'Слишком короткий емейл!')
    .max(50, 'Слишком длинный емейл!')
    .required('Введите емейл'),
});
export const Contacts = () => {
  const [reqs, setReqs] = useState([])
  const token = window.localStorage.getItem("token")

  if(!token){
    window.location.href = '/admin/auth'
  }

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  const addContact = (data, setErrors) => {
    console.log(data)
    axios
      .post(
        `/admin/addContacts`,
        data,
        {
          headers,
        }
      )
      .then((res) => {
        console.log(res)
        if (res.status === 201) {
          setReqs(res.data.goods)
        }
      })
      .catch((err) => {
        setErrors({error: err.response.data.message})
      })
  }
  useEffect(() => {
    axios
      .post(
        `/admin/getContacts`,
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

  const destroyContactById = (id) => {
    axios
    .post(
      `/admin/delContact`,
      {
        id
      },
      {
        headers,
        
      }
    )
    .then((res) => {
      if (res.status === 200) {
        setReqs(res.data.req)
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }

  const handleClickDestroy = (id,e) => {
    destroyContactById(id)
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
            <p>Контакты</p>
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
                <p>Все контакты</p>
              </div>
            </div>
            <ul className={styles.table}>
              <li className={styles.table_header}>
                <div className={`${styles.col} ${styles.col1}`}>Ф.И.О.</div>
                <div className={`${styles.col} ${styles.col3}`}>Компания</div>
                <div className={`${styles.col} ${styles.col4}`}>Телефон</div>
                <div className={`${styles.col} ${styles.col4}`}>Емейл</div>
                <div className={`${styles.col} ${styles.col4}`}>Действие</div>
                <div
                  className={`${styles.col} ${styles.col5} ${styles.col6}`}
                ></div>
              </li>

              {reqs.length !== 0 ? (
                reqs.map((el) => (
                  <li style={{backgroundColor: '#fff'}}className={styles.table_header}>
                  <div className={`${styles.col} ${styles.col1}`}>{el.fullName}</div>
                  <div className={`${styles.col} ${styles.col3}`}>{el.nameCompany}</div>
                  <div className={`${styles.col} ${styles.col4}`}>{el.telephone}</div>
                  <div className={`${styles.col} ${styles.col4}`}>{el.email}</div>
                  <div className={`${styles.col} ${styles.col4}`}>
                    <Button click={handleClickDestroy.bind(this,el.id)}type='2' text="Удалить"/>
                    </div>
                  <div className={`${styles.col} ${styles.col5} ${styles.col6}`}></div>
              </li>
                ))
              ) : (
                <div>Контактов нет.</div>
              )}
            </ul>
            <div className={styles.interface_container_button}>
              <Popup trigger={
                <button className={stylesButton.primaryButton} style={{backgroundColor: "#F15B5B", color: "#fff"}}>Добавить товар</button>
              } position="right center"><div >
                <Formik
              validationSchema={AddContactSchema}
              initialValues={{
                fullName: '',
                nameCompany: '',
                telephone: '',
                email: '',
              }}
              onSubmit={(values, { setErrors, resetForm: any }) => {
                addContact(values, setErrors)
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
                    <p>Название компании</p>
                    <Field
                      name="nameCompany"
                      placeholder="Введите название компании"
                      type="text"
                    />
                    {errors.nameCompany && (
                      <p className={styles.promoTitle}>{errors.nameCompany}</p>
                    )}
                    <div className={styles.wrapper_container_authForm_passwordText}>
                  </div>
                  </div>
                  <div
                    className={styles.wrapper_container_authForm_inputPassword}
                    >
                    <p>Номер телефона</p>
                    <Field
                      name="telephone"
                      placeholder="Введите номер телефона"
                      type="text"
                    />
                    {errors.telephone && (
                      <p className={styles.promoTitle}>{errors.telephone}</p>
                    )}
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
      </div>
    </div>
  )
}
export default Contacts
