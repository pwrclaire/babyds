import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import HeaderGeneric from '../components/HeaderGeneric'

const accountPage = () => (
  <Layout>
    <Helmet title="My Account" />
    <HeaderGeneric title={'My Account'} subtitle={''} />
    <div id="main">
      <section id="content" className="main">
        This is where my account would be
      </section>
    </div>
  </Layout>
)

export default accountPage
