import styles from './Avatar.module.css'

export interface AvatarProps {
  uri: string
  alt: string
}

export const Avatar = ({ uri, alt }: AvatarProps) => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={uri} alt={alt} className={styles.avatar} />
  )
}
