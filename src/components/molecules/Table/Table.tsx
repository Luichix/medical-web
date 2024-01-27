import React from 'react'
import classNames from 'classnames'
import styles from './Table.module.css'
import Column from './Column'
import Row from './Row'

export function Table({ headers, records, style, href }: any) {
  const orderRecords =
    records &&
    records.map((record: any) => {
      return headers.map((item: any) => {
        return {
          value: record[item.field],
          type: item.type,
        }
      })
    })

  return (
    <div className={styles.container}>
      <table className={classNames(styles.table, style)}>
        <thead className={styles.headerTable}>
          <Column
            styles={styles.th}
            headers={headers}
            headStyles={styles.headStyles}
          />
        </thead>
        <tbody className={styles.bodyTable}>
          {orderRecords ? (
            orderRecords.map((record: any, index: any) => {
              return (
                <Row
                  key={index}
                  records={record}
                  styles={styles.td}
                  href={href}
                />
              )
            })
          ) : (
            <tr className={styles.empty}>
              <td
                style={{
                  height: '50px',
                  textAlign: 'center',
                  color: '#545454',
                }}
                colSpan={headers.length ?? 0}
              >
                No se encontraron registros
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
