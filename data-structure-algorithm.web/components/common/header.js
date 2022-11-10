import Link from 'next/link'
import styles from '../../styles/common/header.module.scss'
const Header = () => {
    return (
        <header className={styles.header}>
            <nav>
                <Link href="/">
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