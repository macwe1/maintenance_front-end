import styles from './feedback.module.scss'
import Image from 'next/image'
import Client1 from '@common/img/Client1.jpg'
import { Icon } from '@components/icon/Icon'

export const Feedback: React.FunctionComponent = () => {
  return (
    <div className={styles.feedbackWrapper}>
      <div className={styles.feedbackWrapper_content}>
        <div className={styles.feedbackWrapper_content_text}>
          <div className={styles.feedbackWrapper_content_text_header}>
            <p>— ОБРАТНАЯ СВЯЗЬ</p>
          </div>
          <div className={styles.feedbackWrapper_content_text_title}>
            <p>Отзывы</p>
          </div>
          <div className={styles.feedbackWrapper_content_text_fulltitle}>
            <p>
              Ежедневно десятки людей обращаются к нам, для того чтобы их
              автомобиль не имел никаких проблем
            </p>
          </div>
        </div>
        <div className={styles.feedbackWrapper_content_info}>
          <Image
            className={styles.feedbackWrapper_content_info_img}
            src={Client1}
            alt="step"
          />
          <div className={styles.feedbackWrapper_content_info_name}>
            <p>Джейн МакКаллан</p>
          </div>
          <div className={styles.feedbackWrapper_content_info_proffesion}>
            <p>Директор по маркетингу в Pepsi Co.</p>
          </div>
          <div className={styles.feedbackWrapper_content_info_feedback}>
            <p>
              Я полностью довольна услугами этой компании. Я часто ремонтирую
              свой автомобиль с FASTCAR.
            </p>
          </div>
          <div className={styles.feedbackWrapper_content_info_sliderArrow1}>
            <Icon className={styles.icon} name="arrow" />
          </div>
          <div className={styles.feedbackWrapper_content_info_sliderArrow2}>
            <Icon className={styles.icon} name="arrow" />
          </div>
        </div>
      </div>
    </div>
  )
}
