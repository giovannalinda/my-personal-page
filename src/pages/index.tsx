import type { NextPage } from 'next'
import Head from 'next/head'

import {
  Layout,
  Apresentation,
  Header,
  Statistics,
  About,
  MyServices,
  Testimonial,
  Adjectives,
  Skills,
  Banner,
  Footer,
  Companies,
  WhatsappButton,
} from '~/components'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Giovanna Souza</title>
        <link rel='icon' href='/favicon.svg' />
      </Head>

      <Header />
      <main>
        <Layout.Content>
          <Apresentation />
          <WhatsappButton />
        </Layout.Content>
        <Statistics />
        <Layout.Content>
          <About />
          <MyServices />
          <Companies />
          <Testimonial />
          <Adjectives />
          <Skills />
          <Banner />
        </Layout.Content>
      </main>
      <Footer />
    </div>
  )
}

export default Home
