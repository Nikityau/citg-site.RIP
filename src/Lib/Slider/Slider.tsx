import React, {useEffect, useRef, useState} from "react";

import {ISlider} from "./Slider.interface/Slider.interface.option";

import SliderPagination from "./Slider.pagination/Slider.pagination";

import {SliderBaseController} from "./Slider.controller/Slider.base.controller";
import SliderProgressbar from "./Slider.progressbar/Slider.progressbar";

import {Slider_Type, SliderBack_Type, SliderElement_Type} from "./Slider.type/Slider_Type";

import slider from "./Slider.module.scss";
import "./Slider.scss";

const Slider = ({
                    slider_options,
                    pagination,
                    children,
                    gap,
                    progressbar,
                    autoplay,
                    focus,
                    elements_on_screen,
                    arrows,
                    title,
                    swipe,
                    width
                }: ISlider) => {
    const [slider_base_controller, set_slider_base_controller] = useState<SliderBaseController>(new SliderBaseController())

    const [children_length, set_children_length] = useState<number>(0);
    const [current_el_index, set_current_el_index] = useState<number>(0);

    const slider_ref = useRef<HTMLDivElement>(undefined)
    const slider_track_ref = useRef<HTMLDivElement>(undefined)

    const left_arrow_ref = useRef<HTMLDivElement>(undefined)
    const right_arrow_ref = useRef<HTMLDivElement>(undefined)

    const slider_pagination_ref = useRef<HTMLDivElement>(undefined)

    const progress_bar_ref = useRef<HTMLDivElement>(undefined)

    useEffect(() => {
        if (!slider_ref.current || !slider_track_ref.current) return;

        slider_base_controller.slider = slider_ref.current;
        slider_base_controller.slider_track = slider_track_ref.current;
        slider_base_controller.gap = gap;

        if (left_arrow_ref.current && right_arrow_ref.current) {
            slider_base_controller.Set_Arrows(left_arrow_ref.current, right_arrow_ref.current, arrows.direction);
        }

        slider_base_controller.Set_Swipes();
        slider_base_controller.Set_Autoplay();

        slider_base_controller.change_index = set_current_el_index;

        slider_base_controller.Options(
            slider_options,
            pagination.is,
            {
                ...autoplay,
                swipe: swipe ? autoplay.swipe ? true : false : false
            },
            {
                options: progressbar,
                back_line: progress_bar_ref.current,
            },
            focus,
            elements_on_screen
        );
    }, []);

    useEffect(() => {
        const l = children?.toString().split(",").length || 0;
        set_children_length(l);
        slider_base_controller.el_length = l;
        slider_base_controller.onChildrenChanges();
    }, [children]);

    const getSliderClass = (): string => {
        switch (slider_options.slider_type) {
            case Slider_Type.DEFAULT:
            case Slider_Type.HORIZONTAL:
                return [slider.trackDefault, slider.horizontalTrack].join(" ");
            case Slider_Type.VERTICAL:
                return slider.verticalTrack;
            case Slider_Type.SINGLE:
                return slider.single;
            case Slider_Type.EXTENDED:
                return slider.extendedTrack;
            case Slider_Type.SQUARE:
                return slider.square;
            default:
                return slider.trackDefault;
        }
    };

    const getSliderClassByCards = () => {
        switch (slider_options.slider_element_type) {
            case SliderElement_Type.DEFAULT:
                return 'slider-track__default-el';
            case SliderElement_Type.CARD:
                return 'slider-track__card-el';
            default:
                return 'slider-track__card-el'
        }
    }

    const getSliderBackClass = () => {
        switch (slider_options.slider_back_type) {
            case SliderBack_Type.DEFAULT:
                return ''
            case SliderBack_Type.FULL_BLACK:
                return 'slider__full-black'
            case SliderBack_Type.HALF_BLACK:
                return 'slider__half-back'
            case SliderBack_Type.PARTY:
                return ''
            default:
                return ''
        }
    }

    return (
        <div
            className={[slider.container, getSliderBackClass()].join(' ')}>
            <div className={slider.tittle}>
                <h5>{title}</h5>
            </div>
            {arrows.is && (
                <>
                    <div
                        className={[slider.leftArrow,
                            arrows.direction === Slider_Type.HORIZONTAL ? '' : 'slider-arrow-vertical-top' ].join(' ')}
                        data-arrow={"left"}
                        ref={left_arrow_ref}
                        onSelectCapture={(e) => e.preventDefault()}
                    >
                    </div>
                    <div
                        className={[slider.rightArrow,
                            arrows.direction === Slider_Type.HORIZONTAL ? '' : 'slider-arrow-vertical-bottom'].join(' ')}
                        ref={right_arrow_ref}
                        data-arrow={"right"}
                    >
                    </div>
                </>
            )}
            <div
                className={[slider.slider,
                    slider_options.slider_type == Slider_Type.EXTENDED
                        ? slider.sliderExtended : '',
                    width == 'stretched' ? 'slider-width__stretched' : ''].join(' ')}
                ref={slider_ref}
            >
                <div
                    ref={slider_track_ref}
                    className={[slider.track, "slider-track", getSliderClass(), getSliderClassByCards()].join(" ")}
                    style={{gap: gap + "px"}}
                >
                    {children}
                </div>
            </div>
            {pagination.is && (
                <SliderPagination
                    pagination_type={pagination.location}
                    current_el_index={current_el_index}
                    length={children_length}
                    id={`slider-pagination`}
                    ref={slider_pagination_ref}
                />
            )}
            {
                progressbar.appear &&
                <SliderProgressbar appear={progressbar.appear}
                                   direction={progressbar.direction}
                                   position={progressbar.position}
                                   ref={progress_bar_ref}/>
            }
        </div>
    );
};

export default Slider;
