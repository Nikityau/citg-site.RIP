import {nanoid} from 'nanoid'

import {MemberInfo} from "../Syntetic.data.type";

import member_photo from '../../assets/images/team-member/ded.png'

import figma_img from '../../assets/icons/project/figma.svg'
import ps_img from '../../assets/icons/project/ai.svg'
import ai_img from '../../assets/icons/project/ps.svg'

import be_img from '../../assets/icons/socials/be-white.svg'
import vk_img from '../../assets/icons/socials/vk-white.svg'
import tg_img from '../../assets/icons/socials/telegram-white.svg'

import certificate_plug from '../../assets/images/certificate_plug.png'

import citg_plug from '../../assets/images/citg_plug_rectangle.png'

import samurai_img from '../../assets/images/gallery/samurai.png'
import chiksa_img from '../../assets/images/gallery/chiksa.png'
import strashna_img from '../../assets/images/gallery/strashna.png'
import chelik_img from '../../assets/images/gallery/chelik.png'
import jinx_img from '../../assets/images/gallery/jinx.png'
import xz_img from '../../assets/images/gallery/xz.png'
import dude_img from '../../assets/images/gallery/dude.png'
import noga_img from '../../assets/images/gallery/noga.png'
import navigation_img from '../../assets/images/gallery/navigation.png'

export const member: MemberInfo = {
    id: nanoid(),
    photo: {
        id: nanoid(),
        imgSrc: member_photo
    },
    full_name: "Андрей Бредихин",
    skills: ["illustrator", "UI/UX-design"],
    software: [
        {
            id: nanoid(),
            title: 'photoshop',
            imgSrc: ai_img
        },
        {
            id: nanoid(),
            title: 'illustrator',
            imgSrc: ps_img
        },
        {
            id: nanoid(),
            title: 'figma',
            imgSrc: figma_img
        }
    ],
    social_links: [
        {
            img: be_img,
            link: 'https://behance.com'
        },
        {
            img: vk_img,
            link: 'https://vk.com'
        },
        {
            img: tg_img,
            link: 'https://telegram.org'
        }
    ],
    achievement_n_awards: [
        {
            id: nanoid(),
            imgSrc: certificate_plug
        },
        {
            id: nanoid(),
            imgSrc: certificate_plug
        },
        {
            id: nanoid(),
            imgSrc: certificate_plug
        },
        {
            id: nanoid(),
            imgSrc: certificate_plug
        },
        {
            id: nanoid(),
            imgSrc: certificate_plug
        },
    ],
    participation_in_projects: [
        {
            id: nanoid(),
            imgSrc: citg_plug
        },
        {
            id: nanoid(),
            imgSrc: citg_plug
        },
        {
            id: nanoid(),
            imgSrc: citg_plug
        },
        {
            id: nanoid(),
            imgSrc: citg_plug
        },
        {
            id: nanoid(),
            imgSrc: citg_plug
        },
    ],
    my_works: [
        {
            id: nanoid(),
            imgSrc: samurai_img
        },
        {
            id: nanoid(),
            imgSrc: chiksa_img
        },
        {
            id: nanoid(),
            imgSrc: strashna_img
        },
        {
            id: nanoid(),
            imgSrc: chelik_img
        },
        {
            id: nanoid(),
            imgSrc: jinx_img
        },
        {
            id: nanoid(),
            imgSrc: xz_img
        },
        {
            id: nanoid(),
            imgSrc: dude_img
        },
        {
            id: nanoid(),
            imgSrc: noga_img
        },
        {
            id: nanoid(),
            imgSrc: navigation_img
        },
    ],
    pdf_portfolio_link: 'https://cran.r-project.org/web/packages/V8/V8.pdf'
}