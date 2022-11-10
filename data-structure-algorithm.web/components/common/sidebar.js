import styles from '../../styles/common/sidebar.module.scss'

import Link from 'next/link'
import { useRouter } from 'next/router'

const Sidebar = () => {
    const router = useRouter()
    const currentRoute = router.pathname

    return (
        <div className={styles.container}>
            <h1>ソート</h1>
            <ul>
                <li className={`${currentRoute === '/sort/bubble-sort' ? styles.active : ""}`}><Link href="/sort/bubble-sort"><a className={styles.a}>バブルソート</a></Link></li>
                <li className={`${currentRoute === '/sort/selection-sort' ? styles.active : ""}`}><Link href="/sort/selection-sort"><a className={styles.a}>選択ソート</a></Link></li>
                <li className={`${currentRoute === '/sort/insertion-sort' ? styles.active : ""}`}><Link href="/sort/insertion-sort"><a className={styles.a}>挿入ソート</a></Link></li>
                <li className={`${currentRoute === '/sort/heap-sort' ? styles.active : ""}`}><Link href="/sort/heap-sort"><a className={styles.a}>ヒープソート</a></Link></li>
                <li className={`${currentRoute === '/sort/merge-sort' ? styles.active : ""}`}><Link href="/sort/merge-sort"><a className={styles.a}>マージソート</a></Link></li>
                <li className={`${currentRoute === '/sort/quick-sort' ? styles.active : ""}`}><Link href="/sort/quick-sort"><a className={styles.a}>クイックソート</a></Link></li>
            </ul>
        </div>
    )
}

export default Sidebar