import React from 'react'
import styles from './Plan.module.css'
import { BsCheck2 } from 'react-icons/bs'
import { Title } from '../../atoms'

export const Plan = ({ data }: any) => {
  return (
    <div className={styles.typePlan}>
      <div className={styles.line}>
        <Title size="md" color="primary" isCentered={true}>
          {data.title}
        </Title>
      </div>
      <span className={styles.limitPlan}>
        <b>{data.subtitle}</b>
      </span>
      <div className={styles.points}>
        {data.points.map((item: string, index: number) => {
          return (
            <div key={index} className={styles.item}>
              <div className={styles.icon}>
                <BsCheck2 />
              </div>
              <span className={styles.text}>{item}</span>
            </div>
          )
        })}
        <button className={styles.button}>Comenzar</button>
      </div>
    </div>
  )
}
