import React from 'react';

import SupportedDevicesPart from "./SupportedDevices.part/SupportedDevices.part";
import ProjectLinkPart from "./ProjectLinks.part/ProjectLink.part";
import SliderElement from "../../../../Lib/Slider/Slider.element/Slider.element";

const Slider = React.lazy(() => import('../../../../Lib/Slider/Slider'))

import {
    Infinite_Type,
    Slider_Type,
    SliderBack_Type,
    SliderElement_Type
} from "../../../../Lib/Slider/Slider.type/Slider_Type";
import {
    ISliderProgressBarDirection,
    ISliderProgressBarPosition
} from "../../../../Lib/Slider/Slider.progressbar/Slider.progressbar.interface.option/Slider.progressbar.interface.option";

import {MiniInfo} from "../../../../SynteticData/Syntetic.data.type";

import './Description.block.scss'

import slider_img_1 from '../../../../assets/images/projects/img_1.png'
import slider_img_2 from '../../../../assets/images/projects/img_2.jpg'
import slider_img_3 from '../../../../assets/images/projects/img_3.png'
import popUpGalleryController from "../../../../Lib/PopUpGallery/PopUpGallery.controller/PopUpGallery.controller";

interface IDescriptionBlock {
    images: MiniInfo[]
}

const DescriptionBlock = ({ images }:IDescriptionBlock) => {

    const onSliderElementClick = (e:React.MouseEvent<HTMLElement>) => {
        const el = e.target as HTMLElement;
        const el_index =
            el.getAttribute('data-slider-el-index') ||
            el.getAttribute('data-slider-left-el-index') ||
            el.getAttribute('data-slider-right-el-index')

        console.log(el)

        if(!el_index) return

        popUpGalleryController.Open(Number.parseInt(el_index))
    }

    return (
        <div className={'description-block'}>
            <div className={'description-block_description'}>
                <h3>Description</h3>
                <p>
                    Play online or over local WiFi with 4-15 players as you attempt to prep your spaceship for
                    departure, but beware as one will be an impostor bent on killing everyone!
                    Crewmates can win by completing all tasks or discovering and voting the impostor off the ship.
                    Play online or over local WiFi with 4-15 players as you attempt to prep your spaceship for
                    departure, but beware as one will be an impostor bent on killing everyone!Crewmates can win by
                    completing all tasks or discovering and voting the impostor off the ship. Play online or over local
                    WiFi with 4-15 players as you attempt to prep your spaceship for departure, but beware as one will
                    be an impostor bent on killing everyone!
                    Crewmates can win by completing all tasks or discovering and voting the impostor off the ship.
                </p>
            </div>
            {
                window.screen.width >= 500 &&
                <div className={'description-block_slider'}>
                    <div className={'description-block_slider-title'}>
                        <h3>Screenshots</h3>
                    </div>
                    <div className={'description-block_slider-container'}>
                        <Slider
                            slider_options={{
                                slider_type: Slider_Type.HORIZONTAL,
                                slider_back_type: SliderBack_Type.DEFAULT,
                                infinite_type: Infinite_Type.INFINITE,
                                slider_element_type: SliderElement_Type.DEFAULT
                            }}
                            pagination={{
                                location: Slider_Type.HORIZONTAL,
                                is: true
                            }}
                            swipe={true}
                            gap={20}
                            autoplay={{
                                autoplay: true,
                                swipe: true,
                                delay: 3000,
                                smooth: false
                            }}
                            progressbar={{
                                appear:false,
                                position: ISliderProgressBarPosition.LEFT_BOTTOM,
                                direction: ISliderProgressBarDirection.HORIZONTAL
                            }}
                            focus={'no'}
                            arrows={{
                                is: true,
                                direction: Slider_Type.HORIZONTAL
                            }}
                            elements_on_screen={3}
                            width={'stretched'}
                            title={''}
                            onClick={onSliderElementClick}
                        >
                            {
                                images?.map(img => (
                                    <SliderElement title={''} key={img.id}>
                                        <div style={{ backgroundImage: `url(${img?.imgSrc})` }}/>
                                    </SliderElement>
                                ))
                            }
                        </Slider>
                    </div>
                </div>
            }
            <div className={'description-block_mob-ver'}>
                <div className={'description-block_mob-ver-slider'}>
                    <Slider
                        slider_options={{
                            slider_back_type: SliderBack_Type.DEFAULT,
                            infinite_type: Infinite_Type.INFINITE,
                            slider_element_type: SliderElement_Type.DEFAULT,
                            slider_type: Slider_Type.HORIZONTAL
                        }}
                        pagination={{
                            location: Slider_Type.HORIZONTAL,
                            is: true
                        }}
                        swipe={true}
                        gap={20}
                        autoplay={{
                            autoplay: true,
                            swipe: true,
                            smooth: false,
                            delay: 3000
                        }}
                        progressbar={{
                            appear: false,
                            direction: ISliderProgressBarDirection.HORIZONTAL,
                            position: ISliderProgressBarPosition.LEFT_BOTTOM
                        }}
                        focus={'no'}
                        arrows={{
                            is: false,
                            direction: Slider_Type.HORIZONTAL
                        }}
                        elements_on_screen={1.3}
                        title={''}
                        width={"stretched"}>
                        <SliderElement title={''}>
                            <div style={{
                                backgroundImage: `url(${slider_img_1})`
                            }}>
                            </div>
                        </SliderElement>
                        <SliderElement title={''}>
                            <div style={{
                                backgroundImage: `url(${slider_img_2})`
                            }}>
                            </div>
                        </SliderElement>
                        <SliderElement title={''}>
                            <div style={{
                                backgroundImage: `url(${slider_img_3})`
                            }}>
                            </div>
                        </SliderElement>
                    </Slider>
                </div>
                <div className={'description-block_mob-ver-descr'}>
                    <div className={'description-block_mob-ver-text-descr'}>
                        <p>
                            Play online or over local WiFi with 4-15 players as you attempt to prep your spaceship for departure,
                            but beware as one will be an impostor bent on killing everyone!
                        </p>
                        <p>
                            Crewmates can win by completing all tasks or
                            discovering and voting the impostor off the ship.
                        </p>
                    </div>
                    <div className={'description-block_mob-ver-btn'}>
                        <button>
                            Show more
                        </button>
                    </div>
                </div>
            </div>
            <div className={'description-block_another-info'}>
                <SupportedDevicesPart/>
                <ProjectLinkPart/>
            </div>
        </div>
    );
};

export default DescriptionBlock;