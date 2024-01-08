import React, { useEffect, useState } from 'react';
import CheckActiveCat from '../../../utilities/CheckActiveCat';


const LeftSidebar = () => {
    const [categories, setCategories] = useState([]);
    

    useEffect(()=>{
        fetch('http://localhost:5000/category')
        .then(response => response.json())
        .then(data => setCategories(data))
        .catch(error => console.log(error));
    }, [])


    return (
        <>
        {/* categories */}
        <div>
            <h5>All Categories</h5>
            <div className='mt-3 d-flex flex-column'>
                {
                categories.map(category =>
                    <CheckActiveCat key={category.id}

                    className='text-decoration-none'
                    to={`/category/${category.id}`}
                    
                    >
                        {category.name}
                    </CheckActiveCat>
                    )
                }
            </div>
        </div>
        </>
    );
}
export default LeftSidebar;