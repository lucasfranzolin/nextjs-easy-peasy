import App, { Container } from "next/app"
import { StoreProvider } from "easy-peasy"

import withReduxStore from "../lib/with-redux-store"
import Layout from "../components/Layout"

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props
    return (
      <Container>
        <StoreProvider store={reduxStore}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </StoreProvider>
      </Container>
    )
  }
}

export default withReduxStore(MyApp)
