import React, {useEffect, useState} from "react";

import MiniGameImage from "../../../UI/MiniGameImage/MiniGameImage";
import CommonButton from "../../../UI/Form/CommonButton/CommonButton";
import PageNumber from "../../../UI/PageNumber/PageNumber";

import {SynteticAPI} from "../../../../SynteticData/SynteticAPI";
import {MiniInfo} from "../../../../SynteticData/Syntetic.data.type";

import {TypeButton} from "../../../UI/Form/CommonButton/TypeButton.enum";

import projectsbock from "./ProjectsBlock.module.scss";

import citg_plug from "../../../../assets/images/citg_plug.png";

import Slider from "../../../../Lib/Slider/Slider";

import {
    Infinite_Type,
    Slider_Type,
    SliderBack_Type,
    SliderElement_Type,
} from "../../../../Lib/Slider/Slider.type/Slider_Type";
import SliderElement from "../../../../Lib/Slider/Slider.element/Slider.element";
import {
    ISliderProgressBarDirection,
    ISliderProgressBarPosition
} from "../../../../Lib/Slider/Slider.progressbar/Slider.progressbar.interface.option/Slider.progressbar.interface.option";
import PopUpGallery from "../../../../Lib/PopUpGallery/PopUpGallery";

import popUpGalleryController from "../../../../Lib/PopUpGallery/PopUpGallery.controller/PopUpGallery.controller";

