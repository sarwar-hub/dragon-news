import React from 'react';
import { Button, Image, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
import qzone1 from '../../../assets/qZone1.png';
import qzone2 from '../../../assets/qZone2.png';
import qzone3 from '../../../assets/qZone3.png';
import bg from '../../../assets/bg.png';


const RightSidebar = () => {
    return (
        <>
            {/* Login with */}
            <div>
                <h5>Login with</h5>
                <Button style={{ borderRadius: 0 }} className='w-100 mb-2 d-flex justify-content-center align-items-center' variant='outline-danger'><FaGoogle className='me-2'></FaGoogle> Login with Google</Button>
                <Button style={{ borderRadius: 0 }} className='w-100 mb-2 d-flex justify-content-center align-items-center' variant='outline-dark'><FaGithub className='me-2'></FaGithub> Login with Github</Button>
            </div>

            {/* Follow us */}
            <div className='mt-5'>
                <h5>Follow us on</h5>
                <ListGroup>
                    <Link className='text-decoration-none' to='https://www.facebook.com/S727927'>
                        <ListGroup.Item className='text-secondary w-100 d-flex align-items-center' style={{ borderRadius: 0 }}>
                            <FaFacebook style={{ width: 25, height: 25 }} className='me-2 text-primary'></FaFacebook> Facebook
                        </ListGroup.Item>
                    </Link>
                    <Link className='text-decoration-none' to='https://twitter.com/'>
                        <ListGroup.Item className='text-secondary w-100 d-flex align-items-center' style={{ borderRadius: 0 }}>
                            <FaTwitterSquare style={{ width: 25, height: 25 }} className='me-2 text-info'></FaTwitterSquare> Twitter
                        </ListGroup.Item>
                    </Link>
                    <Link className='text-decoration-none' to='https://www.instagram.com/'>
                        <ListGroup.Item className='text-secondary w-100 d-flex align-items-center' style={{ borderRadius: 0 }}>
                            <FaInstagramSquare style={{ width: 25, height: 25 }} className='me-2 text-danger'></FaInstagramSquare> Instagram
                        </ListGroup.Item>
                    </Link>
                </ListGroup>
            </div>

            {/* Q zone */}
            <div className='bg-light p-3 mt-5'>
                <h5>Q-Zone</h5>
                <img className='w-100' src={qzone1} alt="" />
                <img className='w-100' src={qzone2} alt="" />
                <img className='w-100' src={qzone3} alt="" />
            </div>

            {/* Create news paper */}
            <div className='text-center text-white position-relative mt-5'>
                <Image src={bg} style={{height:400}} className='z-1 w-100'></Image>
                <div className='position-absolute top-0 right-0 z-3 p-4'>
                    <h2>Create an Amazing Newspaper</h2>
                    <p className='my-4'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <Button style={{ borderRadius: 0, fontWeight: 600 }} variant='danger'>LEARN MORE</Button>
                </div>

            </div>
        </>
    );
};

export default RightSidebar;