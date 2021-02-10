import React from 'react'
import Head from 'next/head'

import Logo from '../assets/icon.svg'
import { Container } from '../styles/pages/home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>App with Styled Components</title>
      </Head>

      <Logo/>
	  <h1>Styled Components</h1>
	  <p>React js app with style components</p>
      
	</Container>
  )
}

export default Home