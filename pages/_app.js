import 'styles/globals.css'
import { makeStore, wrapper } from 'store/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }) {
  return <Provider store={makeStore}>

    <Component {...pageProps} />

  </Provider>
}

// export default wrapper.withRedux(MyApp)

export default MyApp
