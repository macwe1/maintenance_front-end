import styles from './request.module.scss'
import Image from 'next/image'
import back from '@common/img/back2.jpg'
import Button from '@components/Button/Button'
export const Request: React.FunctionComponent = () => {
  return (
    <div className={styles.request}>
      <div className={styles.test}>
        <Image
          src={back}
          width={'100%'}
          height={'100%'}
          sizes="100%"
          objectFit="cover"
        />
      </div>
      <div className={styles.request_container}>
        <div className={styles.request_container_text}>
          <p>—SEND A REQUEST</p>
          <p>Need to Rent a Luxury Car?</p>
          <p>
            Complete the form below and we'll contact you as soon as possible!
          </p>
        </div>
        <div className={styles.request_container_form}>
          <div className={styles.request_container_form_input}>
            <input type="text" placeholder="Введите ваше Ф.И.О." />
          </div>
          <div className={styles.request_container_form_input}>
            <input type="telephone" placeholder="Введите ваш номер телефона" />
          </div>
          <div className={styles.request_container_form_input}>
            <input type="email" placeholder="Введите ваш email" />
          </div>
          <div className={styles.request_container_form_input}>
            <input type="text" placeholder="Введите ваше сообщение" />
          </div>
          <Button text="Отправить заявку" />
        </div>
      </div>
    </div>
  )
}
