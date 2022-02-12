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
            <p>— FEEDBACK</p>
          </div>
          <div className={styles.feedbackWrapper_content_text_title}>
            <p>Testimonials</p>
          </div>
          <div className={styles.feedbackWrapper_content_text_fulltitle}>
            <p>
              Every day, dozens of people go to work or travel by cars rented
              with FASTCAR.
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
            <p>Jane McCallan</p>
          </div>
          <div className={styles.feedbackWrapper_content_info_proffesion}>
            <p>Marketing Director at Pepsi Co.</p>
          </div>
          <div className={styles.feedbackWrapper_content_info_feedback}>
            <p>
              I am completely satisfied with the services of this company. I
              often rent cars with FASTCAR for business meetings, driving to
              work, etc. I am pleased with the excellent technical condition of
              the cars, favorable rental conditions. And the staff is always
              friendly.
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
