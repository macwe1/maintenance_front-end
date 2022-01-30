import styles from './button.module.scss'

interface ButtonProps {
  colorBack?: string
  colorFont?: string
  text?: string
}

const Button: React.FunctionComponent<ButtonProps> = ({
  colorBack,
  colorFont,
  text,
}) => {
  return (
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
