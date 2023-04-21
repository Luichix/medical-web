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
        <header className="header">
          <Link href="/" title={'logo'} />
        </header>
        <main className="main">
          <figure className="figure">
            {/* <Image alt="cover" src={ocError} className="image" /> */}
          </figure>
          <div className="section">
            <p className="text">Oops! Looks like you followed a bad link.</p>
            <p className="text">
              If you think this is a problem with us, please{' '}
              <Link href="/" className="link" title={'tell us...'} />
            </p>
          </div>
          <Link href="/" title="Go back home"></Link>
        </main>
        <footer className="footer">
          <div className="section">
            <p className="rigth">&copy; Godigit - 2022 </p>
          </div>

          <div className="section">
            <ul className="list">
              <li className="item">
                <a href="/" target="_blank" rel="noreferrer">
                  <NoSsr>
                    <BsFacebook className="icon" />
                  </NoSsr>
                </a>
              </li>
              <li className="item">
                <a href="/" target="_blank" rel="noreferrer">
                  <NoSsr>
                    <BsTwitter className="icon" />
                  </NoSsr>
                </a>
              </li>
              <li className="item">
                <a href="/" target="_blank" rel="noreferrer">
                  <NoSsr>
                    <BsWhatsapp className="icon" />
                  </NoSsr>
                </a>
              </li>
              <li className="item">
                <a href="/" target="_blank" rel="noreferrer">
                  <NoSsr>
                    <BsInstagram className="icon" />
                  </NoSsr>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
      <style jsx>{`
        .container {
          width: 100%;
          height: 100%;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .header {
          width: 100%;
          display: flex;
          justify-content: flex-start;
          padding: var(--spacing-md);
          position: absolute;
          top: 0;
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
        .figure {
          width: 100%;
          max-width: 500px;
          height: 100%;
          padding: var(--spacing-md);
        }
        .image {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        .section {
          width: 100%;
          max-width: 500px;
          padding: var(--spacing-xl);
        }
        .text {
          text-align: center;
          font-size: 1.1rem;
          color: var(--color-font-base);
        }
        .link {
          color: var(--color-primary);
          text-decoration: none;
          font-weight: var(--font-weight-semibold);
        }
        .footer {
          position: absolute;
          bottom: 0;
          width: 100%;
          display: flex;
          justify-content: space-between;
        }
        .rigth {
          font-size: 1.2rem;
          color: var(--color-primary);
          text-decoration: none;
          font-weight: var(--font-weight-semibold);
        }
        .list {
          display: flex;
          justify-content: flex-end;
          gap: 1rem;
        }
        .item {
          padding: var(--spacing-xs);
          color: var(--color-base-white);
          font-size: 1.2rem;
          background-color: var(--color-font-base);
          display: flex;
          align-items: center;
          border-radius: var(--border-radius-xs);
          line-height: 0;
        }
      `}</style>
    </>
  )
}
Page404.getLayout = function getLayout(page: ReactElement) {
  return <LayoutNone>{page}</LayoutNone>
}

export default Page404
