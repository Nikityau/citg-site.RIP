import {Subber} from "../../../Utils/Subber/Subber";
import {TypeEvent} from "../../../Utils/Subber/Subber.TypeEvent.enum";

class ArrowUpController {
    private _arrowUp: HTMLElement = null;
    private _footer: HTMLElement = null;

    public constructor() {
        this.OnScroll = this.OnScroll.bind(this)
    }


    private OnArrowClick(e:Event) {
        window.scrollTo(0,0)
    }

    private SetDefPos() {
        if(!this._arrowUp || !this._footer) return

        this._arrowUp.style.left = this._footer.clientWidth + this._footer.offsetLeft + this._arrowUp.clientWidth / 2 + 'px'
    }

    private OnScroll(e:Event) {
        if(!this._arrowUp || !this._footer) return

        const scrollY = window.scrollY;

        if(scrollY > 400) {
            this._arrowUp.style.opacity = '1';
            this._arrowUp.style.pointerEvents = 'all'
            this._arrowUp.style.left = this._footer.clientWidth + this._footer.offsetLeft + this._arrowUp.clientWidth / 2 + 'px'
        } else {
            this._arrowUp.style.opacity = '0';
            this._arrowUp.style.pointerEvents = 'none'
        }

        if(this._footer.parentElement.offsetTop <= scrollY + window.screen.availHeight - this._footer.clientHeight) {
            this._arrowUp.style.top = window.screen.availHeight - this._footer.clientHeight - 80 - this._arrowUp.clientHeight / 2 + 'px';
        } else {
            this._arrowUp.style.top = window.screen.availHeight - 200 + 'px';
        }
    }

    public SubEvents() {
        window.addEventListener('scroll', this.OnScroll)

        if(!this._arrowUp) return
        Subber.Subb(this._arrowUp, TypeEvent.CLICK, this.OnArrowClick)
    }
    public UnsubEvents() {
        window.removeEventListener('scroll', this.OnScroll)

        if(!this._arrowUp) return
        Subber.Unsubb(this._arrowUp, TypeEvent.CLICK, this.OnArrowClick)
    }



    public FindFooter() {
        this._footer = document.getElementById('footer-inner-container')

        this.SetDefPos()
    }
    public FindArrow() {
        this._arrowUp = document.getElementById('arrow-up')

        this.SetDefPos()
    }
}

export default new ArrowUpController();