import { ISliderSwipeBase } from "./Slider.swipe.base/Slider.swipe.base";
import { Slider_Type } from "../Slider.type/Slider_Type";
import { Subber } from "../../../Utils/Subber/Subber";
import { TypeEvent } from "../../../Utils/Subber/Subber.TypeEvent.enum";
import { EventType, onChangeIndex } from "../Slider.interface/Slider.event.type";

export class SliderSwipeController implements ISliderSwipeBase {
  swipe_el: HTMLElement | null = null;
  _index: number = 0;
  _swipe_type: Slider_Type.VERTICAL | Slider_Type.HORIZONTAL = Slider_Type.HORIZONTAL;

  change_index: onChangeIndex = (i) => {};

  private _start_x: number = 0;
  private _start_y: number = 0;

  private _last_x: number = 0;
  private _last_y: number = 0;

  private _swipe_x_direction: "left" | "right" | "none" = "none";
  private _swipe_y_direction: "up" | "down" | "none" = "none";

  private _is_down: boolean = false;

  constructor(
    swipe_el: HTMLElement,
    swipe_type: Slider_Type.VERTICAL | Slider_Type.HORIZONTAL,
    index: number
  ) {
    this.swipe_el = swipe_el;
    this._swipe_type = swipe_type;
    this._index = index;

    this.On_Swipe = this.On_Swipe.bind(this);
    this.On_Mouse_move = this.On_Mouse_move.bind(this);

    this.On_Click = this.On_Click.bind(this);
    this.On_Touch = this.On_Touch.bind(this);

    this.On_Mouse_up = this.On_Mouse_up.bind(this);
    this.On_Touch_end = this.On_Touch_end.bind(this);

    Subber.Subb(this.swipe_el, TypeEvent.MOUSE_DOWN, this.On_Click);
    Subber.Subb(this.swipe_el, TypeEvent.TOUCH_START, this.On_Touch);

    Subber.Subb(this.swipe_el, TypeEvent.MOUSE_MOVE, this.On_Mouse_move);
    Subber.Subb(this.swipe_el, TypeEvent.TOUCH_MOVE, this.On_Swipe);

    Subber.Subb(this.swipe_el, TypeEvent.MOUSE_UP, this.On_Mouse_up);
    Subber.Subb(this.swipe_el, TypeEvent.TOUCH_END, this.On_Touch_end);
  }

  On_Click(e: Event) {
    if (e instanceof MouseEvent) {
      this._start_x = e.pageX;
      this._start_y = e.pageY;

      this._last_x = e.pageX;
      this._last_y = e.pageY;
    }

    this._is_down = true;
    this._swipe_x_direction = "none";
  }
  On_Touch(e: Event) {
    if (e instanceof TouchEvent) {
      this._start_x = e.changedTouches[0].pageX;
      this._start_y = e.changedTouches[0].pageY;

      this._last_x = e.changedTouches[0].pageX;
      this._last_y = e.changedTouches[0].pageY;
    }

    this._is_down = true;
    this._swipe_x_direction = "none";
  }

  On_Swipe(e: Event) {
    if (!this._is_down) return;

    if (this._swipe_type == Slider_Type.VERTICAL) {
      this.Vertical_Swipe(e);

      return;
    }
    if (this._swipe_type == Slider_Type.HORIZONTAL) {
      this.Horizontal_Swipe(e);

      return;
    }
  }
  On_Mouse_move(e: Event) {
    if (!this._is_down) return;

    if (this._swipe_type == Slider_Type.VERTICAL) {
      this.Vertical_Swipe(e);

      return;
    }
    if (this._swipe_type == Slider_Type.HORIZONTAL) {
      this.Horizontal_Swipe(e);

      return;
    }
  }

  On_Mouse_up(e: Event) {
    this._is_down = false;

    if (this._swipe_x_direction == "none" && this._swipe_y_direction == "none") return;

    if (this._swipe_x_direction == "left" || this._swipe_y_direction == "up") {
      this.change_index(this._index + 1, EventType.SWIPE);
    }
    if (this._swipe_x_direction == "right" || this._swipe_y_direction == "down") {
      this.change_index(this._index - 1, EventType.SWIPE);
    }
  }
  On_Touch_end(e: Event) {
    this._is_down = false;

    if (this._swipe_x_direction == "none" && this._swipe_y_direction == "none") return;

    if (this._swipe_x_direction == "left" || this._swipe_y_direction == "up") {
      this.change_index(this._index + 1, EventType.SWIPE);
    }
    if (this._swipe_x_direction == "right" || this._swipe_y_direction == "down") {
      this.change_index(this._index - 1, EventType.SWIPE);
    }
  }

  private Vertical_Swipe(e: Event) {
    if (!this._is_down) return;

    if (e instanceof TouchEvent) {
      this._last_y = e.changedTouches[e.changedTouches.length - 1].pageY;
    }
    if (e instanceof MouseEvent) {
      this._last_y = e.pageY;
    }
    if (Math.abs(this._start_y - this._last_y) < 20) {
      this._swipe_y_direction = "none";

      return;
    }
    if (this._start_y > this._last_y) {
      this._swipe_y_direction = "down";

      return;
    } else {
      this._swipe_y_direction = "up";

      return;
    }
  }
  private Horizontal_Swipe(e: Event) {
    if (!this._is_down) return;

    if (e instanceof TouchEvent) {
      this._last_x = e.changedTouches[e.changedTouches.length - 1].pageX;
    }
    if (e instanceof MouseEvent) {
      this._last_x = e.pageX;
    }

    if (Math.abs(this._start_x - this._last_x) < 20) {
      this._swipe_x_direction = "none";

      return;
    }
    if (this._start_x > this._last_x) {
      this._swipe_x_direction = "left";

      return;
    } else {
      this._swipe_x_direction = "right";

      return;
    }
  }

  set index(i: number) {
    this._index = i;
  }

  set Change_index(callback: onChangeIndex) {
    this.change_index = callback;
  }
}
