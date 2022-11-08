import type { NextPage } from 'next'
import Head from 'next/head'

import { Layout, Header, AboutMe } from '~/components'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Giovanna Souza | Quem sou</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <Layout.Content>
        <AboutMe />
      </Layout.Content>
    </div>
  )
}

export default Home
