export const getDataWithDelay = (data:any, delay:number = 2000): Promise<any> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(data)
        }, delay)
    })
}