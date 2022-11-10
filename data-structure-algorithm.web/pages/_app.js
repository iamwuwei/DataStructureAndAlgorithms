
import '../styles/globals.css'
import '../styles/globals.module.scss'
import store from '../store'
import { Provider } from 'react-redux'
import Layout from '../components/common/layout'

function MyApp({ Component, pageProps }) {

  return (
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    )
}

export default MyApp

