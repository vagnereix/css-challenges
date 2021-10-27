import styles from './styles.module.scss'

export function Coffee() {
  return (
    <div className={styles.main}>
      <span className='title'>#06 - Coffee Cup</span>
      <div className={styles.vapour}>
        <span style={{ ['--i' as string]: '3' }} />
        <span style={{ ['--i' as string]: '16' }} />
        <span style={{ ['--i' as string]: '5' }} />
        <span style={{ ['--i' as string]: '13' }} />
        <span style={{ ['--i' as string]: '20' }} />
        <span style={{ ['--i' as string]: '6' }} />
        <span style={{ ['--i' as string]: '14' }} />
        <span style={{ ['--i' as string]: '8' }} />
        <span style={{ ['--i' as string]: '17' }} />
        <span style={{ ['--i' as string]: '2' }} />
        <span style={{ ['--i' as string]: '9' }} />
        <span style={{ ['--i' as string]: '15' }} />
        <span style={{ ['--i' as string]: '4' }} />
      </div>
      <div className={styles.plate} />
      <div className={styles.cup}>
        <div className={styles.coffee} />
      </div>
    </div>
  )
}
