import React from 'react'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import Layout from '../components/layout'

const UC = () => {
  return (
    <Layout>
      <Helmet title="Baby D's Home" />
      <Header />

      <section id="content" className="main center-text">
        <h1>We are currently under construction</h1>
        <p>See you soon!</p>
      </section>
    </Layout>
  )
}

export default UC
