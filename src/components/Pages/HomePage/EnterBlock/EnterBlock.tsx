import React from 'react';

import PageNumber from '../../../UI/PageNumber/PageNumber';
import InfoBar from '../../../UI/InfoBar/InfoBar';

const BigLogo = React.lazy(() => import('../../../UI/BigLogo/BigLogo'))

import PurpleBackground from '../../../UI/Background/PurpleBackground/PurpleBackground';

import enterblock from './EnterBlock.module.scss';

function EnterBlock() {
  return (
    <div className={enterblock.container} data-testid="enter-block">
      {/*<PurpleBackground />*/}
      <BigLogo />
      <div className={enterblock.test} />
      <div className={enterblock.innerContainer}>
        <div className={enterblock.title} data-testid="enter-block-title">
          <div className={enterblock.titleWrapper}>
            <h1 data-mouse-focus>Center IT</h1>
            <h1 data-mouse-focus>Gravity</h1>
          </div>
          <h4 data-mouse-focus>Мощная среда для твоего развития</h4>
        </div>
        <div className={enterblock.pageNum}>
          <PageNumber number="01" />
        </div>
        <InfoBar />
      </div>
    </div>
  );
}

export default EnterBlock;