const ProjectsBlock = () => {
    const [awards, setAwards] = useState<MiniInfo[] | []>([]);
    const [games, setGames] = useState<MiniInfo[] | []>([]);

    useEffect(() => {
        setAwards(SynteticAPI.getAwards());
        setGames(SynteticAPI.getGames());
    }, []);

    const onSliderElementClick = (e:React.MouseEvent<HTMLElement>) => {
        const el = e.target as HTMLElement;
        const el_index =
            el.getAttribute('data-slider-el-index') ||
            el.getAttribute('data-slider-left-el-index') ||
            el.getAttribute('data-slider-right-el-index')



        if(!el_index) return

        popUpGalleryController.Open(Number.parseInt(el_index))
    }

    return (
        <div className={projectsbock.container}>
            <PopUpGallery images={awards || []}/>
            <div className={projectsbock.innerContainer}>
                <div className={projectsbock.purpleGradient}/>
                <div className={projectsbock.orangeGradient}/>
                <div className={projectsbock.title} data-testid={"projects-block-title"}>
                    <h4 data-mouse-focus={true}> У нас есть разные проекты </h4>
                    <p data-mouse-focus={true}> от Казуальных игр до настоящего искусственного интеллекта</p>
                </div>
                {
                    window.screen.width >= 500 &&
                    <div className={projectsbock.gamesList}>
                        <div
                            className={projectsbock.gamesListInnerWrapper}
                            data-testid={"projects-block-games-list"}
                        >
                            {games.map((game) => {
                                return <MiniGameImage key={game.id} imgSrc={game.imgSrc}
                                                      game_id={`synt-game-${game.id}`} name={'synt-game'}/>;
                            })}
                        </div>
                        <div className={projectsbock.button}>
                            <CommonButton type={TypeButton.Load} data={"/projects"} text={"Показать больше"}/>
                        </div>
                    </div>
                }

                <div className={projectsbock.gamesListMobVer}>
                    <div className={projectsbock.gamesListMobVerTittle}>
                        <h5>от Казуальных игр до настоящего искусственного интеллекта</h5>
                    </div>
                    <div className={projectsbock.gamesListMobVerSlider}>
                        <Slider
                            slider_options={{
                                slider_element_type:SliderElement_Type.DEFAULT,
                                slider_back_type: SliderBack_Type.DEFAULT,
                                infinite_type: Infinite_Type.INFINITE,
                                slider_type: Slider_Type.EXTENDED,
                            }}
                            pagination={{
                                is: true,
                                location: Slider_Type.HORIZONTAL
                            }}
                            swipe={true}
                            gap={0}
                            autoplay={{
                                autoplay: true,
                                swipe: true,
                                smooth: false,
                                delay: 3000
                            }}
                            progressbar={{
                                direction: ISliderProgressBarDirection.HORIZONTAL,
                                position: ISliderProgressBarPosition.LEFT_BOTTOM,
                                appear: false
                            }}
                            focus={'center'}
                            arrows={{
                                is: false,
                                direction: Slider_Type.VERTICAL
                            }}
                            elements_on_screen={3}
                            width={'default'}
                            title={''}>
                            <SliderElement title={''}>
                               <div style={{ backgroundImage: `url(${citg_plug})` }}/>
                            </SliderElement>
                            <SliderElement title={''}>
                                <div style={{ backgroundImage: `url(${citg_plug})` }}/>
                            </SliderElement>
                            <SliderElement title={''}>
                                <div style={{ backgroundImage: `url(${citg_plug})` }}/>
                            </SliderElement>
                            <SliderElement title={''}>
                                <div style={{ backgroundImage: `url(${citg_plug})` }}/>
                            </SliderElement>
                            <SliderElement title={''}>
                                <div style={{ backgroundImage: `url(${citg_plug})` }}/>
                            </SliderElement>
                            <SliderElement title={''}>
                                <div style={{ backgroundImage: `url(${citg_plug})` }}/>
                            </SliderElement>
                        </Slider>
                    </div>
                    <div className={projectsbock.gamesListMobVerAdditionalBlocks}>
                        <div
                            className={projectsbock.gamesListMobVerAdditionalBlock}
                            style={{backgroundImage: `url(${citg_plug})`}}
                        />
                        <div
                            className={projectsbock.gamesListMobVerAdditionalBlock}
                            style={{backgroundImage: `url(${citg_plug})`}}
                        />
                    </div>
                    <div className={projectsbock.gamesListMobVerButton}>
                        <CommonButton type={TypeButton.Link} data={"/projects"} text={"Больше проектов тут"}/>
                    </div>
                </div>

                <div className={projectsbock.pageNum}>
                    <PageNumber number={"02"}/>
                </div>

                {
                    window.screen.width >= 500 &&
                    <div className={projectsbock.sliderContainer}>
                        <Slider
                            slider_options={{
                                slider_type: Slider_Type.HORIZONTAL,
                                infinite_type: Infinite_Type.INFINITE,
                                slider_back_type: SliderBack_Type.DEFAULT,
                                slider_element_type: SliderElement_Type.DEFAULT,
                            }}
                            pagination={{
                                is: true,
                                location: Slider_Type.HORIZONTAL,
                            }}
                            gap={0}
                            swipe={true}
                            autoplay={{
                                autoplay: true,
                                delay: 3000,
                                smooth: false,
                                swipe: true,
                            }}
                            focus={"center"}
                            elements_on_screen={3}
                            progressbar={{
                                appear: false,
                                position: ISliderProgressBarPosition.LEFT_BOTTOM,
                                direction: ISliderProgressBarDirection.HORIZONTAL
                            }}
                            width={'default'}
                            arrows={{
                                direction: Slider_Type.HORIZONTAL,
                                is: true
                            }}
                            title={"Tittle"}
                            onClick={onSliderElementClick}
                        >
                            {awards.map((award) => {
                                return (
                                    <SliderElement key={award.id} title={"text"}>
                                        <img
                                            src={award.imgSrc}
                                            alt={"img"}
                                            onSelectCapture={(e) => e.preventDefault()}
                                            onDragStart={(e) => e.preventDefault()}
                                        />
                                    </SliderElement>
                                );
                            })}
                        </Slider>
                    </div>
                }

                <div className={projectsbock.sliderMobVer}>
                    <Slider
                        slider_options={{
                            slider_type: Slider_Type.SINGLE,
                            infinite_type: Infinite_Type.INFINITE,
                            slider_back_type: SliderBack_Type.HALF_BLACK,
                            slider_element_type: SliderElement_Type.DEFAULT
                        }}
                        pagination={{
                            is: true,
                            location: Slider_Type.HORIZONTAL
                        }}
                        swipe={true}
                        gap={0}
                        autoplay={{
                            autoplay: true,
                            delay: 3000,
                            smooth: false,
                            swipe: true
                        }}
                        progressbar={{
                            appear: false,
                            direction: ISliderProgressBarDirection.HORIZONTAL,
                            position: ISliderProgressBarPosition.LEFT_BOTTOM
                        }}
                        focus={'no'}
                        arrows={{
                            is: false,
                            direction: Slider_Type.VERTICAL
                        }}
                        elements_on_screen={3}
                        width={'default'}
                        title={''}>
                        {awards.map((award) => {
                            return (
                                <SliderElement key={award.id} title={"text"}>
                                    <img
                                        src={award.imgSrc}
                                        alt={"img"}
                                        onSelectCapture={(e) => e.preventDefault()}
                                        onDragStart={(e) => e.preventDefault()}
                                    />
                                </SliderElement>
                            );
                        })}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default ProjectsBlock;
