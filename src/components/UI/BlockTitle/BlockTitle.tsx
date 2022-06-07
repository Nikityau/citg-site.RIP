import React from 'react';

interface IBlockTitle {
    title: string,
    subtitle:string
}

import './BlockTitle.scss'

const BlockTitle = ({title, subtitle}:IBlockTitle) => {
    return (
        <div className={'block-title'}>
            <h3 className={'block-title_title'}>{ title }</h3>
            <p className={'block-title_subtitle'}>{ subtitle }</p>
        </div>
    );
};

export default BlockTitle;