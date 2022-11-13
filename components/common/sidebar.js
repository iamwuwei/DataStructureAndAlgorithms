import styles from '../../styles/common/sidebar.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { Sorts } from '../../constants/sort'
import Sort from '../../pages/sort/[sort]'

const Sidebar = () => {
    const router = useRouter()
    const { sort } = router.query

    return (
        <div className={styles.container}>
            <h1>ソート</h1>
            <ul>
                <li className={`${sort === Sorts.BUBBLE_SORT ? styles.active : ""}`}><Link href="/sort/bubble-sort"><a className={styles.a}>バブルソート</a></Link></li>
                <li className={`${sort === Sorts.SELECTION_SORT ? styles.active : ""}`}><Link href="/sort/selection-sort"><a className={styles.a}>選択ソート</a></Link></li>
                <li className={`${sort === Sorts.INSERTION_SORT ? styles.active : ""}`}><Link href="/sort/insertion-sort"><a className={styles.a}>挿入ソート</a></Link></li>
                <li className={`${sort === Sorts.HEAP_SORT ? styles.active : ""}`}><Link href="/sort/heap-sort"><a className={styles.a}>ヒープソート</a></Link></li>
                <li className={`${sort === Sorts.MERGE_SORT ? styles.active : ""}`}><Link href="/sort/merge-sort"><a className={styles.a}>マージソート</a></Link></li>
                <li className={`${sort === Sorts.QUICK_SORT ? styles.active : ""}`}><Link href="/sort/quick-sort"><a className={styles.a}>クイックソート</a></Link></li>
            </ul>
        </div>
    )
}

export default Sidebar