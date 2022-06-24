import React from 'react';

import {tab_state} from "../Mob.version";

import AboutMeTab from "../AboutMe.tab/AboutMe.tab";
import GalleryTab from "../Gallery.tab/Gallery.tab";
import SkillsTab from "../Skills.tab/Skills.tab";

interface ITabs {
    currentTab: tab_state,
    tabCallback: (tab: tab_state) => void
}

const Tabs = ({ currentTab, tabCallback }:ITabs) => {
    return (
            <div className={'TMP_mob-ver-inner-routers'}>
                <div className={'TMP_mob-ver-tabs'}>
                    <div className={['TMP_mob-ver-tab',
                        currentTab == 'about-me' ? 'TMP_mob-ver-current-tab' : ''].join(' ')}
                         onClick={() => {
                             tabCallback('about-me')
                         }}>
                        <button>
                            About me
                        </button>
                        <div className={'TMP_mob-ver-tab-line'}/>
                    </div>
                    <div className={['TMP_mob-ver-tab',
                        currentTab == 'gallery' ? 'TMP_mob-ver-current-tab' : ''].join(' ')}
                        onClick={() => {
                            tabCallback('gallery')
                        }}
                    >
                        <button>
                            Gallery
                        </button>
                        <div className={'TMP_mob-ver-tab-line'}/>
                    </div>
                    <div className={['TMP_mob-ver-tab',
                        currentTab == 'skills' ? 'TMP_mob-ver-current-tab' : '' ].join(' ')}
                        onClick={() => {
                            tabCallback('skills')
                        }}
                    >
                        <button>
                            Skills
                        </button>
                        <div className={'TMP_mob-ver-tab-line'}/>
                    </div>
                </div>
                <div className={'TMP_mob-ver-tab-content'}>
                    <div className={['TMP_mob-ver-about-tab', 'TMP_mob-ver-tab-block',
                    currentTab == 'about-me' ? 'TMP_mob-ver-current-tab' : ''].join(' ')}>
                        <AboutMeTab tabCallback={tabCallback}/>
                    </div>
                    <div className={['TMP_mob-ver-gallery-tab', 'TMP_mob-ver-tab-block',
                    currentTab == 'gallery' ? 'TMP_mob-ver-current-tab' : ''].join(' ')}>
                        <GalleryTab/>
                    </div>
                    <div className={['TMP_mob-ver-skills-tab', 'TMP_mob-ver-tab-block',
                    currentTab == 'skills' ? 'TMP_mob-ver-current-tab' : ''].join(' ')}>
                        <SkillsTab/>
                    </div>
                </div>
            </div>
    );
};

export default Tabs;