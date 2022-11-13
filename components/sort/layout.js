import styles from '../../styles/sort/layout.module.scss'

import BarChart from './chart/bar-chart'
import ControlPanel from './control-panel'
import Sidebar from '../common/sidebar'
import PageIndex from '../utils/page-index'

const Layout = ({ children, sort, status, setStatus }) => {
    return (
        <div className={styles.container}>
            <Sidebar />
            <div className={styles.content}>
                <PageIndex />
                <div className={styles.playground}>
                    <BarChart data={sort.info}/>
                    <ControlPanel status={status} setStatus={setStatus} count={sort.info.comparisonCount} />
                </div>
                <main>
                    {children}
                </main>
            </div>
        </div>
    )
}

export default Layout