import React from "react";

import {IMiniGameImage} from "./MiniGameImage.interface";

import minigameimage from "./MiniGameImage.module.scss";
import {Link} from "react-router-dom";
import {GoUp} from "../../../Utils/GoUp";

const MiniGameImage = ({imgSrc, game_id, name}: IMiniGameImage) => {
    const onLinkClick = async () => {
        await GoUp()
    }

    return (
        <div className={minigameimage.container} onClick={onLinkClick}>
            <Link to={`/projects/${game_id}/${name}`}>
                <div style={{backgroundImage: `url(${imgSrc})`}} data-mouse-focus={true}/>
            </Link>
        </div>
    );
};

export default MiniGameImage;
