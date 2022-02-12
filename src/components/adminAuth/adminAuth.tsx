import styles from './auth.module.scss'
import Button from '../Button/Button'

export const Auth: React.FunctionComponent = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_container}>
        <div className={styles.wrapper_container_title}>
          <p>Admin Panel</p>
        </div>
        <div className={styles.wrapper_container_header}>
          <p>Авторизация</p>
          <p>Введите логин и пароль</p>
        </div>
        <div className={styles.wrapper_container_authForm}>
          <div className={styles.wrapper_container_authForm_emailText}>
            <p>EMAIL</p>
          </div>
          <div className={styles.wrapper_container_authForm_inputEmail}>
            <input type="email" placeholder="Email Address" />
          </div>
          <div className={styles.wrapper_container_authForm_passwordText}>
            <p>PASSWORD</p>
          </div>
          <div className={styles.wrapper_container_authForm_inputPassword}>
            <input type="Password" placeholder="Password" />
          </div>
          <Button text="Войти" />
        </div>
      </div>
    </div>
  )
}
