import React from 'react'
import styles from './styles.module.css'
import classNames from 'classnames'

const CircleChart = () => {
  return (
    <svg viewBox="0 0 36 36" className={styles.circular}>
      {/* <!-- First/background circle --> */}
      <path
        className={styles.bgCircle}
        d="M18 2.0845
a 15.9155 15.9155 0 0 1 0 31.831
a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      {/* <!-- Blue circle --> */}
      <path
        className={classNames(styles.circle, styles.blue)}
        strokeDasharray="100, 100"
        d="M18 2.0845
a 15.9155 15.9155 0 0 1 0 31.831
a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      {/* <!-- Orange circle --> */}
      <path
        className={classNames(styles.circle, styles.orange)}
        strokeDasharray="75, 100"
        d="M18 2.0845
a 15.9155 15.9155 0 0 1 0 31.831
a 15.9155 15.9155 0 0 1 0 -31.831"
        strokeLinecap="round"
      />
      {/* <!-- Purple circle --> */}
      <path
        className={classNames(styles.circle, styles.purple)}
        strokeDasharray="25, 100"
        d="M18 2.0845
a 15.9155 15.9155 0 0 1 0 31.831
a 15.9155 15.9155 0 0 1 0 -31.831"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default CircleChart
