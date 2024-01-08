/* eslint-disable react/jsx-no-undef */
import React from 'react';
import Header from '../pages/shared/Header/Header';
import Footer from '../pages/shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSidebar from '../pages/shared/LeftSidebar/LeftSidebar';
import RightSidebar from '../pages/shared/RightSidebar/RightSidebar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='pt-5'>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={3}><LeftSidebar></LeftSidebar></Col>
                    <Col lg={6}><Outlet></Outlet></Col>
                    <Col lg={3}><RightSidebar></RightSidebar></Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;