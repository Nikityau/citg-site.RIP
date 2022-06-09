import React from 'react';

import { Link } from '../../../SynteticData/Syntetic.data.type'

const ImageLink = ({link,img}:Link) => {
    return (
        <a href={link}>
            <img src={img} alt={'img'}/>
        </a>
    );
};

export default ImageLink;