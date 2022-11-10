
import '../styles/globals.css'
import '../styles/globals.module.scss'
import Layout from '../components/common/layout'

function MyApp({ Component, pageProps }) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
}

export default MyApp