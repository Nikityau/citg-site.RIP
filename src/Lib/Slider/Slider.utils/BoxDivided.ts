import {nanoid} from 'nanoid'

export type Box = {
    id: string,
    box_els: any[]
}

export type Boxes = [
    box?: Box
]

export const BoxDivided = (arr: any[], cols: number, rows: number): Boxes => {
    const els_in_box = cols * rows;
    const box_count = Math.ceil(arr.length / els_in_box);

    const boxes: Boxes = [ ];

    for (let i = 0; i < box_count; ++i) {
        const start_i: number = els_in_box * i;
        const end: number = els_in_box + els_in_box * i;

        const box: Box = {
            id: nanoid(),
            box_els: []
        }

        for (let j = start_i, g = 0; j < end; j++, g++) {
            if (arr[j]) {
                box.box_els.push(arr[j])
            } else {
                if (arr[g]) {
                    box.box_els.push(arr[g])
                } else {
                    box.box_els.push({})
                }
            }
        }

        boxes.push(box);
    }


    return boxes;
}