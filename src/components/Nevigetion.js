import React from 'react'
import {Button, Container, Form, Nav, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '.././logo.svg'



export default function Nevigetion() {
    //1

    //2.
    const UserLogout=()=>{
        //alert('helllllo')
        window.localStorage.removeItem('jwt_token')
        window.location.href='/login'
    }
  return (
    <>
        <Navbar bg="light" expand="lg" className='h-100' > 
            <Container fluid className='h-100'>
                <Navbar.Brand href="#" className='h-100'>
                    <img
                    src='https://akam.cdn.jdmagicbox.com/images/icontent/jdrwd/jdlogosvg.svg'
                    width="50%"
                    className="d-inline-block align-top h-100"
                    alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Form className="d-flex me-5 ">
                        <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <Nav
                        className="ms-5 my-2"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link to="/" className='nav nav-link me-3 btn btn-primary text-white'>Home</Link>
                        {
                            window.localStorage.getItem("jwt_token") === null &&
                            <>
                                <Link to="/login" className='nav nav-link me-3 btn btn-primary text-white'>login</Link>
                                <Link to="/register" className='nav nav-link btn btn-primary text-white'>register</Link>
                            </>
                        }
                        {
                            window.localStorage.getItem("jwt_token") !== null &&
                            <>
                                <Nav.Link  className='nav nav-link me-3 btn btn-primary text-white' onClick={()=>{UserLogout()}} >logout</Nav.Link>
                                
                            </>
                        }
                        
                    </Nav>
                  
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  )
}
