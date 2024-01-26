import React, { ReactNode } from 'react'
import { MdMedicalServices } from 'react-icons/md'
import { Card, Paragraph, Title } from '@/components/atoms'
import styles from './styles.module.css'
import Selector from '@/components/molecules/Selector'

export interface ListCardProps {
  records: any
  children: ReactNode
  onDelete: (idRecord: string) => void
  onUpdate: (item: any) => void
}

export const ListCard = ({
  records = [],
  onDelete,
  onUpdate,
  children,
}: ListCardProps) => {
  return (
    <div className={styles.collection}>
      {records.map((item: any) => (
        <div key={item.id} className={styles.container}>
          <Selector
            onDelete={() => onDelete(item.id)}
            onUpdate={() => onUpdate(item)}
          />
          <Card color="none" size="md" direction="vertical" dimension="none">
            <div className={styles.icon}>
              <MdMedicalServices />
            </div>

            <div className={styles.content}>
              <Title line="relaxed" size="xxs">
                {item.title}
              </Title>
              <Paragraph size="xxs" color="secondary">
                {item.description}
              </Paragraph>
            </div>
          </Card>
        </div>
      ))}
      {children}
    </div>
  )
}

export default ListCard
