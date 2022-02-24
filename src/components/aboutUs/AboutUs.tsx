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
          <div className={styles.wrapper_container_info_progress}>
            <div className={styles.wrapper_container_info_progress_bar}>
              <span className={styles.wrapper_container_info_progress_bar_text}>
                Клиенты
              </span>
              <div className={styles.wrapper_container_info_progress_bar_line}>
                <div
                  className={
                    styles.wrapper_container_info_progress_bar_line_red
                  }
                >
                  <div
                    className={
                      styles.wrapper_container_info_progress_bar_line_red_value
                    }
                  >
                    7000
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.wrapper_container_info_progress_bar}>
              <span className={styles.wrapper_container_info_progress_bar_text}>
                Завершенных работ
              </span>
              <div className={styles.wrapper_container_info_progress_bar_line}>
                <div
                  className={
                    styles.wrapper_container_info_progress_bar_line_red_two
                  }
                >
                  <div
                    className={
                      styles.wrapper_container_info_progress_bar_line_red_two_value
                    }
                  >
                    6400
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.wrapper_container_info_progress_bar}>
              <span className={styles.wrapper_container_info_progress_bar_text}>
                Деталей на складе
              </span>
              <div className={styles.wrapper_container_info_progress_bar_line}>
                <div
                  className={
                    styles.wrapper_container_info_progress_bar_line_red_three
                  }
                >
                  <div
                    className={
                      styles.wrapper_container_info_progress_bar_line_red_three_value
                    }
                  >
                    10100
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.wrapper_container_info_progress_bar}>
              <span className={styles.wrapper_container_info_progress_bar_text}>
                Заявок
              </span>
              <div className={styles.wrapper_container_info_progress_bar_line}>
                <div
                  className={
                    styles.wrapper_container_info_progress_bar_line_red_fouth
                  }
                >
                  <div
                    className={
                      styles.wrapper_container_info_progress_bar_line_red_fouth_value
                    }
                  >
                    3500
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
