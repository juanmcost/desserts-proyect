import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Home from '../components/Home'
import styles from '../styles/Home.module.css'

const Index: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nunú - inicio</title>
        <meta name="description" content="" />
        <link rel="icon" href="/Nunu-logo.ico" />
      </Head>

      <main className={styles.main}>
        <Home />
      </main>

      <footer className={styles.footer}>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Index
