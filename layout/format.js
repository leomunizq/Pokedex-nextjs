import Head from 'next/head'
import Footer from '../components/Footer'

export default function Layoutformat({ children }) {
  return (
    <>
      <Head>
        <title>Pokedex</title>
      </Head>

      <main>{children}</main>
      <Footer />
    </>
  )
}
