import styles from './loader.module.scss'

export const Loader: React.FunctionComponent = () => {
  return (
    <div className={styles.wrapperLoader}>
      <div className={styles.wrapperLoader_status}>
        <div className={styles.wrapperLoader_status_img}></div>
        <div className={styles.wrapperLoader_status_balls}>
          <div className={styles.wrapperLoader_status_balls_ball}></div>
          <div className={styles.wrapperLoader_status_balls_ball}></div>
          <div className={styles.wrapperLoader_status_balls_ball}></div>
        </div>
      </div>
    </div>
  )
}
