import { getNewsDatailsiId } from '@/lib/data';
import React from 'react';

const NewsDetailsPage = async({params}) => {
    const {id} = await params;
    console.log(id, 'params');

    const news = await getNewsDatailsiId(id);

    console.log(news);



    return (
        <div>
            news details page
        </div>
    );
};

export default NewsDetailsPage;