import React, { PropsWithChildren, useState } from 'react'
import { Node } from './Node'
import styles from './FamilyTree.module.css'

/* ----------------------- Third Family Tree Component ---------------------- */

interface ChildProps {
  name: string
}

interface ParentProps {
  paternal: PersonProps
  maternal: PersonProps
  child?: ChildProps[]
}

interface PersonProps {
  name: string
  parent?: ParentProps
  isPerson?: boolean
}
export const NewTree: React.FC<ParentProps> = (parent) => {
  const renderNode = (parent: any) => {
    return (
      <div className={styles.newNode}>
        <div className={styles.newParentNode}>
          {parent.paternal?.parent && (
            <div className={styles.newNode}>
              {renderNode(parent.paternal.parent)}
            </div>
          )}
          {parent.maternal?.parent && (
            <div className={styles.newNode}>
              {renderNode(parent.maternal.parent)}
            </div>
          )}
        </div>
        <div className={styles.newNode}>
          <MyTreeNode parent={parent} />
        </div>
      </div>
    )
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        padding: '20px',
      }}
    >
      {renderNode(parent)}
      {parent.child && (
        <div className={styles.newNode}>
          <MyChildNode child={parent.child} />
        </div>
      )}
    </div>
  )
}

export default function MyTreeNode({
  parent,
  children,
}: PropsWithChildren<any>) {
  return (
    <div className={styles.parent}>
      <div className={styles.parentNode}>
        {parent.maternal?.parent?.child && (
          <MyChildNode child={parent.maternal?.parent?.child} />
        )}
        {parent.maternal && (
          <Node
            name={parent.maternal.name}
            type={parent.maternal.isPerson ? 'patient' : 'family'}
          />
        )}
        <Node
          name={parent.paternal.name}
          type={parent.paternal.isPerson ? 'patient' : 'family'}
        />
        {parent.paternal?.parent?.child && (
          <MyChildNode child={parent.paternal?.parent?.child} />
        )}
      </div>
      {children}
    </div>
  )
}

const MyChildNode = ({ child }: any) => {
  return (
    <div className={styles.child}>
      {child &&
        child.map((child: any, index: number) => (
          <React.Fragment key={index}>
            <MyChild name={child.name} />
          </React.Fragment>
        ))}
    </div>
  )
}

const MyChild = ({ name }: { name: string }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '10px',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
    >
      <Node name={name} type={'family'} />
    </div>
  )
}

export const newFamilyTree: ParentProps = {
  paternal: {
    name: 'Yo',
    parent: {
      paternal: {
        name: 'Padre',
        parent: {
          paternal: {
            name: 'Abuelo Paterno',
          },
          maternal: {
            name: 'Abuela Paterna',
          },
          child: [
            {
              name: 'Tia',
            },
          ],
        },
      },
      maternal: {
        name: 'Madre',
        parent: {
          paternal: {
            name: 'Abuelo Materno',
          },
          maternal: {
            name: 'Abuela Materna',
          },
          child: [
            {
              name: 'Tio',
            },
          ],
        },
      },
      child: [
        {
          name: 'Hermano',
        },
      ],
    },
    isPerson: true,
  },
  maternal: {
    name: 'Esposa',
  },
  child: [
    {
      name: 'Hijo',
    },
    {
      name: 'Hija',
    },
  ],
}
