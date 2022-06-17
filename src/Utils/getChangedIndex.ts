export const getChangedIndex =
    (left: number, right: number,
     index: number, def: number, direction: 'left' | 'right' | 'unset' = 'unset'):number => {

     if(index < def) {
        return right
     }

    if(index > right || index < left) {
        return def;
    }
    if(index == def) {
        if(direction == 'unset') return index
        if(direction == 'left') return right
        if(direction == 'right') return left
    }

    return index;
}