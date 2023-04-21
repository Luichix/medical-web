import React, { useState, useContext, ReactNode } from 'react'
import styles from './clinicalLayout.module.css'
import classNames from 'classnames'
import { ThemeContext } from '@Contexts/index'
import { Sidenav } from 'ui'
import Link from 'next/link'
import { CgProfile } from 'react-icons/cg'
import { VscTypeHierarchySub } from 'react-icons/vsc'
import { TbReportMedical, TbClipboardList } from 'react-icons/tb'
import { ListItem } from '../../customs/ListItem'
import { useRouter } from 'next/router'

const routes = {
  personal: {
    navigator: 'Datos de identidad personal',
    ref: '/clinical/patient/profile',
    routes: [
      {
        route: 'Perfil del paciente',
        ref: '/clinical/patient/profile',
        anchor: '#profile',
      },
      {
        route: 'Ocupación y estilo de vida',
        ref: '/clinical/patient/profile',
        anchor: '#occupation',
      },
      {
        route: 'Condiciones higienico-sanitarias',
        ref: '/clinical/patient/profile',
        anchor: '#conditions',
      },
    ],
  },
  history: {
    navigator: 'Anamnesis remota',
    ref: '/clinical/patient/history',
    isScroll: true,
    routes: [
      {
        route: 'Anotaciones',
        ref: '/clinical/patient/history',
        anchor: '#annotations',
      },
      {
        route: 'Antecedentes patológicos',
        ref: '/clinical/patient/history',
        anchor: '#pathological-history',
      },
      {
        route: 'Reacciones a medicamentos',
        ref: '/clinical/patient/history',
        anchor: '#drug-reactions',
      },
      {
        route: 'Enfermedades sanguineas',
        ref: '/clinical/patient/history',
        anchor: '#blood-diseases',
      },
      {
        route: 'Traumatismos',
        ref: '/clinical/patient/history',
        anchor: '#trauma',
      },
      {
        route: 'Intervenciones quirúrgicas',
        ref: '/clinical/patient/history',
        anchor: '#surgical-interventions',
      },
      {
        route: 'Antecedentes hereditarios',
        ref: '/clinical/patient/history',
        anchor: '#hereditary-history',
      },
      {
        route: 'Hábitos tóxicos',
        ref: '/clinical/patient/history',
        anchor: '#toxic-habits',
      },
    ],
  },
  consult: {
    navigator: 'Recetas y examenes',
    ref: '/clinical/patient/consult',
    isScroll: true,
    routes: [
      {
        route: 'Añadir consultas',
        ref: '/clinical/patient/consult',
        anchor: '#add-consult',
      },
    ],
  },
  patient: {
    navigator: 'Listado de pacientes',
    ref: '/clinical/patient',
    isScroll: true,
    routes: [
      {
        route: 'Listado de consultas',
        ref: '/clinical/patient',
        anchor: '#dating-history',
      },
    ],
  },
}

export const ClinicalLayout = ({ children }: { children: ReactNode }) => {
  const value = useContext(ThemeContext)
  const [showNav, setShowNav] = useState(false)
  const router = useRouter()

  const id = router.query.id ? `/${router.query.id}` : ''

  return (
    <div className={classNames(styles.dashboard, styles[value?.theme])}>
      <div className={classNames(styles.container)}>
        <Sidenav show={showNav} onClick={() => setShowNav(!showNav)}>
          <ListItem
            behavior={showNav}
            navigation={routes.personal.navigator}
            color="sky"
            Icon={CgProfile}
          >
            {routes.personal.routes.map((route, index) => (
              <li key={`route-${index}`}>
                <Link
                  href={`${route.ref}${id}${route.anchor ? route.anchor : ''}`}
                  className={styles.option}
                >
                  {route.route}
                </Link>
              </li>
            ))}
          </ListItem>
          <ListItem
            behavior={showNav}
            navigation={routes.history.navigator}
            color="sky"
            Icon={VscTypeHierarchySub}
          >
            {routes.history.routes.map((route, index) => (
              <li key={`route-${index}`}>
                <Link
                  href={`${route.ref}${id}${route.anchor ? route.anchor : ''}`}
                  className={styles.option}
                >
                  {route.route}
                </Link>
              </li>
            ))}
          </ListItem>
          <Link
            href={`${routes.consult.routes[0].ref}${id}${
              routes.consult.routes[0].anchor
                ? routes.consult.routes[0].anchor
                : ''
            }`}
            className={styles.group}
          >
            <i className={classNames(styles.item, styles.colorSky)}>
              <TbReportMedical />
            </i>
            <span className={styles.link}>
              {routes.consult.routes[0].route}
            </span>
          </Link>
          <Link
            href={`${routes.patient.routes[0].ref}${id}${
              routes.patient.routes[0].anchor
                ? routes.patient.routes[0].anchor
                : ''
            }`}
            className={styles.group}
          >
            <i className={classNames(styles.item, styles.colorSky)}>
              <TbClipboardList />
            </i>
            <span className={styles.link}>
              {routes.patient.routes[0].route}
            </span>
          </Link>
        </Sidenav>
        <div className={styles.main}>{children}</div>
      </div>
    </div>
  )
}
export default ClinicalLayout
