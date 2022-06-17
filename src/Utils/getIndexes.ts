type Arr = {
    id: string
}

export const getIndexes = (arr: Arr[], currentId: string): {
    currentIndex: number,
    nextIndex: number,
} => {
    const indexes = {
        currentIndex: 0,
        nextIndex: 0,
    }

    indexes.currentIndex = arr.findIndex(el => el.id == currentId)

    if(indexes.currentIndex == arr.length - 1) {
        indexes.nextIndex = 0;
    } else {
        indexes.nextIndex = indexes.currentIndex + 1;
    }

    return indexes;
}