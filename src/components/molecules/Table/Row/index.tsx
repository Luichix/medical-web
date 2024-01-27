import React from 'react'
import Link from 'next/link'
import { BiDownload } from 'react-icons/bi'
import Image from 'next/image'
import classNames from 'classnames'

export const Row = ({
  records,
  styles,
  href,
}: {
  records: any
  styles: any
  href?: string
}) => {
  const handleClickRow = (redirect?: string) => {
    console.log('href', redirect)
  }

  return (
    <tr onClick={() => handleClickRow(href)}>
      {records.map((item: any, index: number) => {
        switch (item.type) {
          case 'string':
            return (
              <td key={index} className={styles}>
                <span content={item.value}>{item.value}</span>
              </td>
            )
          case 'user':
            return (
              <td
                key={index}
                className={classNames(
                  styles,
                  'flex items-center justify-start gap-2',
                )}
              >
                <Image
                  src={item.value.picture}
                  alt="profile picture"
                  height={32}
                  width={32}
                  className="rounded-full"
                />
                <span>{item.value.name}</span>
              </td>
            )
          case 'link':
            return (
              <td key={index} className={styles}>
                <span>
                  <Link href={`${href}${item.value}`}>View Profile</Link>
                </span>
              </td>
            )
          case 'file':
            return (
              <td key={index} className={styles}>
                <span>
                  <a
                    href={item.value}
                    style={{
                      color: '#2680C2',
                      fontSize: '24px',
                    }}
                    download
                  >
                    <BiDownload />
                  </a>
                </span>
              </td>
            )
          default:
            return <td key={index} className={styles}></td>
        }
      })}
    </tr>
  )
}

export default Row
