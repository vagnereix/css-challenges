import styles from './styles.module.scss'

export function Diamond() {
  return (
    <div className={styles.main}>
      <span className='title'>#01 - Diamond</span>
      <div className={styles.diamond}>
        <a />
        <a />
        <a />
        <a />
      </div>
    </div>
  )
}
