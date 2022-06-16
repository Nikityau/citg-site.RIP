import { nanoid } from 'nanoid'

import {ProjectInfo} from "../Syntetic.data.type";

import background from '../../assets/images/syntetic-project-back.png'

import img_1 from '../../assets/images/projects/img_1.png'
import img_2 from '../../assets/images/projects/img_2.jpg'
import img_3 from '../../assets/images/projects/img_3.png'

import appstore_img from '../../assets/icons/project/apstore.svg'
import github_img from '../../assets/icons/project/github.svg'
import playmarket_img from '../../assets/icons/project/playmarket.svg'

import project_synt_logo from '../../assets/images/projects/project_synt_logo.png'

import android_img from '../../assets/icons/devices/android.svg'
import ios_img from '../../assets/icons/devices/apple.svg'

export const project: ProjectInfo = {
    id: 'synthetic-project-id-000',
    background_logo: background,
    description: "Play online or over local WiFi with 4-15 players as you attempt to prep your spaceship for departure, but beware as one will be an impostor bent on killing everyone!" +
        "Crewmates can win by completing all tasks or discovering and voting the impostor off the ship." +
        "Play online or over local WiFi with 4-15 players as you attempt to prep your spaceship for departure, but beware as one will be an impostor bent on killing everyone!Crewmates can win by completing all tasks or discovering and voting the impostor off the ship. Play online or over local WiFi with 4-15 players as you attempt to prep your spaceship for departure, but beware as one will be an impostor bent on killing everyone!" +
        "Crewmates can win by completing all tasks or discovering and voting the impostor off the ship.",
    img_arr: [
        {
            id: nanoid(),
            imgSrc: img_1,
        },
        {
            id: nanoid(),
            imgSrc: img_2,
        },
        {
            id: nanoid(),
            imgSrc: img_3
        }
    ],
    links: [
        {
            link: 'https://www.apple.com/ru/app-store/',
            img: appstore_img
        },
        {
            link: 'https://github.com',
            img: github_img
        },
        {
            link: 'https://play.google.com',
            img: playmarket_img
        }
    ],
    logo: project_synt_logo,
    supported_devices: [
        {
            logo: android_img,
            os: 'android',
            version: '5.0+'
        },
        {
            logo: ios_img,
            os: 'ios',
            version: '13+'
        }
    ],
    title: 'Cosmic Driver'
}