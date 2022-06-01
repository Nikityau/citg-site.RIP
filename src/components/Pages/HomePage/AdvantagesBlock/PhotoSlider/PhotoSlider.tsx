import React, { useEffect, useState } from 'react';

// components
import PhotoCard from '../../../../UI/PhotoCard/PhotoCard';

// styles
import photoslider from './PhotoSlider.module.scss';
import './swiper.css';

// images

import makeDream from '../../../../../assets/images/makeDream.png';
import evolve from '../../../../../assets/images/evolve.png';
import create from '../../../../../assets/images/create.png';

function PhotoSlider() {

  return (
    <div className={photoslider.container}>
      <div className={photoslider.innerWrapper}>
        <PhotoCard imgSrc={makeDream} title="Создавай мечту" />
        <PhotoCard imgSrc={evolve} title="Развивайся" />
        <PhotoCard imgSrc={create} title="Твори" />
      </div>
      <div className={photoslider.sliderPlug}>
        <div className={photoslider.slider}>
          <div className={photoslider.sliderCard}>
            <div
              className={photoslider.sliderCardImg}
              style={{ backgroundImage: `url(${makeDream})` }}
            />
            <div className={photoslider.sliderCardText}> texts </div>
          </div>
          <div className={photoslider.pagination}>
            <div
              className={photoslider.paginationCircle}
              style={{ background: '#F4682C', width: '19px', borderRadius: '16px' }}
            />
            <div className={photoslider.paginationCircle} />
            <div className={photoslider.paginationCircle} />
            <div className={photoslider.paginationCircle} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoSlider;
