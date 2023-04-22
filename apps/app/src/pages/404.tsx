import React, { ReactElement } from 'react'
import LayoutNone from '@Components/layouts/None'
// import Image from 'next/image'
import { BsFacebook, BsTwitter, BsWhatsapp, BsInstagram } from 'react-icons/bs'
import NoSsr from '@/components/customs/NoSSR'
import Link from 'next/link'

function Page404() {
  return (
    <>
      <div className="container">
        <main className="main">
          <div className="section">
            <p className="text">Oops! Looks like you followed a bad link.</p>
          </div>
          <Link href="/" title="Go back home">
            <span className="link">Regresar a la App</span>
          </Link>
        </main>
      </div>
      <style jsx>{`
        .container {
          font-family: 'Roboto';
          width: 100%;
          height: 100%;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .main {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          padding: var(--spacing-xl);
        }
        .section {
          width: 100%;
          max-width: 500px;
          padding: var(--spacing-xl);
          padding: 10px;
        }
        .text {
          text-align: center;
          font-size: 1.2rem;
          color: var(--color-primary);
        }
        .link {
          color: var(--color-primary-highlight);
          text-decoration: none;
          font-weight: var(--font-weight-semibold);
        }
      `}</style>
    </>
  )
}
Page404.getLayout = function getLayout(page: ReactElement) {
  return <LayoutNone>{page}</LayoutNone>
}

export default Page404
