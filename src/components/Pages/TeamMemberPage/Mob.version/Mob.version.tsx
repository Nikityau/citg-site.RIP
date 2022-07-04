import React, {useContext, useState} from 'react';

import './Mob.version.scss'

import arrow_img from '../../../../assets/icons/aroow-circle.svg'

import back_img from '../../../../assets/images/member-page-mob-back.png'

import Tabs from "./Tabs/ITabs";

import {MemberInfo} from "../../../../SynteticData/Syntetic.data.type";

import {TabWatcher} from "../TabWatcher";
import {AppContext, Browser} from "../../../App/App";

export type tab_state = 'about-me' | 'gallery' | 'skills';

interface IMobVersion {
    memberInfo: MemberInfo
}

export const MobVerMemberContext = React.createContext<MemberInfo>(null)

const MobVersion = ({memberInfo}: IMobVersion) => {
    const appContext = useContext(AppContext)

    const [tab, setCurrentTab] = useState<tab_state>('about-me')

    const changeTab = (newTab: tab_state) => {
        setCurrentTab(newTab)

        TabWatcher.CallCbks()
    }

    return (
        <MobVerMemberContext.Provider value={memberInfo}>
            <div className={'TMP_mob-ver'}>
                <div className={'TMP_mob-ver__preview-back'}>
                    <div className={'TMP_mob-ver__blur-overhead'}>
                    </div>
                    <div className={'TMP_mob-ver__preview-back-img'}>
                        <img src={back_img} alt={''}/>
                    </div>
                </div>
                <div className={'TMP_mob-ver-main-field'}>
                    <div className={'TMP_mob-ver-main-field_contact-me'}>
                        <a href={memberInfo?.social_links[0].link}>
                            Contact me
                        </a>
                    </div>
                    <div className={
                        appContext.browser === Browser.SAFARI
                            ? 'TMP_mob-ver-main-field__purple-back_Safari_disabled'
                            : 'TMP_mob-ver-main-field__purple-back_Default'
                    }/>
                    <div className={
                        appContext.browser === Browser.SAFARI
                            ? 'TMP_mob-ver-main-field__red-back_Safari_disabled'
                            : 'TMP_mob-ver-main-field__red-back_Default'
                    }/>
                    <div className={'TMP_mob-ver-member-img'}>
                        <div className={'TMP_mob-ver-member-img-wrapper'}>
                            <img src={memberInfo?.photo?.imgSrc} alt={'img'}/>
                        </div>
                    </div>
                    <div className={'TMP_mob-ver_summary'}>
                        <a href={'https://cran.r-project.org/web/packages/V8/V8.pdf'} target={'_blank'}>
                            <p>Резюме</p><img src={arrow_img} alt={'img'}/>
                        </a>
                    </div>
                    <div className={'TMP_mob-ver_info-block'}>
                        <div className={'TMP_mob-ver_member-name'}>
                            <h4>{memberInfo?.full_name}</h4>
                        </div>
                        <div className={'TMP_mob-ver_member-skills'}>
                            <p>{memberInfo?.skills.join(', ')}</p>
                        </div>
                        <div className={'TMP_mob-ver_member-soft'}>
                            {
                                memberInfo?.software.map(soft => (
                                    <img key={soft.id} src={soft.imgSrc} alt={'img'}/>
                                ))
                            }
                        </div>
                    </div>
                    <Tabs currentTab={tab} tabCallback={changeTab}/>
                </div>
            </div>
        </MobVerMemberContext.Provider>
    );
};

export default MobVersion;