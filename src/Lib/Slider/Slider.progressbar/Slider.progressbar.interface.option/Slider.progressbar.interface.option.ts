export enum ISliderProgressBarPosition {
    LEFT_TOP = 'top',
    LEFT_BOTTOM = 'left_bottom',
    RIGHT_TOP = 'right_top',
    RIGHT_BOTTOM = 'right_bottom'
}

export enum ISliderProgressBarDirection {
    VERTICAL= 'vertical',
    HORIZONTAL = 'horizontal',
}

export interface ISliderProgressbarOption {
    appear: boolean
    position: ISliderProgressBarPosition
    direction: ISliderProgressBarDirection
}