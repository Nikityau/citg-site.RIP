import {ISliderOptions} from "../Slider.interface/Slider.interface.option";
import {
    ISliderProgressBarDirection,
    ISliderProgressBarPosition
} from '../Slider.progressbar/Slider.progressbar.interface.option/Slider.progressbar.interface.option'
import {ISliderAutoplayOptions} from "../Slider.autoplay/Slider.autoplay.interface/Slider.autoplay.options.interface";
import {focus, Infinite_Type, Slider_Type, SliderBack_Type, SliderElement_Type,} from "../Slider.type/Slider_Type";

import {ISliderArrowBase} from "../Slider.arrow.controller/Slider.arrow.base/Slider.arrow.base";
import {ISliderSwipeBase} from "../Slider.swipe/Slider.swipe.base/Slider.swipe.base";
import {ISliderAutoplayBase} from "../Slider.autoplay/Slider.autoplay.base/Slider.autoplay.base";

import {SliderArrowController} from "../Slider.arrow.controller/Slider.arrow.controller";
import {SliderSwipeController} from "../Slider.swipe/Slider.swipe.controller";
import {SliderAutoplayController} from "../Slider.autoplay/Slider.autoplay.controller";
import {EventType} from "../Slider.interface/Slider.event.type";
import {
    ISliderProgressbarBase
} from "../Slider.progressbar/Slider.progressbar.controller.base/Slider.progressbar.base.interface";
import {
    SliderProgressbarController
} from "../Slider.progressbar/Slider.progressbar.controller/Slider.progressbar.controller";
import {
    SliderProgressbarEntry
} from "../Slider.progressbar/Slider.progressbar.interface.option/Slider.progressbar.entry";


import {ObserverBase} from "../../Observer/Observer.base";

import {SliderPaginationController} from '../Slider.pagination/Slider.pagination.controller'
import logo from "../../../components/UI/Logo/Logo";

export class SliderBaseController {
    private _slider: HTMLElement | null = null;
    private _slider_track: HTMLElement | null = null;

    private _left_arrow: HTMLElement | null = null;
    private _right_arrow: HTMLElement | null = null;

    private Observer: ObserverBase = null;

    private _gap = 20;
    private _el_on_scrn = 1;

    private focus: focus = "center";

    private _infinite_pos: "left_copy" | "main" | "right_copy" = "main";

    private _index = 1;
    private _element_length = 0;
    private _conditional_center: number = this._index;
    private _change_index: (i: number) => void = (i) => {
        return i
    };

    private _slider_options: ISliderOptions = {
        slider_type: Slider_Type.DEFAULT,
        infinite_type: Infinite_Type.NO,
        slider_back_type: SliderBack_Type.DEFAULT,
        slider_element_type: SliderElement_Type.DEFAULT,
    };
    private _pagination_option: boolean | { is: boolean, paginationContainer: HTMLElement } = false;
    private _autoplay_option: ISliderAutoplayOptions = {
        autoplay: false,
        smooth: false,
        delay: 0,
        swipe: "unset",
    };
    private _progressbar_option: SliderProgressbarEntry = {
        options: {
            appear: false,
            position: ISliderProgressBarPosition.LEFT_BOTTOM,
            direction: ISliderProgressBarDirection.HORIZONTAL
        },
        back_line: undefined
    };

    //Modules
    private _arrow_controller: ISliderArrowBase | null = null;
    private _swipe_controller: ISliderSwipeBase | null = null;
    private _autoplay_controller: ISliderAutoplayBase | null = null;
    private _progressbar_controller: ISliderProgressbarBase | null = null;
    private _pagination_controller: SliderPaginationController | null = null;

    constructor() {
        this.onChangeIndex = this.onChangeIndex.bind(this);
        this.onCheckIndex = this.onCheckIndex.bind(this);
        this.onChildrenChanges = this.onChildrenChanges.bind(this);
        this.onChangeOffset = this.onChangeOffset.bind(this);

        this.Set_by_default = this.Set_by_default.bind(this)


        this.Observer = new ObserverBase();
        this.Observer.addCallback(this.Set_by_default)
    }

