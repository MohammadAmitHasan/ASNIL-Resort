import 'styles/globals.css'
import { makeStore, wrapper } from 'store/store'
import { Provider } from 'react-redux'
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return <Provider store={makeStore}>
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>

  </Provider>
}

// export default wrapper.withRedux(MyApp)

export default MyApp
