import styles from './listServices.module.scss'
import Button from '@components/Button/Button'
import { Icon } from '@components/icon/Icon'
export const ListServices: React.FunctionComponent = () => {
  return (
    <div id="ListServices" className={styles.wrapper_services}>
      <div className={styles.wrapper_services_text}>
        <div className={styles.wrapper_services_info}>
          <p className={styles.wrapper_services_info_header}>НАШИ УСЛУГИ</p>
        </div>
        <div className={styles.wrapper_services_info}>
          <p className={styles.wrapper_services_info_textPostHeader}>
            НИЖЕ ПРИВЕДЕНЫ НЕКОТОРЫЕ ИЗ
          </p>
        </div>
        <div className={styles.wrapper_services_info}>
          <p className={styles.wrapper_services_info_textConst}>
            УСЛУГИ ПО РЕМОНТУ АВТОМОБИЛЕЙ, КОТОРЫЕ МЫ ПРЕДЛАГАЕМ:
          </p>
        </div>
        <div className={styles.wrapper_services_info}>
          <p className={styles.wrapper_services_info_textHeaderLast}>
            ПОЗНАКОМЬТЕСЬ С КВАЛИФИЦИРОВАННОЙ КОМАНДОЙ МЕХАНИКОВ С БОЛЕЕ ЧЕМ
            5-ЛЕТНИМ БЕЗУПРЕЧНЫМ ОПЫТОМ РАБОТЫ В АВТОРЕМОНТНОЙ ОТРАСЛИ! МЫ
            ИСПОЛЬЗУЕМ ТОЛЬКО ВЫСОКОКАЧЕСТВЕННЫЕ ДЕТАЛИ И СТРЕМИМСЯ СДЕЛАТЬ ВАШИ
            ПОЕЗДКИ БЕЗОПАСНЫМИ И КОМФОРТНЫМИ! МЫ ВСЕГДА РАДЫ ПОМОЧЬ ВАМ В
            РЕШЕНИИ ЭТИХ ЗАДАЧ.
          </p>
        </div>
        <a href="#request">
          <Button text="Оставить заявку" />
        </a>
      </div>
      <div className={styles.wrapper_services_listServices}>
        <div className={styles.wrapper_services_listServices_column}>
          <div className={styles.wrapper_services_listServices_column_point}>
            <Icon
              className={
                styles.wrapper_services_listServices_column_point_lessThan
              }
              name="lessThan"
            />
            Ремонт и замена трансмиссии
          </div>
          <div className={styles.wrapper_services_listServices_column_point}>
            <Icon
              className={
                styles.wrapper_services_listServices_column_point_lessThan
              }
              name="lessThan"
            />
            Ремонт КПП
          </div>
          <div className={styles.wrapper_services_listServices_column_point}>
            <Icon
              className={
                styles.wrapper_services_listServices_column_point_lessThan
              }
              name="lessThan"
            />
            Снятие и установка КПП
          </div>
          <div className={styles.wrapper_services_listServices_column_point}>
            <Icon
              className={
                styles.wrapper_services_listServices_column_point_lessThan
              }
              name="lessThan"
            />
            Ремонт тормозной системы
          </div>
          <div className={styles.wrapper_services_listServices_column_point}>
            <Icon
              className={
                styles.wrapper_services_listServices_column_point_lessThan
              }
              name="lessThan"
            />
            Ремонт подвески
          </div>
          <div className={styles.wrapper_services_listServices_column_point}>
            <Icon
              className={
                styles.wrapper_services_listServices_column_point_lessThan
              }
              name="lessThan"
            />
            Автоэлектрик
          </div>
          <div className={styles.wrapper_services_listServices_column_point}>
            <Icon
              className={
                styles.wrapper_services_listServices_column_point_lessThan
              }
              name="lessThan"
            />
            Компьютерная диагностика
          </div>
          <div className={styles.wrapper_services_listServices_column_point}>
            <Icon
              className={
                styles.wrapper_services_listServices_column_point_lessThan
              }
              name="lessThan"
            />
            Ремонт двигателя
          </div>
          <div className={styles.wrapper_services_listServices_column_point}>
            <Icon
              className={
                styles.wrapper_services_listServices_column_point_lessThan
              }
              name="lessThan"
            />
            Диагностика ходовой
          </div>
          <div className={styles.wrapper_services_listServices_column_point}>
            <Icon
              className={
                styles.wrapper_services_listServices_column_point_lessThan
              }
              name="lessThan"
            />
            Диагностика ДВС
          </div>
          <div className={styles.wrapper_services_listServices_column_point}>
            <Icon
              className={
                styles.wrapper_services_listServices_column_point_lessThan
              }
              name="lessThan"
            />
            Диагностика автомобиля
          </div>
          <div className={styles.wrapper_services_listServices_column_point}>
            <Icon
              className={
                styles.wrapper_services_listServices_column_point_lessThan
              }
              name="lessThan"
            />
            Ремонт двигателя
          </div>
        </div>
        <div className={styles.wrapper_services_listServices_column}>
          <div className={styles.wrapper_services_listServices_column}>
            <div className={styles.wrapper_services_listServices_column_point}>
              <Icon
                className={
                  styles.wrapper_services_listServices_column_point_lessThan
                }
                name="lessThan"
              />
              Регулярное ТО
            </div>
            <div className={styles.wrapper_services_listServices_column_point}>
              <Icon
                className={
                  styles.wrapper_services_listServices_column_point_lessThan
                }
                name="lessThan"
              />
              Шиномонтаж
            </div>
            <div className={styles.wrapper_services_listServices_column_point}>
              <Icon
                className={
                  styles.wrapper_services_listServices_column_point_lessThan
                }
                name="lessThan"
              />
              Замена сцепления
            </div>
            <div className={styles.wrapper_services_listServices_column_point}>
              <Icon
                className={
                  styles.wrapper_services_listServices_column_point_lessThan
                }
                name="lessThan"
              />
              Развал схождение
            </div>
            <div className={styles.wrapper_services_listServices_column_point}>
              <Icon
                className={
                  styles.wrapper_services_listServices_column_point_lessThan
                }
                name="lessThan"
              />
              Профессиональная диагностика двигателя
            </div>
            <div className={styles.wrapper_services_listServices_column_point}>
              <Icon
                className={
                  styles.wrapper_services_listServices_column_point_lessThan
                }
                name="lessThan"
              />
              Промывка радиатора печи без снятия
            </div>
            <div className={styles.wrapper_services_listServices_column_point}>
              <Icon
                className={
                  styles.wrapper_services_listServices_column_point_lessThan
                }
                name="lessThan"
              />
              Проточка тормозных дисков
            </div>
            <div className={styles.wrapper_services_listServices_column_point}>
              <Icon
                className={
                  styles.wrapper_services_listServices_column_point_lessThan
                }
                name="lessThan"
              />
              Ремонт ремня ГРМ
            </div>
            <div className={styles.wrapper_services_listServices_column_point}>
              <Icon
                className={
                  styles.wrapper_services_listServices_column_point_lessThan
                }
                name="lessThan"
              />
              Замена ШРУС
            </div>
            <div className={styles.wrapper_services_listServices_column_point}>
              <Icon
                className={
                  styles.wrapper_services_listServices_column_point_lessThan
                }
                name="lessThan"
              />
              Проточка передних тормозных дисков
            </div>
            <div className={styles.wrapper_services_listServices_column_point}>
              <Icon
                className={
                  styles.wrapper_services_listServices_column_point_lessThan
                }
                name="lessThan"
              />
              Ремонт охладителя
            </div>
            <div className={styles.wrapper_services_listServices_column_point}>
              <Icon
                className={
                  styles.wrapper_services_listServices_column_point_lessThan
                }
                name="lessThan"
              />
              Замена задних пневмобалонов
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
