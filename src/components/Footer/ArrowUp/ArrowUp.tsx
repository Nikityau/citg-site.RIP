import React from 'react';

import './ArrowUp.scss'

import orange_arrow_img from '../../../assets/icons/orange-arrow.svg'

const ArrowUp = () => {
    return (
        <div id={'arrow-up'} className={'arrow-up'}>
            <div className={'arrow-up_arrow'}>
                <img src={orange_arrow_img} alt={'img'}/>
            </div>
        </div>
    );
};

export default ArrowUp;