import React from 'react';

import './Mob.version.scss'

import ded_img from '../../../../assets/images/team-member/ded.png'
import arrow_img from '../../../../assets/icons/aroow-circle.svg'

import f_icon from '../../../../assets/icons/project/figma.svg'
import ps_icon from '../../../../assets/icons/project/ps.svg'
import ai_icon from '../../../../assets/icons/project/ai.svg'

const MobVersion = () => {
    return (
        <div className={'TMP_mob-ver'}>
            <div className={'TMP_mob-ver__preview-back'}>

            </div>
            <div className={'TMP_mob-ver-main-field'}>
                <div className={'TMP_mob-ver-member-img'}>
                   <div className={'TMP_mob-ver-member-img-wrapper'}>
                        <img src={ded_img} alt={'img'}/>
                   </div>
                </div>
                <div className={'TMP_mob-ver_summary'}>
                    <a href={'https://cran.r-project.org/web/packages/V8/V8.pdf'} target={'_blank'}>
                        <p>Резюме</p><img src={arrow_img} alt={'img'}/>
                    </a>
                </div>
                <div className={'TMP_mob-ver_info-block'}>
                    <div className={'TMP_mob-ver_member-name'}>
                        <h4>Andrei Bredihin</h4>
                    </div>
                    <div className={'TMP_mob-ver_member-skills'}>
                        <p>illustrator, UI/UX-designer</p>
                    </div>
                    <div className={'TMP_mob-ver_member-soft'}>
                        <img src={f_icon} alt={'img'}/>
                        <img src={ps_icon} alt={'img'}/>
                        <img src={ai_icon} alt={'img'}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobVersion;