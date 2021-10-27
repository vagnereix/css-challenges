import styles from './styles.module.scss'

export function GitLogo() {
  return (
    <div className={styles.main}>
      <span className='title'>#03 - Git Logo</span>
      <div className={styles.git}>
        <div className={styles.firstLine} />
        <div className={styles.secondLine} />
      </div>
    </div>
  )
}
