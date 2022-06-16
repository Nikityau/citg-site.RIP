import {Img} from "../../../SynteticData/Syntetic.data.type";

export type PairArr = {
    firstEl: Img,
    secondEl: Img
}

export const MakePair = (imgArr: Img[]): PairArr[] => {
    const firstArrPart = imgArr.slice(0, Math.ceil(imgArr.length / 2));
    const secondArrPart = imgArr.slice(Math.ceil(imgArr.length / 2))

    const pairs: PairArr[] = []

    firstArrPart.map((f, index) => {
        pairs.push({
            firstEl: f,
            secondEl: null
        })
    })

    secondArrPart.map((s, index) => {
        pairs[index].secondEl = s;
    })

    return pairs;
}