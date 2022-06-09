import React from 'react';

import DeviceBar from "../../../UI/DeviceBar/DeviceBar";
import SupportedDevicesPart from "./SupportedDevices.part/SupportedDevices.part";

import './Description.block.scss'
import ProjectLinkPart from "./ProjectLinks.part/ProjectLink.part";



const DescriptionBlock = () => {
    return (
        <div className={'description-block'}>
            <div className={'description-block_description'}>
                <h3>Description</h3>
                <p>
                    Play online or over local WiFi with 4-15 players as you attempt to prep your spaceship for departure, but beware as one will be an impostor bent on killing everyone!
                    Crewmates can win by completing all tasks or discovering and voting the impostor off the ship.
                    Play online or over local WiFi with 4-15 players as you attempt to prep your spaceship for departure, but beware as one will be an impostor bent on killing everyone!Crewmates can win by completing all tasks or discovering and voting the impostor off the ship. Play online or over local WiFi with 4-15 players as you attempt to prep your spaceship for departure, but beware as one will be an impostor bent on killing everyone!
                    Crewmates can win by completing all tasks or discovering and voting the impostor off the ship.
                </p>
            </div>
            <div className={'description-block_slider'}>
                <div className={'description-block_slider-title'}>
                    <h3>Screenshots</h3>
                </div>
                <div className={'description-block_slider-container'}>

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