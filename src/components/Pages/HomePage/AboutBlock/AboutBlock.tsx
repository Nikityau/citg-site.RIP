import React from 'react';

import AboutButton from '../../../UI/Form/AboutButton/AboutButton';
import PageNumber from '../../../UI/PageNumber/PageNumber';

import aboutblock from './AboutBlock.module.scss';

import plug from '../../../../assets/images/plug_2.png';
import mobPlug from '../../../../assets/images/plug_2.png';

function AboutBlock() {
  return (
    <div className={[aboutblock.container, aboutblock.container__light].join(' ')}>
      <div className={aboutblock.mobHack} />
      <div className={aboutblock.innerContainer}>
        <div className={aboutblock.wrapper}>
          <div className={aboutblock.leftSide}>
            <div className={aboutblock.textWrapper}>
              <div className={aboutblock.text}>
                <p data-mouse-focus>
                  Центр IT-притяжения аккумулирует вокруг себя множество талантливых специалистов из
                  разных сфер, многие из них являются бывшими учениками. Именно поэтому Центр может
                  позволить себе помощь в обучении в таком количестве профессий. Основные кадры
                  площадки помимо коммерческой разработки также обладают опытом в сфере обучения.
                  Все ученики Центра, как бывшие, так и текущие являются победителями и призерами
                  множества конкурсов, хакатонов и т.д.
                </p>
              </div>
              <div className={aboutblock.button}>
                <AboutButton path="/teams" about="Команде" />
              </div>
            </div>
          </div>
          <div className={aboutblock.rightSide}>
            <div className={aboutblock.imgWrapper}>
              <div style={{ backgroundImage: `url(${plug})` }} data-mouse-focus />
            </div>
          </div>
        </div>
        <div className={aboutblock.pageNum}>
          <PageNumber number="03" />
        </div>
      </div>
      <div className={aboutblock.mobBack} style={{ backgroundImage: `url(${mobPlug})` }} />
    </div>
  );
}

export default AboutBlock;
