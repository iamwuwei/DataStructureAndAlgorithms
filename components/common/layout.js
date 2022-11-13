import styles from '../../styles/common/layout.module.scss'

import Header from './header'
import Sidebar from './sidebar'

const Layout = ({ children }) => {
  return (
    <div style={{ height:'100vh' }}>
      <Header />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  )
}

export default Layout