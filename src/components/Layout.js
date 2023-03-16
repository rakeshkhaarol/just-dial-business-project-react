import React from 'react'
import { Container } from 'react-bootstrap'
import Footer from './Footer'
import Header from './Header'
import {Outlet} from 'react-router-dom'


function Layout() {
  return (
    <>
        <Container>
            <Header />
            <Outlet/>
            <Footer />
        </Container>
    </>
  )
}

export default Layout