import React from 'react';
import { Image } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const NewsPage = () => {
    const news = useLoaderData();
    console.log(news);
    return (
        <div>
            <Image className='w-100' src={news?.image_url}></Image>
            <h1>{news?.title}</h1>
            <p>{news?.details}</p>
        </div>
    );
};

export default NewsPage;