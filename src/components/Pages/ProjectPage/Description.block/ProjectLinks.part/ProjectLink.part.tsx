import React from 'react';

import ImageLink from "../../../../UI/ImageLink/ImageLink";

import './ProjectLink.part.scss'

import appstore_img from '../../../../../assets/icons/project/apstore.svg'
import github_img from '../../../../../assets/icons/project/github.svg'
import playmarket_img from '../../../../../assets/icons/project/playmarket.svg'

const ProjectLinkPart = () => {
    return (
        <div className={'project-links'}>
            <div className={'project-links_logo'}>
                <h5>Links:</h5>
            </div>
            <div className={'project-links_links'}>
                <ImageLink img={appstore_img} link={'https://appstore.com'}/>
                <ImageLink img={github_img} link={'https://github.com'}/>
                <ImageLink img={playmarket_img} link={'https://googleplay.com'}/>
            </div>
        </div>
    );
};

export default ProjectLinkPart;