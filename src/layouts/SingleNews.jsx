import React from 'react';
import Header from '../pages/shared/Header/Header';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import RightSidebar from '../pages/shared/RightSidebar/RightSidebar';
import Footer from '../pages/shared/Footer/Footer';

const SingleNews = () => {
    return (
        <div className='pt-5'>
        <Header></Header>
        <Container>
            <Row>
                <Col lg={9}><Outlet></Outlet></Col>
                <Col lg={3}><RightSidebar></RightSidebar></Col>
            </Row>
        </Container>
        <Footer></Footer>
    </div>
    );
};

export default SingleNews;