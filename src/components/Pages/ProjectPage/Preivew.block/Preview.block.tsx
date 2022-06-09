import React from 'react';

import BackPart from "./Back.part/Back.part";

import './Preview.block.scss'
import InfoPart from "./Info.part/Info.part";

const PreviewBlock = () => {
    return (
        <div className={'preview-block'}>
            <BackPart/>
            <InfoPart/>
        </div>
    );
};

export default PreviewBlock;