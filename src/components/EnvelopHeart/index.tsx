import styles from './styles.module.scss'

export function EnvelopHeart() {
  return (
    <div className={styles.main}>
      <span className='title'>#02 - Envelop Heart</span>
      <div className={styles.envelop}>
        <div className={styles.heart} />
      </div>
    </div>
  )
}
