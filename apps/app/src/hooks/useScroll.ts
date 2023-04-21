import { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'

export function useScrollToElement(
  inline: 'start' | 'center' | 'end',
  offset: number,
  isScroll: boolean
) {
  const router = useRouter()
  const elementRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!isScroll) return
    // Verificar si existe un hash en la ruta actual
    if (router.asPath.includes('#')) {
      // Obtener la ID del elemento a partir del hash
      const elementId = router.asPath.split('#')[1]
      // Obtener el elemento del DOM y almacenarlo en la ref
      const element = document.getElementById(elementId)
      if (element) {
        elementRef.current = element
      }
    }
  }, [router.asPath, isScroll])

  useEffect(() => {
    if (!isScroll) return

    const timeoutId = setTimeout(() => {
      // Verificar si existe un elemento en la ref
      if (elementRef.current) {
        // Desplazar hasta el elemento y ajustar el posicionamiento
        elementRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline,
        })

        window.scrollBy({
          top: offset,
          left: 0,
          behavior: 'auto',
        })
      }
    }, 0)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [router.asPath, isScroll, inline, offset])
}
