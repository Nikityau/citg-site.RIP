import {MemberInfo, MiniInfo} from "../Syntetic.data.type";

export const GetSoftware = (member: MemberInfo): MiniInfo[] => {
    const software: MiniInfo[] = [];

    member.software.map(soft => {
        software.push({
            id: soft.id,
            imgSrc: soft.imgSrc
        })
    })

    return software;
}