    // <Set Options>
    public Set_Arrows(left: HTMLElement, right: HTMLElement, direction: Slider_Type.HORIZONTAL | Slider_Type.VERTICAL) {
        if (!this._slider) return;

        this._arrow_controller = new SliderArrowController();
        this._arrow_controller.left_arrow = left;
        this._arrow_controller.right_arrow = right;

        const slider_style = {
            left: this._slider.offsetLeft,
            top: this._slider.offsetTop,
            width: this._slider.clientWidth,
            height: this._slider.clientHeight,
        };

        this._arrow_controller.index = this._index;
        this._arrow_controller.change_index = this.onChangeIndex;


        if (this._arrow_controller)
            this.Observer.addCallback(() => {
                this._arrow_controller.Set_Arrows({
                    left: this._slider.offsetLeft,
                    top: this._slider.offsetTop,
                    width: this._slider.clientWidth,
                    height: this._slider.clientHeight,
                    direction
                })
            })

        this._arrow_controller.Set_Arrows({...slider_style, direction});
    }

    public Set_Swipes() {
        if (!this._slider) return;

        if (this._slider_options.slider_type == Slider_Type.VERTICAL) {
            this._swipe_controller = new SliderSwipeController(
                this._slider,
                this._slider_options.slider_type,
                this._index
            );

            this._swipe_controller.Change_index = this.onChangeIndex;

            return;
        }

        this._swipe_controller = new SliderSwipeController(
            this._slider,
            Slider_Type.HORIZONTAL,
            this._index
        );

        this._swipe_controller.Change_index = this.onChangeIndex;
    }

    public Set_Autoplay() {
        if (!this._slider_track || !this._slider) return;

        if (!this._autoplay_controller) {
            this._autoplay_controller = new SliderAutoplayController(
                this._slider,
                this._slider_track,
                this._index,
                this._autoplay_option
            );
        }
        this._autoplay_controller.Options(this._autoplay_option);
        this._autoplay_controller._index = this._index;
        this._autoplay_controller.Change_index = this.onChangeIndex;
    }

    public Set_ProgressBar() {
        if (!this._progressbar_controller)
            this._progressbar_controller = new SliderProgressbarController();

        if (!this._progressbar_option.back_line) return;
        const progress_line = <HTMLElement>this._progressbar_option.back_line.children[0];

        this._progressbar_controller.Options(this._progressbar_option.back_line, progress_line,
            this._progressbar_option.options, this._element_length);
    }

    public Set_Pagination() {
        if (!this._pagination_option) return

        if (this._pagination_option['paginationContainer']) {
            this._pagination_controller = new SliderPaginationController();
            this._pagination_controller.Set_pagination(this._pagination_option['paginationContainer'])
        }
    }

    public Options(
        slider_options: ISliderOptions,
        pagination: boolean | { is: boolean, paginationContainer: HTMLDivElement },
        autoplay: ISliderAutoplayOptions,
        progressbar: SliderProgressbarEntry,
        focus: focus,
        el_on_scrn: number
    ): void {
        this._slider_options = slider_options;
        this._pagination_option = pagination;
        this._autoplay_option = autoplay;
        this._progressbar_option = progressbar;

        this.focus = focus;
        this._el_on_scrn = el_on_scrn;

        this.First_init();
    }

    private First_init(): void {
        if (
            this._slider_options.slider_type == Slider_Type.VERTICAL ||
            this._slider_options.slider_type == Slider_Type.HORIZONTAL ||
            this._slider_options.slider_type == Slider_Type.DEFAULT
        ) {
        }

        if (this._slider_options.slider_type == Slider_Type.EXTENDED) {
            this.focus = "center";
            this._el_on_scrn = 3;
        }

        if (
            this._slider_options.slider_type == Slider_Type.SQUARE ||
            this._slider_options.slider_type == Slider_Type.SINGLE
        ) {
            this.focus = "no";
            this._el_on_scrn = 2;
        }

        if (this._slider_options.slider_type == Slider_Type.SQUARE) {
            this._el_on_scrn = 3;
        }

        this.Set_by_default();
    }

