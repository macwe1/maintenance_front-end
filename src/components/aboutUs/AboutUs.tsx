import styles from './aboutUs.module.scss'
export const AboutUs: React.FunctionComponent = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_container}>
        <div className={styles.wrapper_container_textHeader}>
          <div className={styles.wrapper_container_textHeader_title}>О нас</div>
          <div className={styles.wrapper_container_textHeader_desc}>
            Подробная информация о сервисе Carobar
          </div>
        </div>
        <div className={styles.wrapper_container_info}>
          <div className={styles.wrapper_container_info_text}>
            <p className={styles.wrapper_container_info_text_title}>
              Возникла проблема с автомобилем - Carobar всегда поможет вам!
            </p>
            <p className={styles.wrapper_container_info_text_desc}>
              Carobar был основан в 2010 году.
            </p>
            <p className={styles.wrapper_container_info_text_desc}>
              За это время мы помогли решить проблему с автомобилем огромному
              количеству людей.
            </p>
            <p className={styles.wrapper_container_info_text_desc}>
              Наши работники настоящие мастера своего дела, ваш автомобиль в
              надежных руках!
            </p>
          </div>
          <div className={styles.wrapper_container_info_picture}>
            <div className={styles.wrapper_container_info_picture_bg1}></div>
          </div>
        </div>
      </div>
    </div>
  )
}
