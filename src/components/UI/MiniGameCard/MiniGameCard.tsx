import React from "react";

import {IMiniGameCard} from "./MiniGameCard.interface";

import minigamecard from "./MiniGameCard.module.scss";
import {GoUp} from "../../../Utils/GoUp";
import {Link} from "react-router-dom";

const MiniGameCard = ({img, title, project_id}: IMiniGameCard) => {

    const onLinkClick = async () => {
        await GoUp()
    }

    return (
        <div className={minigamecard.container} onClick={onLinkClick}>
            <Link to={`/projects/${project_id}/${title}`}>
                <div className={minigamecard.img}>
                    <div style={{backgroundImage: `url(${img})`}}/>
                </div>
                <div className={minigamecard.title}>
                    <h4>{title}</h4>
                </div>
            </Link>
        </div>
    );
};

export default MiniGameCard;