    private async Set_by_default() {
        if (!this._slider_track || !this._slider) return;

        const gapOffset = this._el_on_scrn === 1 ? 0 : this._gap / (this._el_on_scrn - 1);

        let el_width =
            this._slider.clientWidth / this._el_on_scrn - gapOffset;

        let el_height: number | null = null;

        if (this._slider_options.slider_type == Slider_Type.VERTICAL) {
            el_height = this._slider.clientHeight - gapOffset;
        }

        if (this._slider_options.slider_type == Slider_Type.SINGLE) {
            el_width = this._slider.clientWidth;
        }
        if (this._slider_options.slider_type == Slider_Type.EXTENDED) {
            el_width = this._slider.clientWidth * 3 / 4;
        }

        const children = await Array.from(this._slider_track.children);

        await children.map(async (child, index) => {
            const el = <HTMLElement>child;

            child.setAttribute("data-slider-el-index", `${index}`);

            await (() => {
                el.style.width = el_width + 'px';
                if (el_height) {
                    el.style.height = el_height + 'px'
                }
            })()

            if (this.focus != 'no') {
                await el.classList.add('slider-element-bw')
                el.style.transform = ('scale(.88)')
            }
        })

        await children.map(async child => {
            if (child.getAttribute('data-slider-box-els')) {
                const width = (el_width / 3 - this._gap)
                const height = el_height ? (el_height / 2 - this._gap) : (child.clientHeight / 2 - this._gap)
                await Array.from(child.children).map(async box_child => {
                    const el = await <HTMLElement>box_child;
                    await (() => {
                        el.style.width = width + 'px';
                        el.style.height = height + 'px'
                    })()
                });
            }
        })

        this.Set_by_options();
    }

    private async Set_by_options() {
        this.Slider_type_init();
        if (this._autoplay_option.autoplay) {
            await this.Set_Autoplay();
        }
        if (this._autoplay_controller) {
            this._autoplay_controller.Stop();
            this._autoplay_controller.Start();
        }
        if (this._progressbar_option.options.appear && !this._progressbar_controller) {
            this.Set_ProgressBar()
        }
        if (this._pagination_option) {
            this.Set_Pagination()
        }
    }

    private Clear_old() {
        if (!this._slider_track) return;

        const copy = this._slider_track.querySelectorAll("[data-copy-slider-el='true']");
        for (let i = 0; i < copy.length; ++i) {
            this._slider_track.removeChild(copy[i]);
        }

        this.Update_main_els();
    }

    private async Update_main_els() {
        if (!this._slider_track) return;

        const children = await Array.from(this._slider_track.children);

        let inc_index = 0;
        await children.map(child => {
            if (child.getAttribute("data-slider-main-element")) {
                child.setAttribute('data-slider-el-index', `${inc_index}`)
                ++inc_index;
            }
        })

        this._infinite_pos = "main";
    }

    private async Slider_type_init() {
        if (!this._slider || !this._slider_track) return;

        this.Clear_old();

        if (this._slider_options.infinite_type == Infinite_Type.INFINITE) {
            const main = Array.from(this._slider_track.children);

            const copy_left: Node[] = [];
            const copy_right: Node[] = [];

            await main.map((el, index) => {
                const copy_el_left = <HTMLElement>el.cloneNode(true);
                const copy_el_right = <HTMLElement>el.cloneNode(true);

                copy_el_left.removeAttribute("data-slider-el-index");
                copy_el_left.removeAttribute("data-slider-main-element");
                copy_el_right.removeAttribute("data-slider-el-index");
                copy_el_right.removeAttribute("data-slider-main-element");

                copy_el_left.setAttribute("data-slider-left-el-index", `${index}`);
                copy_el_left.setAttribute("data-copy-slider-el", "true");
                copy_el_right.setAttribute("data-slider-right-el-index", `${index}`);
                copy_el_right.setAttribute("data-copy-slider-el", "true");

                copy_left.push(copy_el_left);
                copy_right.push(copy_el_right);
            })

            this.Clear_old();

            await copy_left.reverse().map(node => this._slider_track.prepend(node))

            await copy_right.map(node => this._slider_track.append(node))

            this.Slider_set_pos_default();
        }
    }

    private async Slider_set_pos_default() {
        if (!this._slider || !this._slider_track) return;

        const el = await <HTMLElement>this._slider_track.querySelector("[data-slider-el-index='1']");

        if (!el) return;

        await this.Set_pos_by_el(el);
    }

