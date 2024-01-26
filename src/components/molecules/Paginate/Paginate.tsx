import React, { useState, useEffect } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai'
import styles from './Paginate.module.css'
import classNames from 'classnames'

interface PaginateProps {
  data: any[]
  setData: (data: any[]) => void
  itemsPerPage: number
}

export const Paginate = ({ data, itemsPerPage, setData }: PaginateProps) => {
  const [pageData, setPageData] = useState<any>(null)
  const [totalPages, setTotalPages] = useState<number>(0)
  const [currentClickedNumber, setCurrentClickedNumber] = useState<number>(1)
  const [activeButton, setActiveButton] = useState<number>(1)

  /** handleClickedNumber: maneja la pagina actual que se ha seleccionado */
  const handleClickedNumber = (e: React.MouseEvent<HTMLElement>): void => {
    const element = e.target as HTMLElement
    const text = element.innerText
    setCurrentClickedNumber(parseInt(text))
  }

  /** moveToLasPage: nos mueve a la ultima pagina */
  const moveToLastPage = (): void => {
    setCurrentClickedNumber(totalPages!)
    setActiveButton(totalPages!)
  }

  /** moveToFirstPage: nos mueve a la primera pagina */
  const moveToFirstPage = (): void => {
    setCurrentClickedNumber(1)
    setActiveButton(1)
  }

  /** moveToNextPage: nos mueve a la pagina siguiente */
  const moveOnePageForward = (): void => {
    setCurrentClickedNumber(
      currentClickedNumber + 1 > totalPages!
        ? totalPages!
        : currentClickedNumber + 1
    )
    setActiveButton(
      currentClickedNumber + 1 > totalPages!
        ? totalPages!
        : currentClickedNumber + 1
    )
  }

  /** moveToPreviousPage: nos mueve a la pagina anterior */
  const moveOnePageBackward = (): void => {
    setCurrentClickedNumber(
      currentClickedNumber - 1 < 1 ? 1 : currentClickedNumber - 1
    )
    setActiveButton(currentClickedNumber - 1 < 1 ? 1 : currentClickedNumber - 1)
  }

  useEffect(() => {
    /** determineNumberOfPages: Determina el numero de paginas a mostrar */
    let paginateDataObject: any = {}
    let index = 0
    let dataLength = data.length
    let chunckArray = []

    for (index = 0; index < dataLength; index += itemsPerPage) {
      let newChunck = data.slice(index, index + itemsPerPage)
      chunckArray.push(newChunck)
    }

    chunckArray.forEach((chunk, i) => {
      paginateDataObject[i + 1] = chunk
    })

    setTotalPages(chunckArray.length)
    setPageData(paginateDataObject)
  }, [data, itemsPerPage])

  /** useEffect [currentClickedNumber]: Determina la pagina actual */
  useEffect(() => {
    if (pageData) {
      setData(pageData[currentClickedNumber])
    }
  }, [currentClickedNumber, pageData, setData])

  /** activeButton: Selección el boton activo */
  const activateButton = (e: any) => {
    setActiveButton(parseInt(e.target.value))
  }

  return (
    <div className={styles.container}>
      {currentClickedNumber > 1 && totalPages > 0 ? (
        <div className={styles.right}>
          <button
            onClick={moveToFirstPage}
            className={classNames(styles.arrow, styles.item)}
          >
            <AiOutlineDoubleLeft />
          </button>
          <button
            onClick={moveOnePageBackward}
            className={classNames(styles.arrow, styles.item)}
          >
            <AiOutlineLeft />
          </button>
        </div>
      ) : (
        <div />
      )}
      <div className={styles.center} onClick={handleClickedNumber}>
        <PageNumber
          totalPages={totalPages}
          currentClickedNumber={currentClickedNumber}
          activateButton={activateButton}
          activeButton={activeButton}
        />
      </div>
      {currentClickedNumber < totalPages! ? (
        <div className={styles.left}>
          <button
            onClick={moveOnePageForward}
            className={classNames(styles.arrow, styles.item)}
          >
            <AiOutlineRight />
          </button>
          <button
            onClick={moveToLastPage}
            className={classNames(styles.arrow, styles.item)}
          >
            <AiOutlineDoubleRight />
          </button>
        </div>
      ) : (
        <div />
      )}
    </div>
  )
}

interface PageNumberProps {
  totalPages: number
  currentClickedNumber: number
  activateButton: (e: any) => void
  activeButton: number
}

/** pageNumberRender: Renderiza la principales paginas a mostrar */
const PageNumber = ({
  totalPages,
  currentClickedNumber,
  activateButton,
  activeButton,
}: PageNumberProps) => {
  let pages = []
  let i, cont
  if (totalPages === 0) {
    i = 1
    cont = 0
  } else if (totalPages === 1) {
    i = currentClickedNumber
    cont = 1
  } else if (currentClickedNumber - 1 === 0) {
    i = currentClickedNumber
    cont = 2
  } else {
    i = currentClickedNumber - 1
    if (currentClickedNumber === totalPages) {
      cont = currentClickedNumber
    } else {
      cont = currentClickedNumber + 1
    }
  }

  for (i; i <= cont; i++) {
    pages.push(
      <button
        className={
          activeButton === i
            ? classNames(styles.item, styles.active)
            : styles.item
        }
        onClick={activateButton}
        value={i}
        key={i}
      >
        {i}
      </button>
    )
  }
  return <>{pages}</>
}
