import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Format from '../layout/format'
import { Banner } from '../components/Banner'
import Body from '../components/Body'
import Pagination from '../components/Pagination'
import Pokedex from '../layout/Pokedex'

export default function Home(props) {
  return (
    <Format>
      <Banner />

      <Pokedex />
      {/* <Pagination setPage={props.setPage} page={props.page} {...props} /> */}
    </Format>
  )
}