    private Check_options() {
        if (!this._swipe_controller) return

        if (!this._autoplay_option.swipe) {
            this._swipe_controller?.Autoplay_Unsub()
            this._swipe_controller = null;
        }
        if (!this._autoplay_option.autoplay) {
            this._autoplay_controller = null;
        }
        this.Set_ProgressBar()
    }

    // </Set Options>

    // <Events>
    public async onChildrenChanges() {
        await this.Set_by_default();
        this.Check_options();
    }

    public onCheckIndex(i: number): number {
        if (i < 0) {
            if (this._infinite_pos == "main")
                this._infinite_pos = "left_copy";
            if (this._infinite_pos == "right_copy")
                this._infinite_pos = "main"

            return this._element_length - 1;
        }

        if (i > this._element_length - 1) {
            if (this._infinite_pos == "main")
                this._infinite_pos = "right_copy";
            if (this._infinite_pos == "left_copy")
                this._infinite_pos = "main";

            return 0;
        }

        return i;
    }

    public async onChangeIndex(i: number, event: EventType) {
        if (event != EventType.AUTOPLAY && this._autoplay_controller) {
            this._autoplay_controller.Stop();
            this._autoplay_controller.Waiting();
        }

        if (this._autoplay_option.smooth) {
            this._progressbar_controller.Set_Progress(i, true);

            return;
        }

        this._index = this.onCheckIndex(i);

        if (this._change_index) await this._change_index(this._index);

        if (this._arrow_controller) this._arrow_controller.index = this._index;
        if (this._swipe_controller) this._swipe_controller.index = this._index;
        if (this._autoplay_controller) this._autoplay_controller._index = this._index;

        if (this._progressbar_controller) this._progressbar_controller.Set_Progress(this._index, false)


        await this.onChangeOffset();

        if (this._pagination_controller) await this._pagination_controller.Set_circle_by_index(this._index)
    }

    private async onChangeOffset() {
        if (!this._slider_track || !this._slider) return;

        const generator = await this.Find_slider_el();

        const el = await generator.next();
        if (!el.value) return;

        if (el.value instanceof HTMLElement) await this.Set_pos_by_el(<HTMLElement>el.value);

        if (this.focus != "no" && el.value instanceof HTMLElement) {
            await this.Set_focus_on_el(<HTMLElement>el.value);
        }

        setTimeout(async () => {
            const el_2 = await generator.next();
            if (!el_2.value) return;
            await this.Set_pos_by_el(el_2.value);
            await this.Set_focus_on_el(el_2.value, true);

            await this.On_transition();
        }, 350);

        await this.Observer.Watch()
    }

    //</Events>

    private async Set_pos_by_el(el: HTMLElement) {
        if (!this._slider || !this._slider_track) return;

        if (
            this._slider_options.slider_type == Slider_Type.DEFAULT ||
            this._slider_options.slider_type == Slider_Type.HORIZONTAL ||
            this._slider_options.slider_type == Slider_Type.SINGLE ||
            this._slider_options.slider_type == Slider_Type.EXTENDED
        ) {
            if (this.focus == "center" || this.focus == "no") {
                await (() => {
                    this._slider_track.style.transform = `translateX(${this._slider.clientWidth / 2 - el.offsetLeft - el.clientWidth / 2}px)`
                   /* this._slider_track.style.left =
                        this._slider.clientWidth / 2 - el.offsetLeft - el.clientWidth / 2 + "px";*/
                })()
            }
            if (this.focus == "left") {
                await (() => {
                    this._slider_track.style.transform = `translateX(${this._slider.clientLeft - el.offsetLeft}px)`
                    //this._slider_track.style.left = this._slider.clientLeft - el.offsetLeft + "px";
                })()
            }
            if (this.focus == "right") {
                await (() => {
                    this._slider_track.style.transform = `translateX(${this._slider.clientWidth - el.offsetLeft - el.clientWidth})px`;
                    /*this._slider_track.style.left =
                        this._slider.clientWidth - el.offsetLeft - el.clientWidth + "px";*/
                })()
            }
        }
        if (this._slider_options.slider_type == Slider_Type.VERTICAL) {
            await (() => {
                this._slider_track.style.transform = `translateY(${this._slider.clientHeight / 2 - el.offsetTop - el.clientHeight / 2}px)`

                /*this._slider_track.style.top =
                    this._slider.clientHeight / 2 - el.offsetTop - el.clientHeight / 2 + "px";*/
            })()
        }

        await this.On_transition()
    }

