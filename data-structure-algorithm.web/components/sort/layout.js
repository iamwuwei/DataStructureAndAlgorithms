import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { Status } from '../../constants/status'
import { Sorts } from '../../constants/sort'
import styles from '../../styles/sort/layout.module.scss'

import BarChart from './chart/bar-chart'
import ControlPanel from './control-panel'


const Layout = ({ children, sort, status, setStatus }) => {
    const getTitle = () => {
        const router = useRouter()
        const currentRoute = router.pathname.split("/")
        const sortKind = currentRoute[currentRoute.length - 1]
        const title = "・"

        switch(sortKind) {
            case Sorts.BUBBLE_SORT:
                return title + "バブルソート"
        }
    }
    return (
        <div className={styles.container}>
            <h1>
                {getTitle()}
            </h1>
            <div className={styles.playground}>
                <BarChart data={sort.info}/>
                <ControlPanel status={status} setStatus={setStatus} count={sort.info.comparisonCount} />
            </div>
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout