import React from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../assets/logo.png';
import moment from 'moment/moment';
import Marquee from 'react-fast-marquee';

const Header = () => {
    return (
        <div className='text-center'>
            <Container>
                {/* top */}
                <div>
                    <Image style={{ width: 470 }} src={logo} alt="" />
                    <p className='text-secondary m-0 my-2'>Journalism Without Fear or Favour</p>
                    <span className='text-secondary'>{moment().format("dddd, MMMM D YYYY, h:mm a")}</span>
                </div>

                {/* Latest news */}
                <div className='my-4 d-flex w-100 p-3 text-start bg-light'>
                    <Button className='me-2' variant='danger' style={{ borderRadius: 0, fontWeight: 600 }}>Latest</Button>
                    <Marquee pauseOnHover={true} style={{ fontWeight: 600 }}>Match Highlights: Germany vs Spain — as it happened!</Marquee>
                </div>

                {/* Navbar */}
                <div>
                    <Navbar collapseOnSelect expand="lg" bg="" variant="light">
                      
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link href="#features">Home</Nav.Link>
                                    <Nav.Link href="#pricing">About</Nav.Link>                                   
                                    <Nav.Link href="#pricing">Career</Nav.Link>                              
                                </Nav>
                                <Nav className='d-flex align-items-center'>
                                    <Nav.Link>
                                        photo
                                    </Nav.Link>
                                    <Nav.Link eventKey={2}>
                                       <Button style={{borderRadius:0, fontWeight:600}} variant='dark'>Login</Button>
                                    </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                      
                    </Navbar>
                </div>

            </Container>
        </div>
    );
};

export default Header;