import styles from './button.module.scss'
import { useEffect, useState } from 'react'

interface ButtonProps {
  colorBack?: string
  colorFont?: string
  text?: string
  type?: number
  click?: () => void
}

const Button: React.FunctionComponent<ButtonProps> = ({
  colorBack,
  colorFont,
  text,
  type,
  click,
}) => {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    console.log(open)
  }, [open])
  return type === 1 ? (
    <button
      data-open={open}
      onClick={() => {
        open ? setOpen(false) : setOpen(true)
        click
      }}
      className={styles.primaryButton}
      style={{
        backgroundColor: colorBack ? colorBack : '#F15B5B',
        color: colorFont ? colorFont : '#fff',
      }}
    >
      {text}
    </button>
  ) : (
    <button
      className={styles.primaryButton}
      style={{
        backgroundColor: colorBack ? colorBack : '#F15B5B',
        color: colorFont ? colorFont : '#fff',
      }}
    >
      {text}
    </button>
  )
}

export default Button
