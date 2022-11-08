import type { NextPage } from 'next'
import Head from 'next/head'

import { Layout, Header, Contact } from '~/components'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Giovanna Souza | Contato</title>
        <link rel='icon' href='/favicon.svg' />
      </Head>

      <Header />
      <Layout.Content>
        <Contact />
      </Layout.Content>
    </div>
  )
}

export default Home
