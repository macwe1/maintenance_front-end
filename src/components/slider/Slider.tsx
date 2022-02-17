import styles from './slider.module.scss'
import back from '@common/img/back.png'
import Image from 'next/image'

export const Slider: React.FunctionComponent = () => {
  return (
    <div className={styles.slider}>
      <Image src={back} sizes="100%" role="presentation" priority={true} />
      <div className={styles.slider_line}>
        <div>
          <p>МЫ ВАША ЕДИНСТВЕННАЯ ОСТАНОВКА</p>
        </div>
        <div>
          <p>ПУНКТ НАЗНАЧЕНИЯ ДЛЯ РЕМОНТА!</p>
        </div>
      </div>
    </div>
  )
}
