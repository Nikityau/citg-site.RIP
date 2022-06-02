import React, {useEffect, useState} from "react";

import MiniGameImage from "../../../UI/MiniGameImage/MiniGameImage";
import CommonButton from "../../../UI/Form/CommonButton/CommonButton";
import PageNumber from "../../../UI/PageNumber/PageNumber";

import {IGame, SynteticAPI} from "../../../../SynteticData/SynteticAPI";
import {dataArr} from "../../../../SynteticData/Syntetic.data.type";

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

const ProjectsBlock = () => {
  const [awards, setAwards] = useState<dataArr[] | []>([]);
  const [games, setGames] = useState<IGame[] | []>([]);

  useEffect(() => {
    setAwards(SynteticAPI.getAwards());
    setGames(SynteticAPI.getGames());
  }, []);

  return (
    <div className={projectsbock.container}>
      <div className={projectsbock.innerContainer}>
        <div className={projectsbock.purpleGradient} />
        <div className={projectsbock.orangeGradient} />
        <div className={projectsbock.title} data-testid={"projects-block-title"}>
          <h4 data-mouse-focus={true}> У нас есть разные проекты </h4>
          <p data-mouse-focus={true}> от Казуальных игр до настоящего искусственного интеллекта</p>
        </div>
        <div className={projectsbock.gamesList}>
          <div
            className={projectsbock.gamesListInnerWrapper}
            data-testid={"projects-block-games-list"}
          >
            {games.map((game) => {
              return <MiniGameImage key={game.id} imgSrc={game.gameImg} />;
            })}
          </div>
          <div className={projectsbock.button}>
            <CommonButton type={TypeButton.Load} data={"/projects"} text={"Показать больше"} />
          </div>
        </div>
        <div className={projectsbock.gamesListMobVer}>
          <div className={projectsbock.gamesListMobVerTittle}>
            <h5>от Казуальных игр до настоящего искусственного интеллекта</h5>
          </div>
          <div className={projectsbock.gamesListMobVerSlider}>
            <div className={projectsbock.gamesListMobVerSliderTrack}>
              <div
                className={projectsbock.gamesListMobVerSliderElement}
                style={{ backgroundImage: `url(${citg_plug})` }}
              />
              <div
                className={projectsbock.gamesListMobVerSliderElement}
                style={{ height: "100%", backgroundImage: `url(${citg_plug})` }}
              />
              <div
                className={projectsbock.gamesListMobVerSliderElement}
                style={{ backgroundImage: `url(${citg_plug})` }}
              />
            </div>
          </div>
          <div className={projectsbock.gamesListMobVerSliderPagination}>
            <div
              className={projectsbock.gamesListMobVerPaginationCircle}
              style={{ width: "19px", background: "#F4682C", borderRadius: "16px" }}
            />
            <div className={projectsbock.gamesListMobVerPaginationCircle} />
            <div className={projectsbock.gamesListMobVerPaginationCircle} />
            <div className={projectsbock.gamesListMobVerPaginationCircle} />
          </div>
          <div className={projectsbock.gamesListMobVerAdditionalBlocks}>
            <div
              className={projectsbock.gamesListMobVerAdditionalBlock}
              style={{ backgroundImage: `url(${citg_plug})` }}
            />
            <div
              className={projectsbock.gamesListMobVerAdditionalBlock}
              style={{ backgroundImage: `url(${citg_plug})` }}
            />
          </div>
          <div className={projectsbock.gamesListMobVerButton}>
            <CommonButton type={TypeButton.Link} data={"/projects"} text={"Больше проектов тут"} />
          </div>
        </div>

        <div className={projectsbock.pageNum}>
          <PageNumber number={"02"} />
        </div>

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
            gap={20}
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
            arrows={true}
            title={"Tittle"}
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

        <div className={projectsbock.sliderMobVerPlug}>
          <div className={projectsbock.sliderMobVerPlugTittle}>
            <h5>Tittle</h5>
          </div>
          <div className={projectsbock.sliderMobVerPlugSlider}>
            <div className={projectsbock.sliderMobVerPlugElem}></div>
            <div className={projectsbock.sliderMobVerPagination}>
              <div
                className={projectsbock.sliderMobVerPaginationCircle}
                style={{ width: "28px", background: "#E7612C", borderRadius: "16px" }}
              />
              <div className={projectsbock.sliderMobVerPaginationCircle} />
              <div className={projectsbock.sliderMobVerPaginationCircle} />
              <div className={projectsbock.sliderMobVerPaginationCircle} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsBlock;
