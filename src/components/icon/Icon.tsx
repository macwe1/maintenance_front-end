import * as React from 'react'
import * as icons from './icons'

export type Icons = typeof icons
export type IconName = keyof Icons
export type IconSize = string
export type className = string

interface IconProps {
  name: IconName
  className?: className
  size?: IconSize
}

/**
 * Icon
 */
export const Icon: React.FC<IconProps> = ({ name, className }) => {
  const { viewBox, id } = icons[name]
  return (
    // <span className={`${styles.icon} ${styles[`icon--${size}`]}`}>
    <span className={`${className}`}>
      <svg viewBox={viewBox}>
        <use xlinkHref={`#${id}`} href={`#${id}`} />
      </svg>
    </span>
  )
}
