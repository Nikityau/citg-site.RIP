import React, {useContext, useEffect, useState} from 'react';

import './Gallery.tab.scss'

import {MobVerMemberContext} from "../Mob.version";

import {getIndexes} from "../../../../../Utils/getIndexes";
import {TabWatcher} from "../../TabWatcher";
import {MemberWorksInfo} from "../../../../../SynteticData/Syntetic.data.type";
import {CiTG_API} from "../../../../../API/CiTG_API";
import {member} from "../../../../../SynteticData/Syntetic.data/member";
import Slider from "../../../../../Lib/Slider/Slider";
import SliderElement from "../../../../../Lib/Slider/Slider.element/Slider.element";
import {
    Infinite_Type,
    Slider_Type,
    SliderBack_Type,
    SliderElement_Type
} from "../../../../../Lib/Slider/Slider.type/Slider_Type";
import {
    ISliderProgressBarDirection,
    ISliderProgressBarPosition
} from "../../../../../Lib/Slider/Slider.progressbar/Slider.progressbar.interface.option/Slider.progressbar.interface.option";

import arrow_img from '../../../../../assets/icons/arrow-filled.svg'

const GalleryTab = () => {

    const memberContext = useContext(MobVerMemberContext)

    const [memberWorks, setMemberWorks] = useState<MemberWorksInfo>(null)
    const [imgIndexes, setImgIndexes] = useState<{ currentIndex: number, nextIndex: number }>({ currentIndex: 0, nextIndex: 0 })
    const [isAddonTabOpen, setIsAddonTabOpen] = useState<boolean>(false)

    const onClickGalleryImg = (id: string) => {
        const indexes = getIndexes(memberContext?.my_works || [], id);

        if (indexes.currentIndex == -1 || indexes.nextIndex == -1) return

        setImgIndexes(indexes)
        setIsAddonTabOpen(true)
    }
    const closeAddonTab = () => {
        setIsAddonTabOpen(false)
    }
    const getGalleryItemClassByIndex = (i: number): string => {
        if (i % 10 == 1) return 'gallery-tab_gallery-item-1'
        if (i % 10 == 2) return 'gallery-tab_gallery-item-2'
        if (i % 10 == 3) return 'gallery-tab_gallery-item-3'
        if (i % 10 == 4) return 'gallery-tab_gallery-item-4'
        if (i % 10 == 5) return 'gallery-tab_gallery-item-5'
        if (i % 10 == 6) return 'gallery-tab_gallery-item-6'
        if (i % 10 == 7) return 'gallery-tab_gallery-item-7'
        if (i % 10 == 8) return 'gallery-tab_gallery-item-8'

        return 'gallery-tab_gallery-item-7'
    }

    useEffect(() => {
        (async () => {
            const data = await CiTG_API.getMemberAllWorks(member?.id)
            setMemberWorks(data)
        })()

        setIsAddonTabOpen(false)

        TabWatcher.AddCallback(closeAddonTab)
    }, [])

    return (
        <div className={'gallery-tab'}>
            <div className={['gallery-tab_current-el', isAddonTabOpen ? 'gallery-tab_current-el-open' : ''].join(' ')}>
                <div className={'gallery-tab_current-el-history'}>
                    <Slider
                        slider_options={{
                            slider_type: Slider_Type.SINGLE,
                            slider_element_type: SliderElement_Type.DEFAULT,
                            infinite_type: Infinite_Type.INFINITE,
                            slider_back_type: SliderBack_Type.DEFAULT
                        }}
                        pagination={{
                            location: Slider_Type.HORIZONTAL,
                            is: true
                        }}
                        swipe={true}
                        gap={0}
                        autoplay={{
                            autoplay: true,
                            swipe: true,
                            delay: 3000,
                            smooth: false
                        }}
                        progressbar={{
                            appear: false,
                            position: ISliderProgressBarPosition.LEFT_BOTTOM,
                            direction: ISliderProgressBarDirection.HORIZONTAL
                        }}
                        focus={'no'}
                        arrows={{
                            direction:Slider_Type.HORIZONTAL,
                            is: false
                        }}
                        elements_on_screen={1}
                        title={''}
                        width={'default'}>
                        <SliderElement title={''}>
                            <div style={{ backgroundImage: `url(${memberWorks?.all_works_by_name[imgIndexes.currentIndex].img})` }}></div>
                        </SliderElement>
                        {
                            memberWorks?.all_works_by_name[imgIndexes.currentIndex]?.development_stages.map(stage => (
                                <SliderElement title={''} key={stage.id}>
                                    <div style={{ backgroundImage: `url(${stage.imgSrc})` }}></div>
                                </SliderElement>
                            ))
                        }
                    </Slider>
                </div>
                <div className={'gallery-tab_current-el-description'}>
                    <div className={'gallery-tab_current-el-descr-title'}>
                        <h5>About Work</h5>
                    </div>
                    <div className={'gallery-tab_current-el-desc'}>
                        <p>{ memberWorks?.all_works_by_name[imgIndexes.currentIndex]?.description || 'description' }</p>
                    </div>
                </div>
                <div className={'gallery-tab_current-el-software'}>
                    {
                        memberWorks?.all_works_by_name[imgIndexes.currentIndex]?.software_used.map(soft => (
                            <div className={'gallery-tab_current-el-software-item'} key={soft.id}>
                                <div className={'gallery-tab_current-el-software-item-img'}>
                                    <img src={soft.imgSrc} alt={'img'}/>
                                </div>
                                <div className={'gallery-tab_current-el-software-item-title'}>
                                    <h5> { soft.title } </h5>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className={'gallery-tab_current-el-next-el'}>
                    <div className={'gallery-tab_current-el-next-el-button'}
                         onClick={() => onClickGalleryImg(memberWorks?.all_works_by_name[imgIndexes.nextIndex]?.id)}
                        style={{ backgroundImage: `url(${memberWorks?.all_works_by_name[imgIndexes.nextIndex]?.img})` }}
                    >
                        <div className={'gallery-tab_current-el__gray-overhead'}/>
                        <div className={'gallery-tab_current-el-arrow'}>
                            <img src={arrow_img} alt={'img'}/>
                        </div>
                        <div className={'gallery-tab_current-el-text'}>
                             <span>Next Work</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={['gallery-tab_gallery', isAddonTabOpen ? 'gallery-tab_gallery-closed' : ''].join(' ')}>
                {
                    memberContext?.my_works.map((work, index) => (
                        <div key={work.id}
                             className={['gallery-tab_gallery-item',
                                 getGalleryItemClassByIndex(index + 1)].join(' ')}
                             style={{backgroundImage: `url(${work.imgSrc})`}}
                             onClick={() => {
                                 onClickGalleryImg(work.id)
                             }}
                        >
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default GalleryTab;