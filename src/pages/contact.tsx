import type { NextPage } from 'next'
import Head from 'next/head'

import { Layout, Header, Footer, Contact } from '~/components'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Giovanna Souza | Contato</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <Layout.Content>
        <Contact />
      </Layout.Content>
      <Footer />
    </div>
  )
}

export default Home
