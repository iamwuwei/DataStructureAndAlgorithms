import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to my learning </title>
        <meta name="description" content="Data Structure and Algorithm Note" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>
        私の学習ノートへようこそ
      </h1>
      <div className={styles.buttonContainer}>
        <Link href="sort">
          <a className={styles.btn}>
              <div className={styles.anime}>
                <Image src="/bar.png" width={100} height={100} layout="fill"></Image>
              </div>
              <h2>
                ソート
              </h2>
          </a>
        </Link>
      </div>
    </div>
  )
}
