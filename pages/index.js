import styles from '../styles/Home.module.css'

import Layout from "../layouts/layout";
import Calculator from "../components/calculator";

export default function Home() {
  return (
  <Layout className={styles.container}>
    <Calculator />
  </Layout>
  )
}
