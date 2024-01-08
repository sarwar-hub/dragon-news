import React from 'react';
import { useLoaderData } from 'react-router-dom';
import News from '../News/News';

const CategoriseNews = () => {
    const categoriseNewses = useLoaderData();

    return (
        <div>
            {
                categoriseNewses.map(news => <News key={news._id} data={news}></News>)
            }
        </div>
    );
};

export default CategoriseNews;