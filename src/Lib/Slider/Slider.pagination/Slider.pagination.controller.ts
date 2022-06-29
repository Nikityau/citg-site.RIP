export class SliderPaginationController {
    private _paginationContainer: HTMLDivElement | null = null

    public constructor() {
    }

    public Set_pagination(paginationContainer: HTMLDivElement):void{
        this._paginationContainer = paginationContainer;
    }

    public async Set_circle_by_index(index:number):Promise<void> {
        const circles = this._paginationContainer.querySelectorAll('[data-slider-pagination-circle]')

        await Array.from(circles).map(circle => circle.classList.remove('circle-current'))

        const currentCircle = this._paginationContainer.querySelector(`[data-circle-index=\'${index}\']`)
        currentCircle.classList.add('circle-current')
    }

}