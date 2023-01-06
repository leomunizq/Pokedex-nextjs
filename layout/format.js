import Header from '../components/header'
import Head from 'next/head'
import Footer from '../components/footer'

export default function Layoutformat({ children }) {
  return (
    <>
      <Head>
        <title>Pokedex</title>
      </Head>

      <main>{children}</main>
      <Footer></Footer>
    </>
  )
}
