import Link from 'next/link'
import styles from '../../styles/common/header.module.scss'
import { useLayoutEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { selectHomePageUrl, setUrl } from '../../slices/urlSlice'

const Header = ({ url }) => {
    const dispatch = useDispatch()

    const homePageUrl = useSelector(selectHomePageUrl)

    // useLayoutEffect(() => {
    //     dispatch(setUrl(url))
    // },[url])

    return (
        <header className={styles.header}>
            <nav>
                <Link href={homePageUrl}>
                    <a>
                        <img src="../wei.png" />
                        <h1>データ構造とアルゴリズム</h1>
                    </a>
                </Link>
            </nav>
        </header>
    )
}

export default Header

export async function getServerSide() {
    const url = {
      "homePage":process.env.HOST,
    }
  
    return { props: { url } }
  }