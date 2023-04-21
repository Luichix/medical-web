import React from 'react'
import classNames from 'classnames'
import styles from './Table.module.css'
import Column from './Column'
import Row from './Row'

export function Table({ headers, records, theme, style, href }: any) {
  const orderRecords = records.map((record: any) => {
    return headers.map((item: any) => {
      return {
        value: record[item.field],
        type: item.type,
      }
    })
  })

  return (
    <div className={styles.container}>
      <table className={classNames(styles.table, styles[theme], style)}>
        <thead className={styles.headerTable}>
          <Column
            styles={styles.th}
            headers={headers}
            headStyles={styles.headStyles}
          />
        </thead>
        <tbody className={styles.bodyTable}>
          {orderRecords.map((record: any, index: any) => {
            return (
              <Row
                key={index}
                records={record}
                styles={styles.td}
                href={href}
              />
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