    private async Set_focus_on_el(el: HTMLElement, off = false) {
        if (!this._slider || !this._slider_track) return;

        const children = await Array.from(this._slider_track.children);

        if (!children) return;

        await children.map(child => child.classList.remove("current-slider-el"))

        if (off) el.classList.add("off-transition");
        el.classList.add("current-slider-el");

        if (off) {
            setTimeout(() => {
                el.classList.remove("off-transition");
            }, 200);
        }
    }

    private async * Find_slider_el(): any {
        if (!this._slider_track || !this._slider) return null;

        let el = null;

        if (this._slider_options.infinite_type == Infinite_Type.NO) {
            el = await this._slider_track.querySelector(`[data-slider-el-index=\"${this._index}\"]`);

            if (el) return  <HTMLElement>el;
        }

        if (this._slider_options.infinite_type == Infinite_Type.INFINITE) {
            if (this._infinite_pos == "main") {
                el = await this._slider_track.querySelector(`[data-slider-el-index=\"${this._index}\"]`);
            }
            if (this._infinite_pos == "left_copy") {
                if (this._index == 1) {
                    const main_el = await this._slider_track.querySelector("[data-slider-el-index='1']");

                    this._infinite_pos = "main";

                    if (main_el) return <HTMLElement>main_el;
                }

                el = await this._slider_track.querySelector(`[data-slider-left-el-index=\"${this._index}\"]`);
                if (this._index - 1 == 1) {
                    yield el;

                    el = await this._slider_track.querySelector(`[data-slider-el-index=\'${this._index}\']`);
                    this.Off_transition();
                }
            }
            if (this._infinite_pos == "right_copy") {
                if (this._index == this._element_length - 1) {
                    const main_el = await this._slider_track.querySelector(
                        `[data-slider-el-index=\'${this._element_length - 1}\']`
                    );

                    this._infinite_pos = "main";

                    if (main_el) return <HTMLElement>main_el;
                }

                el = await this._slider_track.querySelector(`[data-slider-right-el-index=\"${this._index}\"]`);
                if (this._index + 1 == this._element_length - 1) {
                    yield el;

                    el = await this._slider_track.querySelector(`[data-slider-el-index=\'${this._index}\']`);
                    this.Off_transition();
                }
            }
            if (el) return <HTMLElement>el;
        }

        return el;
    }

    private Off_transition() {
        if (!this._slider_track) return;

        this._slider_track.style.transition = "none";
    }

    private On_transition() {
        setTimeout(() => {
            if (!this._slider_track) return;

            if (this._autoplay_option.smooth) {
                this._slider_track.style.transition = `all ${this._autoplay_option.delay}ms`
                return;
            }

            this._slider_track.style.transition = "transform .3s";
        }, 50);
    }

    // <Setters/Getters>
    public set el_length(l: number) {
        this._element_length = l;
    }

    public get el_length(): number {
        return this._element_length;
    }

    public set slider(slider: HTMLElement) {
        this._slider = slider;

        this.Observer.setObserver(this._slider, 'clientWidth')
    }

    public set slider_track(slider_track: HTMLElement) {
        this._slider_track = slider_track;
    }

    public set gap(g: number) {
        this._gap = g;
    }

    public set change_index(callback: (i: number) => void) {
        this._change_index = callback;
        this._change_index(this._index);
    }

    //</Setters/Getters>


    public Destroy(): void {
        if (this._arrow_controller) {
            this._arrow_controller.Destroy()
            this._arrow_controller = null;
        }

        if (this._autoplay_controller) {
            this._autoplay_controller.Destroy()
            this._autoplay_controller = null;
        }

        if (this._swipe_controller) {
            this._swipe_controller.Destroy()
            this._swipe_controller = null;
        }

        if (this._progressbar_controller) {
            this._progressbar_controller = null;
        }

        if (this._pagination_controller) {
            this._pagination_controller = null;
        }


        if(this.Observer) {
            this.Observer.StopWatch()
            this.Observer.clearAllCbcks()
        }
    }
}
