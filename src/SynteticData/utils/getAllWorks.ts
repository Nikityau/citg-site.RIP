import { nanoid } from 'nanoid'

import {member} from "../Syntetic.data/member";
import {Img, MemberInfo, Work} from "../Syntetic.data.type";

import stage_1 from '../../assets/images/member-works/crSJOMuZl_U.png'
import stage_2 from '../../assets/images/member-works/DpFkwDwNpkM_2.png'
import stage_3 from '../../assets/images/member-works/DpFkwDwNpkM.png'
import stage_4 from '../../assets/images/member-works/m3r_rBq0_KQ.png'
import stage_5 from '../../assets/images/member-works/ggb7cfb65dbd_3.png'

const getDevStages = ():Img[] => {
    return [
        {
            id: nanoid(),
            imgSrc: stage_1
        },
        {
            id: nanoid(),
            imgSrc: stage_2
        },
        {
            id: nanoid(),
            imgSrc: stage_3
        },
        {
            id: nanoid(),
            imgSrc: stage_4
        },
        {
            id: nanoid(),
            imgSrc: stage_5
        }
    ]
}

export const GetAllWorks = (member_: MemberInfo): Work[] => {
    const works: Work[] = []

    member_.my_works.map((work, index) => {
        works.push({
            id: work.id,
            img: work.imgSrc,
            name: 'Name',
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            development_stages: index == 0 ? getDevStages() : [],
            software_used: member.software
        })
    })

    return works;
}