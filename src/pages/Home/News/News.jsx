/* eslint-disable react/prop-types */
import { FaRegBookmark, FaShareAlt, FaStar, FaRegStar, FaEye } from 'react-icons/fa';
import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const News = ({ data }) => {
    const { _id, image_url, title, details, author, rating, total_view } = data;

    return (
        <Card className="mb-5">
            <Card.Header>
                <div className='d-flex gap-3 align-items-center'>
                    <Image style={{width:45, height:45}} src={author?.img} roundedCircle />
                    <div className='d-flex flex-column gap-1 flex-grow-1'>
                        <p className='m-0 fw-bold'>{author?.name}</p>
                        <p className='m-0'>{moment(author.published_date).format("MMMM D YYYY")}</p>
                    </div>
                    <div >
                        <FaRegBookmark style={{width:25, height:25}} className='me-2'></FaRegBookmark> 
                        <FaShareAlt style={{width:25, height:25}}></FaShareAlt>
                    </div>
                </div>
            </Card.Header>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {details<250?details:<>{details.slice(0,250)}...<Link to={`/news/${_id}`} className='text-warning'>Read more</Link></>}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex gap-2 align-items-center">
                <Rating 
                    readonly
                    placeholderRating={rating.number}
                    emptySymbol={<FaRegStar className='text-warning'></FaRegStar>}
                    placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                    fullSymbol={<FaStar className='text-warning'></FaStar>}
                ></Rating>
                <span className='pt-1 flex-grow-1'>{rating.number}</span>
                <div className='d-flex gap-2 align-items-center'>
                    <FaEye></FaEye>
                    <span>{total_view}</span>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default News;