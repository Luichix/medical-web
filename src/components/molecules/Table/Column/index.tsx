import React from 'react'
import { SlOptionsVertical } from 'react-icons/sl'

export const Column = ({
  headers = [],
  headStyles,
  styles,
}: {
  headers: any
  headStyles: any
  styles: any
}) => {
  return (
    <tr>
      {headers.map((item: any, index: any) => (
        <th key={index} className={styles}>
          <span title={item.field} className={headStyles}>
            {item.name}
          </span>
        </th>
      ))}
    </tr>
  )
}

export default Column
